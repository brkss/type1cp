

let currentScrool = 0;
let scrollTimer = null;
const pageHeight = window.innerHeight;


window.addEventListener('scroll', (e) => {

  if(scrollTimer == null){
    clearTimeout(scrollTimer);
  }
  scrollTimer = setTimeout(() => {
    console.log("scroll ended !");
      
    if(window.scrollY > currentScrool + 1){
      currentScrool += pageHeight;
      window.scrollBy(0, currentScrool);
    }else {
      currentScrool -= pageHeight;
      window.scrollBy(0, currentScrool);
    }

  }, 500);

})
