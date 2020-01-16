import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { ToDoComponent } from './app.component';
import { TodoComponent } from './components/todo/todo.component';

@NgModule({
  declarations: [
    ToDoComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [ToDoComponent]
})
export class AppModule { }
