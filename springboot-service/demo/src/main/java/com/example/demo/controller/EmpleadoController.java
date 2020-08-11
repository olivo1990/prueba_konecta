package com.example.demo.controller;

import java.util.List;
import java.util.stream.Collectors;

import javax.persistence.NoResultException;

import com.example.demo.models.bussiness.EmpleadoBussiness;
import com.example.demo.models.dtos.EmpleadoDTO;
import com.example.demo.models.utils.EmpleadoBuilder;

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
 * Descripcion: Servicio que recibe los datos del empleado
 */
@RestController
@CrossOrigin(origins = {"http://localhost:4200"})
@RequestMapping("/empleado")
public class EmpleadoController {

    @Autowired
    private EmpleadoBussiness bussiness;

    /**
     * Metodo que guarda la informacion del empleado
     *
     * @param empleadoDTO
     * @return
     * @throws Exception
     */
    @PostMapping("/guardar-empleado")
    public EmpleadoDTO save(@RequestBody EmpleadoDTO empleadoDTO) throws Exception {

        return EmpleadoBuilder.ofDto(this.bussiness.guardarEmpleado(EmpleadoBuilder.of(empleadoDTO)));
    
    }

    /**
     * Metodo que lista los datos del empleado
     *
     * @param empleadoDTO
     * @return
     * @throws Exception
     */
    @GetMapping("/listar-empleados")
    public List<EmpleadoDTO> listar() throws Exception {
        return bussiness.listar().stream()
        .map(empleado -> EmpleadoBuilder.ofDto(empleado))
        .collect(Collectors.toList());
    }
    
}