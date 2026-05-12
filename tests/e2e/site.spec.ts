import { expect, test } from '@playwright/test'

test('homepage renders the funky package story and live lab', async ({ page }) => {
  const errors: string[] = []
  page.on('console', message => {
    if (message.type() === 'error') errors.push(message.text())
  })

  await page.goto('/')

  await expect(
    page.getByRole('heading', {
      name: /react image and background image fade without the jank/i
    })
  ).toBeVisible()
  await expect(page.getByText('npm install react-image-and-background-image-fade')).toBeVisible()
  await expect(page.getByTestId('fade-lab').first()).toBeVisible()
  await expect(page.locator('[data-status="loaded"]').first()).toBeVisible()

  await page.getByRole('button', { name: 'blur', exact: true }).first().click()
  await expect(page.locator('pre').filter({ hasText: 'placeholder="blur"' })).toBeVisible()

  expect(errors).toEqual([])
})

test('docs routes render and navigation works', async ({ page }) => {
  await page.goto('/docs/')
  await expect(page.getByRole('heading', { name: 'Overview' })).toBeVisible()

  await page
    .getByRole('navigation', { name: 'Documentation navigation' })
    .getByRole('link', { name: 'BackgroundImage', exact: true })
    .click()
  await expect(page).toHaveURL(/\/docs\/background-image\/$/)
  await expect(page.getByRole('heading', { name: 'BackgroundImage' })).toBeVisible()
  await expect(page.locator('pre').filter({ hasText: 'src="/images/home/header.jpg"' })).toBeVisible()
  await expect(page.locator('pre').filter({ hasText: 'fadeType="soft-reveal"' })).toBeVisible()
})

test('demo controls visibly affect output', async ({ page }) => {
  await page.goto('/demos/image/')

  await expect(page.getByRole('heading', { name: 'Image fade lab' })).toBeVisible()
  await page.getByRole('button', { name: 'color' }).click()
  await expect(page.getByText('placeholder="color"')).toBeVisible()
})

test('mobile viewport keeps navigation and hero readable', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 })
  await page.goto('/')

  await expect(page.getByRole('navigation', { name: 'Main navigation' })).toBeVisible()
  await expect(
    page.getByRole('heading', {
      name: /react image and background image fade without the jank/i
    })
  ).toBeVisible()
  await expect(
    page
      .getByRole('navigation', { name: 'Main navigation' })
      .getByRole('link', { name: 'Docs', exact: true })
  ).toBeVisible()
})
