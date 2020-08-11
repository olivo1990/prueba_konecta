import { Injectable } from '@angular/core';
import { Empleado } from '../models/empleado';
import { Observable, throwError } from 'rxjs';
import { environment } from '../../environments/environment';
import { catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {
  
  /* Se inicializa la api que va a llamar al microservicio de empleado */
  private API = environment.APIEMPLEADO;
  
  /* Atributo que tiene como fin almacenar los datos del empleado de forma temporal para su respectiva actualización */
  actualizarEmpleado: Empleado;

  /* Se utiliza para listar los empleados sn tener que dar clic al boton de buscar */
  buscarEmpleados: boolean;

  constructor(private http: HttpClient) {
    this.actualizarEmpleado = new Empleado();  
    this.buscarEmpleados = false;
  }
  
  /* Metodo que inserta y actualiza al empleado */
  guardarEmpleado(empleado: Empleado):Observable<any>{
    const urlEndpoint = this.API+'/guardar-empleado';
    return this.http.post<any>(urlEndpoint, empleado).pipe(
      catchError(e => {
        if(e.status==400){
            return throwError(e);
        }
        if(e.error.mensaje){
          console.log(e.error.mensaje);
        }
        return throwError(e);
      })
    )
  }
  
  /* Metodo que lista los empeados */
  listaEmpleados(): Observable<any>{
    const urlEndpoint = this.API+'/listar-empleados';

    return this.http.get(urlEndpoint).pipe(
      catchError(e => {
        if(e.status==400){
            return throwError(e);
        }
        if(e.error.mensaje){
          console.log(e.error.mensaje);
        }
        return throwError(e);
      })
    )
  }

}
