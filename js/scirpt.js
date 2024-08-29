// Ini Javascript

function formValidate() {
    // Ini Cara Ambil DOM
    var name = document.getElementById('Name').value;
    var out1 = document.getElementById('output 1');
    var tl = document.getElementById('Tanggal Lahir').value;
    var out2 = document.getElementById('output 2');
    var jl = document.getElementById('Jenis Kelamin').value;
    var out3 = document.getElementById('output 3');
    var tx = document.getElementById('Text Area').value;
    var out4 = document.getElementById('output 4');

 

    console.log (name)
    console.log (tl)
    console.log (jl)
    console.log (tx)

    
    // Ini Kondisi Pemisahnya
    if (name == '' || tl == "" || jl == "" || tx == "") {
    // Ini Kondisi Jika Form Kosong
        alert('Form Kosong');
    } else {
    // Ini Kondisi Jika Form Submit
        alert('Form Berhasil Di Submit');
        out1.innerHTML = name
        out2.innerHTML = tl
        out3.innerHTML = jl
        out4.innerHTML = tx
    }
}

    


let nameinput = document.getElementById('name-input');

document.getElementById('submit').addEventListener("click", function() {
    const nama = nameinput.value

    if (nama == "") {
        (document.getElementById('error-name').innerHTML = "(Nama Tidak Boleh Kosong)")
    }else{
        document.getElementById('name').innerHTML = nama
    }
    
})


