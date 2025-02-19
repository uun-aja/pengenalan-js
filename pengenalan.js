// volume kubus

var sisi = 5;

var volume = sisi * sisi * sisi;
console.log(colume);


// luas lingkaran

var pi  = 7;
var r = 3.14;

var luar = pi * r * r ;
console.log(luas);

// bikin ktp umur 17 if else

var umur = 17

if (umur >=17){
    console.log("bisa cetak ktp");
} else {
    console.log("belum bisa cetak ktp");
}

// pilih minuman switch case

var minuman = "kopi";
switch (minuman){
    case "kopi":
    console.log("kamu pilih kopi");
    break;
    case "teh":
        console.log("kamu pilih teh");
        break;
}

// umur dan timggi untuk masuk wahana

var umur = 17;
var tinggi = 150;

if (umur >= 17){
    if (tinggi > 150){
        console.log("tidak boleh masuk");
    }else {
        console.log("boleh masuk");
    }
}else {
    console.log("boleh masuk");
    }

// perlulangan 1-10 for dan wahile
// for
for (var i = 1; i <=10; i++){
    console.log(i);
}
 // while
 var i = 1;
 while (i  <= 10){
    console.log(1);
    i++;
 }

 // buat tampilan seperti ini 
 /*
 1
 12
 123
 1234
 12345
 */

 for (var i = 1; i <= 5; i++){
    var temp = ''; // variabel penampung sementara
    for (var j = 1; j<= 1; j++){
        temp = temp + j;
    }
            console.log(temp);
    }
 
