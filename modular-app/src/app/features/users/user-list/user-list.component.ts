import { Component } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {

  users = [
    { name: 'Juan Pérez', role: 'Administrador', email: 'juan@example.com' },
    { name: 'María López', role: 'Usuario', email: 'maria@example.com' },
    { name: 'Carlos Sánchez', role: 'Moderador', email: 'carlos@example.com' }
  ];
  
}
