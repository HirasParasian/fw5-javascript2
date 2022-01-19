const nilai = [2, 25, 4, 14, 17, 30, 8]

const SeleksiNilai = (num1, num2, dataArray) => {
    if (typeof num1 !== "number" || typeof num2 !== "number" || !Array.isArray(dataArray)) { 
        return 0;
    }

    if (num1 > num2) { 
        console.log("Nilai akhir harus lebih besar dari nilai awal");
        return 0;
    }

    if (dataArray.length <= 5) { 
        console.log("Jumlah angka dalam dataArray harus lebih dari 5");
        return 0;
    }
    const hasil = dataArray.filter(el => el >= num1 && el <= num2)  

    const akhir = hasil.sort((a, b) => a - b) 

    console.log(hasil)
}

SeleksiNilai(15,3, nilai)