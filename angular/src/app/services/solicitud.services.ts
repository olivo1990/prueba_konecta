import { Injectable } from '@angular/core';
import { Empleado } from '../models/empleado';
import { Observable, throwError } from 'rxjs';
import { environment } from '../../environments/environment';
import { catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Solicitud } from '../models/solicitud';

@Injectable({
  providedIn: 'root'
})
export class SolicitudService {
  
  /* Se inicializa la api que va a llamar al microservicio de empleado */
  private API = environment.APISOLICITUD;
  
  /* Atributo que tiene como fin almacenar los datos del empleado de forma temporal para su respectiva actualización */
  empleado: Empleado;

  constructor(private http: HttpClient) {
    this.empleado = new Empleado();  
  }
  
  /* Metodo que inserta y actualiza la soicitud */
  guardarSolicitud(solicitud: Solicitud):Observable<any>{
    const urlEndpoint = this.API+'/guardar-solicitud';
    return this.http.post<any>(urlEndpoint, solicitud).pipe(
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
  
  /* Metodo que lista las solicitudes */
  listaSolicitudes(): Observable<any>{
    const urlEndpoint = this.API+'/listar-solicitudes';

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
