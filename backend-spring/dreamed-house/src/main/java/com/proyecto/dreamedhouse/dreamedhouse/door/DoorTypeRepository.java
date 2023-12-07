package com.proyecto.dreamedhouse.dreamedhouse.door;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DoorTypeRepository extends JpaRepository<DoorType, Long>{
    
}
