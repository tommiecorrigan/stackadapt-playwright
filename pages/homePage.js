class HomePage {
    constructor(page) {
        this.page = page;
        this.header = page.getByRole('banner');

        this.platformButton = page.getByRole('button', {name: /platform/i});
        this.solutionsButton = page.getByRole('button', {name: /solutions/i});
        this.aboutUsButton = page.getByRole('button', {name: /about us/i});
        this.resourcesButton = page.getByRole('button', {name: /resources/i});
        this.loginButton = page.getByRole('link', {name: /log in/i});
        this.requestDemoButton = this.header.getByRole('link', {name: /request a demo/i});
        this.signupButton = this.header.getByRole('link', {name: /sign up/i});

    }
    async goto() {
        await this.page.goto('https://www.stackadapt.com/');
    }


}
module.exports = {HomePage};