import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { ToDoComponent } from './app.component';
import { TodoComponent } from './components/todo/todo.component';
import { SearchPipe } from './search.pipe';

@NgModule({
  declarations: [
    ToDoComponent,
    TodoComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [ToDoComponent]
})
export class AppModule { }
