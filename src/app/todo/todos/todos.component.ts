import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  newText: string = '';
  todos!: {
    done: boolean;
    text: string;
  }[];

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

  addTodo(newText: string) {
    this.todos.push({
      done: false,
      text: newText,
    });

    this.newText = '';
  }
}
