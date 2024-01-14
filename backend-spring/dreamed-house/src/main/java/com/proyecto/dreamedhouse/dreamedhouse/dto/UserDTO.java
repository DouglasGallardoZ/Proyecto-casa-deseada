package com.proyecto.dreamedhouse.dreamedhouse.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.proyecto.dreamedhouse.dreamedhouse.user.User;

import java.util.Date;

public class UserDTO {
    private Long userId;

    private String dni;

    private String firstName;

    private String lastName;

    private String phoneNumber;

    private String email;

    private String password;
    @JsonFormat(pattern = "MM/dd/yyyy, h:mm:ss a")
    private Date createdAt;
    @JsonFormat(pattern = "MM/dd/yyyy, h:mm:ss a")
    private Date updatedAt;

    public User getUser(){
        User user = new User();
        user.setDni(this.dni);
        user.setUserId(this.userId);
        user.setEmail(this.email);
        user.setPassword(this.password);
        user.setUpdatedAt(this.updatedAt);
        user.setCreatedAt(this.createdAt);
        user.setFirstName(this.firstName);
        user.setLastName(this.lastName);
        user.setPhoneNumber(this.phoneNumber);

        return user;
    }


    // getters and setters

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public String getDni() {
        return dni;
    }

    public void setDni(String dni) {
        this.dni = dni;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
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
