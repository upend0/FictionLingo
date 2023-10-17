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
    <form id="input-form">
      <input id="input-text" type="text" placeholder="Write your text here">
      <button class="submit-btn" type="submit">OK</button>
    </form>
  </div>
`
customElements.define('input-form',
  /**
   * Represents a input-form element.
   */
  class extends HTMLElement {
    #inputForm
    #inputText

    /**
     * Creates an instance of the current type.
     */
    constructor () {
      super()

      this.attachShadow({ mode: 'open' }).appendChild(template.content.cloneNode(true))

      this.#inputForm = this.shadowRoot.querySelector('#input-form')
      this.#inputText = this.shadowRoot.querySelector('#input-text')

      // Set the focus to the input field from the start
      this.#inputText.focus()

      // Listen for when a text has been submitted
      this.#inputForm.addEventListener('submit', event => this.#textSubmitted(event))
    }

    /**
     * Dispatches a custom event that contains the text that was submitted.
     *
     * @param {object} event - The event object.
     */
    #textSubmitted (event) {
      // Prevent the page from reloading when the form is submitted
      event.preventDefault()

      // ^^ Should I check if the input field is empty here or if the text contains invalid characters etc?

      // Dispatch a custom event that contains the text that was submitted
      this.dispatchEvent(new CustomEvent('textSubmitted', {
        bubbles: true,
        detail: this.#inputText.value
      }))
    }
  }
)
