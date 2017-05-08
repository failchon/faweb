import { FaPage } from './app.po';

describe('fa App', () => {
  let page: FaPage;

  beforeEach(() => {
    page = new FaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
