import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-to-do-component',
  imports: [FormsModule,CommonModule,FormsModule], 
  templateUrl: './to-do-component.component.html',
  styleUrl: './to-do-component.component.css',
})
export class ToDoComponentComponent {
  newTask: string = '';
  tasks: { name: string; completed: boolean }[] = [];
  addTask() {
    if (this.newTask.trim() !== '') {
      this.tasks.push({ name: this.newTask, completed: false });
      this.newTask = '';
    }
  }

  removeTask(index: number) {
    this.tasks.splice(index, 1);
  }
  toggleTaskStatus(index: number) {
    this.tasks[index].completed = !this.tasks[index].completed;
  }
}
