const values = [2, 25, 4, 14, 17, 30, 8]

function seleksiNilai (num1, num2, data) {

  if (typeof num1 !== "number" || typeof num2 !== 'number' || !Array.isArray(data)) {
    return 'Data tidak valid'
  }
  if (num1 > num2) {
    return 'Nilai akhir harus lebih besar dari nilai awal'
  }
  if (data.length <= 5) {
    return 'Jumlah angka dalam dataArray harus lebih dari 5'
  }

  const result = data.filter(function(el){
      return el >= num1 && el <= num2
  })

  const final = result.sort(function(a,b){
    return a-b
    })

  console.log(final);
}

seleksiNilai(1, 100, values)