package com.example.demo.models.bussiness.impl;

import java.util.List;

import com.example.demo.models.bussiness.SolicitudBussiness;
import com.example.demo.models.entities.Solicitud;
import com.example.demo.models.services.SolicitudRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SolicitudBussinessImpl implements SolicitudBussiness {

    @Autowired
    private SolicitudRepository repository;

    @Override
    public Solicitud guardarSolicitud(Solicitud solicitud) {
        return repository.save(solicitud);
    }

    @Override
    public List<Solicitud> listar() {
        return repository.findAll();
    }
    
}