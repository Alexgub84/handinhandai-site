import { test, expect, type Page } from '@playwright/test';

async function fillValidForm(page: Page) {
  await page.fill('#firstName', 'John');
  await page.fill('#lastName', 'Doe');
  await page.fill('#email', 'john.doe@example.com');
  await page.fill('#phone', '0501234567');
  await page.selectOption('#companyType', 'Law Firm');
  await page.selectOption('#service', 'AI Consulting');
}

test.describe('Contact Form', () => {
  test.describe('Successful Submission', () => {
    test('submits form successfully and shows success message', async ({ context, page }) => {
      // Intercept at context level for cross-origin requests
      await context.route('**/hook.eu1.make.com/**', async (route) => {
        await route.fulfill({ status: 200, body: 'Accepted' });
      });

      await page.goto('/contact');
      await fillValidForm(page);
      await page.click('#submit-button');

      await expect(page.locator('#success-message')).toBeVisible({ timeout: 10000 });
      await expect(page.locator('#contact-form')).toBeHidden();
    });

    test('shows loading state while submitting', async ({ context, page }) => {
      await context.route('**/hook.eu1.make.com/**', async (route) => {
        await new Promise((resolve) => setTimeout(resolve, 500));
        await route.fulfill({ status: 200, body: 'OK' });
      });

      await page.goto('/contact');
      await fillValidForm(page);
      
      const submitPromise = page.click('#submit-button');
      
      await expect(page.locator('#submit-button')).toBeDisabled({ timeout: 1000 });
      await expect(page.locator('#submit-loading')).toBeVisible();
      
      await submitPromise;
    });
  });

  test.describe('Failed Submission', () => {
    test('shows error message when webhook returns error status', async ({ context, page }) => {
      await context.route('**/hook.eu1.make.com/**', async (route) => {
        await route.fulfill({ status: 500, body: 'Internal Server Error' });
      });

      await page.goto('/contact');
      await fillValidForm(page);
      await page.click('#submit-button');

      await expect(page.locator('#error-message')).toBeVisible({ timeout: 10000 });
      await expect(page.locator('#contact-form')).toBeHidden();
    });

    test('shows error message when network fails', async ({ context, page }) => {
      await context.route('**/hook.eu1.make.com/**', async (route) => {
        await route.abort('failed');
      });

      await page.goto('/contact');
      await fillValidForm(page);
      await page.click('#submit-button');

      await expect(page.locator('#error-message')).toBeVisible({ timeout: 10000 });
    });

    test('try again button resets form from error state', async ({ context, page }) => {
      await context.route('**/hook.eu1.make.com/**', async (route) => {
        await route.fulfill({ status: 500, body: 'Error' });
      });

      await page.goto('/contact');
      await fillValidForm(page);
      await page.click('#submit-button');
      await expect(page.locator('#error-message')).toBeVisible({ timeout: 10000 });

      await page.click('#try-again-button');

      await expect(page.locator('#contact-form')).toBeVisible();
      await expect(page.locator('#error-message')).toBeHidden();
      await expect(page.locator('#firstName')).toHaveValue('');
    });
  });

  test.describe('Validation Errors', () => {
    test('shows validation errors when submitting empty form', async ({ page }) => {
      await page.goto('/contact');
      await page.click('#submit-button');

      await expect(page.locator('#firstName')).toHaveClass(/border-red-500/);
      await expect(page.locator('#lastName')).toHaveClass(/border-red-500/);
      await expect(page.locator('#email')).toHaveClass(/border-red-500/);
      await expect(page.locator('#phone')).toHaveClass(/border-red-500/);
    });

    test('shows error for invalid email format', async ({ page }) => {
      await page.goto('/contact');
      await page.fill('#email', 'invalid-email');
      await page.click('#submit-button');

      await expect(page.locator('#email')).toHaveClass(/border-red-500/);
    });

    test('clears error when field is corrected', async ({ page }) => {
      await page.goto('/contact');
      await page.click('#submit-button');
      await expect(page.locator('#firstName')).toHaveClass(/border-red-500/);

      await page.fill('#firstName', 'John');

      await expect(page.locator('#firstName')).not.toHaveClass(/border-red-500/);
    });

    test('does not submit form when validation fails', async ({ context, page }) => {
      let webhookCalled = false;
      await context.route('**/hook.eu1.make.com/**', async (route) => {
        webhookCalled = true;
        await route.fulfill({ status: 200, body: 'OK' });
      });

      await page.goto('/contact');
      await page.click('#submit-button');

      await page.waitForTimeout(500);
      expect(webhookCalled).toBe(false);
    });
  });

  test.describe('Company Type Other Field', () => {
    test('shows "Other" input when Other is selected', async ({ page }) => {
      await page.goto('/contact');
      await expect(page.locator('#companyTypeOtherWrapper')).toBeHidden();

      await page.selectOption('#companyType', 'Other');

      await expect(page.locator('#companyTypeOtherWrapper')).toBeVisible();
    });

    test('hides "Other" input when different option is selected', async ({ page }) => {
      await page.goto('/contact');
      await page.selectOption('#companyType', 'Other');
      await expect(page.locator('#companyTypeOtherWrapper')).toBeVisible();

      await page.selectOption('#companyType', 'Law Firm');

      await expect(page.locator('#companyTypeOtherWrapper')).toBeHidden();
    });

    test('requires "Other" input when Other is selected', async ({ page }) => {
      await page.goto('/contact');
      await page.fill('#firstName', 'John');
      await page.fill('#lastName', 'Doe');
      await page.fill('#email', 'john@example.com');
      await page.fill('#phone', '0501234567');
      await page.selectOption('#companyType', 'Other');
      await page.selectOption('#service', 'AI Consulting');

      await page.click('#submit-button');

      await expect(page.locator('#companyTypeOther')).toHaveClass(/border-red-500/);
    });

    test('submits successfully with Other company type filled', async ({ context, page }) => {
      await context.route('**/hook.eu1.make.com/**', async (route) => {
        const postData = JSON.parse(route.request().postData() || '{}');
        expect(postData.company_type).toBe('Tech Startup');
        await route.fulfill({ status: 200, body: 'OK' });
      });

      await page.goto('/contact');
      await page.fill('#firstName', 'John');
      await page.fill('#lastName', 'Doe');
      await page.fill('#email', 'john@example.com');
      await page.fill('#phone', '0501234567');
      await page.selectOption('#companyType', 'Other');
      await page.fill('#companyTypeOther', 'Tech Startup');
      await page.selectOption('#service', 'AI Consulting');

      await page.click('#submit-button');

      await expect(page.locator('#success-message')).toBeVisible({ timeout: 10000 });
    });
  });
});
