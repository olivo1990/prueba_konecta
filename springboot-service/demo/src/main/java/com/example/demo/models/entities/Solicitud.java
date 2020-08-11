package com.example.demo.models.entities;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * Author: Camilo Olivo <camilo.olivo1990@gmail.com>
 * Date: 10/08/2020
 * Descripcion: Entidad que mapea la tabla solicitudes
 */

@Entity
@Data
@Builder
@Table(name = "solicitudes")
@NoArgsConstructor
@AllArgsConstructor
public class Solicitud {

    @Id
    private long id;
    private String codigo;
    private String descripcion;
    private String resumen;
    @JsonIgnoreProperties(value={"solicitudes", "hibernateLazyInitializer", "handler"}, allowSetters=true)
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "id_empleado")
	private Empleado empleado;
}