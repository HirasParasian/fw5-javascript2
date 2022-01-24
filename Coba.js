const mtk = 81
const bahasaIndonesia = 90
const bahasaInggris = 89
const ipa = 70
const plh = 80
const nilai = [mtk,bahasaIndonesia,bahasaInggris,ipa,plh]


function nilaiRataRata(nilai){
    if (typeof nilai!=="object"){
        return " Nilai harus Array "
    }
    let i = nilai.length -1
    let rataRata = 0

    nilai.forEach(item => {
        rataRata = rataRata + item 
    });

    rataRata = rataRata /nilai.length
    return rataRata
}
console.log (nilaiRataRata(nilai))