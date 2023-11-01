/**
 * The all-language-translator web component module.
 *
 * @author Maria Fredriksson <mf223wk@student.lnu.se>
 * @version 1.0.0
 */

import '../translator-button'

// ^^ Just testing to import like this - make something else later
import { theAllLanguageTranslator } from '../../../../../L2-1DV610/src/app.js'

const template = document.createElement('template')
template.innerHTML = `
  <translator-button id="the-all-language-btn">Allspråket</translator-button>
`
customElements.define('the-all-language-translator',
  /**
   * Represents a the all-language-translator element.
   */
  class extends HTMLElement {
    /**
     * Creates an instance of the current type.
     */
    constructor () {
      super()

      this.attachShadow({ mode: 'open' }).appendChild(template.content.cloneNode(true))

      this.shadowRoot.querySelector('#the-all-language-btn').addEventListener('translatorButtonClick', event => this.#translateToTheAllLanguage(event))
    }

    /**
     * TODO: Write something here.
     *
     * @param {object} event - The event object.
     */
    #translateToTheAllLanguage (event) {
      try {
        // Get the text from the attribute of this component
        const textToTranslate = this.getAttribute('text')

        // Translate the text
        const translatedText = theAllLanguageTranslator.translateToTheAllLanguage(textToTranslate)

        // Dispatch a custom event that contains the translated text
        this.dispatchEvent(new window.CustomEvent('textTranslated', {
          bubbles: true,
          detail: translatedText
        }))
      } catch (error) {
        // Dispatch a custom event that contains the error message
        this.dispatchEvent(new window.CustomEvent('errorFromModule', {
          bubbles: true,
          detail: error.message
        }))
      }
    }
  }
)
