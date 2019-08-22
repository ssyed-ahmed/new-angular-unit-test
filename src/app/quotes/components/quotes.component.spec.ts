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

  it('should use quoteList from the service', () => {
    const quoteService = fixture.debugElement.injector.get(QuoteService)
    fixture.detectChanges()
    expect(quoteService.getQuote()).toEqual(component.quoteList)
  })

  it('should create a new post', () => {
    component.quoteText = 'I love this test'
    fixture.detectChanges()
    const compiled = fixture.debugElement.nativeElement
    expect(compiled.innerHTML).toContain('I love this test')
  })

  it('should disable the button when textArea is empty', () => {
    fixture.detectChanges()
    const button = fixture.debugElement.query(By.css('button'))
    expect(button.nativeElement.disabled).toBeTruthy()
  })

  it('should enable the button when textArea is not empty', () => {
    component.quoteText = 'Test quote'
    fixture.detectChanges()
    const button = fixture.debugElement.query(By.css('button'))
    expect(button.nativeElement.disabled).toBeFalsy()
  })

  it('should remove post on card click', () => {
    component.quoteText = 'This is a fresh post'
    fixture.detectChanges()

    fixture.debugElement
      .query(By.css('.row'))
      .query(By.css('.card'))
      .triggerEventHandler('click', null)

    const compiled = fixture.debugElement.nativeElement
    expect(compiled.innerHTML).toContain('This is a fresh post')
  })

  it('should fetch data asynchronously', () => {
    const fakedFetchedList = [
      new QuoteModel('I love unit testing', 'Mon 4, 2018')
    ]

    const quoteService = fixture.debugElement.injector.get(QuoteService)
    let spy = spyOn(quoteService, 'fetchQuotesFromServer').and.returnValue(
      Promise.resolve(fakedFetchedList)
    )
    fixture.detectChanges()
    fixture.whenStable().then(() => {
      expect(component.fetchedList).toBe(fakedFetchedList)
    })
  })


});
