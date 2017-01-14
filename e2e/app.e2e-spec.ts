import { IgooChatPage } from './app.po';

describe('igoo-chat App', function() {
  let page: IgooChatPage;

  beforeEach(() => {
    page = new IgooChatPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
