package com.example.demo.models.utils;

import com.example.demo.models.dtos.SolicitudDTO;
import com.example.demo.models.entities.Solicitud;

/**
 * Author: Camilo Olivo <camilo.olivo1990@gmail.com>
 * Date: 10/08/2020
 * Descripcion: Builder que contruye el objeto Solicitud
 */
public class SolicitudBuilder {
     /**
     * Crear un objeto Solicitud apartir de un objeto SolicitudDTO
     *
     * @param solicitudDTO
     * @return
     */
    public static Solicitud of(SolicitudDTO solicitudDTO) {
        return Solicitud.builder()
                .codigo(solicitudDTO.getCodigo())
                .descripcion(solicitudDTO.getDescripcion())
                .empleado(EmpleadoBuilder.of(solicitudDTO.getEmpleado()))
                .resumen(solicitudDTO.getResumen())
                .build();
    }

    /**
     * Crear un objeto SolicitudDTO apartir de un objeto Solicitud
     *
     * @param solicitudDTO
     * @return
     */
    public static SolicitudDTO ofDto(Solicitud solicitud) {
        return SolicitudDTO.builder()
                .codigo(solicitud.getCodigo())
                .descripcion(solicitud.getDescripcion())
                .empleado(EmpleadoBuilder.ofDto(solicitud.getEmpleado()))
                .resumen(solicitud.getResumen())
                .build();
    }
}