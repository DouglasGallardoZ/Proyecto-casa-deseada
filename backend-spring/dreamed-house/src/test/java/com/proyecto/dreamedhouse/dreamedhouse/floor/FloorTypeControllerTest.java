package com.proyecto.dreamedhouse.dreamedhouse.floor;

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
class FloorTypeControllerTest {
    @Mock
    private FloorTypeRepository floorTypeRepository;

    @Test
    public void getFloorTypes_returnsListOfFloorTypes() {
        // Arrange
        List<FloorType> expectedFloorTypes = Arrays.asList(
                new FloorType(),
                new FloorType(),
                new FloorType()
        );
        when(floorTypeRepository.findAll()).thenReturn(expectedFloorTypes);

        // Act
        List<FloorType> response = new FloorTypeController(floorTypeRepository).getFloorTypes();

        // Assert
        assertEquals(expectedFloorTypes, response);
    }

    @Test
    public void getFloorType_validId_returnsFloorType() {
        // Arrange
        Long floorTypeId = 1L;
        FloorType expectedFloorType = new FloorType();
        when(floorTypeRepository.findById(floorTypeId)).thenReturn(Optional.of(expectedFloorType));

        // Act
        ResponseEntity<FloorType> response = new FloorTypeController(floorTypeRepository).getFloorType(floorTypeId);

        // Assert
        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(expectedFloorType, response.getBody());
    }

    @Test
    public void getFloorType_invalidId_returnsNotFound() {
        // Arrange
        Long floorTypeId = 100L;  // Non-existent ID
        when(floorTypeRepository.findById(floorTypeId)).thenReturn(Optional.empty());

        // Act
        ResponseEntity<FloorType> response = new FloorTypeController(floorTypeRepository).getFloorType(floorTypeId);

        // Assert
        assertEquals(HttpStatus.NOT_FOUND, response.getStatusCode());
    }


}
