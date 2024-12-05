// @ts-check

//realizando login inválido
const { test, expect } = require('@playwright/test');

test.describe('Login Spec', () => {

    test('login invalido', async ({ page }) => {
        await page.goto('https://poster-store.pages.dev/#');
        await page.locator('a[id="login-button"]').click();
        await page.locator('input[id="swal-username"]').fill('user1');
        await page.locator('input[id="swal-password"]').fill('pass2');
        await page.locator('button[class="swal2-confirm swal2-styled"]').click();
        await page.waitForSelector(':has-text("Invalid username or password")');
      });
      
      test('login e logout invalido', async ({ page }) => {
        await page.goto('https://poster-store.pages.dev/#');
      
        await page.locator('a[id="login-button"]').click();
        await page.locator('input[id="swal-username" ]').fill('user1');
        await page.locator('input[id="swal-password"]').fill('pass1');
        await page.locator('button[class="swal2-confirm swal2-styled"]').click();
        await page.waitForSelector(':has-text("Logged in successfully")');
        await page.locator('button[class="swal2-confirm swal2-styled"]').click();
        await page.locator('a[class="btn btn-outline btn-sm"]').click();
        await page.waitForSelector(':has-text("Logged out successfully")');
        await page.locator('button[class="swal2-confirm swal2-styled"]').click();
      });

});
 

      