/**
 * The footer-component web component module.
 *
 * @author Maria Fredriksson <mf223wk@student.lnu.se>
 * @version 1.0.0
 */

const template = document.createElement('template')
template.innerHTML = `
  <style>
    footer {
      background-color: #3aa1f5;
      font-size: 14px;
      text-align: center;
      padding: 5px;
      position: fixed;
      bottom: 0;
      width: 100%;
      box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.1);
    }

    footer a {
      color: black;
      margin-right: 8px;
    }
  </style>
  <footer>
    <p>Denna applikation är skapad av Maria Fredriksson som ett skolprojekt i kursen 1dv610 vid Linnéuniversitetet.</p>
    <p>Mer information om de påhittade språken finns på dessa sidor: 
      <a href="https://sv.wikipedia.org/wiki/Allspr%C3%A5ket" target="_blank">Allspråket - Wikipedia</a>
      <a href="https://sv.wikipedia.org/wiki/Fikonspr%C3%A5ket" target="_blank">Fikonspråket - Wikipedia</a>
      <a href="https://sv.wikipedia.org/wiki/I-spr%C3%A5ket" target="_blank">I-språket - Wikipedia</a>
      <a href="https://sv.rilpedia.org/wiki/P-spr%C3%A5ket" target="_blank">P-språket - Rilpedia</a>
      <a href="https://sv.wikipedia.org/wiki/R%C3%B6varspr%C3%A5ket" target="_blank">Rövarspråket - Wikipedia</a>
    </p>
  </footer>
`
customElements.define('footer-component',
  /**
   * Represents a footer-component element.
   */
  class extends HTMLElement {
    /**
     * Creates an instance of the current type.
     */
    constructor () {
      super()

      this.attachShadow({ mode: 'open' }).appendChild(template.content.cloneNode(true))
    }
  }
)
