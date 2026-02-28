package com.unpredictableCoder.roomFinderBackend.repository;

import com.unpredictableCoder.roomFinderBackend.entity.AuthProvider;
import com.unpredictableCoder.roomFinderBackend.entity.Role;
import com.unpredictableCoder.roomFinderBackend.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String email);
    Optional<User> findByPhone(String phone);
    Optional<User> findByAuthProviderAndProviderId(AuthProvider provider, String providerId);
    boolean existsByEmail(String email);
    boolean existsByPhone(String phone);
    List<User> findAllByRole(Role role);
}
