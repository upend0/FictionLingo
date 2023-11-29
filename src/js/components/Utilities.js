/**
 * The Utilities class contains methods that are used in multiple components.
 *
 * @author Maria Fredriksson <mf223wk@student.lnu.se>
 * @version 1.0.0
 */
export class Utilities {
  /**
   * Dispatches a custom event, with bubbles set to true.
   *
   * @param {HTMLElement} element - The element that the event is dispatched from.
   * @param {string} eventName - The name of the event.
   * @param {string} eventDetail - The detail of the event.
   */
  // Static method so that it can be called easily without creating an instance of the class
  // in every component where the method is needed.
  static dispatchCustomEvent (element, eventName, eventDetail) {
    element.dispatchEvent(new CustomEvent(eventName, {
      bubbles: true,
      detail: eventDetail
    }))
  }
}
