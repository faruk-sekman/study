import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemAddComponent } from './item-add.component';

describe('AddItemComponent', () => {
  let component: ItemAddComponent;
  let fixture: ComponentFixture<ItemAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
