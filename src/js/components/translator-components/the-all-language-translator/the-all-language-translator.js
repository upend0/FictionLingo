/**
 * The all-language-translator web component module.
 *
 * @author Maria Fredriksson <mf223wk@student.lnu.se>
 * @version 1.0.0
 */

import '../translator-button'

import { theAllLanguageTranslator } from 'l2-1dv610'

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

      this.shadowRoot.querySelector('#the-all-language-btn').addEventListener('translatorButtonClick', event => this.#translateToTheAllLanguage())
    }

    /**
     * Translates the text to the all-language.
     */
    #translateToTheAllLanguage () {
      try {
        const textToTranslate = this.getAttribute('text')

        const translatedText = theAllLanguageTranslator.translateToTheAllLanguage(textToTranslate)

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
