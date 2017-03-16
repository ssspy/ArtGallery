package com.geekhub;

public interface NewsDAO {

    void insert(News news);

    void delete(int id);

    News findById(int id);
}
