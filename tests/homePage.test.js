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
        await expect(homePage.stackAdaptMarketingPlatform).toBeVisible();
    });
    await test.step('Verify Ivy AI Marketing Assistant option displays', async () => {
        await expect(homePage.ivyAiMarketingAssistant).toBeVisible();
    });
    await test.step('Verify Partner Program option displays', async () => {
        await expect(homePage.partnerProgram).toBeVisible();
    });
    await test.step('Verify Connected TV option displays', async () => {
        await expect(homePage.connectedTv).toBeVisible();
    });
    await test.step('Verify Digital Out-of-Home option displays', async () => {
        await expect(homePage.digitalOutOfHome).toBeVisible();
    });
    await test.step('Verify Email option displays', async () => {
        await expect(homePage.email).toBeVisible();
    });
    await test.step('Verify Audio option displays', async () => {
        await expect(homePage.audio).toBeVisible();
    });
    await test.step('Verify Video option displays', async () => {
        await expect(homePage.video).toBeVisible();
    });
    await test.step('Verify Native option displays', async () => {
        await expect(homePage.native).toBeVisible();
    });
    await test.step('Verify Display option displays', async () => {
        await expect(homePage.display).toBeVisible();
    });
    await test.step('Verify In-Game option displays', async () => {
        await expect(homePage.inGame).toBeVisible();
    });

})

test ('click Stack Adapt Marketing Platform option from platform dropdown and verify url is accurate', async ({ page }) => {
    const homePage = new HomePage(page);
    await test.step ('Navigate to homepage', async () => {
        await homePage.goto()
    });
    await test.step('Open platform menu', async () => {
        await homePage.openPlatformDropdown();
    });
    await test.step('Click StackAdapt Marketing Platform option and verify url is accurate', async () => {
        await homePage.clickStackAdaptMarketingPlatformOption();
        await expect(page).toHaveURL(/platform/);
    })
})

test ('click Ivy AI Marketing Assistant option from platform dropdown and verify url is accurate', async ({ page }) => {
    const homePage = new HomePage(page);
    await test.step ('Navigate to homepage', async () => {
        await homePage.goto()
    });
    await test.step('Open platform menu', async () => {
        await homePage.openPlatformDropdown();
    });
    await test.step('Click Ivy AI Marketing Assistant option and verify url is accurate', async () => {
        await homePage.clickIvyAiMarketingAssistantOption();
        await expect(page).toHaveURL(/ivy-ai-marketing-assistant/);
    })
})

test ('click Partner Program option from platform dropdown and verify url is accurate', async ({ page }) => {
    const homePage = new HomePage(page);
    await test.step ('Navigate to homepage', async () => {
        await homePage.goto()
    });
    await test.step('Open platform menu', async () => {
        await homePage.openPlatformDropdown();
    });
    await test.step('Click Partner Program option and verify url is accurate', async () => {
        await homePage.clickPartnerProgramOption();
        await expect(page).toHaveURL(/partner-program/);
    });
})

test ('click Connected TV option from platform dropdown and verify url is accurate', async ({ page }) => {
    const homePage = new HomePage(page);
    await test.step ('Navigate to homepage', async () => {
        await homePage.goto()
    });
    await test.step('Open platform menu', async () => {
        await homePage.openPlatformDropdown();
    });
    await test.step('Click Connected TV option and verify url is accurate', async () => {
        await homePage.clickConnectedTvOption()
        await expect(page).toHaveURL(/connected-tv-advertising/);
    });
})

test ('click Digital Out-of-Home option from platform dropdown and verify url is accurate', async ({ page }) => {
    const homePage = new HomePage(page);
    await test.step ('Navigate to homepage', async () => {
        await homePage.goto()
    });
    await test.step('Open platform menu', async () => {
        await homePage.openPlatformDropdown();
    });
    await test.step('Click Digital Out-of-Home option and verify url is accurate', async () => {
        await homePage.clickDigitalOutOfHomeOption()
        await expect(page).toHaveURL(/digital-out-of-home-advertising/);
    });
})

test ('click Email option from platform dropdown and verify url is accurate', async ({ page }) => {
    const homePage = new HomePage(page);
    await test.step ('Navigate to homepage', async () => {
        await homePage.goto()
    });
    await test.step('Open platform menu', async () => {
        await homePage.openPlatformDropdown();
    });
    await test.step('Click Email option and verify url is accurate', async () => {
        await homePage.clickEmailOption()
        await expect(page).toHaveURL(/email/);
    });
})

test ('click Audio option from platform dropdown and verify url is accurate', async ({ page }) => {
    const homePage = new HomePage(page);
    await test.step ('Navigate to homepage', async () => {
        await homePage.goto()
    });
    await test.step('Open platform menu', async () => {
        await homePage.openPlatformDropdown();
    });
    await test.step('Click Audio option and verify url is accurate', async () => {
        await homePage.clickAudioOption()
        await expect(page).toHaveURL(/programmatic-audio-advertising/);
    });
})

test.only ('click Video option from platform dropdown and verify url is accurate', async ({ page }) => {
    const homePage = new HomePage(page);
    await test.step ('Navigate to homepage', async () => {
        await homePage.goto()
    });
    await test.step('Open platform menu', async () => {
        await homePage.openPlatformDropdown();
    });
    await test.step('Click Video option and verify url is accurate', async () => {
        await homePage.clickVideoOption()
        await expect(page).toHaveURL(/video-advertising/);
    });
})

test.only ('click Native option from platform dropdown and verify url is accurate', async ({ page }) => {
    const homePage = new HomePage(page);
    await test.step ('Navigate to homepage', async () => {
        await homePage.goto()
    });
    await test.step('Open platform menu', async () => {
        await homePage.openPlatformDropdown();
    });
    await test.step('Click Native option and verify url is accurate', async () => {
        await homePage.clickNativeOption()
        await expect(page).toHaveURL(/native-advertising/);
    });
})

test ('click Display option from platform dropdown and verify url is accurate', async ({ page }) => {
    const homePage = new HomePage(page);
    await test.step ('Navigate to homepage', async () => {
        await homePage.goto()
    });
    await test.step('Open platform menu', async () => {
        await homePage.openPlatformDropdown();
    });
    await test.step('Click Display option and verify url is accurate', async () => {
        await homePage.clickDisplayOption()
        await expect(page).toHaveURL(/display-advertising/);
    });
})

test ('click In-Game option from platform dropdown and verify url is accurate', async ({ page }) => {
    const homePage = new HomePage(page);
    await test.step ('Navigate to homepage', async () => {
        await homePage.goto()
    });
    await test.step('Open platform menu', async () => {
        await homePage.openPlatformDropdown();
    });
    await test.step('Click In-Game option and verify url is accurate', async () => {
        await homePage.clickInGameOption()
        await expect(page).toHaveURL(/in-game-advertising/);
    });
})