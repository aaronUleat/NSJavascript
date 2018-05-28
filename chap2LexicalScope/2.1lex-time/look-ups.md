# LOOK-UPS

La estructura y posicionamiento relativo de estas burbujas explica totalmente al engine todos los
lugares que necesita ir a encontrar y identificar.
En snippet previo, el engine enecutaba el console.log(...) y fue a buscar por las tres variables
referenciadas a,b y c. Primero inicia con el scope de la burbuja mas interior, el scope de bar. No va a
encontrar la variable 'a' ahi, entonces va un nivel mas arriba, fuera al siguiente burbuja de scope mas
cercana, el scope de foo(). Encuentra a la variable 'a' ahi, entonces usa esa variable 'a'. Lo mismo para la
variable 'b'. Pero la variable  'c', se encuentra dentro de la funcion bar(..).

Habia habido una variable 'c' dentro de bar(...) y dentro de foo(..), el console.log(..) habria encontrado
y usado el que se encontro en bar(..), nunca la que esta dentro de de foo(..).

El scope que buscamos una vez que se encuentra el primer match. El mismo nombre del identificador puede
ser especificado en capas multiples del scope anidado, el cual es llamado "sombreado" (el indentificador
interior "sombras" el identificador exterior). A pesar del sombreado, el la busqueda que hace el scope
inicia en el scope mas interno que ha sido ejecutado al momento, y funciona hacia arriba/hacia afuera hasta
que encuentre el primer match y se detiene.

Las variables globales son automaticamente tambien propiedades del objeto global (window en el browser, etc)
entonces es posible referenciar una varaible global no directamente por su nombre lexico, pero en vez
idirectamente tiene una referencia de una propiedad del objeto global.
// window.a

Esta tecnica da acceso a variables globales que de otra manera serian no accesibles debido ha que ha sido
enviadas a las sombras. Sin embargo las variables en las sombras las que no son globales no pueden ser accesadas.

No importa donde en la funcion invocada, o incluso como ha sido invocado, su scope lexical esta definido por donde
la funcion fue declarada.

El lexical socope busca, procesa, solo aplica los identificadores de primera clase, tales como 'a', 'b' y 'c'.
Si usted tiene una referencia de foo, bar, baz en una pieza de codigo, el scope lexical busca y aplica
para buscar el identificador foo, pero una vez que que localize esa variable, el objeto, property-access
reglas que toman para resolver las propiedades bar y baz. Respectivamente