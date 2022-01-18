//A. For Eeach
// perulangan untuk semua isi array secara berurutan

//   const angka = [1, 2, 3, 7, 5, 6];
//   angka.forEach(item => {
//     console.log(item); 
//   });

//B. pop
// menghapus item terakhir di array

// const angka = [1, 2, 3, 4, 5, 6];
// angka.pop()
// console.log(angka)

//C. Unshift
// menambah item baru di awalan array

// const angka = [3, 4, 5, 6];
// angka.unshift(1,2)
// console.log(angka)

//D.  Shift
// menghapus item pertama di array

// const angka = [1,2,3, 4, 5, 6];
// angka.shift()
// console.log(angka)

//E.  Includes
// cek apakah sebuah array memiliki item tertentu

// const hewan = ['ayam', 'kucing', 'tikus']
// console.log(hewan.includes('babi'))

//F.  indexOf
// mencari letak index sebuah item di array, jika tidak ada maka return -1 jika ada maka sesuai indexnya

// const hewan = ['ayam', 'kucing', 'tikus']
// console.log(hewan.indexOf('tikus'))
// console.log(hewan.indexOf('babi')) 

//G. Concat 
// menggabungkan 2 array atau lebih

// const hewan = ['ayam', 'kucing', 'tikus']
// const hewan2 = ['kelinci', 'semut', 'babi']
// hewanFix = hewan.concat(hewan2)
// console.log(hewanFix)

//H.  Slice
// memilih satu atau beberapa item di sebuah array 
// dengan syntax : array.slice(start, end)

// const hewan = ['ayam', 'kucing', 'tikus']
// console.log(hewan.slice(1,2))

//I.  Delete
// menghapus item di dalam array dengan meninggalkan undefined/ kosong di dalam array yg di hapus

// const hewan = ['ayam', 'kucing', 'tikus']
// delete hewan[0];
// console.log(hewan)

//J.  Splice 
// menambah , menghapus atau replace item di array  1 replace/delete 0 input

//menghapus
// const hewan = ['ayam', 'kucing', 'tikus']
// hewan.splice(1,2)
// console.log(hewan)

//menambah 
// const hewan = ['ayam', 'kucing', 'tikus']
// hewan.splice(2,0,'biawak')
// console.log(hewan)

//mereplace
// const hewan = ['ayam', 'kucing', 'tikus']
// hewan.splice(2,1,'biawak')
// console.log(hewan)
