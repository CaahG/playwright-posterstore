/// @ts-check

const { test, expect } = require('@playwright/test');

test.describe('Verificando catálogo de categoria', () => {
  
    test('Realizando uma compra', async ({ page }) => {
    // Acessando o site
    await page.goto('https://poster-store.pages.dev/#');

    // Realizando login
    await page.locator('a[id="login-button"]').click();
    await page.locator('input[id="swal-username"]').fill('user1');
    await page.locator('input[id="swal-password"]').fill('pass1');
    await page.locator('button[class="swal2-confirm swal2-styled"]').click();
    await page.waitForSelector(':has-text("Logged in successfully")');

    await page.locator('button[class="btn btn-primary btn-sm mt-4 w-full"]', {
        hasText: "Abstract Vision",
      });
  
      // Abrindo detalhes do item 'Cubist Artwork'
      await page.locator('h3[class="card-title text-lg"]', { hasText: 'Cubist Artwork' });

      await page.locator("select[id='category-filter']").selectOption('Music');
      await page.locator("button[class='btn btn-primary btn-sm mt-4 w-full']", { hasText: 'Rock Legends'});
      await page.locator('button[class="btn btn-primary btn-sm mt-4 w-full"]', { hasText: 'Blues Legends'});
      
 
    });
  });