package com.proyecto.dreamedhouse.dreamedhouse.house;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/House")
public class HouseController {
    private final HouseRepository houseRepository;

    @Autowired
    public HouseController(HouseRepository houseRepository) {
        this.houseRepository = houseRepository;
    }

    @GetMapping
    public ResponseEntity<List<House>> getHouses() throws Exception{
        List<House> houses = houseRepository.findAll();
        return ResponseEntity.ok(houses);
    }

    @GetMapping("/{houseId}")
    public ResponseEntity<House> getHouse(@PathVariable Long houseId) {
        return houseRepository.findById(houseId)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }


}
