package com.proyecto.dreamedhouse.dreamedhouse.dto;

import com.proyecto.dreamedhouse.dreamedhouse.door.DoorType;
import com.proyecto.dreamedhouse.dreamedhouse.faucet.FaucetType;
import com.proyecto.dreamedhouse.dreamedhouse.floor.FloorType;
import com.proyecto.dreamedhouse.dreamedhouse.house.House;
import com.proyecto.dreamedhouse.dreamedhouse.proforma.Proforma;
import com.proyecto.dreamedhouse.dreamedhouse.user.User;

import javax.persistence.*;
import java.util.Date;

public class ProformaDTO {
    private Long proformaId;

    private int userId;

    private int houseId;

    private int floorTypeId;

    private int doorTypeId;

    private int faucetTypeId;

    @Temporal(TemporalType.TIMESTAMP)
    private Date createdAt;

    @Temporal(TemporalType.TIMESTAMP)
    private Date updatedAt;


    public Proforma getProforma(){
        Proforma proforma = new Proforma();
        proforma.setProformaId(this.proformaId);
        proforma.setCreatedAt(this.createdAt);
        proforma.setDoorTypeId(this.doorTypeId);
        proforma.setUpdatedAt(this.updatedAt);
        proforma.setFaucetTypeId(this.faucetTypeId);
        proforma.setFloorTypeId(this.floorTypeId);
        proforma.setHouseId(this.houseId);
        proforma.setUserId(this.userId);

        return proforma;
    }

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

}
