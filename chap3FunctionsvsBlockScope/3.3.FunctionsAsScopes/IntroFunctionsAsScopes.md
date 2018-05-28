# FUNCTIONS AS SCOPES

Hemos visto que podemos tomar cualquier snippet de codigo y envolver una funcion alrededor,
y eso efectivamente "esconde" cualquier variable adjuanto o cualquier declaracion de funcion
de cualquier scope de fuera, solo funcionara dentro del scope de dentro.

Por ejemplo:

```
var a = 2;

function foo() {
    var a = 3;
    console.log(a); // 3

}
foo(); // and this
console.log(a) // 2
```

Mientras que esta tecnica funciona, no es ideal. hay unos problemas. El primero es que tenemos que declarar una
funcion llamada foo(..), lo que significa que el identificador es el nombre foo(), que contamina el codigo
en este caso el scope global. Tambien tenemos llamar explicitamente la funcion por el nombre de (foo()) que
es el codigo que esta enserrado dentro de la funcion sea ejecutado.
Seria mas ideal si la funcion no necesitara un nombre (o, mas bien, el nombre no contamine el scope que lo encierra).
Afortunadamente, Javascript ofrece una solucion a ambos problemas.

```
var a = 2;

(function foo() {
    var a = 3;
    console.log(a); // 3
})();

console.log(a); // 2
```
Vamos a descomponer lo que paso aqui.
Primerto note que la declaracion de la funcion inicia con (funcion ... en lugar de solo function ... Mientras esto
parece que es un detalle menor, es en realidad un cambio muy grande. En vez de tratar la funcion como una
declaracion standard, la funcion es tratada como una funcion expresada.

La manera mas facil de destinguir funciones declaradas vs funciones expresadas es la posicion de la palabra
funcion en la misma declaracion ( no solamente una linea, pero una declaracion distinta). Si function es la
primera cosa en la declaracion, entonces es una funcion declarada. De otra manera, es una funcion expresada.

La diferencia clave que podemos observar aqui entre una funcion declarada y una funcion expresada reside en donde
su nombre es ligado como un identificador.

Compare los dos snippets anteriores. En el primer snippet, el nombre foo es ligado en el scope encerrado, y
si lo llamamos directamente con foo(). En el segundo snippet, el nombre de foo no esta ligado en el scope encerrado
en vez de eso esta ligado solo dentro dentro de su misma funcion.

En otras palabras, (function foo(){...}) como una expresion significa que el identificador foo es encontrado
solo en el scope donde ... es indicado, no en el scope de afuera. Escondiendo el nombre foo dentro de si mismo
no contamina el scope que lo encierra unecesariamente.



