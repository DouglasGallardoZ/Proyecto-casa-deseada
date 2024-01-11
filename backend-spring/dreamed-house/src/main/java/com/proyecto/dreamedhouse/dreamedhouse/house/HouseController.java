package com.proyecto.dreamedhouse.dreamedhouse.house;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
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

    @CrossOrigin(origins = "*")
    @GetMapping("/{houseId}")
    public ResponseEntity<House> getHouse(@PathVariable Long houseId) {
        return houseRepository.findById(houseId)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    /*@GetMapping
    public ResponseEntity<List<HouseProjection>> getHouses() {
        List<HouseProjection> houses = houseRepository.findAllProjectedBy();

        if (!houses.isEmpty()) {
            return new ResponseEntity<>(houses, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

    }

    @GetMapping("/{houseId}")
    public ResponseEntity<HouseProjection> getHouse(@PathVariable Long houseId) {
        HouseProjection house = houseRepository.findProjectedByHouseId(houseId);

        if (house != null) {
            return new ResponseEntity<>(house, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }*/
}
