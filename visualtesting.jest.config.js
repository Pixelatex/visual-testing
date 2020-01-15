module.exports = {
  preset: "jest-puppeteer",
  testRegex: "\\.visualTest\\.js$",
  setupFilesAfterEnv: ["./src/setupTests.js"]
};
