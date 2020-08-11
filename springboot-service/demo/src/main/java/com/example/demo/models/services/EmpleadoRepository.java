package com.example.demo.models.services;

import com.example.demo.models.entities.Empleado;

import org.springframework.data.jpa.repository.JpaRepository;

public interface EmpleadoRepository extends JpaRepository<Empleado, Long>  {
    
}