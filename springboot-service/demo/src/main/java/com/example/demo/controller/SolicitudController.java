package com.example.demo.controller;

import java.util.List;
import java.util.stream.Collectors;

import com.example.demo.models.bussiness.SolicitudBussiness;
import com.example.demo.models.dtos.SolicitudDTO;
import com.example.demo.models.utils.SolicitudBuilder;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Author: Camilo Olivo <camilo.olivo1990@gmail.com>
 * Date: 10/08/2020
 * Descripcion: Servicio que recibe los datos de las solicituides de los empleados
 */
@RestController
@CrossOrigin(origins = {"http://localhost:4200"})
@RequestMapping("/solicitud")
public class SolicitudController {

    @Autowired
    private SolicitudBussiness bussiness;

    /**
     * Metodo que guarda la informacion de la solicitud del empleado
     *
     * @param solicitudDTO
     * @return
     * @throws Exception
     */
    @PostMapping("/guardar-solicitud")
    public SolicitudDTO save(@RequestBody SolicitudDTO solicitudDTO) throws Exception {
        return SolicitudBuilder.ofDto(this.bussiness.guardarSolicitud(SolicitudBuilder.of(solicitudDTO)));
    }

    /**
     * Metodo que lista los datos de las solicitudes
     *
     * @param empleadoDTO
     * @return
     * @throws Exception
     */
    @GetMapping("/listar-solicitudes")
    public List<SolicitudDTO> listar() throws Exception {
        return bussiness.listar().stream()
        .map(solicitud -> SolicitudBuilder.ofDto(solicitud))
        .collect(Collectors.toList());
    }
    
}