import './style.css'
import { SpaNavigator, PopupHandler } from './spa-navigator'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'

// Initialize SPA Navigator
const navigator = new SpaNavigator();

// Create a Map with some data (for product pages)
const fruitPrices = new Map<string, number>();
fruitPrices.set('Apple', 1.99);
fruitPrices.set('Banana', 0.99);
fruitPrices.set('Orange', 2.49);
fruitPrices.set('Mango', 3.99);

const veggiePricesObj = {
  Carrot: 1.49,
  Broccoli: 2.99,
  Spinach: 3.49
};
const veggiePrices = new Map<string, number>(Object.entries(veggiePricesObj));

// All products
const allProducts = new Map<string, number>([...fruitPrices, ...veggiePrices]);

// Create app container
document.body.innerHTML = `
  <div id="app-container">
    <div id="page-container"></div>
    
    <!-- Popups -->
    <div id="product-details-popup" class="spa-popup">
      <div class="popup-content">
        <div class="popup-header">
          <h2 id="popup-product-name">Product Details</h2>
          <button class="close-button">×</button>
        </div>
        <div class="popup-body">
          <p id="popup-product-price"></p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi.</p>
        </div>
      </div>
    </div>
    
    <div id="settings-popup" class="spa-popup">
      <div class="popup-content">
        <div class="popup-header">
          <h2>Settings</h2>
          <button class="close-button">×</button>
        </div>
        <div class="popup-body">
          <h3>Theme</h3>
          <select>
            <option>Light</option>
            <option>Dark</option>
            <option>System</option>
          </select>
          <h3>Language</h3>
          <select>
            <option>English</option>
            <option>Korean</option>
            <option>Spanish</option>
          </select>
        </div>
      </div>
    </div>
    
    <!-- Bottom Navigation -->
    <nav id="bottom-nav">
      <button class="nav-btn" data-path="/">Home</button>
      <button class="nav-btn" data-path="/products">Products</button>
      <button class="nav-btn" data-path="/about">About</button>
      <button id="settings-btn">Settings</button>
    </nav>
  </div>
`;

// Add mobile-friendly styles
const styleSheet = document.createElement("style");
styleSheet.textContent = `
  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  }
  
  #app-container {
    display: flex;
    flex-direction: column;
    height: 100vh;
    max-width: 100%;
    overflow-x: hidden;
  }
  
  #page-container {
    flex: 1;
    overflow-y: auto;
    padding: 20px;
    padding-bottom: 80px; /* Space for bottom nav */
  }
  
  .page-header {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
  }
  
  .page-header img {
    height: 30px;
    margin-right: 10px;
  }
  
  .product-item {
    padding: 15px;
    margin-bottom: 10px;
    border-radius: 8px;
    background-color: #f8f9fa;
    border-left: 4px solid #0095ff;
    display: flex;
    justify-content: space-between;
  }
  
  /* Bottom navigation */
  #bottom-nav {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    background-color: #fff;
    box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
    z-index: 100;
  }
  
  .nav-btn {
    flex: 1;
    padding: 15px 5px;
    border: none;
    background: none;
    font-size: 14px;
    color: #666;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .nav-btn.active {
    color: #0095ff;
    font-weight: bold;
  }
  
  /* Popup styles */
  .spa-popup {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    display: none;
    justify-content: center;
    align-items: flex-end;
    z-index: 1000;
  }
  
  .popup-content {
    background: white;
    width: 100%;
    max-height: 80%;
    border-radius: 12px 12px 0 0;
    overflow: hidden;
    animation: slide-up 0.3s ease-out;
  }
  
  .popup-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
    border-bottom: 1px solid #eee;
  }
  
  .popup-body {
    padding: 20px;
    overflow-y: auto;
  }
  
  .close-button {
    border: none;
    background: none;
    font-size: 24px;
    cursor: pointer;
  }
  
  @keyframes slide-up {
    from { transform: translateY(100%); }
    to { transform: translateY(0); }
  }
`;
document.head.appendChild(styleSheet);

// Route handlers
navigator.route('/', (_path, _data) => {
  document.querySelector('#page-container')!.innerHTML = `
    <div class="page-header">
      <img src="${viteLogo}" alt="Vite logo" />
      <h1>Home</h1>
    </div>
    <p>Welcome to our mobile app example using SpaNavigator!</p>
    
    <h2>Featured Products</h2>
    <div class="product-item" data-product="Apple">
      <span>Apple</span>
      <span>$1.99</span>
    </div>
    <div class="product-item" data-product="Carrot">
      <span>Carrot</span>
      <span>$1.49</span>
    </div>
    
    <h2>Today's Special</h2>
    <div class="product-item special" data-product="Banana">
      <span>Banana</span>
      <span>$0.99 <small>20% OFF!</small></span>
    </div>
    
    <!-- New Button Added -->
    <div style="margin-top: 30px; text-align: center;">
      <button id="show-random-product" style="background-color: #0095ff; color: white;">
        Show Random Product Price
      </button>
    </div>
  `;
  
  // Add event listener for the new button
  document.querySelector('#show-random-product')?.addEventListener('click', () => {
    // Get all product names from the Map
    const products = Array.from(allProducts.keys());
    
    // Select a random product
    const randomIndex = Math.floor(Math.random() * products.length);
    const randomProduct = products[randomIndex];
    
    // Get its price from the Map
    const price = allProducts?.get(randomProduct) ?? 'Price not available';
    
    // Display in alert
    alert(`Random Product: ${randomProduct ?? 'Unknown Product'}\nPrice: $${price}`);
  });
  
  highlightCurrentNav('/');
  setupProductItemListeners();
});

navigator.route('/products', (path, data) => {
  const productsHTML = Array.from(allProducts.entries())
    .map(([product, price]) => `
      <div class="product-item" data-product="${product}">
        <span>${product}</span>
        <span>$${price}</span>
      </div>
    `).join('');
    
  document.querySelector('#page-container')!.innerHTML = `
    <div class="page-header">
      <img src="${typescriptLogo}" alt="TypeScript logo" />
      <h1>Products</h1>
    </div>
    <p>Browse our catalog of fresh products:</p>
    
    <div id="products-list">
      ${productsHTML}
    </div>
  `;
  
  highlightCurrentNav('/products');
  setupProductItemListeners();
});

navigator.route('/about', (path, data) => {
  document.querySelector('#page-container')!.innerHTML = `
    <div class="page-header">
      <img src="${viteLogo}" alt="Vite logo" />
      <h1>About</h1>
    </div>
    <p>This is a simple SPA example using custom router with history API integration.</p>
    <p>Features demonstrated:</p>
    <ul>
      <li>Page navigation with history support</li>
      <li>Mobile-friendly popup system</li>
      <li>Map and Set usage for data management</li>
    </ul>
    <p>Built with Vite and TypeScript, optimized for iOS 12+</p>
  `;
  
  highlightCurrentNav('/about');
});

// 404 handler
navigator.setNotFoundHandler((path, data) => {
  document.querySelector('#page-container')!.innerHTML = `
    <h1>Page Not Found</h1>
    <p>The path "${path}" doesn't exist.</p>
    <button id="back-home">Back to Home</button>
  `;
  
  document.querySelector('#back-home')?.addEventListener('click', () => {
    navigator.navigate('/');
  });
});

// Register popups
const productDetailsPopup: PopupHandler = {
  element: document.querySelector('#product-details-popup') as HTMLElement,
  onOpen: (data) => {
    document.querySelector('#popup-product-name')!.textContent = data.name;
    document.querySelector('#popup-product-price')!.textContent = `Price: $${data.price}`;
  },
  onClose: () => {
    console.log('Product details popup closed');
  }
};

const settingsPopup: PopupHandler = {
  element: document.querySelector('#settings-popup') as HTMLElement,
  onOpen: (data) => {
    console.log('Settings opened');
  }
};

navigator.registerPopup('product-details', productDetailsPopup);
navigator.registerPopup('settings', settingsPopup);

// Setup event listeners
function setupNavigation() {
  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const path = (e.currentTarget as HTMLElement).dataset.path;
      if (path) navigator.navigate(path);
    });
  });
  
  document.querySelector('#settings-btn')?.addEventListener('click', () => {
    navigator.openPopup('settings', {});
  });
  
  document.querySelectorAll('.close-button').forEach(btn => {
    btn.addEventListener('click', () => {
      navigator.closePopup();
    });
  });
}

function highlightCurrentNav(path: string) {
  document.querySelectorAll('.nav-btn').forEach(btn => {
    if ((btn as HTMLElement).dataset.path === path) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
}

function setupProductItemListeners() {
  document.querySelectorAll('.product-item').forEach(item => {
    item.addEventListener('click', (e) => {
      const productName = (e.currentTarget as HTMLElement).dataset.product;
      if (productName) {
        const price = allProducts.get(productName) || 0;
        navigator.openPopup('product-details', { name: productName, price });
      }
    });
  });
}

// Initialize the app
setupNavigation();
if (document.readyState === 'complete') {
  navigator.refresh();
} else {
  window.addEventListener('load', () => {
    navigator.refresh();
  });
}