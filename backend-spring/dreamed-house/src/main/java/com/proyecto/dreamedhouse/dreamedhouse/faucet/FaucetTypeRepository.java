package com.proyecto.dreamedhouse.dreamedhouse.faucet;
import com.proyecto.dreamedhouse.dreamedhouse.door.DoorType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FaucetTypeRepository extends JpaRepository<FaucetType, Long>{
    
}
