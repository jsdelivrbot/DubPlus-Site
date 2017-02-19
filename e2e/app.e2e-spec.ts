import { DubPlusSitePage } from './app.po';

describe('dubplus-site App', () => {
  let page: DubPlusSitePage;

  beforeEach(() => {
    page = new DubPlusSitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
