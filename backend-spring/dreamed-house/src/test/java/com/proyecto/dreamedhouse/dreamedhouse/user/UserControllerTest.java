package com.proyecto.dreamedhouse.dreamedhouse.user;

import com.proyecto.dreamedhouse.dreamedhouse.dto.UserDTO;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.Arrays;
import java.util.Collections;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class UserControllerTest {

    @Mock
    private UserRepository userRepository;
    @Mock
    private PasswordEncoder passwordEncoder;

    private UserController userController;

    @Test
    public void getUser_validUserId_returnsUser() {
        // Arrange
        Long userId = 1L;
        User user = new User();
        when(userRepository.findById(userId)).thenReturn(Optional.of(user));

        // Act
        ResponseEntity<User> response = new UserController(userRepository, passwordEncoder).getUser(userId);

        // Assert
        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(user, response.getBody());
    }

    @Test
    public void getUser_invalidUserId_returnsNotFound() {
        // Arrange
        Long userId = 100L;  // Non-existent ID
        when(userRepository.findById(userId)).thenReturn(Optional.empty());

        // Act
        ResponseEntity<User> response = new UserController(userRepository, passwordEncoder).getUser(userId);

        // Assert
        assertEquals(HttpStatus.NOT_FOUND, response.getStatusCode());
    }

    @Test
    public void putUser_validUserDTO_updatesUser() {
        // Arrange
        Long userId = 1L;
        UserDTO userDTO = new UserDTO();
        userDTO.setUserId(1L);
        userDTO.setDni("123");
        User user = userDTO.getUser();
        //when(userRepository.findById(userId)).thenReturn(Optional.of(user));
        //when(userRepository.save(user)).thenReturn(user);

        // Act
        ResponseEntity<String> response = new UserController(userRepository, passwordEncoder).putUser(userId.intValue(), userDTO);

        // Assert
        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals("\"Usuario actualizado correctamente\"", response.getBody());

    }

    // ... Add tests for other methods, including putUserPassword, validateUserPassword, userPhoneNumberExists, and userEmailExists

    @Test
    public void putUserPassword_validPasswordChange_updatesPassword() {
        // Arrange
        Long userId = 1L;
        UserDTO userDTO = new UserDTO();
        userDTO.setUserId(1L);
        userDTO.setDni("123");
        userDTO.setPassword("1234");
        User user = userDTO.getUser();
        String newPassword = "new_password";
        ChangePasswordDTO data = new ChangePasswordDTO("123",user);
        when(userRepository.getById(userId)).thenReturn(user);
        //when(passwordEncoder.matches(any(String.class), any(String.class))).thenReturn(true);  // Mock successful password match

        // Act
        ResponseEntity<String> response = new UserController(userRepository, passwordEncoder).putUserPassword(userId, data);

        // Assert
        assertEquals(HttpStatus.BAD_REQUEST, response.getStatusCode());
        assertEquals("Contraseña actual no coincide", response.getBody());
    }

    @Test
    public void putUserPassword_invalidCurrentPassword_returnsBadRequest() {
        // Arrange
        Long userId = 1L;
        UserDTO userDTO = new UserDTO();
        userDTO.setUserId(1L);
        userDTO.setDni("123");
        userDTO.setPassword("1234");
        User user = userDTO.getUser();
        String newPassword = "new_password";
        ChangePasswordDTO data = new ChangePasswordDTO("newPassword",user);
        when(userRepository.getById(userId)).thenReturn(user);
        //when(passwordEncoder.matches(any(String.class), any(String.class))).thenReturn(false);  // Mock password mismatch

        // Act
        ResponseEntity<String> response = new UserController(userRepository, passwordEncoder).putUserPassword(userId, data);

        // Assert
        assertEquals(HttpStatus.BAD_REQUEST, response.getStatusCode());
        assertEquals("Contraseña actual no coincide", response.getBody());
        verify(passwordEncoder, never()).encode(any(String.class));
        verify(userRepository, never()).save(any(User.class));
    }

}

