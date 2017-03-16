package com.geekhub;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;

@Controller
public class ApplicationController {

    private final NewsJdbcDAO newsJdbcDAO;
    private final JdbcTemplate jdbcTemplate;

    @Autowired
    public ApplicationController(@Autowired JdbcTemplate jdbcTemplate, NewsJdbcDAO newsJdbcDAO) {
        this.jdbcTemplate = jdbcTemplate;
        this.newsJdbcDAO = newsJdbcDAO;
    }

    @GetMapping("/, /home")
    public String home() {
        return "index";
    }

    @GetMapping("/news")
    public String news(Model model) {
        newsJdbcDAO.insert(new News(
                0,
                "Omg I can code on java!!!",
                "Omg I am coding on java!!! Thats fcuking awesome... ",
                "Omg I am coding on java!!! Thats fcuking awesome more than sheet",
                "http://vignette3.wikia.nocookie.net/lumber-tycoon-2/images/9/90/OMG_Face_Emoji_large.png/revision/latest?cb=20160714023215",
                LocalDate.now(),
                LocalTime.now()
        ));
        List<News> newsList = jdbcTemplate.queryForList("SELECT * FROM PUBLIC.NEWS LIMIT 4", News.class);
        model.addAttribute("newsList", newsList);
        return "news";
    }

    @GetMapping("/painters")
    public String painters() {
        return "painters";
    }
}