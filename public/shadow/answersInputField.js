// Class InputField is a custom element for retrieving answers from the user.
export class InputField extends HTMLElement {
  connectedCallback() {
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.append(this.generateParagraph());
  }

  generateParagraph() {
    const para = document.createElement('p');
    para.style.background = 'grey';
    para.style.border = '1px';
    para.style.borderColor = 'black';

    para.textContent = 'This is a custom element';

    return para;
  }
}

customElements.define('input-field', InputField);
