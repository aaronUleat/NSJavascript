# NESTED SCOPE

Nosotros decimos que el Scope es una conjunto de reglas para buscar variables por su nombre identificador. Usualmente
hay mas de un scope a considerar, sin embargo.

Solo un bloque o una funcion esta anidada dentro de otro bloque o funcion, los scopes son anidados dentro de otro
scope. Entonces, si una variable no puede ser encontrada en el scope inmediato. El engine consultael siguiente scope
contenedor exterior, continuando hasta que se encuentre o hasta la mas exterior (a.k.a global) hasta que el scope
sea alcanzado.

Considere el siguiente snippet:

```
function foo(a) {
    console.log(a + b);
}

var b = 2;
foo(2); // 4
```
La referencia RHS para b no puede ser resulta dentro de la funcion foo, pero puede ser resulta en el scope que la rodea
(en este caso, el global);

Entonces, revisitando la conversacion entre Engine y Scope, Escuchamos:

Engine: Hey, scope of foo, alguna vez escucho de b? Tiene una referencia RHS.

ScopeFoo: No, nunca he escuchado de ella.

Engine: Hey scope fuera de foo, o sea el scope global. Ok cool, alguna vez escucho de b? Tiene una referencia
RHS

ScopeGlobal: Si, si la tengo.

La simple regla para atravezar el scope anidado. El engine inicia al reciente scope de ejecucion. busca por la variable
ahisi no la encuentra, continua un nivel, y asi continuamente. Si el mas exterior scope global es alcanzado, la busqueda
termina, si encuentra la variable o no la encuentra.

## BUILDING ON METAPHORS

Para visualizar el proceso de resolusion del scope anidado, quiero que piense en este edificio:

El edificio representa nuestro Programa anidado en el conjunto de reglas del scope. El primer piso del edificio
representa su scope ejecutado al corriente, sin importar donde este. El nivel mas alto del edificio es el scope global.
Usted resuleve las referencias LHS y RHS buscando su piso al corriente, y si no lo encuentra, tomar el elevador
al siguiente nivel, buscando ahi, despues en el siguiente, y asi. Una vez que usted llegue al ultimo piso (el scope
global), Usted encontrar lo que usted esta buscando o talvez no. pero usted tiene que parar a pesar de todo.
![Edificio](Screenshot%20from%202017-06-27%2010-20-12.png)

