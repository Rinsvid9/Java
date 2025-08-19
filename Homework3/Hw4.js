// arr = [34, 65, 875, 75, 99, "khhg", 'hkhtkj','hrjr', 'suga', 'jin', 'jk', false, true, true, false, 5]
// // console.log(arr)
//
// arr2 = []
//  arr2[2]= 'jimin'
// arr2[0]='Suga'
// arr2[1]='Rm'
// console.log(arr2)
//
// arr3 = [2,17,13,6,22,31,45,66,100,-18];
//  i = 0
// while (i < arr3.length) {
//      console.log(arr3[i])
//     i++
// }

// for (let i = 0; i < arr3.length; i++) {
//     const arrayElement = arr3[i];
//     console.log(arr3[i]);
// }

// i = 0
// while (i < arr3.length) {
//     if(i % 2 === 1) {
//         console.log(arr3[i])
//     }
//     i++
// }

// for (let i = 0; i < arr3.length; i++) {
//     const arrayElement = arr3[i];
//     if (i % 2 === 1){
//         console.log(arr3[i]);
//     }
// }

// i = 0
// while (i < arr3.length) {
//     if (arr3[i] % 2 === 0) {
//         console.log(arr3[i])
//     }
//     i++
// }
//
// for (let i = 0; i < arr3.length; i++) {
//     const arrayElement = arr3[i];
//     if (arr3[i] % 2 === 0) {
//         console.log(arr3[i])
//     }
//
// }

// for (let i = 0; i < arr3.length; i++) {
//     const arrElement = arr3[i];
//     if (arr3[i] % 3 === 0){
//         arr3[i] = "okten"
//         console.log(arr3)
//     }
//
// }


// for (let i = arr3.length - 1; i >= 0; i--) {
//     console.log(arr3[i]);
// }


// let arrBoo = [34, 'Suga', 11, 42, true, "Rin", true, false, 'lee', true ];
// for (let i = 0; i < arrBoo.length; i++) {
//  console.log(arrBoo[i]);
// }


// let arrBoo = [34, 'Suga', 11, 42, true, "Rin", true, false, 'lee', true ];
//
// for (let i = 0; i < arrBoo.length; i++) {
//  const arrBooElement = arrBoo[i];
//  if (typeof arrBoo[i] === "boolean") {
//   console.log(arrBoo[i]);
//  }
// }



// let arrBoo = [34, 'Suga', 11, 42, true, "Rin", true, false, 'lee', true ];
//
// for (let i = 0; i < arrBoo.length; i++) {
//  const arrBooElement = arrBoo[i];
//  if (typeof arrBoo[i] === "number") {
//   console.log(arrBoo[i]);
//  }
// }

// let arrBoo = [34, 'Suga', 11, 42, true, "Rin", true, false, 'lee', true ];
//
// for (let i = 0; i < arrBoo.length; i++) {
//  const arrBooElement = arrBoo[i];
//  if (typeof arrBoo[i] === "string") {
//   console.log(arrBoo[i]);
//  }
// }

//
// j = 0
//
// for (let j = 0; j < array.length; j++) {
//     const arrayElement = array[j];
//
// let arrRand = [];
//
// for (let i = 0; i < 20; i++) {
//     let num = Math.floor(Math.random() * 732) + 8;
//     arrRand.push(num);
// }
//
// console.log(arrRand);

// for (let i = 0; i < arrRand.length; i++) {
//     if (i += 2) {
//         console.log(arrRand[i]);
//     }
//
// }

// for (let i = 2; i < arrRand.length; i += 3) {
//     if (arrRand[i] % 2 === 0) {
//         console.log(arrRand[i]);
//     }
// }

// let newArr = [];
//
// for (let i = 2; i < arrRand.length; i += 3) {
//     if (arrRand[i] % 2 === 0) {
//     newArr.push(arrRand[i]);
//     }
// }
//
// console.log(newArr);

// for (let i = 0; i < arrRand.length; i++) {
//     if(arrRand[i + 1] % 2 === 0){
//         console.log(arrRand[i]);
//     }
//
// }

// let arrSum =  [100,250,50,168,120,345,188];
//
// i = 0
// sum = 0
// while (i < arrSum.length) {
//     sum = arrSum[i] + sum;
//     i++
// }
// console.log(sum);

//
// let arrRand = [];
// let arrRand2 = [];
//
// for (let i = 0; i < 10; i++) {
//     let num = Math.floor(Math.random() * 200) + 10;
//     arrRand.push(num);
//     let newNum = num * 5;
//     arrRand2.push(newNum);
// }
//
// console.log(arrRand);
// console.log(arrRand2);


// let arrBoo = [34, 'Suga', 11, 42, true, "Rin",168,120,345,188, true, false, 'lee', true ];
// let newErr = []
//
// for (let i = 0; i < arrBoo.length; i++) {
//     if(typeof arrBoo[i] === "number") {
//         newErr.push(arrBoo[i]);
//     }
// }
// console.log(newErr);

let worD= ['a','b','c'];
let emptyS = ''

// for(let i=0;i<worD.length;i++){
//     emptyS = emptyS + worD[i]
// }
//
// console.log(emptyS);

// i = 0
// while (i < worD.length) {
//     emptyS += worD[i]a
//     i++
// };
//
// console.log(emptyS);

// for (let word of worD) {
//     emptyS += word;
// }
//
// console.log(emptyS);

let usersWithId = [

    {id: 1, name: 'vasya', age: 31, status: false},

    {id: 2, name: 'petya', age: 30, status: true},

    {id: 3, name: 'kolya', age: 29, status: true},

    {id: 4, name: 'olya', age: 28, status: false}
];



let citiesWithId = [

    {user_id: 3, country: 'USA', city: 'Portland'},

    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},

    {user_id: 2, country: 'Poland', city: 'Krakow'},

    {user_id: 4, country: 'USA', city: 'Miami'}

];
let newArray = [];
for (let i = 0; i < citiesWithId.length; i++) {
    let user = usersWithId[i];
    let city = citiesWithId[i];
    if(citiesWithId[i].user_id === usersWithId[i].id) {
        let newObject = {
            id: usersWithId[i].id,
            name: usersWithId[i].name,
            age: usersWithId[i].age,
            status: usersWithId[i].status,
            address: {
                user_id: citiesWithId[i].user_id,
                country: citiesWithId[i].country,
                city: citiesWithId[i].city
            }
        }
        newArray.push(newObject);
    }
}

console.log(newArray);