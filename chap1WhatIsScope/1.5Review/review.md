# REVIEW

El scope es un conjunto de reglas que determina donde y como una variable(identificador) puede ser buscada. Esta
busqueda puede ser con el proposito de asignar una variable, que es una referencia LHS, o talvez con el proposito
de recuperar el valor de la varible un RHS referencia.

Las referencias LHS se dan por asignaciones a operaciones. Relacionadas al Scope pueden ocurrir cuando se hace una
asignacion con el operador '=' o al pasar un argumento a un parametro de una funcion (asign to).

El Engine de Javascript primero compila el codigo antes de que se ejecute, y al hacerlo, divide los statements como
var a = 2;
en pasos diferentes:
    1- Primero, var a para declararlo en ese scope. Esto es ejecutado al comienzo, antes de la ejecucion del codigo.
    2- Despues, a = 2 vara buscar la variable con una referencia LHS y despues asignarla si la variable es escontrado.

Los dos referencia LHS and RHS empiezan a buscar al scope que se esta ejecutando al momento, Y si es necesario (es
decir, ellas no encuentran lo que andan buscando en ese scope)