package com.example.demo;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.ApplicationContext;
import org.thymeleaf.context.ITemplateContext;
import org.thymeleaf.model.IProcessableElementTag;
import org.thymeleaf.processor.element.AbstractElementTagProcessor;
import org.thymeleaf.processor.element.IElementTagStructureHandler;
import org.thymeleaf.templatemode.TemplateMode;

import java.io.IOException;
import java.io.InputStream;
import java.nio.charset.StandardCharsets;

public class ViteImportTagProcessor extends AbstractElementTagProcessor {
    private static final Logger log = LoggerFactory.getLogger(ViteImportTagProcessor.class);
    private static final String TAG_NAME = "import";
    private static final int PRECEDENCE = 1000;

    private final ViteProperties viteProperties;

    public ViteImportTagProcessor(final String dialectPrefix, ApplicationContext applicationContext) {
        super(TemplateMode.HTML, dialectPrefix, TAG_NAME, true, null, false, PRECEDENCE);
        this.viteProperties = applicationContext.getBean(ViteProperties.class);
    }

    @Override
    protected void doProcess(
            final ITemplateContext context, final IProcessableElementTag tag,
            final IElementTagStructureHandler structureHandler) {

        String entry = tag.getAttributeValue("entry");

        boolean isDebug = viteProperties.isDebug();
        String manifestPath = viteProperties.getManifestPath();
        String localServerUrl = viteProperties.getLocalServerUrl();
        String resourcePath = viteProperties.getResourcePath();

        StringBuilder output = new StringBuilder();

        if (isDebug) {
            log.info("Handling development environment");
            handleDevEnvironment(output, localServerUrl, entry);
        } else {
            log.info("Handling production environment");
            handleProdEnvironment(output, manifestPath, resourcePath, entry);
        }

        // Replace the current tag with the generated content
        structureHandler.replaceWith(output.toString(), false);
    }

    private void handleDevEnvironment(StringBuilder output, String localServerUrl, String entry) {
        output.append("<script type=\"module\" src=\"").append(localServerUrl).append("/@vite/client\" defer></script>");
        output.append("<script type=\"module\" src=\"").append(localServerUrl).append("/").append(entry).append("\" defer></script>");
    }

    private void handleProdEnvironment(StringBuilder output, String manifestPath, String resourcePath, String entry) {
        try (InputStream inputStream = getClass().getResourceAsStream(manifestPath)) {
            if (inputStream == null) {
                log.error("Manifest file not found: {}", manifestPath);
                return;
            }

            String manifestContent = new String(inputStream.readAllBytes(), StandardCharsets.UTF_8);
            ObjectMapper objectMapper = new ObjectMapper();
            JsonNode manifest = objectMapper.readTree(manifestContent);
            JsonNode entryNode = manifest.get(entry);

            if (entryNode != null) {
                printJsImport(output, entryNode, resourcePath);
                printCssImports(output, entryNode, resourcePath);
            }
        } catch (IOException e) {
            log.error("Error reading manifest file: {}", manifestPath, e);
        }
    }

    private void printJsImport(StringBuilder output, JsonNode entryNode, String resourcePath) {
        String jsFile = entryNode.get("file").asText();
        output.append("<script type=\"module\" src=\"").append(resourcePath).append("/").append(jsFile).append("\" defer></script>");
    }

    private void printCssImports(StringBuilder output, JsonNode entryNode, String resourcePath) {
        JsonNode cssFiles = entryNode.get("css");
        if (cssFiles != null) {
            for (JsonNode cssFile : cssFiles) {
                output.append("<link rel=\"stylesheet\" href=\"").append(resourcePath).append("/").append(cssFile.asText()).append("\"/>");
            }
        }
    }
}
