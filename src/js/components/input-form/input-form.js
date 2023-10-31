/**
 * The input-form web component module.
 *
 * @author Maria Fredriksson <mf223wk@student.lnu.se>
 * @version 1.0.0
 */

// Create a template
const template = document.createElement('template')
template.innerHTML = `
  <style>
    .container {
      font-family: Verdana, sans-serif;
    }

    #input-text, .submit-btn {
      font-size: 24px; 
    }
  </style>
  <div class="container">
    <form>
      <input id="input-text" type="text" placeholder="Write your text here">
    </form>
  </div>
`
customElements.define('input-form',
  /**
   * Represents a input-form element.
   */
  class extends HTMLElement {
    #inputText

    /**
     * Creates an instance of the current type.
     */
    constructor () {
      super()

      this.attachShadow({ mode: 'open' }).appendChild(template.content.cloneNode(true))

      this.#inputText = this.shadowRoot.querySelector('#input-text')

      // Set the focus to the input field from the start
      this.#inputText.focus()

      this.#inputText.addEventListener('input', event => this.#textSubmitted(event))
    }

    /**
     * Dispatches a custom event that contains the text that was submitted if the text contains only valid characters.
     *
     * @param {object} event - The event object.
     */
    #textSubmitted (event) {
      // ^^ Should I check if the text contains invalid characters etc?
      if (this.#isValidCharacters(this.#inputText.value)) {
        // Dispatch a custom event that contains the text that was submitted
        this.dispatchEvent(new CustomEvent('textSubmitted', {
          bubbles: true,
          detail: this.#inputText.value
        }))
      }
    }

    /**
     * Checks if the input text contains only valid characters.
     *
     * @param {string} inputText - The text that was submitted.
     * @returns {boolean} True if the input text contains only valid characters.
     */
    #isValidCharacters (inputText) {
      // Check so the input text contains only valid characters
      // const regex = /^[a-zåäöA-ZÅÄÖ0-9,.!? ]+$/
      const regex = /^[a-zåäöéüáàèìòúñ ]+$/i
      // const regex = /^[a-zåäöéüáàèìòúñA-ZÅÄÖÉÜÁÀÈÌÒÚÑ ]+$/i
      // ^^ Make inside () to its own method to make it more clear..?
      if (inputText !== '' && !regex.test(inputText)) {
        // Dispatch a custom event for invalid characters
        this.dispatchEvent(new CustomEvent('invalidCharacters', {
          bubbles: true,
          detail: 'The input text contains invalid characters.'
        }))
        return false
      }
      return true
    }
  }
)
