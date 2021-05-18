import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  getAppUsersElement(): Promise<boolean> {
      return element(by.tagName('app-users')).isPresent() as Promise<boolean>;
  }

  getNumberOfUsers(): Promise<number> {
      return element.all(by.css('[data-testid="userRow"]')).count() as Promise<number>;
  }

  getFilteredUsers(column, searchKey): Promise<number> {
      element(by.css('[data-testid="columnSelectBox"] option:nth-child('+column+')')).click();
      let searchInput = element(by.css('[data-testid="searchInput"]'));
      searchInput.sendKeys(searchKey);
      return element.all(by.css('[data-testid="userRow"]')).count() as Promise<number>;
  }
}
