package com.geekhub;

import java.time.LocalDate;
import java.time.LocalTime;

public class News {

    private int id;
    private String name, review, text, image;
    private LocalDate date;
    private LocalTime time;

    public News() {
    }

    public News(int id, String name, String review, String text, String image, LocalDate date, LocalTime time) {
        this.id = id;
        this.name = name;
        this.review = review;
        this.text = text;
        this.image = image;
        this.date = date;
        this.time = time;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public LocalTime getTime() {
        return time;
    }

    public void setTime(LocalTime time) {
        this.time = time;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public long getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getReview() {
        return review;
    }

    public void setReview(String review) {
        this.review = review;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }
}
