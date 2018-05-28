# LEX-TIME

Como discutios en el capitulo 1, la primera fase tradicional de un lenguaje standard que es llamado lexing
(tokenizing). Si usted recuerda el proceso lexico, examina un string como fuente de los caracteres del codigo
y asigna semantica a los tokens como resultado del analisis del estado.
Es este concepto que provee la fundacion para entenderlo que es lexical scope y de donde viene el nombre.
Para definir algo circularmente, el scope lexico es el scope que es definido en el tiempo lexing. En otras palabras,
el lexical scope esta basado en donde las variables y bloques de un scope son escritos, por usted, en ese momento,
y asi es (mayormente) un conjunto en piedra para el momento que el lexer procesa su codigo.

Vamos a ver en un momento que hay algunas maneras de hacerle trampa al scope lexical, de este modo modificarlo despues
de que el lexer haya pasado, pero estos son muy mal vistos. Es considerado una mejor practica tratar el lexical
scope como, de hecho, le lexical unico, y asi enteramente en el tiempo natural lexico.

```
function foo(a) {
	var b = a * 2;
	function bar(c) {
		console.log(a, b, c);
	}
	bar(b * 3);
}
foo(2);
```

La burbuja 1 engloba el scope global y solo tiene un identificador en:
foo()

La burbuja 2 engloba el scope de foo, que incluye tres idenficadores: a, b y bar;

La burbuja 3 engloba el scope de bar y incluye un solo identificador: c;

El scope de la burbujas se define por donde los blocks de un scope son escritos, el cual esta anidado dentro
del otro, etc. En el siguiente capitulo vamos a discutir diferentes unidades de scope, pero por ahora, vamos
a asumir que cada funcion crea una nueva burbja de scope.
La burbuja de bar es enteramente contenido dentro de la burbuja de foo, por que (y solo por que) ahi es donde
nosotros escojemos definirla funcion bar.
Note que estar burbujas anidadas estan estrictamente anidadas. No estamos hablando de Diagramas de Venn donde
las burbujas pueden crusar fronteras. En otras palabras, no hay burbujas para algunas funciones que existen
simultaneamente (parcialmente) dentro de de otros scopes externos, solo como no funcion puede parcialmente estar
dentro de cada una de las funciones padres.