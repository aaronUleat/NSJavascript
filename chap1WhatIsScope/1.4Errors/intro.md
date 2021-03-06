# ERRORS

Por que importa si llamamos un LHS o RHS?

Por que estos dos tipos de busqueda se comportan diferente en circunstancias donde la variable no ha sido
declarada (si no se ha encontrado en ninguno de los scopes consultados).

Considere:

```
function foo(a) {
    console.log(a + b);
    b = a;
}

foo(2);
```

Cuando la busqueda RHS ocurre por primera vez, no va ser encontrada. Esto es dicho como una variable "undecleared",
por que no se encontro en el scope.
Si una busqueda RHS falla al encontrar una variable, en cualquier lado de los scopes anidados, esto resulta en un error
'RerenceError' que es enviada por el Engine. Es importante notar que el error no es del tipo 'ReferenceError'.

En contraste, si el engine esta ejecutando un LHS, y arriba en el piso de mas arriba (global scope) si encontrarla, si
el programa no esta corriendo en modo estricto, entonces el scope global crea una nueva variable con ese nombre en el
scope global, y lo devuelve al Engine.

"Noo, no habia una antes, pero fue de ayuda y creo una nueva".

"Stric Mode", que fue agregado en ES5, tiene un numero de diferentes comportamientos de normal/relaxed/lazy mode. Un
comportamiento es que rechaza el automatic/implicit creacion de variables globales. En ese caso, no habra scope
global para varibles para enviar desde la busqueda LHS y el motor va a tirar una referencia "ReferenceError" similar
al RHS case.

Ahora la variable es encontrada en RHS, pero usted trata de hacer con, pero usted trata de hacer algo con el valor
que no es posible, como tratar de ejecutar como una funcion a un valor que no es una funcion, o referenciar una
propiedad  que es null o undefined, despues el Engine enviar un error diferente, llamado TypeError.
ReferenceError esta relacionado a una falla de resolucion en el scope, mientras TypeError implica que la resolucion
del scope fue existosa, pero que hubo una accion imposible/ilegal intentada en contra del resultado.