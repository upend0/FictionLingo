/**
 * The p-language-translator web component module.
 *
 * @author Maria Fredriksson <mf223wk@student.lnu.se>
 * @version 1.0.0
 */

import { Utilities } from './../Utilities.js'
import '../translator-button'

import { pLanguageTranslator } from 'l2-1dv610'

const template = document.createElement('template')
template.innerHTML = `
  <translator-button id="p-language-btn">P-språket</translator-button>
`
customElements.define('p-language-translator',
  /**
   * Represents a the p-language-translator element.
   */
  class extends HTMLElement {
    /**
     * Creates an instance of the current type.
     */
    constructor () {
      super()

      this.attachShadow({ mode: 'open' }).appendChild(template.content.cloneNode(true))

      this.shadowRoot.querySelector('#p-language-btn').addEventListener('translatorButtonClick', event => this.#translateToPLanguage())
    }

    /**
     * Translates the text to the p-language.
     */
    #translateToPLanguage () {
      try {
        const textToTranslate = this.getAttribute('text')

        const translatedText = pLanguageTranslator.translateToPLanguage(textToTranslate)

        Utilities.dispatchCustomEvent(this, 'textTranslated', translatedText)
      } catch (error) {
        Utilities.dispatchCustomEvent(this, 'errorFromModule', error.message)
      }
    }
  }
)
