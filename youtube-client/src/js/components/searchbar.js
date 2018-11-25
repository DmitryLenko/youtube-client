import Element from './create-element';
import Search from '../services/search-service';
import ViewList from './component-list';
import Pagination from './pagination';

export default class SearchBar {
  constructor() {
    this.input = new Element('input', 'input');
    this.contaier = new Element('div', 'input-container');
    this.icon = new Element('i', 'fa', 'fa-search', 'input-icon');
    this.input.setElementAttribute('placeholder', 'enter somebody');
    this.input.setEvent('keyup', this.submitValue);
    this.contaier.element.appendChild(this.icon.element);
    this.contaier.element.appendChild(this.input.element);
    return this.contaier.element;
  }

  submitValue(event) {
    if (event.keyCode === 13) {
      const el = document.querySelector('input');
      window.sessionStorage.setItem('value', el.value);
      Search(el.value, false, this.getData);
    }
    this.getData = (data) => {
      const list = new ViewList(data.items);
      const pagination = new Pagination();
      const curentlist = document.getElementById('carousel');
      const oldpagination = document.getElementById('pagination');
      if (curentlist !== null) {
        document.body.removeChild(curentlist);
        document.body.removeChild(oldpagination);
      }
      document.body.appendChild(list.element);
      document.body.appendChild(pagination);
      list.getPagination();
    };
  }
}
