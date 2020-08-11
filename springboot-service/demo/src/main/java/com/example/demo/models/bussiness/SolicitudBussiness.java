package com.example.demo.models.bussiness;

import java.util.List;

import com.example.demo.models.entities.Solicitud;

public interface SolicitudBussiness {
    public Solicitud guardarSolicitud(Solicitud solicitud);

    public List<Solicitud> listar();
}