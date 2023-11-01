/**
 * The text-field web component module.
 *
 * @author Maria Fredriksson <mf223wk@student.lnu.se>
 * @version 1.0.0
 */

const template = document.createElement('template')
template.innerHTML = `
  <style>
    #textContainer {
      max-width: 100vw;
      overflow-wrap: break-word;
    }
  </style>
  <p id="textContainer"></p>
`
customElements.define('text-field',
  /**
   * Represents a text-field element.
   */
  class extends HTMLElement {
    #textContainer

    /**
     * Creates an instance of the current type.
     */
    constructor () {
      super()

      this.attachShadow({ mode: 'open' }).appendChild(template.content.cloneNode(true))

      this.#textContainer = this.shadowRoot.querySelector('#textContainer')
    }

    /**
     * Which attributes are to be observed.
     *
     * @returns {Array} The attributes that will be observed
     */
    static get observedAttributes () {
      return ['text']
    }

    /**
     * Listens to when an observed attribute is changed.
     *
     * @param {string} name - The name of the attribute.
     * @param {*} oldValue - The old value of the attribute.
     * @param {*} newValue - The new value of the attribute.
     */
    attributeChangedCallback (name, oldValue, newValue) {
      if (name === 'text') {
        const textToDisplay = newValue
        this.#displayText(textToDisplay)
      }
    }

    /**
     * Displays the text that was submitted.
     *
     * @param {string} textToDisplay - The text that was submitted.
     */
    #displayText (textToDisplay) {
      this.#textContainer.textContent = textToDisplay
    }
  }
)
