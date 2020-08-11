import { Component, OnInit, ViewChild } from '@angular/core';
import { Empleado } from '../../models/empleado';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import { EmpleadosService } from '../../services/empleados.service';
import { SolicitudService } from '../../services/solicitud.services';
@Component({
  selector: 'app-clientes',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {
  
  /* Se crea un objeto de tipo empleado */
  empleado: Empleado;
  /* Se inicia el paginador */
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  /* Se inicializa la lista de empleados buscados */
  empleadosBuscados: Empleado[];
  /* Se inicializa las columnas que se van a mostrar en la tabla de resultados */
  displayedColumns: string[] = ['nombre', 'salario', 'fechaIngreso', 'solicitud'];
  dataSource = new MatTableDataSource<Empleado>(this.empleadosBuscados);
  /* Con este boolean puedo ocultar la tabla de resultados sino encuentro registros */
  isLoading: boolean;
  
  /* Con el contructor de realiza la inyección de dependecias para utilizar los metodos de los servicios EmpleadosService */
  constructor(private empleadosService: EmpleadosService, private solicitudService: SolicitudService) {
    this.empleado = new Empleado();
    this.isLoading = true;
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.buscar();
  }
  
  /* Lista los empleados */
  buscar(): void{
      
      /* Se llama al servicio que devuelve la lista de empleados */
      this.empleadosService.listaEmpleados().subscribe(response =>{
        this.isLoading = true;
        
        if(response.length > 0){

          this.empleadosBuscados = response;
            
          if(this.empleadosBuscados.length > 0){
            this.isLoading = false;
          }
  
          this.dataSource = new MatTableDataSource<Empleado>(this.empleadosBuscados);
          this.dataSource.sort = this.sort;
        }else{
          this.empleadosBuscados = response;
        }
   
      });
  }

}
