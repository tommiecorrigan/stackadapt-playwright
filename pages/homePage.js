const { test, expect } = require('@playwright/test');
class HomePage {
    constructor(page) {
        this.page = page;
        this.header = page.getByRole('banner');
        //header navigation buttons
        this.platformButton = page.getByRole('button', {name: /platform/i});
        this.solutionsButton = page.getByRole('button', {name: /solutions/i});
        this.aboutUsButton = page.getByRole('button', {name: /about us/i});
        this.resourcesButton = page.getByRole('button', {name: /resources/i});
        this.loginButton = page.getByRole('link', {name: /log in/i});
        this.requestDemoButton = this.header.getByRole('link', {name: /request a demo/i});
        this.signupButton = this.header.getByRole('link', {name: /sign up/i});
        //platform dropdown options
        this.stackAdaptMarketingPlatform = page.locator('#submenu-toggle-6-panel').getByRole('link', { name: /stackadapt marketing platform/i });
        this.ivyAiMarketingAssistant = page.locator('#submenu-toggle-6-panel').getByRole('link', { name: /ivy™ ai marketing assistant/i });
        this.partnerProgram = page.locator('#submenu-toggle-6-panel').getByRole('link', { name: /partner program/i });
        this.connectedTv = page.locator('#submenu-toggle-6-panel').getByRole('link', { name: /connected tv/i });
        this.digitalOutOfHome = page.locator('#submenu-toggle-6-panel').getByRole('link', { name: /digital out-of-home/i });
        this.email = page.locator('#submenu-toggle-6-panel').getByRole('link', { name: /email/i });
        this.audio = page.locator('#submenu-toggle-6-panel').getByRole('link', { name: /audio/i });
        this.video = page.locator('#submenu-toggle-6-panel').getByRole('link', { name: /video/i });
        this.native = page.locator('#submenu-toggle-6-panel').getByRole('link', { name: /native/i });
        this.display = page.locator('#submenu-toggle-6-panel').getByRole('link', { name: /display/i });
        this.inGame = page.locator('#submenu-toggle-6-panel').getByRole('link', { name: /in-game/i });


    }
    async goto() {
        await this.page.goto('https://stackadapt.com');
    }
    async openPlatformDropdown() {
        await this.platformButton.click();
        await expect(this.stackAdaptMarketingPlatform).toBeVisible();
    }
    async clickStackAdaptMarketingPlatformOption() {
        await this.stackAdaptMarketingPlatform.click();
    }
    async clickIvyAiMarketingAssistantOption() {
        await this.ivyAiMarketingAssistant.click();
    }
    async clickPartnerProgramOption() {
        await this.partnerProgram.click();
    }
    async clickConnectedTvOption() {
        await this.connectedTv.click();
    }
    async clickDigitalOutOfHomeOption() {
        await this.digitalOutOfHome.click();
    }
    async clickEmailOption() {
        await this.email.click();
    }
    async clickAudioOption() {
        await this.audio.click();
    }
    async clickVideoOption() {
        await this.video.click();
    }
    async clickNativeOption() {
        await this.native.click();
    }
    async clickDisplayOption() {
        await this.display.click();
    }
    async clickInGameOption() {
        await this.inGame.click();
    }


}
module.exports = {HomePage};