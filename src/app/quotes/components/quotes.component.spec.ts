import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { QuotesComponent } from './quotes.component';
import { QuoteService } from '../service/Quote.service';
import { QuoteModel } from '../model/QuoteModel';
import { FormsModule } from '@angular/forms';

describe('QuotesComponent', () => {
  let component: QuotesComponent;
  let fixture: ComponentFixture<QuotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [ QuotesComponent ]
    })
    // .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotesComponent);
    component = fixture.debugElement.componentInstance;
  });

  it('should create Quotes component', () => {
    expect(component).toBeTruthy();
  });
});
