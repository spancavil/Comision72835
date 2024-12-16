/* 
Realizar una lista nueva (array) que contenga todos los tipos de productos (no cantidades), 
consejo: utilizar Object.keys y Array.includes. Tip adicional: utilizar "Set".
Mostrar el array por consola.
Posteriormente, obtener el total de productos vendidos por todos los objetos (utilizar Object.values).
*/

const objetos =  [
	{
		manzanas:3,
		peras:2,
		carne:1,
		jugos:5,
		dulces:2
	},
	{
		manzanas:1,
		sandias:1,
		huevos:6,
		jugos:1,
		panes:4
	}
]

//Ejemplo set
const noRepetidos = new Set(["manzana", "manzana", "arandanos", "kiwi"])
console.log(noRepetidos);
const noRepetidosArray = Array.from(noRepetidos)
console.log(noRepetidosArray);
