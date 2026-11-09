// 1. Utiliza map, filter y reduce para crear un ejemplo diferente al de la lección

const productos = [
  { nombre: "Camiseta", precio: 20, enStock: true },
  { nombre: "Pantalón", precio: 50, enStock: false },
  { nombre: "Zapatillas", precio: 80, enStock: true },
  { nombre: "Calcetines", precio: 5, enStock: true }
]

// 1. filter: Seleccionamos solo los productos disponibles en stock
const disponibles = productos.filter(producto => producto.enStock) 

// 2. map: Aplicamos un 10% de descuento a cada producto disponible
const preciosConDescuento = disponibles.map(producto => producto.precio * 0.9) 

// 3. reduce: Calculamos el coste total de la cesta con descuento
const totalCompra = preciosConDescuento.reduce((acumulador, precio) => acumulador + precio, 0) 

console.log(disponibles) 
console.log(preciosConDescuento)  // [18, 72, 4.5]
console.log(totalCompra)  // 94.5

// 2. Dado un array de números, crea uno nuevo con dichos números elevados al cubo y filtra sólo los números pares

const numeros = [1, 2, 3, 4, 5, 6, 7, 8] 

const resultado = numeros
  .map(num => num ** 3)
  .filter(num => num % 2 === 0) 

console.log(resultado)  // [8, 64, 216, 512]


// 3. Utiliza flat y flatMap para crear un ejemplo diferente al de la lección

// flat: Aplanar matriz de subcategorías a nivel 2
const inventarioPorCategoria = [
  ["Electrónica", ["Móvil", "Portátil"]],
  ["Hogar", ["Mesa", ["Silla", "Lámpara"]]]
] 

const inventarioAplanado = inventarioPorCategoria.flat(2) 
console.log(inventarioAplanado)  
// ["Electrónica", "Móvil", "Portátil", "Hogar", "Mesa", "Silla", "Lámpara"]

// flatMap: Extraer y aplanar los productos pedidos por clientes
const pedidos = [
  { cliente: "Ana", articulos: ["Libro", "Bolígrafo"] },
  { cliente: "Luis", articulos: ["Cuaderno"] },
  { cliente: "Marta", articulos: ["Mochila", "Estuche"] }
] 

const todosLosArticulos = pedidos.flatMap(pedido => pedido.articulos) 
console.log(todosLosArticulos)  
// ["Libro", "Bolígrafo", "Cuaderno", "Mochila", "Estuche"]



// 4. Ordena un array de números de mayor a menor

const numerosDesordenados = [15, 42, 3, 89, 7, 100, 23] 

numerosDesordenados.sort((a, b) => b - a) 

console.log(numerosDesordenados)  // [100, 89, 42, 23, 15, 7, 3]

// 5. Dados dos sets, encuentra la unión, intersección y diferencia de ellos

const setA = new Set([1, 2, 3, 4, 5]) 
const setB = new Set([4, 5, 6, 7, 8]) 

// Unión
const union = new Set([...setA, ...setB]) 
console.log(union)  // Set(8) { 1, 2, 3, 4, 5, 6, 7, 8 }

// Intersección
const interseccion = new Set([...setA].filter(elemento => setB.has(elemento))) 
console.log(interseccion)  // Set(2) { 4, 5 }

// Diferencia (elementos en A que no están en B)
const diferencia = new Set([...setA].filter(elemento => !setB.has(elemento))) 
console.log(diferencia)  // Set(3) { 1, 2, 3 }

// 6. Itera los resultados del ejercicio anterior

console.log("--- Iteración de Unión ---") 
union.forEach(val => console.log(`Elemento unión: ${val}`)) 

console.log("--- Iteración de Intersección ---") 
for (const val of interseccion) {
  console.log(`Elemento intersección: ${val}`) 
}

console.log("--- Iteración de Diferencia ---") 
diferencia.forEach(val => console.log(`Elemento diferencia: ${val}`)) 

// 7. Crea un mapa que almacene información se usuarios (nombre, edad y email) e itera los datos

const usuariosMap = new Map([
  [1, { nombre: "Ana", edad: 28, email: "ana@email.com" }],
  [2, { nombre: "Carlos", edad: 16, email: "carlos@email.com" }],
  [3, { nombre: "Elena", edad: 35, email: "elena@email.com" }],
  [4, { nombre: "Marcos", edad: 17, email: "marcos@email.com" }]
]) 

// Iteración del Mapa
usuariosMap.forEach((datos, id) => {
  console.log(`ID ${id} -> Nombre: ${datos.nombre}, Edad: ${datos.edad}, Email: ${datos.email}`) 
}) 

// 8. Dado el mapa anterior, crea un array con los nombres

const nombres = Array.from(usuariosMap.values()).map(usuario => usuario.nombre) 

console.log(nombres)  // ["Ana", "Carlos", "Elena", "Marcos"]

// 9. Dado el mapa anterior, obtén un array con los email de los usuarios mayores de edad y transfórmalo a un set

const emailsMayoresEdadSet = new Set(
  Array.from(usuariosMap.values())
    .filter(usuario => usuario.edad >= 18)
    .map(usuario => usuario.email)
) 

console.log(emailsMayoresEdadSet)  // Set(2) { 'ana@email.com', 'elena@email.com' }

// 10. Transforma el mapa en un objeto, a continuación, transforma el objeto en un mapa con clave el email de cada usuario y como valor todos los datos del usuario

// 1. Transformar el Mapa original en un Objeto
const usuariosObjeto = Object.fromEntries(usuariosMap) 
console.log("Objeto de usuarios:", usuariosObjeto) 

// 2. Transformar el Objeto en un nuevo Mapa con clave 'email' y valor todos los datos del usuario
const mapaPorEmail = new Map(
  Object.values(usuariosObjeto).map(usuario => [usuario.email, usuario])
) 

console.log("Nuevo Mapa por Email:", mapaPorEmail) 