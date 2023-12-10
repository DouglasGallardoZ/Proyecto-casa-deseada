package com.proyecto.dreamedhouse.dreamedhouse.house;

import com.proyecto.dreamedhouse.dreamedhouse.house_image.HouseImage;

import java.util.Date;
import java.util.List;

public interface HouseProjection {
    // Define aquí los métodos o propiedades que necesitas en la proyección
    Long getHouseId();
    String getName();
    int getSquareMeters();
    int getRoomsNumber();
    int getFloorsNumber();
    int getBathroomsNumber();
    double getPrice();
    Date getCreatedAt();
    Date getUpdatedAt();
    List<HouseImage> getHouseImages();
}
