import Element from './create-element';

export default class ViewItem {
  constructor(responsedata) {
    this.itemblock = new Element('div', 'view-container');
    this.itemimage = new Element('img', 'view-image');
    this.itemtitle = new Element('div', 'view-title');
    this.itemlist = new Element('ul', 'view-list');
    this.itemlistelement = new Element('li', 'view-list-item');
    this.itemparagraph = new Element('p', 'view-some-info');
    this.itemlink = new Element('a');
    this.icon = undefined;
    this.payload = [];
    this.data = responsedata;
    this.init();
    return this.itemblock.element;
  }

  init() {
    this.createImage();
    this.createTitle();
    this.createInfo();
    this.createSomeInfo();
  }

  createImage() {
    this.itemimage.setElementAttribute('src', this.data.snippet.thumbnails.medium.url, 'height', '250', 'width', '100%', 'alt', 'picture');
    this.itemblock.element.appendChild(this.itemimage.element);
  }

  createTitle() {
    this.itemlink.setElementAttribute('href', `https://www.youtube.com/watch?v=${this.data.id}`, 'target', '_blank');
    this.itemlink.element.innerHTML = this.data.snippet.title;
    this.itemtitle.element.appendChild(this.itemlink.element);
    this.itemblock.element.appendChild(this.itemtitle.element);
  }

  createInfo() {
    const iconClases = ['fa', 'fa-male', 'fa', 'fa-calendar', 'fa', 'fa-eye'];
    let date = new Date(this.data.snippet.publishedAt);
    let month = date.getUTCMonth() + 1;
    let day = date.getUTCDate();
    const year = date.getUTCFullYear();
    if (month < 10) month = `0${month}`;
    if (day < 10) day = `0${day}`;
    date = `${day}-${month}-${year}`;
    this.payload = [this.data.snippet.channelTitle,
      date,
      this.data.statistics.viewCount,
    ];
    for (let i = 0, j = 0; i < this.payload.length; i += 1, j += 2) {
      this.icon = new Element('i', iconClases[j], iconClases[j + 1]);
      this.itemlistelement.element.innerHTML = this.payload[i].toLowerCase().slice(0, 20);
      this.itemlistelement.element.appendChild(this.icon.element.cloneNode(true));
      this.itemlist.element.appendChild(this.itemlistelement.element.cloneNode(true));
    }
    this.itemblock.element.appendChild(this.itemlist.element);
  }

  createSomeInfo() {
    this.itemparagraph.element.innerHTML = this.data.snippet.description.slice(0, 150).concat('...');
    this.itemblock.element.appendChild(this.itemparagraph.element);
  }
}
