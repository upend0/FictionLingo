/**
 * The fig-language-translator web component module.
 *
 * @author Maria Fredriksson <mf223wk@student.lnu.se>
 * @version 1.0.0
 */

import { Utilities } from './../Utilities.js'
import '../translator-button'

import { figLanguageTranslator } from 'l2-1dv610'

const template = document.createElement('template')
template.innerHTML = `
  <translator-button id="fig-language-btn">Fikonspråket</translator-button>
`
customElements.define('fig-language-translator',
  /**
   * Represents a the fig-language-translator element.
   */
  class extends HTMLElement {
    /**
     * Creates an instance of the current type.
     */
    constructor () {
      super()

      this.attachShadow({ mode: 'open' }).appendChild(template.content.cloneNode(true))

      this.shadowRoot.querySelector('#fig-language-btn').addEventListener('translatorButtonClick', event => this.#translateToFigLanguage())
    }

    /**
     * Translates the text to the fig-language.
     */
    #translateToFigLanguage () {
      try {
        const textToTranslate = this.getAttribute('text')

        const translatedText = figLanguageTranslator.translateToFigLanguage(textToTranslate)

        Utilities.dispatchCustomEvent(this, 'textTranslated', translatedText)
      } catch (error) {
        Utilities.dispatchCustomEvent(this, 'errorFromModule', error.message)
      }
    }
  }
)
