const path = require("path");

describe("app", () => {
  //   describe("Google", () => {
  //     beforeAll(async () => {
  //       await page.goto("https://google.com");
  //     });

  //     it('should display "google" text on page', async () => {
  //       await expect(page).toMatch("google");
  //     });
  //   });
  beforeEach(async () => {
    await page.goto("http://localhost:3000");
  });
  it("should demonstrate this matcher`s usage", async () => {
    const image = await page.screenshot();
    expect(image).toMatchImageSnapshot();
  });

  //   it("should display a react logo", async () => {
  //     await expect(page).toMatch("React");
  //   });

  //   it('should match a button with a "Learn react" text inside', async () => {
  //     await expect(page).toMatchElement(".App-link", { text: "Learn react" });
  //   });

  //   it('should match a input with a "textInput" name then fill it with text', async () => {
  //     await expect(page).toFill('input[name="textInput"]', "James");
  //   });

  //   it('should match a form with a "myForm" name then fill its controls', async () => {
  //     await expect(page).toFillForm('form[name="testForm"]', {
  //       testOne: "James",
  //       testTwo: "Bond"
  //     });
  //   });

  //   it('should match a select with a "testSelect" name then select the specified option', async () => {
  //     await expect(page).toSelect('select[name="testSelect"]', "Second Value");
  //   });

  //   it('should match a File Input with a "App-inputFile" class then fill it with a local file', async () => {
  //     await expect(page).toUploadFile(
  //       ".App-inputFile",
  //       path.join(__dirname, "jest.config.js")
  //     );
  //   });
});
