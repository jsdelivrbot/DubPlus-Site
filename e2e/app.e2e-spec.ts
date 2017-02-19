import { Dubplus.Github.IoPage } from './app.po';

describe('dubplus.github.io App', () => {
  let page: Dubplus.Github.IoPage;

  beforeEach(() => {
    page = new Dubplus.Github.IoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
