package com.proyecto.dreamedhouse.dreamedhouse.door;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/DoorType")
public class DoorTypeController {

    private final DoorTypeRepository doorTypeRepository;

    @Autowired
    public DoorTypeController(DoorTypeRepository doorTypeRepository) {
        this.doorTypeRepository = doorTypeRepository;
    }

    @CrossOrigin(origins = "*")
    @GetMapping
    public ResponseEntity<List<DoorType>> getDoorTypes() {
        List<DoorType> doorTypes = doorTypeRepository.findAll();
        return ResponseEntity.ok(doorTypes);
    }

    @CrossOrigin(origins = "*")
    @GetMapping("/{doorTypeId}")
    public ResponseEntity<DoorType> getDoorType(@PathVariable Long doorTypeId) {
        return doorTypeRepository.findById(doorTypeId)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }
}
