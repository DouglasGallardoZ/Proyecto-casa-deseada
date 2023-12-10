package com.proyecto.dreamedhouse.dreamedhouse.proforma;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("/api/Proforma")
@CrossOrigin(origins = "*")
public class ProformaController {

    private final ProformaRepository proformaRepository;

    @Autowired
    public ProformaController(ProformaRepository proformaRepository) {
        this.proformaRepository = proformaRepository;
    }

    @PostMapping
    public ResponseEntity<String> createProforma(@Valid @RequestBody Proforma proforma) {
        proforma.setCreatedAt(new Date());
        proforma.setUpdatedAt(new Date());
        proformaRepository.save(proforma);
        return ResponseEntity.ok("Proforma guardada correctamente");
    }

    @GetMapping("/{userId}")
    public ResponseEntity<List<Proforma>> getProformas(@PathVariable int userId) {
        List<Proforma> proformas = proformaRepository.findByUserId(userId);
        if (proformas.isEmpty()) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(proformas);
    }

    @PutMapping("/{proformaId}")
    public ResponseEntity<String> updateProforma(@PathVariable int proformaId, @Valid @RequestBody Proforma proforma) {
        if (proformaId != proforma.getProformaId()) {
            return ResponseEntity.badRequest().body("La proforma no coincide con el ID");
        }

        proforma.setUpdatedAt(new Date());
        proformaRepository.save(proforma);

        return ResponseEntity.ok("Proforma actualizada correctamente");
    }

    @DeleteMapping("/{proformaId}")
    public ResponseEntity<String> deleteProforma(@PathVariable Long proformaId) {
        Proforma proforma = proformaRepository.findById(proformaId)
                .orElse(null);

        if (proforma == null) {
            return ResponseEntity.notFound().build();
        }

        proformaRepository.delete(proforma);
        return ResponseEntity.ok("Proforma eliminada correctamente");
    }
}

