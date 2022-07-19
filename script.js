//Genero el array de libros(productos)
const productos = [
    {   id: 1,  nombre: "Papel Pintado",autor:"Diego Giacomini", editorial:"Galerna", genero:"Política y Economía", precio: 1000},
    {   id: 2,  nombre: "La Revolucion De La Libertad", autor:"Diego Giacomini", editorial:"Galerna", genero:"Política Y Economía", precio: 1000},
    {   id: 3,  nombre: "Libertad-Libertad-Libertad"  , autor:"Milei Giacomini", editorial:"Galerna", genero:"Política", precio: 1000},
    {   id: 4,  nombre: "Hacia una nueva Libertad" , autor:"Rothbard", editorial:"Unión Editorial", genero:"Filosofía, Política, Liberalismo, Economía", precio: 1000},
    {   id: 5, nombre:"Que le hizo el gobierno a nuestro dinero", autor:"Rothbard", editorial:"Unión Editorial", genero:"Ciencias económicas", precio:1000},
    {   id: 6, nombre:"La anatomia del estado", autor:"Rothbard", editorial:"Unión Editorial", genero:"Economía, Ciencias sociales", precio: 1000},
    {   id: 7, nombre:"Competencia y empresarialidad", autor:"Israel M. Kirzner", editorial:"Unión Editorial", genero:"Ciencias económicas", precio: 1000},
    {   id: 8, nombre:"Liberalismo - La tradición clásica", autor:"Ludwig von Mises", editorial:"Unión Editorial", genero:"Ciencias económicas, Ciencias Sociales, Política", precio: 1000},
    {   id: 9, nombre:"Política económica", autor:"Ludwig von Mises", editorial:"Unión Editorial", genero:"Ciencias económicas, Economía, Política", precio: 1000},
    {   id: 10, nombre:"Crítica del intervencionismo", autor:"Ludwig von Mises", editorial:"Unión Editorial", genero:"Política, Economía", precio: 1000},
    {   id: 11, nombre:"Autobiografía de un liberal", autor:"Ludwig von Mises", editorial:"Unión Editorial", genero:"Ciencias sociales y humanísticas", precio: 1000},
    {   id: 12, nombre:"La mentalidad anticapitalista", autor:"Ludwig von Mises", editorial:"Unión Editorial", genero:"Ciencias sociales y humanísticas, Economía", precio: 1000},
];

for (const producto of productos) {
let contenedor = document.createElement("div");
contenedor.innerHTML = `<h3> ID: ${producto.id}</h3>
          <p>  Libro: ${producto.nombre}</p>
          <p>Autor: ${producto.autor}</p>
          <p>Editorial: ${producto.editorial}</p>
          <p>Genero: ${producto.genero}</p>
          <b>Precio: $${producto.precio}</b>`;
          document.body.appendChild(contenedor);
}

let Saludo = document.getElementById("H1")
console.log( H1.innerText ) // Holaaa
H1.innerText = "Bienvenido a la mejor Libreria"
console.log(Saludo); // "Bienvenido a la mejor Libreria"

let aux = document.getElementById("H2")
H2.innerText = "Ojala encuentre lo que desee"

console.log(aux); // "Ojala encuentre lo que desee"




    