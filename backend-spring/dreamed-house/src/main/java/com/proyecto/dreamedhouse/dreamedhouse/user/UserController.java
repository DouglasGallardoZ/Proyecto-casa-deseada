package com.proyecto.dreamedhouse.dreamedhouse.user;

import com.proyecto.dreamedhouse.dreamedhouse.JsonUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("/api/User")
//@PreAuthorize("hasRole('ROLE_USER')")
public class UserController {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    @Autowired
    public UserController(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @CrossOrigin(origins = "*")
    @GetMapping("/{userId}")
    public ResponseEntity<User> getUser(@PathVariable Long userId) {
        return userRepository.findById(userId)
                .map(user -> new ResponseEntity<>(user, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @CrossOrigin(origins = "*")
    @PutMapping("/{userId}")
    public ResponseEntity<String> putUser(@PathVariable int userId, @RequestBody User user) {
        if (userId != user.getUserId())
            return new ResponseEntity<>("El usuario no coincide con el ID", HttpStatus.BAD_REQUEST);

        if (userPhoneNumberExists(user.getUserId(), user.getPhoneNumber()) || userEmailExists(user.getUserId(), user.getEmail()))
            return new ResponseEntity<>("Cédula, número de celular o correo electrónico ya registrados", HttpStatus.BAD_REQUEST);

        user.setUpdatedAt(new Date());

        userRepository.save(user);

        return new ResponseEntity<>(JsonUtil.jsonResponse("Usuario actualizado correctamente"), HttpStatus.OK);
    }

    @CrossOrigin(origins = "*")
    @PutMapping("Password/{userId}")
    public ResponseEntity<String> putUserPassword(@PathVariable Long userId, @RequestBody ChangePasswordDTO data) {
        User currentUser = userRepository.getById(userId);

        if (currentUser == null) {
            return ResponseEntity.badRequest().body("Usuario no encontrado");
        }

        if (!validateUserPassword(currentUser, data.getUser().getPassword())) {
            return ResponseEntity.badRequest().body("Contraseña actual no coincide");
        }

        currentUser.setPassword(passwordEncoder.encode(data.getNewPassword()));
        currentUser.setUpdatedAt(new Date());

        userRepository.save(currentUser);

        return ResponseEntity.ok().body(JsonUtil.jsonResponse("Contraseña actualizada correctamente"));
    }

    private boolean validateUserPassword(User user, String password) {
        // Lógica para validar que la contraseña actual coincida con la proporcionada
        return passwordEncoder.matches(password, user.getPassword());
        //return user.getPassword().equals(password);
    }


    private boolean userPhoneNumberExists(Long userId, String userPhoneNumber) {
        List<User> users = userRepository.findByPhoneNumberAndUserIdNot(userPhoneNumber, userId);
        return !users.isEmpty();
    }

    private boolean userEmailExists(Long userId, String userEmail) {
        List<User> users = userRepository.findByEmailAndUserIdNot(userEmail, userId);
        return !users.isEmpty();
    }
}
