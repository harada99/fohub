window.addEventListener("DOMContentLoaded", (event) => {
  console.info("-----window.DOMContentLoaded-----",event);
});
window.addEventListener('load', (event) => {
  console.info("-----window.onload-----",event);
  //Jasmine2.ciao();
  Jasmine.ciao();
});

class Jasmine {
  constructor(name) {
    this.name = name;
  }
  static ciao(msg) {
    console.log(`ciaos:${msg}`);
  }
}

export class Util {
  static nowTimeStr(){
    const now = new Date();
    return `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
  }
}


