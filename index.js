

function hasValidPrice(product) {
    if (typeof product?.price === "number" && product?.price >= 0){
        return true
      }
    else{
        return false
      };
              
    }

    
//Estoy tratando de escribir una función para aplanar una matriz de subarreglos en un arreglo. (Supongamos que no sé que hay un método .flat() en el prototipo de Array).

//En otras palabras, quiero transformar esto: [[1, 2], [3, 4]] en [1, 2, 3, 4].



function flatten(arr) {
	const result = [];
	arr.forEach((element) => {
		result.push(...element);
	});
	return result;
}


//El siguiente código intenta agregar un clon de una arreglo a sí mismo. No hay ningún mensaje de error, pero los resultados no son los esperados. ¿Puedes arreglar el código?

function clone(arr) {
  let newArr = []
  newArr.push(arr)
  return arr.concat(newArr);
};

