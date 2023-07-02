import { toMatchImageSnapshot } from 'jest-image-snapshot';
import puppeteer from 'puppeteer';
// import image from './assets/screenshots/original.png';

expect.extend({ toMatchImageSnapshot });

it('renders correctly', async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:3000');
  const image = await page.screenshot();

  expect(image).toMatchImageSnapshot({
    storeReceivedOnFailure: true,
    customSnapshotsDir: 'src/assets/screenshots',
    customDiffDir: 'src/assets/screenshots',
    customReceivedDir: 'src/assets/screenshots'
  });
},50000);
