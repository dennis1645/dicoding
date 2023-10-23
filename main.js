// Buat Fungsi untuk simpan buku
function simpanBuku(event){
    event.preventDefault();
    const id_buku = Date.now();
    const judul_buku = document.getElementById('judul_buku').value;
    const penulis_buku = document.getElementById('penulis_buku').value;
    const tahun_terbit = document.getElementById('tahun_buku').value;

    // Cek apakah ada nilai yang diisi dalam formulir
    if (!judul_buku || !penulis_buku || !tahun_terbit) {
        Swal.fire({
            title: 'Error',
            text: 'Tidak Boleh Kosong Form nya!',
            icon: 'error',
            confirmButtonText: 'OK'
        });
        return;
    } else {
        let buku = {
        id:id_buku,
        judul: judul_buku,
        penulis: penulis_buku,
        tahun: Number(tahun_terbit),
        isComplete: false
    }

    // Cek apakah berhasil menyimpan atau tidak
    try {
        // Simpan Buku ke local storage
    localStorage.setItem(id_buku.toString(), JSON.stringify(buku));

    // Reset Formulir
    document.getElementById('add_book').reset();

   // Tampilkan notifikasi sukses
        Swal.fire({
            title: 'Selamat!',
            text: 'Berhasil menambahkan data!',
            icon: 'success',
            confirmButtonText: 'OK'
        }).then((result) => {
            if (result.isConfirmed) {
                // Refresh halaman saat tombol "OK" ditekan
                location.reload();
            }
        });
    } catch (error) {
        console.log(error)
        Swal.fire(
      'Error',
      'Terjadi kesalahan saat menyimpan data buku.',
      'error'
    );
    }
    }
}

// Fungsi untuk mengambil data dari localStorage
function ambilSemuaBuku() {
  const semuaBuku = [];

  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const buku = JSON.parse(localStorage.getItem(key));

    semuaBuku.push(buku);
  }

  return semuaBuku;
}
// Tampilkan buku
function tampilkanBuku(buku, rakId){
    const rakBuku = document.getElementById(rakId);
    const status = buku.isComplete;

    if(status === false){
        const kartuBuku = document.createElement('div')
    kartuBuku.classList.add('kartu-buku-belum','mt-2');

    const judul = document.createElement('h2')
    judul.classList.add('fw-bold')
    judul.innerHTML = `<i class="fa-solid fa-book me-2"></i>${buku.judul}`;

    const penulis = document.createElement("h6");
    penulis.innerHTML = `<i class="fa-solid fa-user-tie me-2"></i>Penulis : ${buku.penulis}`;

    const tahunTerbit = document.createElement("h6");
    tahunTerbit.innerHTML = `<i class="fa-solid fa-calendar-days me-2"></i>Tahun Terbit : ${buku.tahun}`;

    const tombolSudahDiBaca = document.createElement("button");
    tombolSudahDiBaca.setAttribute('onclick',`pindah(${buku.id})`);
    tombolSudahDiBaca.classList.add("btn", "btn-success");
    tombolSudahDiBaca.innerHTML = `<i class="fa-solid fa-square-check me-2"></i>Sudah di Baca`;

    const tombolHapus = document.createElement("button");
    tombolHapus.setAttribute('onclick',`hapus(${buku.id})`);
    tombolHapus.classList.add("btn", "btn-danger", "ms-3");
    tombolHapus.innerHTML = `<i class="fa-solid fa-trash-can me-2"></i>Hapus`;

    kartuBuku.appendChild(judul);
    kartuBuku.appendChild(penulis);
    kartuBuku.appendChild(tahunTerbit);
    kartuBuku.appendChild(tombolSudahDiBaca);
    kartuBuku.appendChild(tombolHapus);

    rakBuku.appendChild(kartuBuku);
    }else if(status === true){
        const kartuBuku = document.createElement('div')
    kartuBuku.classList.add('kartu-buku-sudah','mt-2','text-white');

    const judul = document.createElement('h2')
    judul.classList.add('fw-bold')
    judul.innerHTML = `<i class="fa-solid fa-book me-2"></i>${buku.judul}`;

    const penulis = document.createElement("h6");
    penulis.innerHTML = `<i class="fa-solid fa-user-tie me-2"></i>Penulis : ${buku.penulis}`;

    const tahunTerbit = document.createElement("h6");
    tahunTerbit.innerHTML = `<i class="fa-solid fa-calendar-days me-2"></i>Tahun Terbit : ${buku.tahun}`;

    const tombolBelumdibaca = document.createElement("button");
    tombolBelumdibaca.setAttribute('onclick',`pindah(${buku.id})`);
    tombolBelumdibaca.classList.add("btn", "btn-warning");
    tombolBelumdibaca.innerHTML = `<i class="fa-solid fa-book-open-reader me-2"></i>Belum di Baca`;

    const tombolHapus = document.createElement("button");
    tombolHapus.setAttribute('onclick',`hapus(${buku.id})`);
    tombolHapus.classList.add("btn", "btn-danger", "ms-3");
    tombolHapus.innerHTML = `<i class="fa-solid fa-trash-can me-2"></i>Hapus`;

    kartuBuku.appendChild(judul);
    kartuBuku.appendChild(penulis);
    kartuBuku.appendChild(tahunTerbit);
    kartuBuku.appendChild(tombolBelumdibaca);
    kartuBuku.appendChild(tombolHapus);

    rakBuku.appendChild(kartuBuku);
    }
}

// Fungsi untuk menampilkan data buku
function belumDibaca(){
    const bukuBelumDibaca = ambilSemuaBuku().filter((buku)=>buku.isComplete === false);

    bukuBelumDibaca.forEach((buku)=>{
        tampilkanBuku(buku,'rakBelumdibaca')
    })
}
function sudahDibaca() {
    const bukuSudahDibaca = ambilSemuaBuku().filter((buku) => buku.isComplete === true);

    bukuSudahDibaca.forEach((buku) => {
      tampilkanBuku(buku, "rakSudahdibaca");
    });
  }

// Fungsi Hapus
function hapus(id){
    Swal.fire({
  title: 'Apakah kamu yakin?',
  text: "Setelah di hapus, buku akan hilang",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Yes, delete it!'
}).then((result) => {
  if (result.isConfirmed) {
    Swal.fire({
            title: 'Selamat!',
            text: 'Berhasil menghapus buku!',
            icon: 'success',
            confirmButtonText: 'OK'
        }).then((result) => {
            if (result.isConfirmed) {
                localStorage.removeItem(id.toString());
                location.reload();
            }
        });
  }
})
}
// Fungsi Pindah Buku
function pindah(id){
    const bukuString = localStorage.getItem(id.toString());
    const buku = JSON.parse(bukuString);

    const statusBaca = buku.isComplete;

    if(statusBaca === false){
        Swal.fire({
            title: 'Selamat!',
            text: 'Telah Berhasil Membaca Buku!',
            icon: 'success',
            confirmButtonText: 'OK'
        }).then((result) => {
            if (result.isConfirmed) {
                buku.isComplete = true;
                localStorage.setItem(id.toString(),JSON.stringify(buku));
                location.reload();
            }
        });
    } else if(statusBaca === true){
        Swal.fire({
            title: 'Selamat!',
            text: 'Membaca Ulang terkadang menyenangkan!',
            icon: 'success',
            confirmButtonText: 'OK'
        }).then((result) => {
            if (result.isConfirmed) {
                buku.isComplete = false;
                localStorage.setItem(id.toString(),JSON.stringify(buku));
                location.reload();
            }
        });
    }
}
// Fungsi Cari Buku
function cari(event){
    event.preventDefault();
    const kataKunci = document.getElementById('search_buku').value.toLowerCase();

    if( !kataKunci){
        Swal.fire({
            title: 'Error',
            text: 'Tidak Boleh Kosong Form Carinya nya!',
            icon: 'error',
            confirmButtonText: 'OK'
        });
        return;
    } else {
         const semuaBuku = ambilSemuaBuku();

    const findBuku = semuaBuku.filter((buku)=>{
        return buku.judul.toLowerCase().includes(kataKunci);
    })

    tampilkanHasil(findBuku);
    }
}
// Fungsi tampil cari
function tampilkanHasil(findBuku){
    const rakCari = document.getElementById('hasil')
    rakCari.innerHTML = ''
    rakCari.classList.remove('none');

    findBuku.forEach((buku)=>{
        tampilkanBuku(buku, 'hasil');
    })
}
// Panggil Function
belumDibaca();
sudahDibaca();