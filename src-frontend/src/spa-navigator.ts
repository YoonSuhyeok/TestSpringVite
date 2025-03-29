/**
 * SPA 네비게이션 라이브러리
 * 페이지 이동과 팝업을 히스토리 API와 통합하여 관리
 */
export class SpaNavigator {
    private routes: Map<string, RouteHandler> = new Map();
    private popupHandlers: Map<string, PopupHandler> = new Map();
    private popupStack: PopupState[] = [];
    private defaultRoute: RouteHandler | null = null;
    private notFoundHandler: RouteHandler | null = null;
    
    constructor(options: SpaNavigatorOptions = {}) {
      // 브라우저 이벤트 리스너 등록
      window.addEventListener('popstate', this.handlePopState.bind(this));
      window.addEventListener('load', this.handleInitialRoute.bind(this));
      
      // 옵션 적용
      if (options.defaultRoute) this.defaultRoute = options.defaultRoute;
      if (options.notFoundHandler) this.notFoundHandler = options.notFoundHandler;
      
      // 앱 초기화
      if (document.readyState === 'complete') {
        this.handleInitialRoute();
      }
    }
    
    /**
     * 경로에 대한 핸들러 등록
     */
    route(path: string, handler: RouteHandler): SpaNavigator {
      this.routes.set(path, handler);
      return this;
    }
    
    /**
     * 기본 경로 핸들러 등록
     */
    setDefaultRoute(handler: RouteHandler): SpaNavigator {
      this.defaultRoute = handler;
      return this;
    }
    
    /**
     * 404 페이지 핸들러 등록
     */
    setNotFoundHandler(handler: RouteHandler): SpaNavigator {
      this.notFoundHandler = handler;
      return this;
    }
    
    /**
     * 팝업 핸들러 등록
     */
    registerPopup(popupId: string, handler: PopupHandler): SpaNavigator {
      this.popupHandlers.set(popupId, handler);
      return this;
    }
    
    /**
     * 페이지 이동
     */
    navigate(path: string, data: any = {}): void {
      // 모든 팝업 닫기
      this.closeAllPopups(false);
      
      // 새 페이지로 이동
      history.pushState({ 
        type: 'page', 
        path,
        data 
      }, '', path);
      
      this.renderCurrentPath();
    }
    
    /**
     * 팝업 열기
     */
    openPopup(popupId: string, data: any = {}): void {
      if (!this.popupHandlers.has(popupId)) {
        console.error(`Popup handler not found for: ${popupId}`);
        return;
      }
      
      const currentPath = window.location.pathname;
      const url = new URL(window.location.href);
      
      // 현재 팝업 스택에 추가
      const popupState: PopupState = { 
        id: popupId, 
        data,
        openedAt: new Date().toISOString()
      };
      this.popupStack.push(popupState);
      
      // 팝업 상태를 URL 쿼리에 추가
      url.searchParams.set('popup', popupId);
      if (Object.keys(data).length > 0) {
        url.searchParams.set('data', btoa(JSON.stringify(data)));
      }
      
      // 히스토리에 팝업 상태 추가
      history.pushState({
        type: 'popup', 
        popup: popupState, 
        stack: [...this.popupStack],
        path: currentPath
      }, '', url.toString());
      
      // 팝업 렌더링
      this.renderPopup(popupState);
    }
    
    /**
     * 팝업 닫기
     */
    closePopup(navigate: boolean = true): void {
      if (this.popupStack.length === 0) return;
      
      const popup = this.popupStack.pop()!;
      
      if (navigate) {
        // 히스토리 뒤로가기로 팝업 닫기
        history.back();
      } else {
        // 히스토리 변경 없이 UI만 업데이트
        this.updatePopupUI();
        
        // 팝업 닫힘 이벤트 발생
        const handler = this.popupHandlers.get(popup.id);
        if (handler && handler.onClose) {
          handler.onClose(popup.data);
        }
      }
    }
    
    /**
     * 모든 팝업 닫기
     */
    closeAllPopups(navigate: boolean = true): void {
      if (this.popupStack.length === 0) return;
      
      if (navigate) {
        // 팝업 스택 깊이만큼 뒤로가기
        const depth = this.popupStack.length;
        history.go(-depth);
      } else {
        // 스택에서 모든 팝업 제거
        while (this.popupStack.length > 0) {
          const popup = this.popupStack.pop()!;
          const handler = this.popupHandlers.get(popup.id);
          if (handler && handler.onClose) {
            handler.onClose(popup.data);
          }
        }
        
        // UI 업데이트
        this.updatePopupUI();
      }
    }
    
    /**
     * 페이지 새로고침
     */
    refresh(): void {
      const state = history.state || {};
      
      if (state.type === 'popup') {
        // 팝업 상태 새로고침
        this.updatePopupUI();
      } else {
        // 현재 페이지 다시 렌더링
        this.renderCurrentPath();
      }
    }
    
    /**
     * 뒤로가기 이벤트 처리
     */
    private handlePopState(event: PopStateEvent): void {
      const state = event.state || {};
      
      // 팝업 스택 복원
      if (state.stack) {
        this.popupStack = state.stack;
      } else {
        this.popupStack = [];
      }
      
      if (state.type === 'popup') {
        // 팝업 상태로 UI 업데이트
        this.updatePopupUI();
      } else {
        // 일반 페이지 렌더링
        this.renderCurrentPath();
      }
    }
    
    /**
     * 초기 경로 처리
     */
    private handleInitialRoute(): void {
      const url = new URL(window.location.href);
      const popupId = url.searchParams.get('popup');
      const path = window.location.pathname;
      
      if (popupId && this.popupHandlers.has(popupId)) {
        // Restore popup data from URL if available
        let popupData = {};
        const encodedData = url.searchParams.get('data');
        if (encodedData) {
          try {
            popupData = JSON.parse(atob(encodedData));
          } catch (e) {
            console.error('Failed to parse popup data from URL', e);
          }
        }
        
        // Create popup state
        const popupState: PopupState = {
          id: popupId,
          data: popupData,
          openedAt: new Date().toISOString()
        };
        
        // Add to stack and update history state
        this.popupStack = [popupState];
        history.replaceState({
          type: 'popup',
          popup: popupState,
          stack: this.popupStack,
          path: path
        }, '', url.toString());
        
        // Render the current path first
        this.renderCurrentPath();
        
        // Then render the popup
        this.renderPopup(popupState);
      } else {
        // Regular path handling (unchanged)
        history.replaceState({
          type: 'page',
          path: path,
          data: {}
        }, '', window.location.href);
        
        this.renderCurrentPath();
      }
    }
    
    /**
     * 현재 경로에 맞는 페이지 렌더링
     */
    private renderCurrentPath(): void {
      const path = window.location.pathname;
      const handler = this.routes.get(path);
      
      // 모든 팝업 요소 숨기기
      document.querySelectorAll('.spa-popup').forEach(popup => {
        (popup as HTMLElement).style.display = 'none';
      });
      
      if (handler) {
        // 경로 핸들러 실행
        handler(path, history.state?.data || {});
      } else if (this.notFoundHandler) {
        // 404 핸들러 실행
        this.notFoundHandler(path, {});
      } else if (this.defaultRoute) {
        // 기본 핸들러 실행
        this.defaultRoute(path, {});
      } else {
        console.error(`No handler found for path: ${path}`);
      }
    }
    
    /**
     * 팝업 렌더링
     */
    private renderPopup(popupState: PopupState): void {
      const handler = this.popupHandlers.get(popupState.id);
      if (!handler) return;
      
      if (handler.onOpen) {
        handler.onOpen(popupState.data);
      }
      
      this.updatePopupUI();
    }
    
    /**
     * 팝업 UI 업데이트
     */
    private updatePopupUI(): void {
      // 모든 팝업 숨기기
      document.querySelectorAll('.spa-popup').forEach(popup => {
        (popup as HTMLElement).style.display = 'none';
      });
      
      // 현재 스택의 팝업들 표시
      this.popupStack.forEach((popup, index) => {
        const handler = this.popupHandlers.get(popup.id);
        if (!handler || !handler.element) return;
        
        const element = handler.element;
        element.style.display = 'block';
        
        // z-index 설정 (스택 순서대로)
        element.style.zIndex = `${1000 + index}`;
        
        // 팝업 데이터 업데이트
        if (handler.onUpdate) {
          handler.onUpdate(popup.data);
        }
      });
    }
  }
  
  // 타입 정의
  export type RouteHandler = (path: string, data: any) => void;
  
  export interface PopupHandler {
    element: HTMLElement;
    onOpen?: (data: any) => void;
    onUpdate?: (data: any) => void;
    onClose?: (data: any) => void;
  }
  
  export interface PopupState {
    id: string;
    data: any;
    openedAt: string;
  }
  
  export interface SpaNavigatorOptions {
    defaultRoute?: RouteHandler;
    notFoundHandler?: RouteHandler;
  }