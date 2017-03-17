package com.geekhub;

public class Picture {

    private int id;
    private String name, image, painter, style;
    private double price;

    public Picture() {
    }

    public Picture(int id, String name, String image, String painter, String style, double price) {
        this.id = id;
        this.name = name;
        this.image = image;
        this.painter = painter;
        this.style = style;
        this.price = price;
    }

    public int getId() {
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

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public String getPainter() {
        return painter;
    }

    public void setPainter(String painter) {
        this.painter = painter;
    }

    public String getStyle() {
        return style;
    }

    public void setStyle(String style) {
        this.style = style;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }
}
