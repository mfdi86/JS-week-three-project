import { JsWeekThreeProjectPage } from './app.po';

describe('js-week-three-project App', () => {
  let page: JsWeekThreeProjectPage;

  beforeEach(() => {
    page = new JsWeekThreeProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
