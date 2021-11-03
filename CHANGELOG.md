# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/)
and this project adheres to [Semantic Versioning](http://semver.org/).

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

[0.2.0]: https://github.com/aryo/twilio-flex-spoke-directory-plugin/compare/v0.1.0...v0.2.0
