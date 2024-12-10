// @ts-check

const {
    test,
    expect
} = require("@playwright/test");

test.describe("Adicionando categoria e produto ao carrinho", () => {
    
    test("adicionar categoria de produto Nature", async ({
        page
    }) => {
        // Removido o teste aninhado, pois não é permitido
        await page.goto('https://poster-store.pages.dev/#');
        await page.locator('a[id="login-button"]').click();
        await page.locator('input[id="swal-username"]').fill('user1');
        await page.locator('input[id="swal-password"]').fill('pass1');
        await page.locator('button[class="swal2-confirm swal2-styled"]').click();
        await page.waitForSelector(':has-text("Logged in successfully")');
        await page.locator('button[class="swal2-confirm swal2-styled"]').click();
        await page.locator('select[id="category-filter"]').selectOption('Nature');


        await page.waitForTimeout(5000);
    });

    test("adicionar produto ao carrinho", async ({
        page
    }) => {
        // Removido o teste aninhado, pois não é permitido
        await page.goto('https://poster-store.pages.dev/#');
        await page.locator('a[id="login-button"]').click();
        await page.locator('input[id="swal-username"]').fill('user1');
        await page.locator('input[id="swal-password"]').fill('pass1');
        await page.locator('button[class="swal2-confirm swal2-styled"]').click();
        await page.waitForSelector(':has-text("Logged in successfully")');
        await page.locator('button[class="swal2-confirm swal2-styled"]').click();
        await page.locator('select[id="category-filter"]').selectOption('Nature');

        //adicionando produto no carrinho e finalizando compra
        await page.locator('div[class="card-body p-4"]', {
            hasText: "Majestic Forest"
        }).locator('button[class="btn btn-primary btn-sm mt-4 w-full"]').click();
        await page.locator('div[id="sticky-cart"]').click();
        await page.locator('button[class="btn btn-success"]').click();
        await page.waitForSelector(':has-text("Order Submitted")');
        await page.locator('button[class="swal2-confirm swal2-styled"]').click();



        await page.waitForTimeout(5000);

    });

});