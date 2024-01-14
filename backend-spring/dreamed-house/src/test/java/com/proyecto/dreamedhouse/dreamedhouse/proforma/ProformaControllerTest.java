package com.proyecto.dreamedhouse.dreamedhouse.proforma;

import com.proyecto.dreamedhouse.dreamedhouse.dto.ProformaDTO;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.Arrays;
import java.util.List;
import java.util.Collections;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class ProformaControllerTest {

    @Mock
    private ProformaRepository proformaRepository;

    private static Proforma createProforma() {
        return new Proforma();
    }

    private static ProformaDTO createValidProformaDTO() {
        return new ProformaDTO();
    }

    /**
     * Prueba el método `createProforma()` con una `ProformaDTO` válida.
     */
    @Test
    public void createProforma_validProformaDTO_createsProforma() {
        // Arrange
        ProformaDTO proformaDTO = createValidProformaDTO();
        when(proformaRepository.save(any(Proforma.class))).thenAnswer(i -> i.getArguments()[0]);

        // Act
        ResponseEntity<String> response = new ProformaController(proformaRepository).createProforma(proformaDTO);

        // Assert
        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals("\"Proforma guardada correctamente\"", response.getBody());
        verify(proformaRepository).save(any(Proforma.class));
    }

    /**
     * Prueba el método `getProformas()` con un ID de usuario válido.
     */
    @Test
    public void getProformas_validUserId_returnsProformas() {
        // Arrange
        int userId = 1;
        List<Proforma> expectedProformas = Arrays.asList(createProforma());
        when(proformaRepository.findByUserId(userId)).thenReturn(expectedProformas);

        // Act
        ResponseEntity<?> response = new ProformaController(proformaRepository).getProformas(userId);

        // Assert
        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(expectedProformas, response.getBody());
    }


    /**
     * Prueba el método `updateProforma()` con una `ProformaDTO` válida.
     */
    @Test
    public void updateProforma_validProformaDTO_updatesProforma() {
        // Arrange
        Long proformaId = 1L;
        ProformaDTO proformaDTO = createValidProformaDTO();
        proformaDTO.setProformaId(proformaId);
        Proforma proforma = proformaDTO.getProforma();
        //when(proformaRepository.findById(proformaId)).thenReturn(Optional.of(proforma));
        //when(proformaRepository.save(proforma)).thenReturn(proforma);

        // Act
        ResponseEntity<String> response = new ProformaController(proformaRepository).updateProforma(proformaId.intValue(),proformaDTO);

        // Assert
        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals("\"Proforma actualizada correctamente\"", response.getBody());
    }

    @Test
    public void deleteProforma_validProformaId_deletesProforma() {
        // Arrange
        Long proformaId = 1L;
        Proforma proforma = createProforma();  // Create a mock Proforma object
        when(proformaRepository.findById(proformaId)).thenReturn(Optional.of(proforma));

        // Act
        ResponseEntity<String> response = new ProformaController(proformaRepository).deleteProforma(proformaId);

        // Assert
        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals("\"Proforma eliminada correctamente\"", response.getBody());
        verify(proformaRepository).delete(proforma);
    }

    @Test
    public void deleteProforma_invalidProformaId_returnsNotFound() {
        // Arrange
        Long proformaId = 100L;  // Non-existent ID
        when(proformaRepository.findById(proformaId)).thenReturn(Optional.empty());

        // Act
        ResponseEntity<String> response = new ProformaController(proformaRepository).deleteProforma(proformaId);

        // Assert
        assertEquals(HttpStatus.NOT_FOUND, response.getStatusCode());
    }

}