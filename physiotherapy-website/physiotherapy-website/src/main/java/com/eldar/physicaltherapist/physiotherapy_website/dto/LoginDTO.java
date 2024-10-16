package com.eldar.physicaltherapist.physiotherapy_website.dto;

public class LoginDTO {
    private String jwt;

    // Constructor
    public LoginDTO(String jwt) {
        this.jwt = jwt;
    }

    // Getter
    public String getJwt() {
        return jwt;
    }

    // Setter (if needed)
    public void setJwt(String jwt) {
        this.jwt = jwt;
    }
}
