import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticeRansomwareComponent } from './notice-ransomware.component';

describe('NoticeRansomwareComponent', () => {
  let component: NoticeRansomwareComponent;
  let fixture: ComponentFixture<NoticeRansomwareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoticeRansomwareComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoticeRansomwareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
