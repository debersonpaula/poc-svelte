import { test, expect } from "@playwright/test";

test("homepage", async ({ page }) => {
  await page.goto("http://localhost:5000/");
  const main = page.locator("main");
  expect(await main.textContent()).toContain("HOME");
});

test("about", async ({ page }) => {
  await page.goto("http://localhost:5000/");
  const links = page.locator('a[href="/about"]').first();
  await links.click();
  const main = page.locator("main");
  expect(await main.textContent()).toContain("ABOUT");
});
