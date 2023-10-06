//Skriv alt jeres kode her

console.log(
  "Opgave 1.1 - Lav et program, som skriver “Hello World” i konsollen"
);
//Lav jeres svar her
console.log("Hello World");

console.log("Hello\nWorld");


var star_count = 3
for( var i = 0; i<star_count; i++){
  console.log("*".repeat(i))
}


for( var i = star_count; i>0; i--){
  console.log("*".repeat(i))
}

var awda = "hello"
console.log(typeof(awda))


console.log(10-5)
console.log(25/3)
console.log(25%3)
console.log(25%2)
console.log(3**2)

let tekst1 = "Hello"

let tekst2 = "World!"

console.log(tekst1+tekst2)

console.log("GF2 Online".length)

console.log(Math.random())


//Find ud af hvad hver linje skriver ud i vores konsol og forklar hvorfor lige præcis det bliver skrevet
/*
Outputted er basert på de conditions og operators der bliver brugt
*/
var tal = 3
console.log( tal%2 == 0 ? "Lige" : "Ulige")


var tal = 20
console.log( tal%5 == 0 ? "Går op i 5" : "Går ikke op i 5")

console.log( Math.round(Math.random()*100)%5 == 0 ? "Går op i 5" : "Går ikke op i 5")

var a = 25,b = 33,c = 12

console.log(
  a>b ? (a>c ? "A>" : "C>"):(b>c ? "B>": "C>")
)

var tempatur = 45
console.log( 
  tempatur<=0 ? "Det er frostvejr": 
  tempatur>0 && tempatur<=10 ? "Det er meget Koldt" : 
  tempatur>=11 && tempatur<=20 ? "Der er koldt" : 
  tempatur>=21 && tempatur<=30 ? "Det er normalt vejr" : 
  tempatur>=31 && tempatur<=40 ? "Det er varmt" : 
  tempatur>=41 ? "Det er meget varmt" : "err"
)


var ar = ["Mandag","Tirsdag","Onsdag","Torsdag","Fredag","Lørdag","Søndag"]
var dag = 4
console.log(ar[(dag-1)%7])

for (var i = 1; i<=100; i++)
console.log(i)

for (var i = 0; i<=100; i++){
console.log(i + " "+ (i+1) + " "+(i+2))
}

for (var i = 0; i<=100; i++){
  console.log( (i%15==0) ? "FizzBuzz": i%3==0 ? "Fizz" : i%5==0 ? "Buzz" : i)
}

var num = 5

for (var i = 1; i<5; i++)
num*=i
console.log(num)



var num = 15
for (var i = 1; i<10; i++)
console.log(num+" X "+i+ " = "+(num*i))



var byer = ["Randers", "Viborg", "Aarhus","København"]

console.log(byer[1])

byer.push("Skive")
console.log(byer)
var talrække = [0, 1, 0, 3, 4, 5, 6]

talrække[2] = 2
console.log(talrække)


talrække = [0, 12, 0, 22, 300, 4, 5]
var biggest = 0
for (var i = 0; i<talrække.length; i++){
  if (talrække[i]>biggest)
  biggest = talrække[i]
}
console.log(biggest)

for (var i = 0; i < talrække.length; i++) {
  for (var j = 0; j < (talrække.length - i - 1); j++) {
      if (talrække[j] > talrække[j + 1]) {          
          [talrække[j],talrække[j+1]]=[talrække[j+1],talrække[j]]
      }
  }
}


console.log(talrække)
for (var i = 0; i < talrække.length; i++) {
  for (var j = 0; j < (talrække.length - i - 1); j++) {
      if (talrække[j] < talrække[j + 1]) {          
          [talrække[j],talrække[j+1]]=[talrække[j+1],talrække[j]]
      }
  }
}
console.log(talrække)


function my_function() {
  console.log("Hello World")
 }
 
 function sum(x,y) {
  return x+y;
 }

var kode = "123"
var bruger_navn = "gello"
function is_ja(x){
  if (x == "ja"){
    return true;
  }else{
    return false;
  }
}


 function check_password(x){
  x == kode ? 
  console.log("right password") :
  console.log("wrong password")
 }

 function check_brugernavn(x){
  if (x.toLowerCase()==bruger_navn.toLowerCase()){
    return true
  }else{
    return false
  } 
}

talrække = [0, 12, 0, 22, 300, 4, 5, 1000, -50, 32]
var gm = 0
for (var i = 0; i<talrække.length; i++){
  gm+=talrække[i]
}
gm/=talrække.length

var a2 = 0
for (var i = 0; i<talrække.length; i++){
   a2+=Math.pow((talrække[i]-gm),2)
}
a2/=talrække.length
console.log(a2)
console.log(Math.sqrt(a2))



const person1 = {
  firstName: "Anders",
  lastName: "Andersen",
  age: 29,
  eyeColor: "grøn"
};
const person2 = {
  firstName: "Mads",
  lastName: "Madsen",
  age: 32,
  eyeColor: "blå"
};
const person3 = {
  firstName: "Han",
  lastName: "Hansen",
  age: 55,
  eyeColor: "brun"
};
function ag(tr){
  var g = 0
  for (var i = 0; i<tr.length; i++){
    g+=tr[i]
  }
  g/=tr.length
  return g
}

function freesus(x){
  if (x.age,x.eyeColor == undefined) return undefined
  if (!(x.age > 30 && ["blå","grøn","rød"].includes(x.eyeColor))) return undefined
  
  return [x.age,x.eyeColor]
}
console.log(freesus(person2))



function varians(tr){
  var a2 = 0
  var g = ag(tr)
  for (var i = 0; i<tr.length; i++){
     a2+=Math.pow((tr[i]-g),2)
  }
  a2/=tr.length
  return a2
}


talrække = [0, 12, 0, 22, 300, 4, 5, 1000, -50, 32]



console.log(varians(talrække))

const o = {
  a1 : [2,3,19,2,-1,-9,10,33],
  a2 : [3,57,-8,2,-21,-10,11,32],
  a3 : [100, -100, 200, -200, 10]
  };
  var a1g = ag(o.a1),a2g = ag(o.a2),a3g = ag(o.a3)
  var a1v = varians(o.a1),a2v = varians(o.a2),a3v = varians(o.a3)

console.log(a1g>a2g? (a1g>a3g ? o.a1 : o.a3):(a2g>a3g ? o.a2: o.a3))
console.log(a1v>a2v? (a1v>a3v ? o.a1 : o.a3):(a2v>a3v ? o.a2: o.a3))