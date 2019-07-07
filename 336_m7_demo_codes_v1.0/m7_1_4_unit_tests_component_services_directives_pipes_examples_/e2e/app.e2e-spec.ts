import { TestprojectPage } from './app.po';

describe('testproject App', () => {
  let page: TestprojectPage;

  beforeEach(() => {
    page = new TestprojectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
