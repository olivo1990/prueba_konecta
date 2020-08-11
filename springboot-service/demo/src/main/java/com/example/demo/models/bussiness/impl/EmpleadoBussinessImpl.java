package com.example.demo.models.bussiness.impl;

import java.util.List;

import com.example.demo.models.bussiness.EmpleadoBussiness;
import com.example.demo.models.entities.Empleado;
import com.example.demo.models.services.EmpleadoRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Author: Camilo Olivo <camilo.olivo1990@gmail.com> Date: 10/08/2020
 * Descripcion: Clase tipo servicio que maneja la logica de negocio
 */
@Service
public class EmpleadoBussinessImpl implements EmpleadoBussiness {

    @Autowired
    private EmpleadoRepository repository;

    @Override
    public Empleado guardarEmpleado(Empleado empleado) {
        return this.repository.save(empleado);
    }

    @Override
    public List<Empleado> listar() {
        return this.repository.findAll();
    }
    
}