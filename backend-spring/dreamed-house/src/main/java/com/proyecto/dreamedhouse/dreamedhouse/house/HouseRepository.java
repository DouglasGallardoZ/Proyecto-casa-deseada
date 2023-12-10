package com.proyecto.dreamedhouse.dreamedhouse.house;
import com.proyecto.dreamedhouse.dreamedhouse.floor.FloorType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface HouseRepository extends JpaRepository<House, Long>{
    
}
