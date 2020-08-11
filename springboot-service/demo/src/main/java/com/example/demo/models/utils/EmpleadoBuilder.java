package com.example.demo.models.utils;

import java.util.stream.Collectors;

import com.example.demo.models.dtos.EmpleadoDTO;
import com.example.demo.models.entities.Empleado;

/**
 * Author: Camilo Olivo <camilo.olivo1990@gmail.com>
 * Date: 10/08/2020
 * Descripcion: Builder que contruye el objeto empleado atravez del objetoEmpleado DTO
 */
public class EmpleadoBuilder {
     /**
     * Crear un objeto Empleado apartir de un objeto EmpleadoDTO
     *
     * @param empleadoDTO
     * @return
     */
    public static Empleado of(EmpleadoDTO empleadoDTO) {
        return Empleado.builder()
                .nombre(empleadoDTO.getNombre())
                .salario(empleadoDTO.getSalario())
                .fechaIngreso(empleadoDTO.getFechaIngreso())
                .id(empleadoDTO.getId())
                .build();
    }

    /**
     * Crear un objeto EmpleadoDTO apartir de un objeto Empleado
     *
     * @param empleadoDTO
     * @return
     */
    public static EmpleadoDTO ofDto(Empleado empleado) {
        return EmpleadoDTO.builder()
                .nombre(empleado.getNombre())
                .salario(empleado.getSalario())
                .fechaIngreso(empleado.getFechaIngreso())
                .id(empleado.getId())
                .build();
    }
}