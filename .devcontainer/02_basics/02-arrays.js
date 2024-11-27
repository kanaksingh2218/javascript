const marvel_heros = ["ironman" , "thor" , "hulk"]
const dc_heros = ["superman" ,   "batman" , "flash"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

// const all_new_heros = [...marvel_heros , ...dc_heros]
// console.log(all_new_heros);

const anotherArray = [1, 2, 3, [2, 3], [2, 4, 5[2, 4, 5]]]
const realAnotherArray = anotherArray.flat(Infinity)
console.log(realAnotherArray);

console.log(Array.isArray("Kanak"));
console.log(Array.from("Kanak"));
console.log(Array.from({name : "kanak" })); //intresting//




