import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Empleado } from '../../../models/empleado';
import swal from 'sweetalert2';
import { EmpleadosService } from '../../../services/empleados.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-empleado',
  templateUrl: './crear-empleado.component.html',
  styleUrls: ['./crear-empleado.component.css']
})
export class CrearEmpleadoComponent implements OnInit {
  
  /* Objeto de tipo empleado que se utiliza para alamacenar los datos del empleado que está en el formulario */
  empleado: Empleado;
  /* Objeto de tipo empleado que se utiliza en la actualización del empleado */
  actualizarEmpleado: Empleado;
  /* Se inicializa el atributo que se encarga de alamcenar la lista de departamentos */
  idEmpleado: number;
  verFunciones: boolean;

  constructor(private location: Location, private empleadosService: EmpleadosService, private router: Router) { 
    this.empleado = new Empleado();
  }

  ngOnInit() {
     this.idEmpleado = 0;

    /* Se llama el objeto que almacena de manera temporal los datos del empleado para actualizarlos */
    this.actualizarEmpleado = this.empleadosService.actualizarEmpleado;
    
    /* Se valida que los datos para actualizar existan, sino se inserta un nuevo empleado */
    if(Object.keys(this.actualizarEmpleado).length > 0){
      this.empleado = this.actualizarEmpleado;
      this.idEmpleado = this.empleado.id;
    }

  }
  
  /* Metodo que guarda al empleado */
  crear(): void{
    
    /* Se realiza las validaciones pertinentes de los datos del empleado */
    if(this.empleado.nombre === undefined || this.empleado.nombre === ""){
      swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'El nombre del empleado es obligatorio!'
      })
      return;
    }

    if(this.empleado.fechaIngreso === undefined || this.empleado.fechaIngreso === ""){
      swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'La fecha de ingreso es obligatoria!'
      })
      return;
    }

    if(this.empleado.salario === undefined || this.empleado.salario === 0){
      swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'El salario del cliente es obligatorio!'
      })
      return;
    }
    
    swal.fire({
      title: '¿Está seguro de guardar los datos del empleado?',
      icon: 'warning',
      showCancelButton: true,
      cancelButtonText: 'No',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si'
    }).then((result) => {
      if (result.value) {
    
        /* Se llama al servicio que guarda y actualiza los datos del empleado */
        this.empleadosService.guardarEmpleado(this.empleado).subscribe(response =>{
          this.router.navigate(['/empleados']);
          swal.fire({
            position: 'top-end',
            icon: 'success',
            title: `Se ha guardado con éxito el empleado ${this.empleado.nombre}`,
            showConfirmButton: false,
            timer: 3000
          })
        })
    
      }
    })
  }
  
  /* Metodo que regresa hacia atras */
  regresar(): void{
    this.location.back();
  }

}
