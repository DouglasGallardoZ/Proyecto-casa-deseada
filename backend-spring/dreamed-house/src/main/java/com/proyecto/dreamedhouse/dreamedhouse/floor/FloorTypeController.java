package com.proyecto.dreamedhouse.dreamedhouse.floor;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Class {@code FloorTypeController} sets the endpoints to work with the Floor Type entity
 */
@RestController
@RequestMapping("/api/FloorType")
public class FloorTypeController {

    private final FloorTypeRepository floorTypeRepository;

    @Autowired
    public FloorTypeController(FloorTypeRepository floorTypeRepository) {
        this.floorTypeRepository = floorTypeRepository;
    }

    // GET: /api/floor-type
    @CrossOrigin(origins = "*")
    @GetMapping
    /**
     * Endpoint to get all Floor Finishes
     * @return A list with all Floor Finishes
     */
    public List<FloorType> getFloorTypes() {
        return floorTypeRepository.findAll();
    }

    // GET: /api/floor-type/{floorTypeId}
    @CrossOrigin(origins = "*")
    @GetMapping("/{floorTypeId}")
    /**
     * Endpoint to get a Floor Finish
     * @param floorTypeId Floor Finish ID which the data will be obtained from
     * @return A Floor Finish that matches the {@code floorTypeId}
     */
    public ResponseEntity<FloorType> getFloorType(@PathVariable Long floorTypeId) {
        FloorType floorType = floorTypeRepository.findById(floorTypeId).orElse(null);

        if (floorType == null) {
            return ResponseEntity.notFound().build();
        }

        return ResponseEntity.ok(floorType);
    }
}
