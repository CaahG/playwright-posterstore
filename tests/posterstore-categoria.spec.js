// @ts-check

const { test, expect } = require('@playwright/test');

test.describe('Verificando catálogo de categoria', () => {

    test('Realizando uma compra', async ({ page }) => {

        await page.goto('https://poster-store.pages.dev/#');
        
        await page.locator('a[id="signup-button"]').click();
        await page.locator('input[id="swal-username"]').fill('MickeyTestador_123_PlanetaMágico_DisneyMania_Aventuras_2025');
        await page.locator('input[id="swal-password"]').fill('Pass123456@disneycarapraumcaramba');
        await page.locator('button[class="swal2-confirm swal2-styled"]').click();

        await page.waitForSelector(':has-text("User created successfully")');
        
        // Filtrando por categoria 'Nature' 
        await page.locator('select[id="category-filter"]').selectOption('Nature');

        //adicionando produto no carrinho e finalizando compra
        await page.locator('div[class="card-body p-4"]', {
            hasText: "Majestic Forest"
        }).locator('button[class="btn btn-primary btn-sm mt-4 w-full"]').click({force: true}); //clicaando  no botão mesmo que ele não esteja visível
// Aumentar o tempo de espera para o clique
        await page.locator('div[id="sticky-cart"]').click({ timeout: 60000 });  // 60 segundos
        await page.locator('button[class="btn btn-success"]').click();
        await page.locator('button[class="swal2-confirm swal2-styled"]').click();
        await page.locator('#cart-modal a.btn', { hasText: 'Close' }).click();


        
        // Mudando para a categoria 'Art' 
        await page.locator('select[id="category-filter"]').selectOption('Art');
        await page.locator('div[class="card-body p-4"]', { 
            hasText: "Abstract Vision" 
        }).locator('button[class="btn btn-primary btn-sm mt-4 w-full"]').click();

        await page.waitForTimeout(5000);

    });

});
