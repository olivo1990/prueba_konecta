package com.example.demo.models.bussiness;

import java.util.List;

import com.example.demo.models.entities.Empleado;

/**
 * Author: Camilo Olivo <camilo.olivo1990@gmail.com>
 * Date: 10/08/2020
 * Descripcion: Interface que es un intemediario a la clase EmpleadoBussinessImpl
 */
public interface EmpleadoBussiness {
    public Empleado guardarEmpleado(Empleado empleado);

    public List<Empleado> listar();
}