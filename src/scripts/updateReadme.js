const fs = require('fs');

const README_FILE_PATH = 'README.md';
const IMAGE_FILE_NAME = process.env.IMAGE_FILE_NAME;

function updateReadme() {
  fs.readFile(README_FILE_PATH, 'utf8', (err, data) => {
    if (err) {
      console.error('Failed to read README file:', err);
      return;
    }

    const updatedData = data.replace(
      /!\[Demo Screenshot\]\(https:\/\/ci-cd-screenshot-pipeline.s3.eu-west-2.amazonaws.com\/.*\)/,
      `![Demo Screenshot](https://ci-cd-screenshot-pipeline.s3.eu-west-2.amazonaws.com/${IMAGE_FILE_NAME}.png)`
    );

    fs.writeFile(README_FILE_PATH, updatedData, 'utf8', (err) => {
      if (err) {
        console.error('Failed to update README file:', err);
      } else {
        console.log('README file updated successfully.');
      }
    });
  });
}

updateReadme();
