import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ToDoComponent } from './app.component';

describe('ToDoComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        ToDoComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(ToDoComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'toDo'`, () => {
    const fixture = TestBed.createComponent(ToDoComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('toDo');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(ToDoComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('toDo app is running!');
  });
});
