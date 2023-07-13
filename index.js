const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(Ralph) {
  cats.push('Ralph');
}
function destructivelyPrependCat(Bob){
 cats.unshift('Bob')
}
function destructivelyRemoveLastCat(){
 cats.pop()
}
function destructivelyRemoveFirstCat(){
  cats.shift()
}
function  appendCat(name){
  let newCat = [...cats, name]
  return newCat;
}
function prependCat(name){
  let newCat = [name, ...cats]
  return newCat;
}
function removeLastCat(){
  let newCat = [...cats]
  newCat.pop()
  return newCat
}
function removeFirstCat(){
  let newCat = cats.slice(1)
  return newCat
}