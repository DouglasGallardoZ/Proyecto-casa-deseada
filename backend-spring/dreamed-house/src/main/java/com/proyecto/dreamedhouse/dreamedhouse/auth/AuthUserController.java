package com.proyecto.dreamedhouse.dreamedhouse.auth;

import com.proyecto.dreamedhouse.dreamedhouse.JsonUtil;
import com.proyecto.dreamedhouse.dreamedhouse.user.User;
import com.proyecto.dreamedhouse.dreamedhouse.user.UserRepository;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.Key;
import java.util.Date;

@RestController
@RequestMapping("/api/AuthUser")
public class AuthUserController {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    @Value("${app.jwt.secret}")
    private String jwtSecret;

    @Autowired
    public AuthUserController(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @PostMapping("/SignIn")
    public SignInResponse signIn(@RequestBody AuthUser authUser) {
        User user = userRepository.findByEmail(authUser.getEmail());
        if (!passwordEncoder.matches(authUser.getPassword(), user.getPassword())) {
            throw new BadCredentialsException("Invalid credentials");
        }

        String token = generateToken(user);

        SignInResponse signInResponse = new SignInResponse();
        signInResponse.setToken(token);
        signInResponse.setUserAuthenticated(user);

        return signInResponse;
    }

    @PostMapping("/SignUp")
    public ResponseEntity<String> signUp(@RequestBody User user) {
        if (userRepository.existsByEmail(user.getEmail())) {
            return ResponseEntity.badRequest().body("Email already registered");
        }

        if (userRepository.existsByDni(user.getDni())) {
            return ResponseEntity.badRequest().body("DNI already registered");
        }

        if (userRepository.existsByPhoneNumber(user.getPhoneNumber())) {
            return ResponseEntity.badRequest().body("Phone number already registered");
        }

        user.setPassword(passwordEncoder.encode(user.getPassword()));
        user.setCreatedAt(new Date());
        user.setUpdatedAt(new Date());

        userRepository.save(user);

        return ResponseEntity.ok(JsonUtil.jsonResponse("Usuario ingresado correctamente"));
    }

    private String generateToken(User user) {
        Claims claims = Jwts.claims().setSubject(user.getEmail());
        claims.put("userId", user.getUserId());


        Date now = new Date();
        Date expiration = new Date(now.getTime() + 86400000); // Token valid for 1 day

        // Utilizar Keys.secretKeyFor para generar una clave segura
        Key key = Keys.secretKeyFor(SignatureAlgorithm.HS256);

        return Jwts.builder()
                .setClaims(claims)
                .setIssuedAt(now)
                .setExpiration(expiration)
                .signWith(key)
                .compact();
    }
}

