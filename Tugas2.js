const nama = [  "Abigail", "Alexandra", "Alison",
                "Amanda", "Angela", "Bella",
                "Carol", "Caroline", "Carolyn",
                "Deirdre", "Diana", "Elizabeth",
                "Ella", "Faith", "Olivia", "Penelope"]
    
const searchName = (cari, berapa, _callback) => {

  const names = nama.filter(function(el){ // membuat data menjadi lowercase dan memfilter data sesuai dengan parameter cari
    return el.toLowerCase().includes(cari)
    })

  const hasil = names.splice(0, berapa) //menampilkan data index ke 0 hingga index kurang dari parameter berapa 
    return _callback(hasil)
}

searchName('an', 3, (hasil) => {
  console.log(hasil);
}) 