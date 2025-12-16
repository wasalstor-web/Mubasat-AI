package com.mubasat.core;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class MubasatCoreApplication {

    public static void main(String[] args) {
        SpringApplication.run(MubasatCoreApplication.class, args);
    }

    @GetMapping("/")
    public String home() {
        return "Mubasat Core Service (Java) is running";
    }

    @GetMapping("/health")
    public String health() {
        return "Healthy";
    }
}
