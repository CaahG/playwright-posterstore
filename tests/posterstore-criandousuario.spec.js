// @ts-check

//realizando login inválido
const {
    test,
    expect
} = require('@playwright/test');

test.describe('Criando usuário com 70 caractere', () => {
    
    test('Realizando uma compra', async ({
        page
    }) => {


await page.goto('https://poster-store.pages.dev/#');
await page.locator('a[id="signup-button"]').click();
await page.locator('input[id="swal-username"]').fill('MickeyTestador_123_PlanetaMágico_DisneyMania_Aventuras_2025');
await page.locator('input[id="swal-password"]').fill('Pass123456@disneycarapraumcaramba');
await page.locator('button[class="swal2-confirm swal2-styled"]').click();
await page.waitForSelector(':has-text("User created successfully")');


});

});