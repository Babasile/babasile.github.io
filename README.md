# My resume

[![Build and Deploy](https://github.com/Babasile/babasile.github.io/actions/workflows/build.yml/badge.svg)](https://github.com/Babasile/babasile.github.io/actions/workflows/build.yml)
[![GitHub release (latest by date)](https://img.shields.io/github/v/release/Babasile/babasile.github.io?color=brightgreen&label=Release)](https://github.com/Babasile/babasile.github.io/releases)
[![CodeQL Analysis](https://github.com/Babasile/babasile.github.io/actions/workflows/codeql-analysis.yml/badge.svg)](https://github.com/Babasile/babasile.github.io/actions/workflows/codeql-analysis.yml)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=Babasile_babasile.github.io&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=Babasile_babasile.github.io)
[![Reliability Rating](https://sonarcloud.io/api/project_badges/measure?project=Babasile_babasile.github.io&metric=reliability_rating)](https://sonarcloud.io/summary/new_code?id=Babasile_babasile.github.io)
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=Babasile_babasile.github.io&metric=sqale_rating)](https://sonarcloud.io/summary/new_code?id=Babasile_babasile.github.io)
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=Babasile_babasile.github.io&metric=security_rating)](https://sonarcloud.io/summary/new_code?id=Babasile_babasile.github.io)
[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=Babasile_babasile.github.io&metric=bugs)](https://sonarcloud.io/summary/new_code?id=Babasile_babasile.github.io)
[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=Babasile_babasile.github.io&metric=code_smells)](https://sonarcloud.io/summary/new_code?id=Babasile_babasile.github.io)
[![Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=Babasile_babasile.github.io&metric=vulnerabilities)](https://sonarcloud.io/summary/new_code?id=Babasile_babasile.github.io)

_This project is my resume as a Single Page website._

<div style="text-align: center">
    <p>
        <a target="_blank" href="https://babasile.github.io">
            <img src="./public/preview.png" alt="Preview" style="max-height:250px"/>
        </a>
    </p>
</div>

## Global information

You can use a distant database to complete your resume with a [GraphQL](https://graphql.org/) query or set your resume in a [TypeScript](https://www.typescriptlang.org/) class. 
The class will be used in case of failure while reaching the database. The internalization is configured with [i18next](https://www.i18next.com/). In additional with [react-ga](https://github.com/react-ga/react-ga) you can add [Google Analytics](https://analytics.google.com/) to your website by setting your Google property in a `.env` file.

## Usage

Here are some snippets to help get started.

### Parameters

To put in a `.env` file or in your repository Secrets.

| Parameter                      | Description                                                                                      |
|--------------------------------|--------------------------------------------------------------------------------------------------|
| `REACT_APP_GRAPHQL_URL`        | GraphQL url, if not set, the Typescript class will be used                                       |
| `REACT_APP_UA_GOOGLE_PROPERTY` | Google Property to add Analytics, if not set Analytics are disabled                              |
| `SONAR_SECRET`                 | (**Only for GitHub Action**) [SonarCloud](https://sonarcloud.io/) secret to analyse your project |

### Available Scripts

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
In the project directory, you can run:

- `npm start`: Runs the app in the development mode. Open http://localhost:3000 to view it in the browser.
- `npm test`: Launches the test runner in the interactive watch mode.
- `npm run build`: Builds the app for production to the `build` folder.
- `npm run eject`: See [npm run eject](https://create-react-app.dev/docs/available-scripts/#npm-run-eject)


_You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started)._
