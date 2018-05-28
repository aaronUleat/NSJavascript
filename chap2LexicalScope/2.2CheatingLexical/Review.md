# REVIEW

El scope lexico significa que el scope es definido por desiciones del autor-time de donde las funciones
son declaradas. La fase de lexing de compilacion es escencialmente  permitir saber donde y como todos los
identificadores son declarados, y asi predecir como las variables van hacer buscadas durante la ejecucion.

Dos mecanimos en Javascript pueden hacer trampa del lexical scope: eval(..) y 'with'. Pueden modificar
el scope lexico a la hora de ejecucion al evaluar un string de codigo que tiene uno o mas delclaraciones,
en ella. Escencialmente crea un nuevo scope lexico(de nuevo, en el momento de ejecucion) al tratar una referencia
de un objeto como un scope y las propiedades del los indentificadores del scope.
La desventaja de este mecanismo es que derrota la abilidad del motor de ejecutar tiempo de compilacion respecto
a la busqueda del scope, por que el motor tiene que asumir con pesimismo que tal optimizacion va ser invalida.
El codigo va a correr mas lento como resultado de usar esta feature.
Asi que no lo use.