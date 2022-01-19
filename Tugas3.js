const values = [2, 25, 4, 14, 17, 30, 8]

function seleksiNilai (limit1, limit2, data) {

  if (typeof limit1 !== "number" || typeof limit2 !== 'number' || !Array.isArray(data)) {
    return 'Data tidak valid'
  }
  if (limit1 > limit2) {
    return 'Nilai akhir harus lebih besar dari nilai awal'
  }
  if (data.length <= 5) {
    return 'Jumlah angka dalam dataArray harus lebih dari 5'
  }

  const result = data.filter(function(el){
      return el >= limit1 && el <= limit2
  })

  const final = result.sort(function(a,b){
    return a-b
    })

  console.log(final);
}

seleksiNilai(20, 100, values)