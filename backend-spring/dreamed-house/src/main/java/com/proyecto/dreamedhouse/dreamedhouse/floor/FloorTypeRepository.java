package com.proyecto.dreamedhouse.dreamedhouse.floor;
import com.proyecto.dreamedhouse.dreamedhouse.faucet.FaucetType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FloorTypeRepository extends JpaRepository<FloorType, Long>{
    
}
