function seleksiNilai (num1, num2, data) {

  if (data.length <= 5) {
    return 'Jumlah angka dalam data Array harus lebih dari 5'
  }
  if (num1 > num2) {
    return 'Nilai akhir harus lebih besar dari nilai awal'
  } 

  const result = data.filter(function(el){ //filter data yang >= parameter num1 dan <= parameter num2
    return el >= num1 && el <= num2
  })

  const final = result.sort(function(a,b){ //sorting data
    return a-b
  })
  return final
}

console.log(seleksiNilai(15, 3, [2, 25, 4, 14, 17, 30, 8]))