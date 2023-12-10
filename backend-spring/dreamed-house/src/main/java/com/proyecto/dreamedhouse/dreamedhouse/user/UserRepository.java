package com.proyecto.dreamedhouse.dreamedhouse.user;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends JpaRepository<User, Long>{
    List<User> findByPhoneNumberAndUserIdNot(String phoneNumber, Long userId);

    List<User> findByEmailAndUserIdNot(String email, Long userId);

    User findByEmail(String email);

    boolean existsByEmail(String email);

    boolean existsByDni(String dni);

    boolean existsByPhoneNumber(String phoneNumber);

}
