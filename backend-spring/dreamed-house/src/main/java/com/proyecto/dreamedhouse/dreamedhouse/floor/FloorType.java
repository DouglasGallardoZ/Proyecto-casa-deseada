package com.proyecto.dreamedhouse.dreamedhouse.floor;

import javax.persistence.*;
import java.util.Date;

/**
 * Class {@code FloorType} models the Floor Finish data for the Houses
 */
@Entity
@Table(name = "floor_types")
public class FloorType {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "floor_type_id")
    private Long floorTypeId;

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "price")
    private double price;

    @Column(name = "created_at", nullable = false)
    private Date createdAt;

    @Column(name = "updated_at", nullable = false)
    private Date updatedAt;

    public Long getFloorTypeId() {
        return floorTypeId;
    }

    public void setFloorTypeId(Long floorTypeId) {
        this.floorTypeId = floorTypeId;
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
}
