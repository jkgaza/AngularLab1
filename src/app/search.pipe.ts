import { Pipe, PipeTransform } from "@angular/core";
import { ITodo } from './components/todo/todo.component';

@Pipe({
  name: "search"
})
export class SearchPipe implements PipeTransform {
  transform(todos: ITodo[], filterText: string): any {
    const newTodos = todos.filter(todo => {
      if (filterText) {
        return todo.task.toLowerCase().includes(filterText.toLowerCase());
      } else {
        return true;
      }
    });
    return newTodos;
  }
}
