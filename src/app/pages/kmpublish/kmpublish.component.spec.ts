import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KmpublishComponent } from './kmpublish.component';

describe('KmpublishComponent', () => {
  let component: KmpublishComponent;
  let fixture: ComponentFixture<KmpublishComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KmpublishComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KmpublishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
