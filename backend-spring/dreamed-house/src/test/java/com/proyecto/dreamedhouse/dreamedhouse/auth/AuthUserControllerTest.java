package com.proyecto.dreamedhouse.dreamedhouse.auth;

import com.proyecto.dreamedhouse.dreamedhouse.dto.UserDTO;
import com.proyecto.dreamedhouse.dreamedhouse.user.User;
import com.proyecto.dreamedhouse.dreamedhouse.user.UserRepository;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.crypto.password.PasswordEncoder;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;
@ExtendWith(MockitoExtension.class)
class AuthUserControllerTest {

    @Mock
    private UserRepository userService;
    @Mock
    PasswordEncoder passwordEncoder;

    @Test
    public void signIn_correctCredentials_returnsSignInResponseWithToken() {
        // Arrange
        AuthUser authUser = new AuthUser("test@example.com", "password");
        User user = new User();  // Set other user fields
        when(userService.findByEmail(authUser.getEmail())).thenReturn(user);
        when(passwordEncoder.matches(any(), any())).thenReturn(true);
        // Act
        SignInResponse response = new AuthUserController(userService, passwordEncoder).signIn(authUser);

        // Assert
        assertNotNull(response);
        assertNotNull(response.getToken());
        assertEquals(user, response.getUserAuthenticated());
    }

    @Test
    public void signIn_incorrectCredentials_throwsBadCredentialsException() {
        // Arrange
        AuthUser authUser = new AuthUser("test@example.com", "wrongpassword");
        when(userService.findByEmail(authUser.getEmail())).thenReturn(new User());

        // Assert
        assertThrows(BadCredentialsException.class, () -> new AuthUserController(userService, passwordEncoder).signIn(authUser));
    }

    @Test
    public void signIn_userNotFound_throwsAuthenticationException() {
        // Arrange
        AuthUser authUser = new AuthUser("test@example.com", "password");
        when(userService.findByEmail(authUser.getEmail())).thenReturn(null);

        // Assert
        assertThrows(Exception.class, () -> new AuthUserController(userService, passwordEncoder).signIn(authUser));
    }

    @Test
    public void signUp_validUser_returnsOkResponseWithSuccessMessage() {
        // Arrange
        UserDTO userDTO = new UserDTO();  // Set user data
        when(userService.existsByEmail(userDTO.getEmail())).thenReturn(false);
        when(userService.existsByDni(userDTO.getDni())).thenReturn(false);
        when(userService.existsByPhoneNumber(userDTO.getPhoneNumber())).thenReturn(false);

        // Act
        ResponseEntity<String> response = new AuthUserController(userService, passwordEncoder).signUp(userDTO);

        // Assert
        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals("\"Usuario ingresado correctamente\"", response.getBody());
    }
}