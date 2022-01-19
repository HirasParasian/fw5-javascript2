const name = [  "Abigail", "Alexandra", "Alison",
                "Amanda", "Angela", "Bella",
                "Carol", "Caroline", "Carolyn",
                "Deirdre", "Diana", "Elizabeth",
                "Ella", "Faith", "Olivia", "Penelope"]
    
const searchName = (cari, berapa, _callback) => {

  const names = name.filter(el => el.toLowerCase().includes(cari))

  const hasil = names.splice(0, berapa)

  _callback(hasil)
}

searchName('an', 3, (hasil) => {
  console.log(hasil);
}) 