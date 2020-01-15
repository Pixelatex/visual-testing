describe("app", () => {
  beforeEach(async () => {
    await page.goto("http://localhost:3000");
  });
  it("should demonstrate this matcher`s usage", async () => {
    const image = await page.screenshot();
    expect(image).toMatchImageSnapshot();
  });
});
