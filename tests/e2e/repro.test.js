// @ts-check
const { test, expect } = require('@playwright/test');

test('test', async ({ page }) => {
    await page.goto('https://roar-swr-demo.web.app/');
    await page.getByRole('button', { name: 'Continue' }).click();
    await page.getByText('Press ANY KEY to continue').press('ArrowRight');
    await page.getByText('Press ANY KEY to continue').press('ArrowRight');
    await page.getByText('Press ANY KEY to practice').press('ArrowRight');

    const arrows = page.getByAltText('arrow-key')
    expect(arrows).toBeDefined()

});