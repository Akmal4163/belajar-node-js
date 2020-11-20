setTimeout(function contoh() {
    console.log("ini contoh settimeout dengan fungsi");
}, 3000);
console.log("this is waiting");

//contoh multiple request

function order(id, timeOut) {
    console.log("ID :" + id);
    proses(id, timeOut);
}
// process function using settime out
function proses(id, timeOut) {
    setTimeout(function() {
        console.log("ID :" + id + " pesanan telah diproses");
    }, timeOut);
}



order(101, 1000);
order(102, 2000);
order(103, 3000);