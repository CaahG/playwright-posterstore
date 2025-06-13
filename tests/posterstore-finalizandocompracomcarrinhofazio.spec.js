/// @ts-check

const { test, expect } = require('@playwright/test');

test.describe('Finalização de compra com carrinho vazio', () => {

  test('Tentativa de compra com o carrinho vazio', async ({ page }) => {
    // Acessar o site
    await page.goto('https://poster-store.pages.dev/#');
    await page.locator('a[id="login-button"]').click();
    await page.locator('input[id="swal-username"]').fill('user1');
    await page.locator('input[id="swal-password"]').fill('pass1');
    await page.locator('button[class="swal2-confirm swal2-styled"]').click();
    await page.waitForSelector(':has-text("Logged in successfully")');
    await page.locator('button[class="swal2-confirm swal2-styled"]').click();
 

    // Tenta finalizar compra com carrinho vazio
    await page.locator('div[id="sticky-cart"]').click();
    await page.locator('button[class="btn btn-success"]').click();
    await page.waitForSelector(':has-text("Order Submitted")');
    await page.locator('button[class="swal2-confirm swal2-styled"]').click();
  });

});
