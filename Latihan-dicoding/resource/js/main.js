function menu(){
    const menu = document.getElementById('menu');
    menu.classList.toggle('slide')
}

function sectionFounder(){
    const pesan = document.getElementById('pesan');
    const gambar1 = document.getElementById('gambar1');
    const gambar2 = document.getElementById('gambar2');

    const tombol1 = document.getElementById('tombol1');
    const tombol2 = document.getElementById('tombol2');

    gambar2.classList.remove('none')
    gambar1.classList.add('none');

    tombol1.classList.add('none');
    tombol2.classList.remove('none');
    pesan.innerHTML = `Tak kenal maka tak sayang! Ini dia Dennis Satriani Sucipto Putra, founder "Drink Boba". Seorang mahasiswa jurusan Teknik Informatika yang sedang mengejar gelarnya di Universitas Catur Insan Cendikia, Kota Cirebon. Lahir pada tahun 2005, Dennis telah menunjukkan semangat dan dedikasi yang luar biasa dalam merintis bisnisnya sejak awal masuk kuliah.

Dennis tidak hanya seorang mahasiswa yang berbakat di bidang teknologi, tetapi juga seorang pengusaha muda yang berani mengambil risiko. Dia memiliki visi untuk membawa kelezatan minuman boba yang berkualitas tinggi ke komunitasnya dan membangun merek "Drink Boba" dari nol. Dengan semangat pantang menyerah dan tekad untuk terus berkembang, Dennis telah menjadi inspirasi bagi banyak teman sekelasnya dan rekan bisnisnya. Kami yakin, dengan Dennis di belakang roda kemudi, "Drink Boba" akan terus berkembang dan menjadi salah satu destinasi favorit pecinta boba di Cirebon.`
}

function sejarah(){
    const pesan = document.getElementById('pesan');
    const gambar1 = document.getElementById('gambar1');
    const gambar2 = document.getElementById('gambar2');

    const tombol1 = document.getElementById('tombol1');
    const tombol2 = document.getElementById('tombol2');

    gambar1.classList.remove('none')
    gambar2.classList.add('none');

    tombol2.classList.add('none');
    tombol1.classList.remove('none');

    pesan.innerHTML = `Selamat datang di "Drink Boba"! Kami bangga menjadi salah satu outlet resmi penjual boba terkemuka dengan beragam varian rasa yang lezat dan topping yang menggugah selera. Kami berkomitmen untuk selalu menyajikan produk berkualitas tertinggi kepada pelanggan kami.

Varian Rasa yang Menggugah Selera: Di "Drink Boba," kami memahami bahwa setiap orang memiliki selera yang berbeda. Oleh karena itu, kami menawarkan berbagai macam varian rasa boba yang memenuhi beragam preferensi Anda. Dari rasa klasik seperti Thai Tea dan Taro hingga pilihan eksotis seperti Matcha Latte dan Mango Madness, kami memiliki sesuatu yang cocok untuk semua orang. Kami terus melakukan riset dan pengembangan untuk menghadirkan varian rasa baru yang menarik bagi pelanggan setia kami.

Kualitas Adalah Prioritas Kami: Kualitas adalah landasan dari semua yang kami lakukan di "Drink Boba." Kami hanya menggunakan bahan-bahan terbaik dan berkualitas tinggi dalam setiap minuman kami. Kami juga sangat memperhatikan proses pembuatan minuman untuk memastikan konsistensi dan kelezatan yang khas dari boba kami.
`
}

const links = document.querySelectorAll('a[href^="#"]');

links.forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId); 

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth'
      });
    }
  });
});