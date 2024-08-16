package com.cropconnect.dto;

import com.cropconnect.entities.User;
import lombok.Getter;
import lombok.Setter;

//@Getter
//@Setter
public class LoginResponse {
    private String token;
    private long expiresIn;
    private User user; // Add this field to include user details

    public LoginResponse setToken(String token) {
        this.token = token;
        return this; // Return the current instance to allow chaining
    }

    public LoginResponse setExpiresIn(long expiresIn) {
        this.expiresIn = expiresIn;
        return this; // Return the current instance to allow chaining
    }

    public LoginResponse setUser(User user) {
        this.user = user;
        return this; // Return the current instance to allow chaining
    }

    public String getToken() {
        return token;
    }

    public long getExpiresIn() {
        return expiresIn;
    }

    public User getUser() {
        return user;
    }
    
}
