// const addition = (num1,num2)=>{
//     const total = num1+num2

//     return total;
// }

// console.log(addition)


// function pertama (parameter1){
//     while (parameter1 > 0){
//         console.log(parameter1)
//         parameter1--;
//     }
// }
// pertama(10)

// function pertama (parameter1){
//     let hasil = 0
//     while (parameter1 > 0){
//         hasil = hasil + parameter1;
//         parameter1--;
//     }
//     console.log(hasil)
// }
// pertama(10)

// const x = function pertama (parameter1){
//     let hasil = 0
//     while (parameter1 > 0){
//         hasil = hasil + parameter1;
//         parameter1--;
//     }
//     return hasil
// }
// console.log(x(3))

// const x = (parameter1)=>{
//     let hasil = 0
//     while (parameter1 > 0){
//         hasil = hasil + parameter1;
//         parameter1--;
//     }
//     return hasil
// }
// console.log(x(3))

// const orang = {
//     firstName : "Hiras",
//     lastName : "Parasian",
//     fullname: function(){
//         return this.firstName + " " + this.lastName
//     }
// }
// console.log(orang.firstName)
// console.log(orang.lastName)
// console.log(orang.fullname())

// const orang = {
//     firstName : "Hiras",
//     lastName : "Parasian",
//     fullname: function(surename){
//         return this.firstName + (surename ? `${surename}` +" " + this.lastName
//     }
// }
// console.log(orang.firstName)
// console.log(orang.lastName)
// console.log(orang.fullname())
// console.log(orang.fullname("Dolok"))

// const nilai = [90,99,98,94,20,22,100]
// nilai.sort()
// console.log(nilai)

// const nilai = [90,99,98,94,20,22,100]
// const fin = nilai.map(function(num){
//     return num+5
// })
// console.log(fin)

// const nilai = [90,99,98,94,20,22,100]
// const fin = nilai.map(function(num,idx){
//     return idx + " . " +num+5
// })
// console.log(fin)

// const nilai = [90,99,98,94,20,22,100]
// const fin = nilai.filter(function(num){
//     return num > 20
// })
// console.log(fin)

// const nilai = [90,99,98,94,20,22,100]
// nilai.push(200)

// console.log(nilai)
// function hirasHitung(sapa, cb){
//     console.log(" Hallo, Selamat "+sapa);
//     cb(100,100)
//     return cb(100,100)
// }
// function calc(x,y){
//     return x+y ;
// }
// function calc2(x,y){
//     return x*y ;
// }
// console.log(hirasHitung("Pagi",calc))

// console.log(hirasHitung("Siang",calc2))

// function hirasHitung(sapa, cb){
//     console.log(" Hallo, Selamat "+sapa);
//     console.log( cb(100,100))
// }
// function calc(x,y){
//     return x+y ;
// }
// function calc2(x,y){
//     return x*y ;
// }
// hirasHitung("Pagi",calc)
// hirasHitung("Siang",calc2)