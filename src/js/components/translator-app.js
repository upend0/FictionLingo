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
    <p>Hi from translator-app!</p>
    <input-form></input-form>
    <div id="translate-to">
      <p>Choose a language to translate to:</p>
      <all-language-translator class="translate-buttons" disabled></all-language-translator>
      <fig-language-translator class="translate-buttons"></fig-language-translator>
      <i-language-translator class="translate-buttons"></i-language-translator>
      <p-language-translator class="translate-buttons"></p-language-translator>
      <robber-language-translator class="translate-buttons"></robber-language-translator>
      <!-- <button id="all-language-btn" class="translate-buttons">All-language</button>
      <button id="fig-language-btn">Fig-language</button>
      <button id="i-language-btn">I-language</button>
      <button id="p-language-btn">P-language</button>
      <button id="robber-language-btn">Robber-language</button> -->
    </div>
    <text-field></text-field>
  </div>
  <footer-component></footer-component>
`
// ^^ Should I add en error-field where the error messages are displayed?
// ^^ Should I have a button for every language that the user can click on to translate to that language?
// ^^ Should I have a text field that shows information?
// & Maybe remove the OK button later and the listener also etc...?
// & Should the app translate from the made up languages also...?

// TODO: Make every language component to be a button that the user can click on to translate to that language
// TODO: Make the translator buttons disabled until the user has submitted a text and OK button has been clicked

customElements.define('translator-app',
  /**
   * Represents a translator-app element.
   */
  class extends HTMLElement {
    // #allLanguageBtn
    // #figLanguageBtn
    // #iLanguageBtn
    // #pLanguageBtn
    // #robberLanguageBtn
    #inputForm
    #submittedText
    #textField
    #translateButtons

    /**
     * Creates an instance of the current type.
     */
    constructor () {
      super()

      this.attachShadow({ mode: 'open' }).appendChild(template.content.cloneNode(true))

      // this.#allLanguageBtn = this.shadowRoot.querySelector('#all-language-btn')
      // this.#figLanguageBtn = this.shadowRoot.querySelector('#fig-language-btn')
      // this.#iLanguageBtn = this.shadowRoot.querySelector('#i-language-btn')
      // this.#pLanguageBtn = this.shadowRoot.querySelector('#p-language-btn')
      // this.#robberLanguageBtn = this.shadowRoot.querySelector('#robber-language-btn')
      this.#inputForm = this.shadowRoot.querySelector('input-form')
      this.#textField = this.shadowRoot.querySelector('text-field')
      this.#translateButtons = this.shadowRoot.querySelectorAll('.translate-buttons')

      // Listen for when the buttons are clicked
      // this.#allLanguageBtn.addEventListener('click', event => this.#translateToAllLanguage(event))
      // this.#figLanguageBtn.addEventListener('click', event => this.#translateToFigLanguage(event))
      // this.#iLanguageBtn.addEventListener('click', event => this.#translateToILanguage(event))
      // this.#pLanguageBtn.addEventListener('click', event => this.#translateToPLanguage(event))
      // this.#robberLanguageBtn.addEventListener('click', event => this.#translateToRobberLanguage(event))

      // Listen for the events that the components dispatch
      this.#inputForm.addEventListener('textSubmitted', event => this.#textSubmitted(event))
      this.shadowRoot.querySelector('#translate-to').addEventListener('textTranslated', event => this.#showTranslatedText(event.detail))
    }

    /**
     * TODO: Write something here.
     *
     * @param {object} event - The event object.
     */
    #textSubmitted (event) {
      this.#submittedText = event.detail
      console.log(`Submitted text: ${this.#submittedText}`)

      // ^^ Just try to send the text to the text-field component for now
      this.#showTranslatedText(this.#submittedText)

      // Enable the translate buttons
      this.#enableTranslateButtons()

      // ^^ Maybe put this in a method instead?
      // Loop through the translate buttons and set the submitted text as an attribute to them
      this.#translateButtons.forEach(button => {
        button.setAttribute('text', this.#submittedText)
      })
    }

    /**
     * Enables the translate buttons.
     */
    #enableTranslateButtons () {
      this.#translateButtons.forEach(button => {
        button.removeAttribute('disabled')
      })
    }

    // #translateToAllLanguage (event) {
    //   const translatedText = translator.allLanguageTranslator.translateToAllLanguage(this.#submittedText)
    //   this.#showTranslatedText(translatedText)
    // }

    // #getTextFromInputForm () {
    //   // Communicate to the input form that the app wants to get the text, by adding an attribute to the input form
    //   // Then the input form dispatches an event that contains the text

    // }

    /**
     * TODO: Write something here.
     *
     * @param {string} translatedText - The translated text.
     */
    #showTranslatedText (translatedText) {
      this.#textField.setAttribute('text', translatedText)
    }
  }
)
