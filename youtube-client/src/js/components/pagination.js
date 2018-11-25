import Element from './create-element';

export default class Pagination {
  constructor() {
    this.div = new Element('div', 'pagination-container');
    this.span = new Element('span', 'pagination-item');
    this.div.setElementAttribute('id', 'pagination');
    this.quantityspan = 3;
    this.fillContainer();
    return this.div.element;
  }

  fillContainer() {
    for (let i = 0; i < this.quantityspan; i += 1) {
      if (i === 1) {
        this.span.element.innerHTML = 1;
        this.span.element.classList.add('pagination-item-bgcolor');
        this.span.element.classList.remove('fa');
        this.span.element.classList.remove('fa-chevron-left');
      } else if (i === 0) {
        this.span.element.classList.add('fa');
        this.span.element.classList.add('fa-chevron-left');
        this.span.element.classList.remove('pagination-item-bgcolor');
      } else if (i === 2) {
        this.span.element.innerHTML = '';
        this.span.element.classList.add('fa');
        this.span.element.classList.add('fa-chevron-right');
        this.span.element.classList.remove('fa-chevron-left');
        this.span.element.classList.remove('pagination-item-bgcolor');
      }
      this.div.element.appendChild(this.span.element.cloneNode(true));
    }
  }
}
