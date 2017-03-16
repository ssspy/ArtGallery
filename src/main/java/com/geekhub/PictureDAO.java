package com.geekhub;

public interface PictureDAO {

    void insert(Picture picture);

    void delete(int id);

    Picture findById(int id);
}
