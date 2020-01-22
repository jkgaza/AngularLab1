import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';




interface ITodo{
  completed: boolean;
  task:string;
}

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements ITodo {
  @Input() completed: boolean;
  @Input() task: string;

  @Output() delete = new EventEmitter();


  constructor() { }

  removeTask(){
    this.delete.emit();
  }


  completeTask() {
   this.completed = true;
  }

  ngOnInit() {

  }
}
