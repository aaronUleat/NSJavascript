# TEORIA DE COMPILADOR

Talvez sea evidente, o talvez sea una sorpresa, dependiendo en su nivel de interaccion con varios
lenguajes, pero a pesar del hecho que Javascript cae en la categoria de lenguajes "dinamicos" o
"interpretados", es de hecho un lenguaje que se compila. No se compila de la manera que clasicamente
se compilan lenguajes como C o Java, no son los resultados de una compilacion portable dentro de varios
sistemas de distribucion.

Pero, sin embargo, el motor de Javascript ejecuta muchas o los mismos pasos, aunque de una maneras mas
sofisticadas, de las comunmente estamos con al corriente de lo que hacen los compiladores de lenguajes
tradicionales.

En un lenguaje compilado tradicional el proceso, un pedazo de codigo, su programa, se somete a tres pasos
antes de ser ejecutado, brutalmente llamado "compilacion".

## Tokenizing/Lexing

Desglozando un caracter string dentro de algo significativo (para el lenguaje) pedazos, llamados
tokens. Por instancia considere el el programa:
var a = 2;
Este programa va ser desglosado va a ser desglosado en los siguientes tokens:
var, a, =, 2;
Los espacios en blanco puede o puede que no sean persibidos como un token, dependiendo si algo
significativo o no.

La diferencia entre toquenizing y lexing es sutil y academica, pero se centra en si o no estos
tokens son identificados stateless o stateful. Para ponerlo de manera simple, si el tokinizer
fuera a invocar reglas de parsing stateful para ver de que manera si deberia considerarse
un token distinto o deberia crear un token diferente, que estaria haciendo el lexing.

## Parsing

Hablando de la corriente (array) de tokens  que se vuelven dentro de un arbol de elementos
anidados, que colectivamente representa la estructura gramatica del programa. Este arbol es
llamado "AST" (abstract sintax tree).
El arbol para
var a = 2; quizas empieze con el nodo de alto nivel llamado, 'VariableDeclaration', con un nodo
hijo llamado indentificador (que seria el valor a), y otro nodo hijo llamado AsignmentExpression,
quien a si mismo tiene un nodo hijo llamado NumericLiteral (que su valor es 2);

## Code-Generation

El proceso de tomar "AST" (abstract sintax tree) y volverlo en codigo ejecutable.
Esta parte varia grandemente dependiendo en el lenguaje, la plataforma es eligir una orientacion
y asi en adelante.

Entonces, mejor dicho detalles atascados, lo que vamos hacer es ver superficialmente y decir
esa es la forma de obtener lo que previamente discutimos acerca del abstract sintax tree para
var a = 2;
Y volverlo dentro de un conjunto de instrucciones de maquinaria para que actualmente crear una
variable llamada (including reserving memory, etc) y despues guardar el valor dentro de "a";

Los Detalles de como le motor maneja los recursos del sistema, es mas profundo de lo que vamos
a ver, entonces solo vamos a tomar como aceptado, que el motor es capaz de crear y guardar variales
a como lo necesitemos.

El motor de Javascript es bastamente mas complejo que solo esos pasos del tree, como otros lenguajes
de compilacion. Por ejemplo, en el proceso de parsear y la generacion de codigo, hay ciertamente
ciertos pasos para optimizar el performance de ejecucion, incluyendo colapsar elementos redundantes, etc.

Estamos viendo esto de una manera muy amplea. Pero creo que usted vera en muy poco tiempo por que estos
detalles que cubrimos, inclusive a un alto nivel, son relevantes.

Por una cosa, el motor de Javascript no se da el lujo (como otros lenguajes compilados) de tener abundancia
de tiempo para optimizar, por que la compilacion de Javascript no pasa en la construccion de un paso
adelante, como en otros lenguajes.
Para Javascript, la compilacion que ocurre, en muchos casos, son meramente microsegundos o menos, antes
de que el codigo sea ejecutado. Para asegurar un performance mas rapido. El motor de Javascript usa
todo tipo de trucos (Like JITs, el cual cual compila lazy y tambien hace un hot compile), esos son mas
alla del scope de nuestra dicucion aqui.

Vamos a decir, por simplicidad, que cualquier snippet de Javascript tiene que ser compilado antes
(usualmente mucho antes) de que sea ejecutado. Entonces, el compiler de Javascript va a tomar el
programa;
var a = 2;
y lo compila primero, y despues esta listo para ejecutarlo, usualmente de inmediato.



    
    