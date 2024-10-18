package com.eldar.physicaltherapist.physiotherapy_website.service;

import com.eldar.physicaltherapist.physiotherapy_website.entity.User;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import java.util.function.Function;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import javax.crypto.SecretKey;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@Service
public class JwtService {
    @Value("${security.jwt.secret}")
    private String jwtSigningKey;

    // used to get the user from a parsed token.
    public String extractUserName(String token) {
        return extractClaim(token, Claims::getSubject);
    }

    // used to produce the JWT token string.
    public String generateToken(UserDetails userDetails) {
        Long userId = ((User) userDetails).getId(); // Cast UserDetails to User and extract userId
        return generateToken(new HashMap<>(), userDetails, userId);
    }


    // Generate token with userId as an extra claim
    public String generateToken(Map<String, Object> extraClaims, UserDetails userDetails, Long userId) {
        extraClaims.put("userId", userId);  // Add userId as a claim
        return Jwts.builder()
                .setClaims(extraClaims)
                .setSubject(userDetails.getUsername())
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis() + 1000 * 60 * 24))
                .signWith(getSigningKey())
                .compact();
    }

    // Compares the username extracted from the token to the actual UserDetails
    // that are passed in during authentication, and by inspecting whether the token has expired.
    public boolean isTokenValid(String token, UserDetails userDetails) {
        final String userName = extractUserName(token);
        return (userName.equals(userDetails.getUsername())) && !isTokenExpired(token);
    }

    private <T> T extractClaim(String token, Function<Claims, T> claimsResolvers) {
        final Claims claims = extractAllClaims(token);
        return claimsResolvers.apply(claims);
    }

    // Verifies the expiration date of a token.
    private boolean isTokenExpired(String token) {
        return extractExpiration(token).before(new Date());
    }

    // Same as above
    private Date extractExpiration(String token) {
        return extractClaim(token, Claims::getExpiration);
    }

    // Used to get all claims encoded in a token.
    private Claims extractAllClaims(String token) {
        return Jwts.parser().verifyWith(getSigningKey()).build().parseSignedClaims(token)
                .getPayload();
    }



    // used to encode the JWT secret key into a format usable by the JWT encoder.
    private SecretKey getSigningKey() {
        byte[] keyBytes = Decoders.BASE64.decode(jwtSigningKey);
        return Keys.hmacShaKeyFor(keyBytes);
    }
}
