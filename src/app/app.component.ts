import { Component } from '@angular/core';
import { ToDoItem } from './interfaces/todo-item';

@Component({
  selector: 'app-root',
  template: `
    <h1 class="app-title">
      Welcome to {{ title }}!
    </h1>
    
    <app-list-manager></app-list-manager>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = `Vidya's To DO List APP`;
  
}
