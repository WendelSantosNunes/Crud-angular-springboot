import { Component } from '@angular/core';
import { Course } from '../model/course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent {

  // Criar a variável, adicionando a tipagem e Inicializando
  courses: Course[] = [
    {_id: '1', name:'Angular', category: 'Front-end'}
  ];
  // Mostrar quais atributo do array
  displayedColumns = ['name', 'category'];

  constructor() {

  }
}
