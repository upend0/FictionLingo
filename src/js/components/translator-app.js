/**
 * The translator-app web component module.
 *
 * @author Maria Fredriksson <mf223wk@student.lnu.se>
 * @version 1.0.0
 */

import './input-form'
import './text-field'

// ** This is a template for creating a web component.

console.log('Hi from translator-app!')

// Create a template
const template = document.createElement('template')
template.innerHTML = `
  <style>
    
  </style>
  <p>Hi from translator-app!</p>
  <input-form></input-form>
  <text-field></text-field>
`
// ^^ Should I add en error-field where the error messages are displayed?

customElements.define('translator-app',
  /**
   * Represents a translator-app element.
   */
  class extends HTMLElement {
    #inputForm
    #submittedText
    #textField

    /**
     * Creates an instance of the current type.
     */
    constructor () {
      super()

      this.attachShadow({ mode: 'open' }).appendChild(template.content.cloneNode(true))

      this.#inputForm = this.shadowRoot.querySelector('input-form')
      this.#textField = this.shadowRoot.querySelector('text-field')

      // Listen for the events that the components dispatch
      this.#inputForm.addEventListener('textSubmitted', event => this.#textSubmitted(event))
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
    }

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
