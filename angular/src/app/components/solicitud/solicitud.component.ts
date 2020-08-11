import { Component, OnInit, ViewChild } from '@angular/core';
import { SolicitudService } from '../../services/solicitud.services';
import { Empleado } from '../../models/empleado';
import { Solicitud } from '../../models/solicitud';
import swal from 'sweetalert2';
import { Location } from '@angular/common';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-solicitud',
  templateUrl: './solicitud.component.html',
  styleUrls: ['./solicitud.component.css']
})
export class SolicitudComponent implements OnInit {

  /* Se crea un objeto de tipo empleado */
  empleado: Empleado;
  /* Se inicia el paginador */
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  /* Se inicializa la lista de empleados buscados */
  solicitudesBuscadas: Solicitud[];
  /* Se inicializa las columnas que se van a mostrar en la tabla de resultados */
  displayedColumns: string[] = ['codigo', 'descripcion', 'resumen', 'empleado'];
  dataSource = new MatTableDataSource<Solicitud>(this.solicitudesBuscadas);
  /* Con este boolean puedo ocultar la tabla de resultados sino encuentro registros */
  isLoading: boolean;

  /* Se crea un objeto solicitud */
  solicitud: Solicitud;

  constructor(private location: Location, private solicitudService: SolicitudService) {
    this.solicitud = new Solicitud();
    this.isLoading = true;
  }

  ngOnInit() {
    this.empleado = this.solicitudService.empleado;
    this.buscar();
  }

  /* Lista los solicitudes */
  buscar(): void{
      
      /* Se llama al servicio que devuelve la lista de empleados */
      this.solicitudService.listaSolicitudes().subscribe(response =>{
        this.isLoading = true;
        
        if(response.length > 0){
  
          this.solicitudesBuscadas = response;
            
          if(this.solicitudesBuscadas.length > 0){
            this.isLoading = false;
          }
  
          this.dataSource = new MatTableDataSource<Solicitud>(this.solicitudesBuscadas);
          this.dataSource.sort = this.sort;
        }
   
      });
  }

   /* Metodo que guarda al empleado */
   crear(): void{
    
    /* Se realiza las validaciones pertinentes de los datos del empleado */
    if(this.solicitud.codigo === undefined || this.solicitud.codigo === ""){
      swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'El codigo es obligatorio!'
      })
      return;
    }

    if(this.solicitud.descripcion === undefined || this.solicitud.descripcion === ""){
      swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'La descripcion es obligatoria!'
      })
      return;
    }

    if(this.solicitud.resumen === undefined || this.solicitud.resumen === ""){
      swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'El salario del cliente es obligatorio!'
      })
      return;
    }
    
    swal.fire({
      title: '¿Está seguro de guardar los datos de la solicitud?',
      icon: 'warning',
      showCancelButton: true,
      cancelButtonText: 'No',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si'
    }).then((result) => {
      if (result.value) {

        this.solicitud.empleado = this.empleado;
    
        /* Se llama al servicio que guarda y actualiza los datos del empleado */
        this.solicitudService.guardarSolicitud(this.solicitud).subscribe(response =>{
          swal.fire({
            position: 'top-end',
            icon: 'success',
            title: `Se ha guardado con éxito la solicitud ${this.solicitud.codigo}`,
            showConfirmButton: false,
            timer: 3000
          })
          this.buscar();
        })
    
      }
    })
  }
  
  /* Metodo que regresa hacia atras */
  regresar(): void{
    this.location.back();
  }

}
