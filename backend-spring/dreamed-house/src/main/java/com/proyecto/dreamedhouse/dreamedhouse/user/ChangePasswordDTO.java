package com.proyecto.dreamedhouse.dreamedhouse.user;

public class ChangePasswordDTO {
    private String newPassword;
    private User user;

    // Constructores, getters y setters

    public ChangePasswordDTO() {
    }

    public ChangePasswordDTO(String newPassword, User user) {
        this.newPassword = newPassword;
        this.user = user;
    }

    public String getNewPassword() {
        return newPassword;
    }

    public void setNewPassword(String newPassword) {
        this.newPassword = newPassword;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
