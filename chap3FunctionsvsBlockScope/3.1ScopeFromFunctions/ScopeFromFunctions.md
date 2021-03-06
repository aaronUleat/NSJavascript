# SCOPE FROM FUNCTIONS

La respuesta para esas preguntas es que Javascript es que tiene el scope basado en funciones. Eso es, cada es
que cada funcion que usted declara crea una burbuja para si misma, pero no otra estructura crea su propia
burbuja de scope. Como vamos a ver, dentro de poco, esto no es tan cierto.
Pero primero, vamos a explorar el scope de funciones y sus aplicaciones
Considere el siguiente codigo.

```
function foo(a) {
    var b = 2;
    // some code
    function bar() {
        // ...
    }
    // more code
    var c = 3;
}
```
En este snippet, la burbuja de scope de foo(..) incluye los identificadores 'a', 'b', 'c' y bar. No importa
donde en el scope una declaracion aparece, la variable o funcion pertenece al contenedor de la burbja
del scope, sin importar. Vamos a explorar como exactamente eso funciona que funciona en el siguiente capitulo.
bar(..) tiene su propia burbuja de scope. Entonces el scope global, el cual tiene solo un identificador
agregado a foo(..).
Por que a, b, c y bar pertenecen a la burbuja de scope de foo(..), ellos no estan accesibles fuera de foo(..). Eso
es, el siguiente codigo va a resultar en RefencerError error, como el identificador no esta avilitado en el scope
global.
bar(); // fails
console.log(a, b, c); // all 3 fail

Sin embargo, todos identificadores (a, b, c, foo, y bar) son accesibles dentro de foo(..), y de hecho avilitado
para usar dentro de bar(..) (asumiendo de que no hay un indentificador sombreado dentro de la declaracion de bar(..))
El scope de la funcion alienta la idea que todas las variables pertenecen a la funcion, y que pueden ser usadas y
reusadas a lo largo de la funcion (y de hecho, accesible dentro de los scopes anidados). Este diseno se enfoca
puede ser muy util, y ciertamente puede hacer uso total de la naturaliza dinamica de Javascript, las variables
toman valores de valores de diferentes tipos.
Por otro lado, si usted no toma precausiones, las variales que existen a travez de todo el scope pueden llevar
a algunas trampas.
