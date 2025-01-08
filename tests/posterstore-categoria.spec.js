// @ts-check

//realizando login inválido
const {
    test,
    expect
} = require('@playwright/test');

test.describe('Verificando cartalogo de categoria', () => {
    
    test('Realizando uma compra', async ({
        page
    }) => {


await page.goto('https://poster-store.pages.dev/#');
await page.locator('a[id="signup-button"]').click();
await page.locator('input[id="swal-username"]').fill('MickeyTestador_123_PlanetaMágico_DisneyMania_Aventuras_2025');
await page.locator('input[id="swal-password"]').fill('Pass123456@disneycarapraumcaramba');
await page.locator('button[class="swal2-confirm swal2-styled"]').click();
await page.waitForSelector(':has-text("User created successfully")');
await page.locator('select[id="category-filter"]').selectOption('Nature');
  //adicionando produto no carrinho e finalizando compra
  await page.locator('div[class="card-body p-4"]', {
    hasText: "Mountain Serenity"
}).locator('button[class="btn btn-primary btn-sm mt-4 w-full"]').click({
    timeout: 60000 // 60 segundos de timeout
});
await page.locator('div[id="sticky-cart"]').click();
await page.locator('button[class="btn btn-success"]').click();
await page.waitForSelector(':has-text("Order Submitted")');
await page.locator('button[class="swal2-confirm swal2-styled"]').click();



await page.waitForTimeout(5000);

});

});