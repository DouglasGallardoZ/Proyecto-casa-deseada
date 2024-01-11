package com.proyecto.dreamedhouse.dreamedhouse.faucet;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Class {@code FaucetTypeController} sets the endpoints to work with the Faucet Type entity
 */
@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/FaucetType")
public class FaucetTypeController {

    private final FaucetTypeRepository faucetTypeRepository;

    @Autowired
    public FaucetTypeController(FaucetTypeRepository faucetTypeRepository) {
        this.faucetTypeRepository = faucetTypeRepository;
    }

    // GET: /api/FaucetType

    @CrossOrigin(origins = "*")
    @GetMapping
    public ResponseEntity<List<FaucetType>> getFaucetTypes() {
        List<FaucetType> faucetTypes = faucetTypeRepository.findAll();
        return ResponseEntity.ok(faucetTypes);
    }

    @CrossOrigin(origins = "*")
    @GetMapping("/{faucetTypeId}")
    public ResponseEntity<FaucetType> getFaucetType(@PathVariable Long faucetTypeId) {
        return faucetTypeRepository.findById(faucetTypeId)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }
}
