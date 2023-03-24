// @ts-check
const { test, expect } = require('@playwright/test')

test('Should have Kevin and Lucas in title', async ({ page }) => {
  // Expect a title "to contain" a substring.
  await page.goto('http://localhost:3000')
  await expect(page).toHaveTitle('Kevin and Lucas')
})
