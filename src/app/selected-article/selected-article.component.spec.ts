import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedArticleComponent } from './selected-article.component';

describe('SelectedArticleComponent', () => {
  let component: SelectedArticleComponent;
  let fixture: ComponentFixture<SelectedArticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectedArticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
