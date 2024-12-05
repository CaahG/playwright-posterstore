// @ts-check

//realizando login inválido
const { test, expect } = require('@playwright/test');

test.describe('Login Spec', () => {

    test('Invalid login', async ({ page }) => {
        await page.goto('https://poster-store.pages.dev/#');
        await page.locator('a[id="login-button"]').click();
        await page.locator('input[id="swal-username"]').fill('user1');
        await page.locator('input[id="swal-password"]').fill('pass2');
        await page.locator('button[class="swal2-confirm swal2-styled"]').click();
        await page.waitForSelector(':has-text("Invalid username or password")');
      });
      
      test('Valid login and logout', async ({ page }) => {
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
 
//login invalido com sucesso , teste finalizado 

       test('Criando User', async ({ page }) => {
       await page.goto('https://poster-store.pages.dev/#');
       await page.locator('a[class="btn btn-primary btn-sm"]').click();
       await page.locator('input[id="swal-username"]').fill('lorelai');
       await page.locator('input[id="swal-password"]').fill('gilmore1');
      await page.locator('button[class="swal2-confirm swal2-styled"]').click();
      await page.waitForSelector(':has-text("User created successfully")');
      await page.locator('button[class="swal2-confirm swal2-styled"]').click();

     });

test('Criação de usuário com credenciais inválidas', async ({ page }) => {
  await page.goto('https://poster-store.pages.dev/#');
  await page.locator('a[class="btn btn-primary btn-sm"]').click();
  await page.locator('input[id="swal-username"]').fill('jackesqueleto');
  await page.locator('input[id="swal-password"]').fill('-');
  await page.locator('button[class="swal2-confirm swal2-styled"]').click();
  await page.waitForSelector(':has-text("User created successfully")');
  await page.locator('button[class="swal2-confirm swal2-styled"]').click();

});

//Criação de usuário com credenciais inválidas (nome comum e senha fraca)
