import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { TareasService } from './services/tareas.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  listaTareas: string[] = [];
  nuevaTarea: string = '';

  private _tareasService = inject(TareasService);


  ngOnInit(): void {
    this.listaTareas = this._tareasService.getTareas();
  }


  agregarTarea() {
    // return in case the input is empty
    if (!this.nuevaTarea || this.nuevaTarea.trim() === '') {
      return
    }
    this._tareasService.agregarTarea(this.nuevaTarea);
    this.nuevaTarea = '';
    this.listaTareas = this._tareasService.getTareas();
  }

  eliminarTarea(index: number) {
    this._tareasService.eliminarTarea(index);
    this.listaTareas = this._tareasService.getTareas();
  }


}
