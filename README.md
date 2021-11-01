# twilio-flex-spoke-directory-plugin

Spoke Directory plugin for Twilio Flex

## Overview

This repository is a quickstart for getting the Spoke Directory plugin on your Twilio Flex account.

The Spoke Directory plugin adds a `Spoke` tab when clicking on the call forward button from the Flex Agent call screen. This tab will show the list of entries in your Spoke directory and will allow you to transfer an incoming call to a directory contact.

## Prerequisites

1. Twilio Flex Account
2. Spoke Account: Signup for a free developer account at https://account.spokephone.com/twilio. You will need your Twilio account SID and auth token to complete the signup flow
3. Spoke Developer API credentials - get these from https://account.spokephone.com/developer-api
4. NodeJS 12, NPM 6 installed locally
5. Twilio CLI installed locally - https://www.twilio.com/docs/twilio-cli/quickstart
6. Twilio CLI Serverless plugin installed locally - https://www.twilio.com/docs/labs/serverless-toolkit/getting-started#install-the-twilio-serverless-toolkit
7. Twilio CLI Flex plugin installed locally - https://www.twilio.com/docs/flex/developer/plugins/cli/install

## Setup

Install Twilio CLI, Twilio's Serverless plugin and Twilio's Flex plugin

```bash
npm install twilio-cli@latest -g
twilio plugins:install @twilio-labs/plugin-serverless
twilio plugins:install @twilio-labs/plugin-flex
```

## Deploy

### 1. Checkout and install

Checkout this codebase to your local machine, and install required NPM packages

```bash
$ git clone https://github.com/spoke-ph/twilio-flex-spoke-directory-plugin.git
$ cd twilio-flex-spoke-directory-plugin
$ npm install
```

### 2. Twilio account credentials

Setup your Twilio account credentials using the Twilio CLI

```bash
$ twilio login
$ twilio profiles:use {YOUR_ACCOUNT}
```

### 3. Spoke Developer API Credentials

Twilio's Serverless deploy process will automatically upload any environment variables in your `.env` file to the Twilio service.
This file must be present in the `functions` directory, and can be copied over from `.env.example`. Update `.env` with the following values using your favourite editor. The values for `YOUR_SPOKE_CLIENT_ID` and `YOUR_SPOKE_CLIENT_SECRET` are provided to you when you create a Developer API in your Spoke account:

```
SPOKE_CLIENT_ID={YOUR_SPOKE_CLIENT_ID}
SPOKE_CLIENT_SECRET={YOUR_SPOKE_CLIENT_SECRET}
SPOKE_AUTH_SERVICE_URL=https://auth.spokephone.com/oauth/token
SPOKE_API_URL=https://integration.spokephone.com
ACCOUNT_SID={ACCOUNT SID}
AUTH_TOKEN={AUTH TOKEN}
```

### 4. Deploy Serverless functions

The Serverless deploy process will create a new Twilio Runtime service in your Twilio account called `twilio-flex-spoke-directory-plugin`.  The functions and environment variables in this project will be deployed into this service.

```bash
$ npm run deploy:functions
```
When deployment has finished, the Twilio Serverless URL for the application will be printed to the console. This URL can be used to access the application:

`Deployed to: https://spoke-api-service-1234-dev.twil.io`

### 5. Deploy and release Flex plugin

The Flex plugin deploy process will create a new Twilio Flex plugin within your Twilio Flex account called `twilio-flex-spoke-directory`.

When deploying, the plugin version will be set as the version inside `package.json`. To avoid version conflicts, please ensure that the `package.json` version is updated accordingly for every deploy.

```bash
$ CHANGELOG="Added new functionality" npm run plugin:deploy
# Once plugin is ready for release
$ npm run plugin:release
```

Note that when a plugin version has been deployed, it will not be available for Flex Agents until the version has been released.

### 5. Check setup

Login to your project in the Twilio console, and go to the Develop --> Functions --> Services page. Click on the `spoke-api-service` service, then click on `Environment Variables` near the bottom of the page. Make sure that `SPOKE_CLIENT_ID`, `SPOKE_CLIENT_SECRET`, `SPOKE_AUTH_SERVICE_URL`, `SPOKE_API_URL` are correctly set.

## Local Development: Plugin

You can start a local development plugin instance by running the following command:

```bash
$ npm run plugin:start
```

## Local Development: Functions

To run locally:

First, make sure that `./functions/.env` contains the required environment variables. This file can be copied from `./functions/.env.example`.

```environment
SPOKE_CLIENT_ID={DEVELOPER API CLIENT ID}
SPOKE_CLIENT_SECRET={DEVELOPER API CLIENT SECRET}
SPOKE_AUTH_SERVICE_URL=https://auth.dev.spokelabs.net/oauth/token
SPOKE_API_URL=https://api.dev.spokelabs.net
ACCOUNT_SID={ACCOUNT SID}
AUTH_TOKEN={AUTH TOKEN}
```

```bash
npm run function:start
```

This will start both the functions and the plugin locally, and a local Flex Agent will be opened in your browser.
