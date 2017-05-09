import { Ng4CoursePage } from './app.po';

describe('ng4-course App', () => {
  let page: Ng4CoursePage;

  beforeEach(() => {
    page = new Ng4CoursePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
