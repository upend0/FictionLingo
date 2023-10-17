/**
 * The translator-app web component module.
 *
 * @author Maria Fredriksson <mf223wk@student.lnu.se>
 * @version 1.0.0
 */

import './input-form'

// ** This is a template for creating a web component.

console.log('Hi from translator-app!')

// Create a template
const template = document.createElement('template')
template.innerHTML = `
  <style>
    
  </style>
  <p>Hi from translator-app!</p>
  <input-form></input-form>
`
customElements.define('translator-app',
  /**
   * Represents a translator-app element.
   */
  class extends HTMLElement {
    #inputForm
    #submittedText

    /**
     * Creates an instance of the current type.
     */
    constructor () {
      super()

      this.attachShadow({ mode: 'open' }).appendChild(template.content.cloneNode(true))

      this.#inputForm = this.shadowRoot.querySelector('input-form')

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
      console.log(this.#submittedText)
    }
  }
)
