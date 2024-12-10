// @ts-check

//realizando login inválido
const {
    test,
    expect
} = require('@playwright/test');

test.describe('criação de usuário', () => {
    //login invalido com sucesso , teste finalizado 
    test('Criando User', async ({
        page
    }) => {
        await page.goto('https://poster-store.pages.dev/#');
        await page.locator('a[class="btn btn-primary btn-sm"]').click();
        await page.locator('input[id="swal-username"]').fill('lorelai');
        await page.locator('input[id="swal-password"]').fill('gilmore1');
        await page.locator('button[class="swal2-confirm swal2-styled"]').click();
        await page.waitForSelector(':has-text("User created successfully")');
        await page.locator('button[class="swal2-confirm swal2-styled"]').click();

    });

    test('Criação de usuário com credenciais inválidas', async ({
        page
    }) => {
        await page.goto('https://poster-store.pages.dev/#');
        await page.locator('a[class="btn btn-primary btn-sm"]').click();
        await page.locator('input[id="swal-username"]').fill('jackesqueleto');
        await page.locator('input[id="swal-password"]').fill('-');
        await page.locator('button[class="swal2-confirm swal2-styled"]').click();
        await page.waitForSelector(':has-text("User created successfully")');
        await page.locator('button[class="swal2-confirm swal2-styled"]').click();
    });
});

