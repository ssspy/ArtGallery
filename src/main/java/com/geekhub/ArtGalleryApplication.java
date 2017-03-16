package com.geekhub;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.datasource.SimpleDriverDataSource;

import java.sql.Driver;

@SpringBootApplication
public class ArtGalleryApplication {

    @Value("${jdbc.driver}")
    private String driver;

    @Value("${jdbc.url}")
    private String url;

    @Value("${jdbc.user}")
    private String user;

    @Value("${jdbc.password}")
    private String password;

    public static void main(String[] args) {
        SpringApplication.run(ArtGalleryApplication.class, args);
    }

    @Bean
    public JdbcTemplate jdbcTemplate(@Autowired SimpleDriverDataSource dataSource) {
        return new JdbcTemplate(dataSource);
    }

    @Bean
    public SimpleDriverDataSource dataSource() {
        SimpleDriverDataSource dataSource = new SimpleDriverDataSource();
        try {
            dataSource.setDriverClass((Class<? extends Driver>) Class.forName(driver));
            dataSource.setUrl(url);
            dataSource.setUsername(user);
            dataSource.setPassword(password);

        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        }
        return dataSource;
    }
}
