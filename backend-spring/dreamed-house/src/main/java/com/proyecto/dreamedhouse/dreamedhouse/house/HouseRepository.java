package com.proyecto.dreamedhouse.dreamedhouse.house;
import com.proyecto.dreamedhouse.dreamedhouse.floor.FloorType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface HouseRepository extends JpaRepository<House, Long>{
    HouseProjection findProjectedByHouseId(Long houseId);
    List<HouseProjection> findAllProjectedBy();
}
