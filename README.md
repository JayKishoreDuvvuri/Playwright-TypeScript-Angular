### Playwright with TypeScript for Angular Frontend

An example project demonstrating automation of playwright tests using page object design pattern framework.

#### Application Under Test

We are using https://www.jetblue.com/ as the Application Under Test. This App is an **Angular** Frontend

- URL: https://www.jetblue.com/
- OS : macOS
- IDE : Visual Studio Code 

#### Scenario

```bash. 
Scenario:
User launches the application and fills in data on landing page
to get the search results of flights and navigates back to Landing page

Test Steps:
1. User opens the app and navigates to landing page
2. User fills in the "from" origin, "to" destination places and fills in the departure date
3. User clicks on the search flights button to see the search results
4. User verifies the search page and clicks on search page jetblue logo
5. User navigates back to the landing page

Testname: search.test.ts
```

#### Installation

Install the dependencies and devDependencies to run the test.

- Clone (OR) Download this repo as zip folder on to your local machine
- Navigate to project's directory on terminal and run the following commands:

Clone the repository

```bash
git clone https://github.com/JayKishoreDuvvuri/Playwright-TypeScript-Angular.git
```

Install dependencies

```bash
npm install
npx playwright install
```

#### Run application

Run tests on chrome

```bash
npm run test:chrome - For test on chrome browser
```

Run tests on firefox

```bash
npm run test:firefox - For test on firefox browser
```

Run tests in Parallel
 
```bash
npm run test:parallel  - For tests run parallel on chrome and firefox browsers
```

#### Playwright Test Report 

```bash
Test-Report : npm run test:report
```

#### Bitbucket

```bash
Repo: https://bitbucket.org/jaykishore96/playwright-typescript-angular/src/master/
Pipelines: https://bitbucket.org/jaykishore96/playwright-typescript-angular/pipelines/results/page/1
```
