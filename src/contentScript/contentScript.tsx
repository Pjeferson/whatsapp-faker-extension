import { faker } from '@faker-js/faker';

const RETRY_SETUP_TIME = 250;

function isWhatsAppLoaded() {
  return document.querySelector('.app-wrapper-web .two') !== null;
}

function replaceContactNames() {
  document
    .querySelectorAll('#pane-side div[role="row"] span[dir="auto"')
    .forEach((nameElm) => {
      nameElm.textContent = faker.name.findName();
    });
}

function replaceMessages() {
  document
    .querySelectorAll('#pane-side div[role="row"] span[dir="ltr"')
    .forEach((msgElm) => {
      msgElm.textContent = faker.lorem.paragraph();
    });
}

function replaceContactImages() {
  document
    .querySelectorAll('#pane-side div[role="row"] img')
    .forEach((elm) => {
      const imgElm = elm as HTMLImageElement;

      imgElm.src = faker.image.avatar();
    });
}

function setup() {
  if (!isWhatsAppLoaded()) {
    setTimeout(() => setup(), RETRY_SETUP_TIME);

    return;
  }

  replaceContactNames();
  replaceMessages();
  replaceContactImages();
}

setup();
