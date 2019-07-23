import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LikePetComponent } from './like-pet.component';

describe('LikePetComponent', () => {
  let component: LikePetComponent;
  let fixture: ComponentFixture<LikePetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LikePetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LikePetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
