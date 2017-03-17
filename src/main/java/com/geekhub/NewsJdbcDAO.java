package com.geekhub;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;

@Component
public class NewsJdbcDAO implements NewsDAO {

    private final JdbcTemplate jdbcTemplate;

    public NewsJdbcDAO(@Autowired JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @Override
    public void insert(News news) {
        this.jdbcTemplate.update(
                "INSERT INTO PUBLIC.NEWS (ID, NAME, REVIEW, TEXT, IMAGE, DATE, TIME) VALUES ("
                        + news.getId() + ", "
                        + news.getName() + ", "
                        + news.getReview() + ", "
                        + news.getText() + ", "
                        + news.getImage() + ", "
                        + news.getDate() + ", "
                        + news.getTime() + ")"
        );
    }

    @Override
    public void delete(int id) {
        this.jdbcTemplate.update("DELETE FROM PUBLIC.NEWS WHERE ID=" + id);
    }

    @Override
    public News findById(int id) {
        return this.jdbcTemplate.queryForObject("SELECT * FROM PUBLIC.NEWS WHERE ID=" + id, News.class);
    }
}
