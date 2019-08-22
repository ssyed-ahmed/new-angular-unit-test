import { QuoteService } from './Quote.service';

describe('QuoteService', () => {
    let service: QuoteService;

    beforeEach(() => {
        service = new QuoteService()
    })

    it('should create a post in an array', () => {
        const quoteText = 'This is my first post'
        service.addNewQuote(quoteText)
        expect(service.quoteList.length).toBeGreaterThanOrEqual(1)
    })

    it('should remove a created post from an array of posts', () => {
        service.addNewQuote('This is my first post')
        service.removeQuote(0)
        expect(service.quoteList.length).toBeLessThan(1)
    })
})