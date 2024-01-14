package com.proyecto.dreamedhouse.dreamedhouse.faucet;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
class FaucetTypeControllerTest {

    @Mock
    private FaucetTypeRepository faucetTypeRepository;

    @Test
    public void getFaucetTypes_returnsListOfFaucetTypes() {
        // Arrange
        List<FaucetType> expectedFaucetTypes = Arrays.asList(
                new FaucetType(),
                new FaucetType(),
                new FaucetType()
        );
        when(faucetTypeRepository.findAll()).thenReturn(expectedFaucetTypes);

        // Act
        ResponseEntity<List<FaucetType>> response = new FaucetTypeController(faucetTypeRepository).getFaucetTypes();

        // Assert
        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(expectedFaucetTypes, response.getBody());
    }

    @Test
    public void getFaucetType_validId_returnsFaucetType() {
        // Arrange
        Long faucetTypeId = 1L;
        FaucetType expectedFaucetType = new FaucetType();
        when(faucetTypeRepository.findById(faucetTypeId)).thenReturn(Optional.of(expectedFaucetType));

        // Act
        ResponseEntity<FaucetType> response = new FaucetTypeController(faucetTypeRepository).getFaucetType(faucetTypeId);

        // Assert
        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(expectedFaucetType, response.getBody());
    }

    @Test
    public void getFaucetType_invalidId_returnsNotFound() {
        // Arrange
        Long faucetTypeId = 100L;  // Non-existent ID
        when(faucetTypeRepository.findById(faucetTypeId)).thenReturn(Optional.empty());

        // Act
        ResponseEntity<FaucetType> response = new FaucetTypeController(faucetTypeRepository).getFaucetType(faucetTypeId);

        // Assert
        assertEquals(HttpStatus.NOT_FOUND, response.getStatusCode());
    }
}
