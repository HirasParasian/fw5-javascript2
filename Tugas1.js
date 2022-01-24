//A. For Eeach
// perulangan dalam array

//   const angka = [1, 2, 3, 7, 5, 6];
//   angka.forEach(item => {
//     console.log(item); 
//   }); // output 1 2 3 4 5 6 menurun

//B. pop
// menghapus item terakhir di array

// const angka = [1, 2, 3, 4, 5, 6];
// angka.pop()
// console.log(angka) //output [ 1, 2, 3, 4, 5 ]

//C. Unshift
// menambah item baru di awalan array

// const angka = [3, 4, 5, 6];
// angka.unshift(1,2)
// console.log(angka) //output [ 1, 2, 3, 4, 5, 6 ]

//D.  Shift
// menghapus item pertama di array

// const angka = [1,2,3, 4, 5, 6];
// angka.shift()
// console.log(angka) //output [ 2, 3, 4, 5, 6 ]

//E.  Includes
// cek apakah sebuah array memiliki item tertentu

// const hewan = ['ayam', 'kucing', 'tikus']
// console.log(hewan.includes('babi')) // // output false
// console.log(hewan.includes('tikus')) // // output true

//F.  indexOf
// mencari letak index sebuah item di array, jika tidak ada maka return -1 jika ada maka sesuai indexnya

// const hewan = ['ayam', 'kucing', 'tikus']
// console.log(hewan.indexOf('tikus')) // // output 2
// console.log(hewan.indexOf('babi')) // // output -1

//G. Concat 
// menggabungkan 2 array atau lebih

// const hewan = ['ayam', 'kucing', 'tikus']
// const hewan2 = ['kelinci', 'semut', 'babi']
// hewanFix = hewan.concat(hewan2)
// console.log(hewanFix) // output [ 'ayam', 'kucing', 'tikus', 'kelinci', 'semut', 'babi' ]

//H.  Slice
// memilih satu atau beberapa item di sebuah array 
// dengan syntax : array.slice(start, end)

// const hewan = ['ayam', 'kucing', 'tikus']
// console.log(hewan.slice(0,2)) //output [ 'ayam', 'kucing' ]
// console.log(hewan.slice(1)) //output [ 'kucing', 'tikus' ]

//I.  Delete
// menghapus item di dalam array dengan meninggalkan undefined/ kosong di dalam array yg di hapus

// const hewan = ['ayam', 'kucing', 'tikus']
// delete hewan[0];
// console.log(hewan) //output [ <1 empty item>, 'kucing', 'tikus' ]

//J.  Splice 
// menambah , replace item di array  1 replace 0 input

//menambah 
// const hewan = ['ayam', 'kucing', 'tikus']
// hewan.splice(2,0,'biawak')
// console.log(hewan) //output [ 'ayam', 'kucing', 'biawak', 'tikus' ]
 
//mereplace
// const hewan = ['ayam', 'kucing', 'tikus']
// hewan.splice(2,1,'biawak')
// console.log(hewan) //output[ 'ayam', 'kucing', 'biawak']
