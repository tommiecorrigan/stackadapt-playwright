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

test.only ('platform dropdown opens and displays options', async ({ page }) => {
    const homePage = new HomePage(page);
    const platformDropdownOptions = [
        { name: 'StackAdapt Marketing Platform', locator: homePage.stackAdaptMarketingPlatform },
        { name: 'Ivy AI Marketing Assistant', locator: homePage.ivyAiMarketingAssistant },
        { name: 'Partner Program', locator: homePage.partnerProgram },
        { name: 'Connected TV', locator: homePage.connectedTv },
        { name: 'Digital Out-of-Home', locator: homePage.digitalOutOfHome },
        { name: 'Email', locator: homePage.email },
        { name: 'Audio', locator: homePage.audio },
        { name: 'Video', locator: homePage.video },
        { name: 'Native', locator: homePage.native },
        { name: 'Display', locator: homePage.display },
        { name: 'In-Game', locator: homePage.inGame },
    ];
    await test.step ('Navigate to homepage', async () => {
        await homePage.goto()
    });
    await test.step('Open platform menu', async () => {
        await homePage.openPlatformDropdown();
    });
    await test.step('Verify all platform options are visible', async () => {
        for (const option of platformDropdownOptions) {
            await test.step(`Verify ${option.name} is visible`, async () => {
            await expect(option.locator).toBeVisible();
        });
        }
    });

});

test.describe('Platform dropdown navigation', () => {
    let homePage;

    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page);
        await homePage.goto();
        await homePage.openPlatformDropdown();
    });

    test ('click Stack Adapt Marketing Platform option from platform dropdown and verify url is accurate', async ({ page }) => {
        await test.step('verify Stack Adapt Marketing Platform navigation', async () => {
            await homePage.clickStackAdaptMarketingPlatformOption();
            await expect(page).toHaveURL(/platform/);
        })
    })

    test ('click Ivy AI Marketing Assistant option from platform dropdown and verify url is accurate', async ({ page }) => {
        await test.step('verify Ivy AI Marketing Assistant navigation ', async () => {
            await homePage.clickIvyAiMarketingAssistantOption();
            await expect(page).toHaveURL(/ivy-ai-marketing-assistant/);
        })
    })

    test ('click Partner Program option from platform dropdown and verify url is accurate', async ({ page }) => {
        await test.step('verify Partner Program navigation', async () => {
            await homePage.clickPartnerProgramOption();
            await expect(page).toHaveURL(/partner-program/);
        });
    })

    test ('click Connected TV option from platform dropdown and verify url is accurate', async ({ page }) => {
        await test.step('verify Connected TV navigation ', async () => {
            await homePage.clickConnectedTvOption();
            await expect(page).toHaveURL(/connected-tv-advertising/);
        });
    })

    test ('click Digital Out-of-Home option from platform dropdown and verify url is accurate', async ({ page }) => {
        await test.step('verify Digital Out-of-Home navigation', async () => {
            await homePage.clickDigitalOutOfHomeOption();
            await expect(page).toHaveURL(/digital-out-of-home-advertising/);
        });
    })

    test ('click Email option from platform dropdown and verify url is accurate', async ({ page }) => {
        await test.step('verify Email navigation', async () => {
            await homePage.clickEmailOption();
            await expect(page).toHaveURL(/email/);
        });
    })

    test ('click Audio option from platform dropdown and verify url is accurate', async ({ page }) => {
        await test.step('verify Audio navigation', async () => {
            await homePage.clickAudioOption();
            await expect(page).toHaveURL(/programmatic-audio-advertising/);
        });
    })

    test ('click Video option from platform dropdown and verify url is accurate', async ({ page }) => {
        await test.step('verify Video navigation', async () => {
            await homePage.clickVideoOption();
            await expect(page).toHaveURL(/video-advertising/);
        });
    })

    test ('click Native option from platform dropdown and verify url is accurate', async ({ page }) => {
        await test.step('verify Native navigation', async () => {
            await homePage.clickNativeOption();
            await expect(page).toHaveURL(/native-advertising/);
        });
    })

    test ('click Display option from platform dropdown and verify url is accurate', async ({ page }) => {
        await test.step('verify Display navigation', async () => {
            await homePage.clickDisplayOption();
            await expect(page).toHaveURL(/display-advertising/);
        });
    })

    test ('click In-Game option from platform dropdown and verify url is accurate', async ({ page }) => {
        await test.step('verify In-Game navigation', async () => {
            await homePage.clickInGameOption();
            await expect(page).toHaveURL(/in-game-advertising/);
        });
    })
})
