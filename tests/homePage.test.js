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

test ('platform dropdown opens and displays options', async ({ page }) => {
    const homePage = new HomePage(page);
    await test.step ('Navigate to homepage', async () => {
        await homePage.goto()
    });
    await test.step('Open platform menu', async () => {
        await homePage.openPlatformDropdown();
    });
    await test.step('Verify StackAdapt Marketing Platform option displays', async () => {
        await expect(homePage.stackAdaptMarketingPlatformOption).toBeVisible();
    });
    await test.step('Click StackAdapt Marketing Platform option and verify url is accurate', async () => {
        await homePage.clickStackAdaptMarketingPlatformOption();
        await homePage.verifyStackAdaptMarketingPlatformOptionUrl();
    })

})