const {test, expect} = require('@playwright/test');
const {HomePage} = require('../pages/homePage.js');

test('homepage header navigation buttons are visible', async ({ page }) => {
    const homePage = new HomePage(page);

    await test.step ('Navigate to homepage', async () => {
        await homePage.goto()
        await expect(page).toHaveTitle(/StackAdapt: The AI-Powered Marketing Platform/)
    });

    await test.step ('Verify header navigation buttons are visible', async () => {
        await expect(homePage.platformButton).toBeVisible();
        await expect(homePage.solutionsButton).toBeVisible();
        await expect(homePage.aboutUsButton).toBeVisible();
        await expect(homePage.resourcesButton).toBeVisible();
        await expect(homePage.loginButton).toBeVisible();
        await expect(homePage.requestDemoButton).toBeVisible();
        await expect(homePage.signupButton).toBeVisible();
    });
});