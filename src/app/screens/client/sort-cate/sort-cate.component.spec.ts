import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortCateComponent } from './sort-cate.component';

describe('SortCateComponent', () => {
  let component: SortCateComponent;
  let fixture: ComponentFixture<SortCateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SortCateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SortCateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
