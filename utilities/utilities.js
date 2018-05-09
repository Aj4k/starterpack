function displayarrayaslist(tableau) {
  document.write('<ul>');

  if (Array.isArray(tableau)) {

    for (var index = 0; index < tableau.length; index++) {
      document.write(`
        <li> ${tableau[index]} </li><br/>
      `);
    };

  } else {
    document.write(`pas un tableau`)
  }
  document.write('</ul>');
};


function initEvent(selector,event,handler){
  document.querySelector(selector).addEventListener(event,handler);
};
initEvent ('#selector','event','doSomething')



function getRandomInteger(min, max) {
  // Renvoie un nombre entier aléatoire compris entre les arguments min et max inclus.
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
