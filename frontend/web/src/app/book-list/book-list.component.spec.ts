import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleListComponent } from './book-list.component';

describe('BookListComponent', () => {
  let component: PeopleListComponent;
  let fixture: ComponentFixture<PeopleListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PeopleListComponent]
    });
    fixture = TestBed.createComponent(PeopleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
