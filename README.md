# CI/CD Screenshot Pipeline

A very basic ci/cd screenshot pipeline, built using ![React JS](https://react.dev/),![Github Actions](https://github.com/features/actions), ![Puppeteer](https://pptr.dev/) and ![jest-image-snapshot](https://github.com/americanexpress/jest-image-snapshot).

# How it works
Whenever there are new changes to the code and a new commit is pushed into the repo. GitHub CI/CD workflow is triggered and test runs for the app using `npm test`.
During the test, a screenshot of the homepage is generated and uploaded to S3, a linked for which is already present in the readme file.

## Latest Homepage Screenshot
![Demo Screenshot](https://ci-cd-screenshot-pipeline.s3.eu-west-2.amazonaws.com/screenshot.png)
