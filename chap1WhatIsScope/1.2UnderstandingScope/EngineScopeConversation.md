# ENGINE/SCOPE CONVERSTATION

```
function foo(a) {
    console.log(a); // 2
}
foo(2)
```
Vamos a imaginar el intercambio (el cual procesa este snnipet) como una conversacion. La conversacion va algo como esto:

Engine: Hey Scope. Tengo una referencia RHS que referencia a 'foo'. Ha escuchado hablar de ella?

Scope: Si porque, si he escuchado hablar de ella. El compilador la declaro solo hace un momento atras. Es una funcion.

Engine: Genial, Gracias!. Ok, estoy ejecutando foo.

Engine: Hey, Scope, tengo una referencia LHS para 'a', alguna vez ha escuchado de ella?

Scope: Si porque, La tengo. El compiler la declaro como un parametro para foo recientemente.

Engine: De ayuda como siempre, Scope. Gracias de nuevo. Hora de asignar el '2' a 'a'.

Engine: Hey scope, perdon por molestar de nuevo. Necesito una referencia RHS y que busque por console, ha escuchado
hablar de ella.

Scope: No hay problema, Engine, eso es lo que hago todo el dia. Si, tengo una funcion built-in que se llama console.

Engine: Perfecto. Estoy buscando log(..). Ok genial, es una funcion.

Engine: Yo Scope. Usted me puede aydar con un RHS que referencia a 'a'. Creo que la recuerdo, pero solamente para volver
a chequear.

Scope: Si correcto, La misma variable, no ha cambiado.

Engine: Cool. Pasando el valor de 'a', el cual es 2, dentro de log(..);
