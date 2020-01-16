import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class ToDoComponent implements OnInit {
  @Input() completed: boolean;
  @Input() task: string;

  tasks = [
    { task: "Pet cat", completed: true },
    { task: "Clean bathroom", completed: false },
    { task: "Fold laundry", completed: false },
    { task: "Sweep kitchen", completed: true }
  ];

  constructor() {}

  ngOnInit() {}
}
