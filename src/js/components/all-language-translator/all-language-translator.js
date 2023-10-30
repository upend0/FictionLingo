/**
 * The all-language-translator web component module.
 *
 * @author Maria Fredriksson <mf223wk@student.lnu.se>
 * @version 1.0.0
 */

import './../translator-button'

// ^^ Just testing to import like this - make something else later
import { translator } from '../../../../../L2-1DV610/src/app.js'

// Create a template
const template = document.createElement('template')
template.innerHTML = `
  <style>
    
  </style>
  <!-- <button id="all-language-btn">All-language</button> -->
  <translator-button id="all-language-btn">All-language</translator-button>
`
customElements.define('all-language-translator',
  /**
   * Represents a all-language-translator element.
   */
  class extends HTMLElement {
    /**
     * Creates an instance of the current type.
     */
    constructor () {
      super()

      this.attachShadow({ mode: 'open' }).appendChild(template.content.cloneNode(true))

      this.shadowRoot.querySelector('#all-language-btn').addEventListener('translatorButtonClick', event => this.#translateToAllLanguage(event))
    }

    /**
     * TODO: Write something here.
     *
     * @param {object} event - The event object.
     */
    #translateToAllLanguage (event) {
      // Get the text from the attribute of this component
      const textToTranslate = this.getAttribute('text')

      // Translate the text
      const translatedText = translator.allLanguageTranslator.translateToAllLanguage(textToTranslate)

      // Dispatch a custom event that contains the translated text
      this.dispatchEvent(new window.CustomEvent('textTranslated', {
        bubbles: true,
        detail: translatedText
      }))
    }
  }
)
