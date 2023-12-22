import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouvelleTacheComponent } from './nouvelle-tache.component';

describe('NouvelleTacheComponent', () => {
  let component: NouvelleTacheComponent;
  let fixture: ComponentFixture<NouvelleTacheComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NouvelleTacheComponent]
    });
    fixture = TestBed.createComponent(NouvelleTacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
