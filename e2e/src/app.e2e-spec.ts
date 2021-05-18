import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;
  let columns = {
    'name': 1,
    'username': 2,
    'email': 3,
    'phone': 4,
    'website': 5,      
  };

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display app-users component', () => {
    page.navigateTo();
    expect(page.getAppUsersElement()).toEqual(true);
  });

  it('should get the number of users', () => {
    page.navigateTo();
    expect(page.getNumberOfUsers()).toEqual(10);
  });

  it('should search users based on Name with value "ervin" and return 1 user', () => {
    page.navigateTo();
    expect(page.getFilteredUsers(columns.name, 'ervin')).toEqual(1);
  });

  it('should search users based on Username with value "ka" and return 2 users', () => {
    page.navigateTo();
    expect(page.getFilteredUsers(columns.username, 'ka')).toEqual(2);
  });

  it('should search users based on Email with value "Nathan@yesenia.net" and return 1 user', () => {
    page.navigateTo();
    expect(page.getFilteredUsers(columns.email, 'Nathan@yesenia.net')).toEqual(1);
  });

  it('should search users based on Phone with value "1-" and return 3 users', () => {
    page.navigateTo();
    expect(page.getFilteredUsers(columns.phone, '1-')).toEqual(3);
  });

  it('should search users based on Website with value "ola.org" and return 1 user', () => {
    page.navigateTo();
    expect(page.getFilteredUsers(columns.website, 'ola.org')).toEqual(1);
  });

  it('should search users based on Website with value "xyz.com" and return 0 user', () => {
    page.navigateTo();
    expect(page.getFilteredUsers(columns.website, 'xyz.com')).toEqual(0);
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
