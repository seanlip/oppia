import {ComponentFixture, TestBed} from '@angular/core/testing';

import {LanguageBannerComponent} from './language-banner.component';

describe('LanguageBannerComponent', () => {
  let component: LanguageBannerComponent;
  let fixture: ComponentFixture<LanguageBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LanguageBannerComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LanguageBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
