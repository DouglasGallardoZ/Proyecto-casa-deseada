package com.proyecto.dreamedhouse.dreamedhouse.house_image;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.proyecto.dreamedhouse.dreamedhouse.house.House;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "house_images")  // Puedes especificar el nombre de la tabla
public class HouseImage {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "image_id")  // Puedes especificar el nombre de la columna
    private int imageId;

    @Column(name = "image_url", nullable = false)  // Puedes personalizar las propiedades de la columna
    private String imageUrl;

    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "created_at")
    private Date createdAt;

    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "updated_at")
    private Date updatedAt;
    @JsonBackReference
    @ManyToOne
    @JoinColumn(name = "house_id")
    private House house;

    // getters and setters

    public int getImageId() {
        return imageId;
    }

    public void setImageId(int imageId) {
        this.imageId = imageId;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public Date getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(Date createdAt) {
        this.createdAt = createdAt;
    }

    public Date getUpdatedAt() {
        return updatedAt;
    }

    public void setUpdatedAt(Date updatedAt) {
        this.updatedAt = updatedAt;
    }

    public House getHouse() {
        return house;
    }

    public void setHouse(House house) {
        this.house = house;
    }
}
