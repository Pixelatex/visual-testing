import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

// describe("Google", () => {
//   beforeAll(async () => {
//     await page.goto("https://google.com");
//   });

//   it('should display "google" text on page', async () => {
//     await expect(page).toMatch("google");
//   });
// });
