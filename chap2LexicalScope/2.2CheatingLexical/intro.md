# CHEATING LEXICAL

Si el scope lexical es definido solo donde una funcion es declarada, la cual es enteramente, la cual es
una descicion author-time, como puede ver alguna posibilidad de modificar (hacer trampa) al lexical runtime?
Javascript tiene dos mecanismos. Los dos de ellos son desaprobados a lo largo de la comunidad como una
mala practica en el codigo que escribimos. Pero los argumentos que por lo general se toman para desaprobar
no estan relacionados al lexical scope que este es el punto mas importante: Hacerle trampa al scope lexico
lleva a tener una mal rendimiento en el programa.
Antes de que explique el problema de rendimiento, vamos a ver como funcionan estos dos mecanismos.
