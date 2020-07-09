import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CursosService {
  constructor() {}
  getcursos() {
    return [
      { Id: 1, nome: 'Angular 2' },
      { Id: 2, nome: 'Bootstrap' },
    ];
  }
}
