package com.proyecto.dreamedhouse.dreamedhouse.door;

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
class DoorTypeControllerTest {

    @Mock
    private DoorTypeRepository doorTypeRepository;

    @Test
    public void getDoorTypes_returnsListOfDoorTypes() {
        // Arrange
        List<DoorType> expectedDoorTypes = Arrays.asList(
                new DoorType(),
                new DoorType(),
                new DoorType()
        );
        when(doorTypeRepository.findAll()).thenReturn(expectedDoorTypes);

        // Act
        ResponseEntity<List<DoorType>> response = new DoorTypeController(doorTypeRepository).getDoorTypes();

        // Assert
        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(expectedDoorTypes, response.getBody());
    }

    @Test
    public void getDoorType_validId_returnsDoorType() {
        // Arrange
        Long doorTypeId = 1L;
        DoorType expectedDoorType = new DoorType();
        when(doorTypeRepository.findById(doorTypeId)).thenReturn(Optional.of(expectedDoorType));

        // Act
        ResponseEntity<DoorType> response = new DoorTypeController(doorTypeRepository).getDoorType(doorTypeId);

        // Assert
        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(expectedDoorType, response.getBody());
    }

    @Test
    public void getDoorType_invalidId_returnsNotFound() {
        // Arrange
        Long doorTypeId = 100L;  // Non-existent ID
        when(doorTypeRepository.findById(doorTypeId)).thenReturn(Optional.empty());

        // Act
        ResponseEntity<DoorType> response = new DoorTypeController(doorTypeRepository).getDoorType(doorTypeId);

        // Assert
        assertEquals(HttpStatus.NOT_FOUND, response.getStatusCode());
    }
}
