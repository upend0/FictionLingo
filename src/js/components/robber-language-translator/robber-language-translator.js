/**
 * The robber-language-translator web component module.
 *
 * @author Maria Fredriksson <mf223wk@student.lnu.se>
 * @version 1.0.0
 */

import './../translator-button'

import { robberLanguageTranslator } from 'l2-1dv610'

const template = document.createElement('template')
template.innerHTML = `
  <translator-button id="robber-language-btn">Rövarspråket</translator-button>
`
customElements.define('robber-language-translator',
  /**
   * Represents a robber-language-translator element.
   */
  class extends HTMLElement {
    /**
     * Creates an instance of the current type.
     */
    constructor () {
      super()

      this.attachShadow({ mode: 'open' }).appendChild(template.content.cloneNode(true))

      this.shadowRoot.querySelector('#robber-language-btn').addEventListener('translatorButtonClick', event => this.#translateToRobberLanguage(event))
    }

    /**
     * TODO: Write something here.
     *
     * @param {object} event - The event object.
     */
    #translateToRobberLanguage (event) {
      try {
        // Get the text from the attribute of this component
        const textToTranslate = this.getAttribute('text')

        // Translate the text
        const translatedText = robberLanguageTranslator.translateToRobberLanguage(textToTranslate)

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
