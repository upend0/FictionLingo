/**
 * The input-form web component module.
 *
 * @author Maria Fredriksson <mf223wk@student.lnu.se>
 * @version 1.0.0
 */

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

      this.#inputElement.addEventListener('input', event => this.#textSubmitted(event.target.value))
    }

    /**
     * Dispatches a custom event that contains the text that was submitted if the text contains only valid characters.
     *
     * @param {string} submittedText - The text that was submitted.
     */
    // ^^ Change name to something more clear and with a verb...?
    #textSubmitted (submittedText) {
      if (this.#isValidString(submittedText)) {
        this.#dispatchCustomEvent('textSubmitted', submittedText)
      } else if (submittedText === '') {
        this.#dispatchCustomEvent('emptyString', 'Textfältet är tomt.')
      } else {
        this.#dispatchCustomEvent('invalidCharacters', 'Texten innehåller ogiltiga tecken.')
      }
    }

    /**
     * Dispatches a custom event, with bubbles set to true.
     *
     * @param {string} eventName - The name of the event.
     * @param {string} eventDetail - The detail of the event.
     */
    #dispatchCustomEvent (eventName, eventDetail) {
      this.dispatchEvent(new CustomEvent(eventName, {
        bubbles: true,
        detail: eventDetail
      }))
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
