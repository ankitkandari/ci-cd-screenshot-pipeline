import { toMatchImageSnapshot } from 'jest-image-snapshot';
import puppeteer from 'puppeteer';


expect.extend({ toMatchImageSnapshot });

it('renders correctly', async () => {

  const imageFileName = `${process.env.IMAGE_FILE_NAME}`;

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:3000');
  const image = await page.screenshot();
  await browser.close();
  expect(image).toMatchImageSnapshot({
    storeReceivedOnFailure: true,
    customSnapshotsDir: `src/assets/screenshots`,
    customDiffDir: 'src/assets/screenshots',
    customReceivedDir: 'src/assets/screenshots',
    failureThresholdType: 'percent',
    failureThreshold: 1,
    updatePassedSnapshot: true,
    customSnapshotIdentifier:`${imageFileName}`
  });
}, 50000);
