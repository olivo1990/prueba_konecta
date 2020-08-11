import { Empleado } from './empleado';
/* El modelo Solicitud */
export class Solicitud {
    id: number;
    codigo: string;
    descripcion: string;
    resumen: string;
    empleado: Empleado;
}
