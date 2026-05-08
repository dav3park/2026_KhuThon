package com.heritage.auction.domain.artisan;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface ArtisanRepository extends JpaRepository<Artisan, Long> {

    @Query("""
            SELECT a FROM Artisan a
            WHERE (:category IS NULL OR :category MEMBER OF a.collaborationFields)
              AND (:status IS NULL OR a.status = :status)
            """)
    Page<Artisan> findByFilters(@Param("category") String category,
                                @Param("status") ArtisanStatus status,
                                Pageable pageable);
}
