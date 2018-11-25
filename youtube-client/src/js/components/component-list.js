import ViewItem from './component';
import Element from './create-element';
import youToobeRequest from '../services/search-service';

export default class ViewList {
  constructor(responsedata) {
    this.listcontainer = new Element('div', 'list-container');
    this.listcontainer.setElementAttribute('id', 'carousel', 'style', 'marginLeft: 0');
    this.width = document.documentElement.clientWidth;
    this.mousedown = (event) => {
      this.swapEnable(event);
    };
    this.mousemove = (event) => {
      this.move(event);
    };
    this.mouseup = (event) => {
      this.swapDisable(event);
    };
    this.listcontainer.setEvent('mousedown', this.mousedown,
      'mousemove', this.mousemove,
      'mouseup', this.mouseup,
      'touchstart', this.mousedown,
      'touchmove', this.mousemove,
      'touchend', this.mouseup);
    this.index = 0;
    this.data = responsedata;
    this.position = 0;
    this.numberofpage = 1;
    this.countpage = 0;
    this.initItemsList();
  }

  get element() {
    return this.listcontainer.element;
  }

  initItemsList(list, data) {
    if (list !== undefined && data !== undefined) {
      this.listcontainer.element = list;
      this.data = data;
    }
    this.amountofelements = Math.floor(this.width / 350);
    this.data.forEach((element) => {
      this.item = new ViewItem(element);
      this.item.setAttribute('style', `margin: 50px ${(this.width / this.amountofelements - 300) / 2}px 0`);
      this.listcontainer.element.appendChild(this.item);
      this.index += 1;
    });
  }

  getPagination() {
    this.div = document.getElementById('pagination');
    this.pagination = this.div.children;
    this.carousel = document.getElementById('carousel');
    this.click = (e) => {
      this.onClick(e);
    };
    this.div.addEventListener('click', this.click);
  }

  calculatePages() {
    this.elementsonpage = Math.floor(this.width / 350);
    this.totallength = this.carousel.children.length;
    this.pagesofallelements = Math.floor(this.totallength / this.elementsonpage);
  }

  swapEnable(event) {
    this.width = document.documentElement.clientWidth;
    this.middle = this.position;
    this.rightendpoint = this.width + this.middle;
    this.leftendpoint = this.middle - this.width;
    this.swapcondition = true;
    this.screenMiddle(event);
    this.calculatePages();
    if (this.screenmiddle < this.width / 2) {
      this.swapdirection = 'left';
    } else { this.swapdirection = 'right'; }
  }

  screenMiddle(event) {
    this.screenmiddle = event.clientX || event.changedTouches[0].pageX;
  }

  move(event) {
    if (this.swapcondition === true) {
      this.mousemove = event.clientX - this.middle
      || event.changedTouches[0].pageX - this.middle;
      this.screenMiddle(event);
      if (this.swapdirection === 'left') {
        this.position = this.mousemove;
      } else if (this.swapdirection === 'right') {
        this.position = this.mousemove - this.width;
      }
      this.carousel.style.marginLeft = `${this.position}px`;
    }
  }

  swapDisable() {
    this.swapcondition = false;
    this.position = Math.floor(this.position);
    this.position = Math.abs(this.position);

    if (this.swapdirection === 'left') {
      if (this.middle < this.width) {
        while (this.position > 0) {
          this.position -= 1;
          this.carousel.style.marginLeft = `${this.position}px`;
        }
      } else if (this.middle >= this.width) {
        this.calculatePosition(this.leftendpoint, this.middle);
      }
    } else if (this.swapdirection === 'right') {
      this.screenmiddle = this.width - this.screenmiddle;
      this.calculatePosition(this.middle, this.rightendpoint);
    }
  }

  calculatePosition(backposition, changepage) {
    if (this.swapdirection === 'left') {
      this.rule1 = this.screenmiddle > this.width / 2;
      this.rule2 = this.screenmiddle <= this.width / 2;
      if (this.rule1) {
        this.changePage(-1);
      }
    } else if (this.swapdirection === 'right') {
      this.rule1 = this.screenmiddle <= this.width / 2;
      this.rule2 = this.screenmiddle > this.width / 2;
      if (this.rule2) {
        this.changePage(1);
      }
    }
    if (this.rule1) {
      while (this.position > backposition) {
        this.position -= 1;
        this.carousel.style.marginLeft = `${-this.position}px`;
      }
    } else if (this.rule2) {
      while (this.position < changepage) {
        this.position += 1;
        this.carousel.style.marginLeft = `${-this.position}px`;
      }
    }
  }

  upload() {
    if (this.numberofpage === this.pagesofallelements - 1) {
      const searchtext = window.sessionStorage.getItem('value');
      this.uploadData = (data) => {
        this.initItemsList(this.carousel, data.items);
      };
      youToobeRequest(searchtext, true, this.uploadData);
    }
  }

  changePage(value) {
    this.numberofpage += value;
    this.pagination[1].innerHTML = this.numberofpage;
    this.upload();
    this.calculatePages();
  }

  onClick(event) {
    for (let i = 0; i < this.pagination.length; i += 1) {
      if (this.pagination[i] === event.target) {
        this.el = i;
        break;
      }
    }
    let val = this.el - 1;
    if (this.numberofpage < 2 && val === -1) {
      val = 0;
    }
    if (this.el < 1) {
      this.position = this.position - this.width * Math.abs(val);
      this.carousel.style.marginLeft = `${-this.position}px`;
    } else if (this.el > 1) {
      this.position = this.position + this.width * Math.abs(val);
      this.carousel.style.marginLeft = `${-this.position}px`;
    }
    this.changePage(val);
  }
}
