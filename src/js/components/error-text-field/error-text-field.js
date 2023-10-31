/**
 * The error-text-field web component module.
 *
 * @author Maria Fredriksson <mf223wk@student.lnu.se>
 * @version 1.0.0
 */

const template = document.createElement('template')
template.innerHTML = `
  <style>
    #errorTextContainer {
      color: red;
    }
  </style>
  <p id="errorTextContainer"></p>
`
customElements.define('error-text-field',
  /**
   * Represents a error-text-field element.
   */
  class extends HTMLElement {
    #errorTextContainer

    /**
     * Creates an instance of the current type.
     */
    constructor () {
      super()

      this.attachShadow({ mode: 'open' }).appendChild(template.content.cloneNode(true))

      this.#errorTextContainer = this.shadowRoot.querySelector('#errorTextContainer')
    }

    /**
     * Which attributes are to be observed.
     *
     * @returns {Array} The attributes that will be observed
     */
    static get observedAttributes () {
      return ['error-message']
    }

    /**
     * Listens to when an observed attribute is changed.
     *
     * @param {string} name - The name of the attribute.
     * @param {*} oldValue - The old value of the attribute.
     * @param {*} newValue - The new value of the attribute.
     */
    attributeChangedCallback (name, oldValue, newValue) {
      if (name === 'error-message') {
        const errorMessageToDisplay = newValue
        this.#displayErrorMessage(errorMessageToDisplay)
      }
    }

    /**
     * Displays the error message.
     *
     * @param {string} errorMessageToDisplay - The error message to display.
     */
    #displayErrorMessage (errorMessageToDisplay) {
      this.#errorTextContainer.textContent = errorMessageToDisplay
    }
  }
)
