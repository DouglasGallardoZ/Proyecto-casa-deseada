package com.proyecto.dreamedhouse.dreamedhouse.door;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/DoorType")
public class DoorTypeController {

    private final DoorTypeRepository doorTypeRepository;

    @Autowired
    public DoorTypeController(DoorTypeRepository doorTypeRepository) {
        this.doorTypeRepository = doorTypeRepository;
    }

    @GetMapping
    public ResponseEntity<List<DoorType>> getDoorTypes() {
        List<DoorType> doorTypes = doorTypeRepository.findAll();
        return ResponseEntity.ok(doorTypes);
    }

    @GetMapping("/{doorTypeId}")
    public ResponseEntity<DoorType> getDoorType(@PathVariable Long doorTypeId) {
        return doorTypeRepository.findById(doorTypeId)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }
}
