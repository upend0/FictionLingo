/**
 * The i-language-translator web component module.
 *
 * @author Maria Fredriksson <mf223wk@student.lnu.se>
 * @version 1.0.0
 */

import { Utilities } from './../Utilities.js'
import '../translator-button'

import { iLanguageTranslator } from 'l2-1dv610'

const template = document.createElement('template')
template.innerHTML = `
  <translator-button id="i-language-btn">I-språket</translator-button>
`
customElements.define('i-language-translator',
  /**
   * Represents a i-language-translator element.
   */
  class extends HTMLElement {
    /**
     * Creates an instance of the current type.
     */
    constructor () {
      super()

      this.attachShadow({ mode: 'open' }).appendChild(template.content.cloneNode(true))

      this.shadowRoot.querySelector('#i-language-btn').addEventListener('translatorButtonClick', event => this.#translateToILanguage())
    }

    /**
     * Translates the text to i-language.
     */
    #translateToILanguage () {
      try {
        const textToTranslate = this.getAttribute('text')

        const translatedText = iLanguageTranslator.translateToILanguage(textToTranslate)

        Utilities.dispatchCustomEvent(this, 'textTranslated', translatedText)
      } catch (error) {
        Utilities.dispatchCustomEvent(this, 'errorFromModule', error.message)
      }
    }
  }
)
