import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortAuthorComponent } from './sort-author.component';

describe('SortAuthorComponent', () => {
  let component: SortAuthorComponent;
  let fixture: ComponentFixture<SortAuthorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SortAuthorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SortAuthorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
