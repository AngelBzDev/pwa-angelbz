class MiFooter
  extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `&copy; 2021
      Roberto Angel Baez Salazar.`;
  }
}
customElements.define(
  "mi-footer", MiFooter);