import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KmunpublishComponent } from './kmunpublish.component';

describe('KmunpublishComponent', () => {
  let component: KmunpublishComponent;
  let fixture: ComponentFixture<KmunpublishComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KmunpublishComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KmunpublishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
