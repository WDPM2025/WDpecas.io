import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindMotorbikePartComponent } from './find-motorbike-part.component';

describe('FindMotorbikePartComponent', () => {
  let component: FindMotorbikePartComponent;
  let fixture: ComponentFixture<FindMotorbikePartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FindMotorbikePartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FindMotorbikePartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
