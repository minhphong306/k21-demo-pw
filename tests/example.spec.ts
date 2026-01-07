import { test, expect } from '@playwright/test';

test('@CASE_1', async ({ page }) => {
    console.log("Code from feat branch - case 1");
});


test('@CASE_2', async ({ page }) => {
  expect(1).toEqual(2);
  console.log("Code from feat branch - case 2");
});