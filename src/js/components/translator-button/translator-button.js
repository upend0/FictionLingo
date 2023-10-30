/**
 * The translator-button web component module.
 *
 * @author Maria Fredriksson <mf223wk@student.lnu.se>
 * @version 1.0.0
 */

// Create a template
const template = document.createElement('template')
template.innerHTML = `
  <style>
    :host {
      display: inline-block;
    }

    button {
      background-color: #fff;
      /* color: #fff; */
      border: none;
      border-radius: 10px;
      padding: 10px 20px;
      font-size: 24px;
      cursor: pointer;
    }
  </style>
  <button><slot></slot></button>
`
customElements.define('translator-button',
  /**
   * Represents a translator-button element.
   */
  class extends HTMLElement {
    /**
     * Creates an instance of the current type.
     */
    constructor () {
      super()

      this.attachShadow({ mode: 'open' }).appendChild(template.content.cloneNode(true))

      // ^^ Is this needed....?
      this.buttonElement = this.shadowRoot.querySelector('button')

      this.buttonElement.addEventListener('click', event => this.handleClick(event))
    }

    /**
     * Handles the click event.
     *
     * @param {*} event - The event.
     */
    handleClick (event) {
      this.dispatchEvent(new window.CustomEvent('translatorButtonClick', { bubbles: true }))
    }
  }
)
