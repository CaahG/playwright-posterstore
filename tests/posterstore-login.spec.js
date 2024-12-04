// @ts-check
const { test, expect } = require('@playwright/test');

test('execute a valid login', async ({ page }) => {
  await page.goto('https://poster-store.pages.dev/#');

  await page.locator('a[id="login-button"]').click();
  await page.locator('input[id="swal-username" ]').fill('user1');
  await page.locator('input[id="swal-password"]').fill('pass1');
  await page.locator('button[class="swal2-confirm swal2-styled"]').click();
  await page.waitForSelector(':has-text("Logged in successfully")');

});

