import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticeCommomComponent } from './notice-commom.component';

describe('NoticeCommomComponent', () => {
  let component: NoticeCommomComponent;
  let fixture: ComponentFixture<NoticeCommomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoticeCommomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoticeCommomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
