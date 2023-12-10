package com.proyecto.dreamedhouse.dreamedhouse.proforma;
import com.proyecto.dreamedhouse.dreamedhouse.house.House;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProformaRepository extends JpaRepository<Proforma, Long>{

    List<Proforma> findByUserId(int userId);
    
}
