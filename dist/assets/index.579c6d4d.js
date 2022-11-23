(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();function l(){/*! ANY */function i(n){"name"in n&&console.log(n.name)}i({name:"hol"})}function s(){document.addEventListener("DOMContentLoaded",()=>{var n;let i=document.querySelectorAll("li");(n=i[0].parentElement)==null||n.classList.add("list-decimal","list-inside"),i.forEach(a=>{a.classList.add("mb-3","hover:list-outside")})})}function u(){let i=`<div class="text-white">
<br>
  <h1 class="text-2xl">Estudio Typescript</h1>
<br/>
<h2 class="text-xl">Types</h2>
<br>
<ul>`,n=`
<li>Use el type string</li>
<!--:string-->


<li>Use el tipo number</li>
<!--:number-->


<li>Usa los 2 tipos de Arrays y especifica que sea un array solo de Numeros o de letras</li>
<!--number[],string[] -- Array<number>,Array<string> -->


<li>What is a Tuple</li>
<!-- A tuple is a form of array that is inmutable and usualy comes with a fixed number of elements, its type is expresed : [T*,T*] ,where T* is any Type-->


<li>What is type inference?</li>
<!--Es cuando typescript automaticamente asigna el typo debido a una asignacion del valor de la variable Ej: let name = 'Kevin' (name:string)-->


<li>Usa el tipo object en una funcion y especifica cada una de sus entradas dentro del parametro</li>
<!--:{a:string;b:number}-->


<li>Usa un parametro opcional en objeto parametro de una funcion</li>
<!--:{a:string;b?:number}-->`,a=`
<h2 class="text-xl p-2">Union Tipes</h2>
<li>Usa un parametro que soporte dos types</li>
<!--:string|number-->

<li>Use Type Narrowing in a function that takes various types of parametters</li>
<!-- function x(y:T|S){if(y=T){...}if(y=S){...}}-->

<li>Use Union Types to Determine an Array that accept multiple type values</li>
<!-- (string|number)[]  ||   Array<string|number> -->

<li>Diga las causas de por que no podemos ejecutar: 
 function ejemp(myArg:string|number){
return myArg.toUpperCase()};
 ejemp('hola')
</li>
<!-- We just can call sharable methods or values.-->

<li>Que es un tipo literal usado con Unions y cual es el uso perfecto que podriamos darle, uselo con strings ,y con numeros, por ejemplo uselo para determinar si dos variables que le pasemos a una funcion son iguales la cual retornara 0 si iguales, 1 is a > b y -1 si a < b .</li>
<!--function sal(option: 'si'|'no'|'tal vez'){
return option};
function compare(a:number,b:number):-1|0|1{
return a===b? 0: a>b? 1: -1 
}-->

<h2 class="text-xl p-2">Enums</h2>

<li>Explain The use of enums</li>

<li>Use String Enums to create a list of tuples with contained inside an Enum, exaple:  <code class="bg-blue-900 p-2 italic text-white">let array:[Enum.element,number]</code>, dont use numeric enums.</li>
<!-- enum Pi{Perro:'PERRO';Nino:'NINO';Mujer:'MUJER'}   
to call it inside an object Pi.Perro and are type Pi
-->


<h2 class="text-xl p-2">Types</h2>

<li>Use Type Aliases to template the type of a function parameter.</li>
<!--type myVar = string-->

<li>How use Types with function args and output</li>
<!--type Func = (arg0:string,arg1:string) => number ; una funcion que toma dos argumentos string y retorna un numero-->

<li>Use Generic Types for deffining a template of an object <code class="bg-blue-900 p-2 italic text-white">obj = {parent:['kev','elsa'],mate:'none',children:['x1','x2','x3',etc.]}</code></li>
<!-- 
type Generic<T> = {
parent: [T,T];
mate:T;
children:T[]
}
let myObj:Generic<string> = ... -->

<li>Use a Generic Function to alocate the type of one of the args and the return function type at the same time <code class="bg-blue-900 p-2 italic text-white"> function fill(texto,veces){ return Array(veces).fill(texto)}</code></li>
<!-- 
function fill<T>(texto:T,veces:number):T[] {...}
fill<string>('hola',3)-->


<h2 class="text-xl p-2">Type Narrowing</h2>
<li>Explain what is  Type Narrowing</li>
<li>What is a typeguard</li>
<!-- if(typeof === "type"){}-->

<li>How determinate if some variable has certain method inside its prototipe or itself</li>
<!--Typeguard whit IN keyword 
 let myVar = "hola"; toUpperCase in myVar;
let myArr = {name:'kevin',last:'lern'}; last in myArr -->

<h2 class="text-xl p-2">Interface</h2>


<li>Use Interfaces to template a function object parameter</li>
<!--interface myVar{a:1;b:string}-->

<li>Create a type Alias from another type Alias</li>
<!--type Casa = string; type Mansion = Casa & number;-->

<li>Join, extend or intersect two Interfaces and two Types</li>
<!--
interface Bedroom{bed:string};interface Bathroom extends Bedroom{lamp:boolean}; ----
type Park = {trees:string};
type Lake = Park & {ducks:true};
-->`,o=`<li>Explain the main difference between Interface and Type</li>
<!--Interface value can be reassigned-->

<li>What is Type Assertions and use an example of both ways to use Assertions and which is the best.</li>
<!--Way to declare types that typescript can't infere example HTMLElements, typescript see it as a posibly null. That way if you use "document.querySelector(div) as HTMLElement" keyword AS, it will be treated as it is an HTML. The other way to do it is throug- "<HTMLElement>document.querySelector(div)" , this way is used before the element or variable; althoug is not recomended using react .-->

<li>Explain the use of AS on detail</li>
<!--.!AS keyword is for typescript to treat some object as other type, example: let myVar:0|1; myVar = 5 as 1; the value is now 5 even when is different from 1 or 0; For differents primitive values need to first transform to undefined example: let myVar = 5; myVar = 'text' as undefined as number; -->


<li>Explain what is Literal Inference and use it in a function</li>
<!--Is when you declare a variable within an object TS assume the value can change but not the type of that value;
declare function myFunct(value:'GET'):void;
let myVar = {value:'GET'};
myFunct(myVar.value)
-->`,e=`<li>Explica los 2 modos como poder resolver un Literal Inference</li>
<!--declare function myFunct(value:"GET"):void
let myVar = {val:'GET' as 'GET'};
myFunct(myVar.val as 'GET'); Just one as 'GET' is needed.-->

<!--declare function myFunction(value:'GET'):void;
let myVar = {val:'GET'}const;
myFunction(myVar);-->

<li>How do you test an strict Check on null values on a function.</li>
<!--function doSomething(x:string|null){if(x === null){console.log('null')}
else{console.log('Hola' + x)};}-->

<li>How to use Type Assertion or indicate to TypeScript that the value is not NULL or UNDEFINED</li>
<!--function liveDangerously(x?:number | null){
console.log(x!.toFixed())
'This Function will console.log x even if we didnt pass it , so the value can be undefined without trowing an error thanks to "!".'
} -->

<li>Review Codeacademy Array exercise</li>

`,t="</ul></div>";return i+n+a+o+e+t}l();s();let c=document.getElementById("app");c.innerHTML=u();
