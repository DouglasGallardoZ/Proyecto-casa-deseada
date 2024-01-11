package com.proyecto.dreamedhouse.dreamedhouse.faucet;

import javax.persistence.*;
import java.util.Date;

/**
 * Class {@code FaucetType} models the Faucet Finish data for the Houses
 */
@Entity
@Table(name = "faucet_types")
public class FaucetType {
    /**
     * Property {@code FaucetTypeId} represents the ID for the Faucet Finish
     */
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "faucet_type_id")
    private Long faucetTypeId;

    /**
     * Property {@code Name} represents the Name for the Faucet Finish
     */
    @Column(name = "name")
    private String name;

    /**
     * Property {@code Price} represents the Price for the Faucet Finish
     */
    @Column(name = "price")
    private double price;

    /**
     * Property {@code CreatedAt} represents the Created Date for the Faucet Finish
     */
    @Column(name = "created_at")
    private Date createdAt;

    /**
     * Property {@code UpdatedAt} represents the Updated Date for the Faucet Finish
     */
    @Column(name = "updated_at")
    private Date updatedAt;

    // Constructors, getters, and setters

    public FaucetType() {
        // Default constructor
    }

    public FaucetType(String name, double price, Date createdAt, Date updatedAt) {
        this.name = name;
        this.price = price;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }

    public Long getFaucetTypeId() {
        return faucetTypeId;
    }

    public void setFaucetTypeId(Long faucetTypeId) {
        this.faucetTypeId = faucetTypeId;
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

