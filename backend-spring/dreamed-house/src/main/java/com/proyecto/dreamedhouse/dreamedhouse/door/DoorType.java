package com.proyecto.dreamedhouse.dreamedhouse.door;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

import java.util.Date;

import jakarta.persistence.Entity;

@Entity
public class DoorType {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long doorTypeId;

    private String name;
    private double price;
    private Date createdAt;
    private Date updatedAt;

    public Date getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(Date createdAt) {
        this.createdAt = createdAt;
    }

    public Long getDoorTypeId() {
        return doorTypeId;
    }

    public void setDoorTypeId(Long doorTypeId) {
        this.doorTypeId = doorTypeId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
    
    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public Date getUpdatedAt() {
        return updatedAt;
    }

    public void setUpdatedAt(Date updatedAt) {
        this.updatedAt = updatedAt;
    }

}
