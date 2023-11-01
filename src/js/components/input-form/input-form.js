/**
 * The input-form web component module.
 *
 * @author Maria Fredriksson <mf223wk@student.lnu.se>
 * @version 1.0.0
 */

import { Utilities } from '../translator-components/Utilities.js'

const template = document.createElement('template')
template.innerHTML = `
  <style>
    .container {
      font-family: Verdana, sans-serif;
    }

    #input-element {
      font-size: 24px; 
    }
  </style>
  <div class="container">
    <form>
      <input id="input-element" type="text" placeholder="Skriv din text här">
    </form>
  </div>
`
customElements.define('input-form',
  /**
   * Represents a input-form element.
   */
  class extends HTMLElement {
    #inputElement

    /**
     * Creates an instance of the current type.
     */
    constructor () {
      super()

      this.attachShadow({ mode: 'open' }).appendChild(template.content.cloneNode(true))

      this.#inputElement = this.shadowRoot.querySelector('#input-element')

      // Set the focus to the input field from the start so it's easier for the user to start typing.
      this.#inputElement.focus()

      this.#inputElement.addEventListener('input', event => this.#dispatchEventsWhenTextIsEntered(event.target.value))
    }

    /**
     * Dispatches custom events depending on if the submitted text is valid or not or if the text field is empty.
     *
     * @param {string} submittedText - The text that was submitted.
     */
    #dispatchEventsWhenTextIsEntered (submittedText) {
      if (this.#isValidString(submittedText)) {
        Utilities.dispatchCustomEvent(this, 'textSubmitted', submittedText)
      } else if (submittedText === '') {
        Utilities.dispatchCustomEvent(this, 'emptyString', 'Textfältet är tomt.')
      } else {
        Utilities.dispatchCustomEvent(this, 'invalidCharacters', 'Texten innehåller ogiltiga tecken.')
      }
    }

    /**
     * Checks if the submitted text contains only valid characters.
     *
     * @param {string} submittedText - The text that was submitted.
     * @returns {boolean} True if the submitted text contains only valid characters.
     */
    #isValidString (submittedText) {
      const regex = /^[a-zåäöéüáàèìòúñ ]+$/i
      if (regex.test(submittedText)) {
        return true
      }
      return false
    }
  }
)
