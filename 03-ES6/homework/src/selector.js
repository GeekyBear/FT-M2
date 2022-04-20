var traverseDomAndCollectElements = function(matchFunc, startEl) {
  var resultSet = [];

  if (typeof startEl === "undefined") {
    startEl = document.body;
  }

  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien

  // TU CÓDIGO AQUÍ
  if(matchFunc(startEl)) resultSet.push(startEl)
    // Recorro el document.body que esta almacenado en startEl y miro sus children
  for (var i = 0; i < startEl.children.length; i++) {
    let child = startEl.children[i]
    // Hago recursividad en la funcion y reviso si sus hijos tienen hijos
    let elementsFound = traverseDomAndCollectElements(matchFunc, child)
    // almaceno lo que esta en el array resultSet y le sumo lo que va encontrando en cada recursion
    resultSet = [...resultSet, ...elementsFound]
  }
  //devuelvo el resultado
  return resultSet
};

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag


var selectorTypeMatcher = function(selector) {
  // tu código aquí
  // Lo pense pero la complique al pedo... *hard facepalm*
  // Si el selector empieza con # es un id, si empieza con '.' es una clase
  // Si lo puedo dividir en 2 con split y el '.' es porque son dos "palabras" y es un tag.class
  // Si no es ninguna de las anteriores es un tag
  if(selector[0] === '#') return 'id'
  if(selector[0] === '.') return 'class'
  if(selector.split('.').length === 2) return 'tag.class'
  return 'tag'  
};

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

var matchFunctionMaker = function(selector) {
  var selectorType = selectorTypeMatcher(selector);
  var matchFunction;
  // Si es un id hago un matchFunction y comparo si lo que recibo del selector es igual a lo
  // que recibi del elemento
  if (selectorType === "id") { 
    matchFunction = function(element){
      return '#' + element.id === selector
    }
  } else if (selectorType === "class") {
    matchFunction = function(element){
      let classes = element.classList;
      for (var i = 0; i < classes.length; i++) {
        if('.' + classes[i] === selector) return true
      }
    return false
    }
  } else if (selectorType === "tag.class") {
    matchFunction = function(element){
      let [t,c] = selector.split('.')
      return matchFunctionMaker(t)(element) && matchFunctionMaker('.' + c)(element)
    }    
  } else if (selectorType === "tag") {
    matchFunction = function(element){
      return element.tagName.toLowerCase() === selector
    }
  }
  return matchFunction;
};

// NOTA IMPORTANTE //
/*
La función `$` se comporta exactamente casi como `document.querySelectorAll` o JQuery's `$`.
Toma un string de un selector CSS y devuelve un arreglo de elementos en el documento que matchea 
el selector. Por ejemplo, `$('img.photo')` debería retornar un arreglo con todos los nodos HTML 
`<img>` que tienen `class="photo"`
*/

var $ = function(selector) {
  // Creo una variable elementos
  var elements;
  // Almaceno en selectorMatchFunc la funcion retornada de matchFunctionMaker
  var selectorMatchFunc = matchFunctionMaker(selector);
  // En elements almaceno lo que recolecto desde la funcion traverseDomAndCollectElements
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  // Devuelvo los elementos que encontre
  return elements;
};
