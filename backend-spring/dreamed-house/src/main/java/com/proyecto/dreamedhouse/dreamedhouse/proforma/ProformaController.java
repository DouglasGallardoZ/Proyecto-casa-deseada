package com.proyecto.dreamedhouse.dreamedhouse.proforma;

import com.proyecto.dreamedhouse.dreamedhouse.JsonUtil;
import com.proyecto.dreamedhouse.dreamedhouse.dto.ProformaDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("/api/Proforma")
public class ProformaController {

    private final ProformaRepository proformaRepository;

    @Autowired
    public ProformaController(ProformaRepository proformaRepository) {
        this.proformaRepository = proformaRepository;
    }

    @PostMapping
    public ResponseEntity<String> createProforma(@Valid @RequestBody ProformaDTO proformaDTO) {
        proformaDTO.setCreatedAt(new Date());
        proformaDTO.setUpdatedAt(new Date());
        Proforma proforma = proformaDTO.getProforma();
        proformaRepository.save(proforma);
        return ResponseEntity.ok(JsonUtil.jsonResponse("Proforma guardada correctamente"));
    }

    @GetMapping("/{userId}")
    public ResponseEntity<?> getProformas(@PathVariable int userId) {
        List<Proforma> proformas = proformaRepository.findByUserId(userId);
        /*if (proformas.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(JsonUtil.jsonResponse("No se encontraron proformas"));
        }*/
        return ResponseEntity.ok(proformas);
    }

    @PutMapping("/{proformaId}")
    public ResponseEntity<String> updateProforma(@PathVariable int proformaId, @Valid @RequestBody ProformaDTO proformaDTO) {
        if (proformaId != proformaDTO.getProformaId()) {
            return ResponseEntity.badRequest().body(JsonUtil.jsonResponse("La proforma no coincide con el ID"));
        }

        proformaDTO.setUpdatedAt(new Date());
        Proforma proforma = proformaDTO.getProforma();
        proformaRepository.save(proforma);

        return ResponseEntity.ok(JsonUtil.jsonResponse("Proforma actualizada correctamente"));
    }

    @DeleteMapping("/{proformaId}")
    public ResponseEntity<String> deleteProforma(@PathVariable Long proformaId) {
        Proforma proforma = proformaRepository.findById(proformaId)
                .orElse(null);

        if (proforma == null) {
            return ResponseEntity.notFound().build();
        }

        proformaRepository.delete(proforma);
        return ResponseEntity.ok(JsonUtil.jsonResponse("Proforma eliminada correctamente"));
    }
}

