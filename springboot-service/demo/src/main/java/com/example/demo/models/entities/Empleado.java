package com.example.demo.models.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * Author: Camilo Olivo <camilo.olivo1990@gmail.com>
 * Date: 10/08/2020
 * Descripcion: Entidad que mapea la tabla empleados
 */

@Entity
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "empleados")
public class Empleado{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String nombre;
    private double salario;
    private String fechaIngreso;
}
