console.log("test");

var variabelsatu = 1;
console.log(variabelsatu);

let variabel2 = 2;
console.log(variabel2);

const variabel3 = 3;


const hasil = variabelsatu + variabel3 * variabel2;
console.log(hasil);

function perkalian(x, y) {
    return x * y;
}
let hasilkali = perkalian(7, 8);


console.log(hasilkali);
if (hasilkali > 7) {
    console.log("hasilkali lebih besar dari tujuh");
} else {
    console.log("hasilkali tidak lebih besar dari tujuh");
}


//menggunakan json



let json = [


    {
        name: "dsg",
        telephone: 222333333

    },

    {
        name: "asdd",
        telephone: 33333333
    }
];


for (let i = 0; i < json.length; i++) {
    console.log(json[i].name + " -> " + json[i].telephone);
}