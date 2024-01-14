package com.proyecto.dreamedhouse.dreamedhouse.house;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
class HouseControllerTest {

    @Mock
    private HouseRepository houseRepository;

    @Test
    public void getHouses_returnsListOfHouses() throws Exception {
        // Arrange
        List<House> expectedHouses = Arrays.asList(
                new House(),
                new House()
        );
        when(houseRepository.findAll()).thenReturn(expectedHouses);

        // Act
        ResponseEntity<List<House>> response = new HouseController(houseRepository).getHouses();

        // Assert
        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(expectedHouses, response.getBody());
    }

    @Test
    public void getHouse_validId_returnsHouse() {
        // Arrange
        Long houseId = 1L;
        House expectedHouse = new House();
        when(houseRepository.findById(houseId)).thenReturn(Optional.of(expectedHouse));

        // Act
        ResponseEntity<House> response = new HouseController(houseRepository).getHouse(houseId);

        // Assert
        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(expectedHouse, response.getBody());
    }

    @Test
    public void getHouse_invalidId_returnsNotFound() {
        // Arrange
        Long houseId = 100L;  // Non-existent ID
        when(houseRepository.findById(houseId)).thenReturn(Optional.empty());

        // Act
        ResponseEntity<House> response = new HouseController(houseRepository).getHouse(houseId);

        // Assert
        assertEquals(HttpStatus.NOT_FOUND, response.getStatusCode());
    }
}

