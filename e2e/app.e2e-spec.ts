import { Angular4Select2Page } from './app.po';

describe('angular4-select2 App', () => {
  let page: Angular4Select2Page;

  beforeEach(() => {
    page = new Angular4Select2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
