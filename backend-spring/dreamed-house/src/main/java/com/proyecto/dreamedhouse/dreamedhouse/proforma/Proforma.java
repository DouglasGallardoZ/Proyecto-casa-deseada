package com.proyecto.dreamedhouse.dreamedhouse.proforma;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.proyecto.dreamedhouse.dreamedhouse.door.DoorType;
import com.proyecto.dreamedhouse.dreamedhouse.faucet.FaucetType;
import com.proyecto.dreamedhouse.dreamedhouse.floor.FloorType;
import com.proyecto.dreamedhouse.dreamedhouse.house.House;
import com.proyecto.dreamedhouse.dreamedhouse.user.User;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "proformas")
public class Proforma {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "proforma_id")
    private Long proformaId;

    @Column(name = "user_id")
    private int userId;

    @Column(name = "house_id")
    private int houseId;

    @Column(name = "floor_type_id")
    private int floorTypeId;

    @Column(name = "door_type_id")
    private int doorTypeId;

    @Column(name = "faucet_type_id")
    private int faucetTypeId;

    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "created_at")
    private Date createdAt;

    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "updated_at")
    private Date updatedAt;

    @JsonBackReference
    @ManyToOne
    @JoinColumn(name = "door_type_id", insertable = false, updatable = false)
    private DoorType doorType;

    @JsonBackReference
    @ManyToOne
    @JoinColumn(name = "faucet_type_id", insertable = false, updatable = false)
    private FaucetType faucetType;

    @JsonBackReference
    @ManyToOne
    @JoinColumn(name = "floor_type_id", insertable = false, updatable = false)
    private FloorType floorType;

    @JsonBackReference
    @ManyToOne
    @JoinColumn(name = "house_id", insertable = false, updatable = false)
    private House house;

    @JsonBackReference
    @ManyToOne
    @JoinColumn(name = "user_id", insertable = false, updatable = false)
    private User user;

    // getters and setters

    public Long getProformaId() {
        return proformaId;
    }

    public void setProformaId(Long proformaId) {
        this.proformaId = proformaId;
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public int getHouseId() {
        return houseId;
    }

    public void setHouseId(int houseId) {
        this.houseId = houseId;
    }

    public int getFloorTypeId() {
        return floorTypeId;
    }

    public void setFloorTypeId(int floorTypeId) {
        this.floorTypeId = floorTypeId;
    }

    public int getDoorTypeId() {
        return doorTypeId;
    }

    public void setDoorTypeId(int doorTypeId) {
        this.doorTypeId = doorTypeId;
    }

    public int getFaucetTypeId() {
        return faucetTypeId;
    }

    public void setFaucetTypeId(int faucetTypeId) {
        this.faucetTypeId = faucetTypeId;
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

    public DoorType getDoorType() {
        return doorType;
    }

    public void setDoorType(DoorType doorType) {
        this.doorType = doorType;
    }

    public FaucetType getFaucetType() {
        return faucetType;
    }

    public void setFaucetType(FaucetType faucetType) {
        this.faucetType = faucetType;
    }

    public FloorType getFloorType() {
        return floorType;
    }

    public void setFloorType(FloorType floorType) {
        this.floorType = floorType;
    }

    public House getHouse() {
        return house;
    }

    public void setHouse(House house) {
        this.house = house;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}

