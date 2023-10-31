/**
 * The translator-app web component module.
 *
 * @author Maria Fredriksson <mf223wk@student.lnu.se>
 * @version 1.0.0
 */

import './all-language-translator'
import './fig-language-translator'
import './i-language-translator'
import './p-language-translator'
import './robber-language-translator'
import './input-form'
import './error-text-field'
import './footer-component'
import './text-field'

// ^^ Just testing to import like this - make something else later
// import { translator } from '../../../../L2-1DV610/src/app.js'

// Create a template
const template = document.createElement('template')
template.innerHTML = `
  <style>
    :host {
      display: flex;
      flex-direction: column;
      /* align-items: center; */
      justify-content: center;
      height: 100vh; /* This ensures the component takes up the full viewport height */
      font-family: 'Verdana', sans-serif; 
      font-size: 24px;
    }

    /* Apply the font style to all descendants */
    * {
      font-family: inherit;
      font-size: inherit;
    }

    .container {
      background-color: #3aa1f5;
      padding: 40px;
      border-radius: 10px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      text-align: center;
    }
  </style>
  <div class="container">
    <input-form></input-form>
    <error-text-field></error-text-field>
    <div id="translation-container">
      <p>Choose a language to translate to:</p>
      <all-language-translator class="translate-buttons"></all-language-translator>
      <fig-language-translator class="translate-buttons"></fig-language-translator>
      <i-language-translator class="translate-buttons"></i-language-translator>
      <p-language-translator class="translate-buttons"></p-language-translator>
      <robber-language-translator class="translate-buttons"></robber-language-translator>
    </div>
    <text-field></text-field>
  </div>
  <footer-component></footer-component>
`

// ^^ Should I have a text field that shows information?

// & Translate app to Swedish instead?

// TODO: Change name of all-language to the-all-language

customElements.define('translator-app',
  /**
   * Represents a translator-app element.
   */
  class extends HTMLElement {
    #inputForm
    #errorTextField
    #textField
    #translationContainer
    #translateButtons

    /**
     * Creates an instance of the current type.
     */
    constructor () {
      super()

      this.attachShadow({ mode: 'open' }).appendChild(template.content.cloneNode(true))

      this.#inputForm = this.shadowRoot.querySelector('input-form')
      this.#errorTextField = this.shadowRoot.querySelector('error-text-field')
      this.#textField = this.shadowRoot.querySelector('text-field')
      this.#translationContainer = this.shadowRoot.querySelector('#translation-container')
      this.#translateButtons = this.shadowRoot.querySelectorAll('.translate-buttons')

      // Listen for the events that the components dispatch
      this.#inputForm.addEventListener('textSubmitted', event => this.#validTextSubmitted(event.detail))
      this.#inputForm.addEventListener('invalidCharacters', event => this.#showErrorMessage(event.detail))
      this.#translationContainer.addEventListener('textTranslated', event => this.#showTranslatedText(event.detail))
    }

    /**
     * When a valid text is submitted, the error message is removed and the translate buttons are notified of the submitted text.
     *
     * @param {string} submittedText - The submitted text.
     */
    #validTextSubmitted (submittedText) {
      this.#removeErrorMessage()

      // ^^ Just try to send the text to the text-field component for now
      this.#showTranslatedText(submittedText)

      this.#notifyTranslateButtonsOfSubmittedText(submittedText)
    }

    /**
     * Loop through the translate buttons and set the submitted text as an attribute to them.
     *
     * @param {string} submittedText - The submitted text.
     */
    #notifyTranslateButtonsOfSubmittedText (submittedText) {
      this.#translateButtons.forEach(button => {
        button.setAttribute('text', submittedText)
      })
    }

    /**
     * Shows an error message.
     *
     * @param {string} errorMessage - The error message.
     */
    #showErrorMessage (errorMessage) {
      this.#errorTextField.setAttribute('error-message', errorMessage)
    }

    /**
     * Removes the error message.
     */
    #removeErrorMessage () {
      this.#errorTextField.setAttribute('error-message', '')
    }

    /**
     * Shows the translated text.
     *
     * @param {string} translatedText - The translated text.
     */
    #showTranslatedText (translatedText) {
      this.#textField.setAttribute('text', translatedText)
    }
  }
)
