package com.example.demo;

import org.springframework.context.ApplicationContext;
import org.thymeleaf.dialect.AbstractProcessorDialect;
import org.thymeleaf.processor.IProcessor;

import java.util.HashSet;
import java.util.Set;

public class ViteDialect extends AbstractProcessorDialect {

    private final ApplicationContext applicationContext;

    public ViteDialect(ApplicationContext applicationContext) {
        super("Vite Dialect", "vite", 1000);
        this.applicationContext = applicationContext;
    }

    @Override
    public Set<IProcessor> getProcessors(String dialectPrefix) {
        final Set<IProcessor> processors = new HashSet<>();
        processors.add(new ViteImportTagProcessor(dialectPrefix, applicationContext));
        return processors;
    }
}