package com.example.demo.models.services;

import com.example.demo.models.entities.Solicitud;

import org.springframework.data.jpa.repository.JpaRepository;

public interface SolicitudRepository extends JpaRepository<Solicitud, Long>  {
    
}