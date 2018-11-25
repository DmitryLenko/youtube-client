export default class Element {
  constructor(element, ...styleClass) {
    this.element = document.createElement(element);
    if (styleClass.lenght !== 0) {
      styleClass.forEach((item) => {
        this.element.classList.add(item);
      });
    }
  }

  get elment() {
    return this.element;
  }

  setElementAttribute(...attribute) {
    if (attribute.length !== 0 && attribute.length % 2 === 0) {
      const attributeName = attribute.filter((item, index) => index % 2 === 0);
      const attributeValue = attribute.filter((item, index) => index % 2 !== 0);
      for (let i = 0; i < attributeName.length; i += 1) {
        this.element.setAttribute(attributeName[i], attributeValue[i]);
      }
    }
  }

  setEvent(...event) {
    if (event.length !== 0 && event.length % 2 === 0) {
      const eventName = event.filter((item, index) => index % 2 === 0);
      const eventValue = event.filter((item, index) => index % 2 !== 0);
      for (let i = 0; i < eventName.length; i += 1) {
        this.element.addEventListener(eventName[i], eventValue[i]);
      }
    }
  }
}
