import { Inmueble } from '@core/models/backend/inmueble.model';
export { Inmueble as InmuebleResponse } from '@core/models/backend/inmueble.model';

export type InmuebleCreateRequest = Omit<Inmueble, 'id' | 'date'>
