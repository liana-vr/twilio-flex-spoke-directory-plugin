# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/)
and this project adheres to [Semantic Versioning](http://semver.org/).

## [0.4.0] - 2021-11-11
### Changed
- Update README.md
- Renamed example `.env` files:
  - `functions/.env.example` renamed to `functions/.env.functions.example`
  - `.env.example` renamed to `.env.plugin.example`
  - NPM script to validate environment variables updated to reflect new file names

## [0.3.0] - 2021-11-10
### Added
- NPM scripts to validate environment variables for plugin and functions
  - Check that environment variables has been set and not example value
- `dotenv` development dependency
- Twilio serverless functions
  - `get-directory`
  - `cold-transfer`

### Changed
- Upgrade dependencies
  - @spoke-ph/directory-flex-functions   0.1.1  →   2.0.1
  - @spoke-ph/directory-flex-plugin      0.1.1  →   0.3.1
  - @twilio/flex-ui                     1.28.1  →  1.29.0
- Generate environment variables when running build or deploy in CircleCI

## [0.2.0] - 2021-11-02
### Added
- CircleCI steps to deploy function and plugin into development Flex account

### Changed
- Upgrade dependencies
  - flex-plugin-scripts                  4.2.0  →   4.2.2
  - @twilio/flex-ui                         ^1  →  1.28.1
  - webpack                             5.60.0  →  5.61.0

## 0.1.0 - 2021-11-01
### Added
- Initial project structure
- Build and deploy scripts for both serverless functions and Flex plugin
  - Currently, since Twilio serverless does not support private packages as deps, we are including `@spoke-ph/directory-flex-functions` & `@spoke-ph/directory-flex-functions` as dev deps and are bundling the individual functions using webpack. Once the packages have been made public, we will remove webpack and make them actual dependencies.
- Twilio serverless functions
  - `add-conference-participant`
  - `get-call-properties`
  - `hold-conference-participant`
  - `remove-conference-participant`
  - `set-end-conference-on-participant-exit`

[0.3.0]: https://github.com/spoke-ph/twilio-flex-spoke-directory-plugin/compare/v0.2.0...v0.3.0
[0.2.0]: https://github.com/spoke-ph/twilio-flex-spoke-directory-plugin/compare/v0.1.0...v0.2.0
