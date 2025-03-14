import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-to-do-component',
  imports: [FormsModule],
  templateUrl: './to-do-component.component.html',
  styleUrl: './to-do-component.component.css',
})
export class ToDoComponentComponent {
  tasks: Array<string> = [];
  newTask: string = '';

  addTask() {
    if (this.newTask.trim() !== '') {
      this.tasks.push(this.newTask);
      this.newTask = '';
    }
  }

  removeTask(index: number) {
    this.tasks.splice(index, 1);
  }
}
