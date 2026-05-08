package com.heritage.auction.infra.firebase;

import java.io.IOException;
import java.io.InputStream;

import org.springframework.boot.autoconfigure.condition.ConditionalOnResource;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.io.ClassPathResource;

import com.google.auth.oauth2.GoogleCredentials;
import com.google.firebase.FirebaseApp;
import com.google.firebase.FirebaseOptions;
import com.google.firebase.auth.FirebaseAuth;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Configuration
@ConditionalOnResource(resources = "classpath:" + FirebaseConfig.SERVICE_ACCOUNT_RESOURCE)
public class FirebaseConfig {

    static final String SERVICE_ACCOUNT_RESOURCE = "firebase-service-account.json";

    @Bean
    public FirebaseApp firebaseApp() throws IOException {
        if (!FirebaseApp.getApps().isEmpty()) {
            return FirebaseApp.getInstance();
        }
        ClassPathResource resource = new ClassPathResource(SERVICE_ACCOUNT_RESOURCE);
        try (InputStream stream = resource.getInputStream()) {
            FirebaseOptions options = FirebaseOptions.builder()
                .setCredentials(GoogleCredentials.fromStream(stream))
                .build();
            log.info("Initializing FirebaseApp from classpath:{}", SERVICE_ACCOUNT_RESOURCE);
            return FirebaseApp.initializeApp(options);
        }
    }

    @Bean
    public FirebaseAuth firebaseAuth(FirebaseApp firebaseApp) {
        return FirebaseAuth.getInstance(firebaseApp);
    }
}