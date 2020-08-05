import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookDetailviewComponent } from './book-detailview.component';

describe('BookDetailviewComponent', () => {
  let component: BookDetailviewComponent;
  let fixture: ComponentFixture<BookDetailviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookDetailviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookDetailviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
