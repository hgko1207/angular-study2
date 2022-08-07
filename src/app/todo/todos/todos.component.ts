import { Component, OnInit } from '@angular/core';
import { Todo } from '../share/todo.model';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  todos!: Todo[];
  today: Date = new Date();

  constructor() {
    this.todos = [
      { done: false, text: '운동하기' },
      { done: true, text: '공부하기' },
    ];
  }

  ngOnInit(): void {}

  toggleTodo(todo: any) {
    todo.done = !todo.done;
  }

  addTodo(text: string) {
    this.todos.push({
      done: false,
      text: text,
    });
  }
}
