package com.example.demo.models.dtos;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * Author: Camilo Olivo <camilo.olivo1990@gmail.com>
 * Date: 10/08/2020
 * Descripcion: DTO que recibe los datos
 */
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class SolicitudDTO {
    private long id;
    private String codigo;
    private String descripcion;
    private String resumen;
    private EmpleadoDTO empleado;
}