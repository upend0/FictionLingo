/**
 * The robber-language-translator web component module.
 *
 * @author Maria Fredriksson <mf223wk@student.lnu.se>
 * @version 1.0.0
 */

import { Utilities } from './../../Utilities.js'
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

      this.shadowRoot.querySelector('#robber-language-btn').addEventListener('translatorButtonClick', event => this.#translateToRobberLanguage())
    }

    /**
     * Translates the text to robber-language.
     */
    #translateToRobberLanguage () {
      try {
        const textToTranslate = this.getAttribute('text')

        const translatedText = robberLanguageTranslator.translateToRobberLanguage(textToTranslate)

        Utilities.dispatchCustomEvent(this, 'textTranslated', translatedText)
      } catch (error) {
        Utilities.dispatchCustomEvent(this, 'errorFromModule', error.message)
      }
    }
  }
)
