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

      this.shadowRoot.querySelector('#robber-language-btn').addEventListener('translatorButtonClick', event => this.#translateToRobberLanguage())
    }

    /**
     * Translates the text to robber-language.
     */
    #translateToRobberLanguage () {
      try {
        const textToTranslate = this.getAttribute('text')

        const translatedText = robberLanguageTranslator.translateToRobberLanguage(textToTranslate)

        this.#dispatchCustomEvent('textTranslated', translatedText)
      } catch (error) {
        this.#dispatchCustomEvent('errorFromModule', error.message)
      }
    }

    /**
     * Dispatches a custom event, with bubbles set to true.
     *
     * @param {string} eventName - The name of the event.
     * @param {string} eventDetail - The detail of the event.
     */
    #dispatchCustomEvent (eventName, eventDetail) {
      this.dispatchEvent(new CustomEvent(eventName, {
        bubbles: true,
        detail: eventDetail
      }))
    }
  }
)
