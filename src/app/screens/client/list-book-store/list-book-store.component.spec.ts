import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBookStoreComponent } from './list-book-store.component';

describe('ListBookStoreComponent', () => {
  let component: ListBookStoreComponent;
  let fixture: ComponentFixture<ListBookStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListBookStoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListBookStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
