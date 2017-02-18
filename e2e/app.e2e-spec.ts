import { GetmyticketPage } from './app.po';

describe('getmyticket App', function() {
  let page: GetmyticketPage;

  beforeEach(() => {
    page = new GetmyticketPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
