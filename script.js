var Penumpang = [];

var tambahPenumpang = function(namaPenumpang, penumpang) {
    //jika angkot kosong 
    if ( penumpang.length == 0 ) {
        //tambah penumpang di awal array
        Penumpang.push(namaPenumpang);
        // kembalikan isi array & keluar dari function
        return Penumpang;
    } else {
        // telusuri semua penumpang di dalam angkot
        for ( var i = 0; i < Penumpang.length; i++) {
            // jika ada kursi kosong
            if ( Penumpang[i] == undefined) {
                // tambahkan penumpang di kursi tersebut
                Penumpang[i] = namaPenumpang;
                // kembalikan isi array & keluar dari function
                return Penumpang;
            }

            // jika sudah ada nama yang sama
            else if ( Penumpang[i] == namaPenumpang ) {
                // tampilkan pesan kesalahan
                console.log(namaPenumpang + ' sudah ada di dalam angkot.');
                // kembalikan isi array & keluar dari function
                return Penumpang;
            }
            
            // jika seluruh kursi terisi
            else if ( i == Penumpang.length -1 ) {
                // tambahkan penumpang di akhir array
                Penumpang.push(namaPenumpang);
                // kembalikan isi array & keluar dari function
                return Penumpang;
            }
        }
    }
}

var hapusPenumpang = function(namaPenumpang, penumpang) {
    // cek apakah angkot kosong
    if ( Penumpang.length == 0) {
        // jika angkot kosong, maka tampilkan pesan :
        console.log('Angkot masih kosong!');
        return Penumpang;
    } else {
        for ( var i = 0; i < Penumpang.length; i++) {
            // jika penumpang yang ingin dihapus ada di dalam angkot
            // maka hapus penumpang tersebut
            if ( Penumpang[i] == namaPenumpang) {
                // hapus penumpang dengan mengubah nilainya menjadi undefined
                Penumpang[i] = undefined;
                // kembalikan isi array & keluar dari function
                return Penumpang;
            } else if ( i == Penumpang.length - 1 ) {
                // penumpang tidak ditemukan
                // tampilkan pesan kesalahan
                console.log(namaPenumpang + ' tidak ditemukan di dalam angkot.');
                // kembalikan isi array & keluar dari function
                return Penumpang;
            }
        }
    }
}

// Selesai