# Fiction Lingo

![Translator App](./images/translator-app.jpg)

## Table of Contents
- [Introduction](#introduction)
- [App Language](#app-language)
- [Deployed application](#deployed-application)
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Component Structure](#component-structure)
- [Tests](#tests)
- [Requirements](#requirements)
- [Dependency on Module from GitHub](#dependency-on-module-from-github)
- [Author](#author)
- [License](#license)

## Introduction

Fiction Lingo is a web application built using web components that allows users to translate text into five made-up languages: All-Language, Fig-Language, I-Language, P-Language, and Robber-Language. This readme provides information on how to install and use the Fiction Lingo application and explains its key features.

## App language
The app is written in swedish and it is made for translating primarily swedish texts. However, texts in other languages with similar characters to swedish (like english) could also be translated.

## Deployed application
The app is deployed at: [https://fictionlingo.netlify.app/](https://fictionlingo.netlify.app/)

## Installation

To install Fiction Lingo and its dependencies using npm:

```bash
npm install
```

## Usage

Once the app is installed, you can run it locally using the following command:

```bash
npm run dev
```

This command will start the Vite development server and provide a local host URL (usually `http://localhost:5173/`) where you can access Fiction Lingo in your web browser.

## Features

Fiction Lingo offers the following features:

1. **Translation to made-up Languages:** Users can translate text into five made-up languages by clicking on the corresponding translation buttons.

2. **Supported Languages:** The app supports the following made-up languages:
   - All-Language
   - Fig-Language
   - I-Language
   - P-Language
   - Robber-Language

3. **Error Handling:** The app handles errors in the following ways:
   - Displays a descriptive error message when invalid characters are entered.
   - Removes the error message when invalid characters are corrected.
   - Prevents translation when invalid characters are present or the input field is empty, and also displays an error message.
   - Displays an error message when the input text exceeds 10,000 characters.

4. **User-Friendly Interface:** The app provides a user-friendly interface with a clean design, making it easy for users to input and translate text.

5. **Creator Information:** The app displays information about the creator and the purpose of the application.

6. **Links to Language Information:** The app includes links to websites where users can learn more about the made-up languages.

## Component Structure

Fiction Lingo is built using web components. Here is an overview of the app's component structure:

- `translator-app`: The main web component representing the Translator App.
- `input-form`: Handles user input and validation.
- `error-text-field`: Displays error messages.
- `text-field`: Displays translated text.
- `the-all-language-translator`: Translation button for The-All-Language.
- `fig-language-translator`: Translation button for Fig-Language.
- `i-language-translator`: Translation button for I-Language.
- `p-language-translator`: Translation button for P-Language.
- `robber-language-translator`: Translation button for Robber-Language.
- `footer-component`: Displays information about the creator and links to language resources.

## Tests

The application is tested using manual testing. The test specification (in swedish) can be found at [testspecifikation.md](./testspecifikation.md)

## Requirements

The requirement for the application (in swedish) can be found at [kravspecifikation.md](./kravspecifikation.md)

## Dependency on module from GitHub
The application is dependent on a module from GitHub for the translations. This module is created by the same author as this application. The module is added as a dependency in this application and installed with the other dependencies. However, if the module were to change after the application has been installed, the updates wont come through to the application unless the module is uninstalled and reinstalled. More information about how this adding of a GitHub repository as a dependency can be found on this site: [Use Github branch as dependency in package.json](https://medium.com/@jonchurch/use-github-branch-as-dependency-in-package-json-5eb609c81f1a).

## Author 
Maria Fredriksson <mf223wk@student.lnu.se>

## License
This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

Enjoy translating text into made-up languages with Fiction Lingo!
