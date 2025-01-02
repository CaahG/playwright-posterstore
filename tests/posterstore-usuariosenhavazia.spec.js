// @ts-check

//realizando login inválido
const {
    test,
    expect
} = require('@playwright/test');

test.describe('Criando usuário senha vazia ou inválida', () => {
    
    test('Realizando uma compra', async ({
        page
    }) => {

        await page.goto('https://poster-store.pages.dev/#');
        await page.locator('a[id="signup-button"]').click();
        await page.locator('input[id="swal-username"]').fill('');
        await page.locator('input[id="swal-password"]').fill('');
        await page.locator('button[class="swal2-confirm swal2-styled"]').click();
        await page.waitForSelector(':has-text("Error")');
    });
    });

    //teste deu error com sucesso , site ta bugado pois é aceito com a mensagem de sucesso 