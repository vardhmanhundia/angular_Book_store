import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorDetailviewComponent } from './author-detailview.component';

describe('AuthorDetailviewComponent', () => {
  let component: AuthorDetailviewComponent;
  let fixture: ComponentFixture<AuthorDetailviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthorDetailviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorDetailviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
