import Gudeg from './Gudeg.jpg';
import '.././App.css';

function App() {
  return (
    <div>
      <div className="mt-20 col-img">
        <img src={Gudeg} alt=""></img>
      </div>

      <div className="header-sr">
        <h1 className="text-4xl text-amber-400"> Sejarah dan Resep
        <span className="text-orange-500"> Gudeg </span> </h1>
      </div>

      <div className=" text-1xl text-amber-400 content-header-sg">
        <hr/>
        <br/>
        <div className="text-2xl text-center"><b> Sejarah </b></div>
        <br/>
        <hr/>
        <br/>
        <p>
          Gudeg adalah makanan khas dari Yogyakarta, Indonesia. Makanan ini terbuat dari nangka muda yang dimasak dengan 
          bumbu khas Jawa, seperti kelapa parut, gula aren, daun salam, serai, dan rempah-rempah lainnya. Gudeg memiliki 
          rasa manis dengan aroma yang khas dan sering disajikan dengan nasi, telur, ayam, dan sambal goreng krecek. <br/>
          <br/>
          Sejarah gudeg Jogjakarta pertama kali muncul pada abad ke-18, saat Kesultanan Mataram Islam masih berkuasa di 
          wilayah tersebut. Konon, gudeg pertama kali dibuat oleh seorang abdi dalem (abdi kerajaan) bernama Raden Demang 
          Tegis di Keraton Yogyakarta. Awalnya, gudeg dibuat sebagai makanan istimewa yang dihidangkan hanya untuk 
          keluarga kerajaan dan para bangsawan. <br/>
          <br/>
          Namun, seiring berjalannya waktu, gudeg semakin populer di kalangan masyarakat Yogyakarta. Makanan ini menjadi 
          makanan sehari-hari yang banyak dijual di warung-warung atau pedagang kaki lima di kota tersebut. Gudeg menjadi 
          makanan yang sangat terkenal dan menjadi ikon kuliner dari Yogyakarta.
        </p>
        <br/>
       </div>
       
      <div className="text-1xl text-yellow-500 text-left content-header-sg1">
        <p>
        Gudeg Jogjakarta memiliki ciri khas dalam penyajiannya. Biasanya, gudeg dimasak dalam panci besar dari tanah liat 
        yang disebut "kendil" atau "kawulo". Proses memasak gudeg dilakukan dengan cara memasukkan nangka muda yang sudah 
        dipotong kecil-kecil ke dalam kendil, lalu ditambahkan bumbu-bumbu dan rempah-rempah khas Jawa. Kemudian, kendil 
        tersebut dimasukkan ke dalam tungku kayu dan dimasak dengan api kecil selama berjam-jam hingga bumbu meresap dan 
        nangka menjadi empuk. <br/>
        <br/>
        Gudeg Jogjakarta telah menjadi bagian tak terpisahkan dari budaya dan tradisi kota Yogyakarta. Makanan ini sering 
        disajikan dalam acara-acara khusus, seperti dalam upacara tradisional atau perayaan keagamaan. Gudeg Jogjakarta 
        juga menjadi daya tarik wisata kuliner yang populer, menarik wisatawan lokal maupun mancanegara yang ingin 
        mencicipi kelezatan makanan tradisional Indonesia.
        </p>
        <br/>      
          <hr/>
          <br/>
        <div className="text-2xl text-center"><b> Cara Membuat Gudeg </b></div>
            <br/>
            <hr/>
            <br/>
            <p>
            Bahan: <br/>
            - 500 gram nangka muda, potong-potong <br/>
            - 200 gram kelapa parut, sangrai <br/>
            - 4 lembar daun salam <br/>
            - 2 batang serai, memarkan bagian putihnya <br/>
            - 4 cm lengkuas, memarkan <br/>
            - 1 liter air kelapa <br/>
            - 200 gram gula jawa (aren), serut <br/>
            - 1 sendok teh garam <br/>
            - Telur rebus (opsional) <br/>
            - Ayam rebus (opsional) <br/>
            - Sambal goreng krecek (opsional) <br/>
            - Nasi putih untuk penyajian <br/>
            </p>
        </div>

        <div className="text-1xl text-yellow-500 text-left content-header-sg2">
        <p>
            Bumbu halus <br/>
            - 6 siung bawang putih <br/>
            - 4 butir kemiri, sangrai <br/>
            - 2 cm jahe <br/>
        </p>
       </div>

       <div className="text-1xl text-yellow-500 text-left content-header-sg3">
        <p>
            Cara membuat: <br/>
            1. Rebus nangka muda dalam air mendidih selama 10-15 menit hingga setengah matang. Tiriskan dan sisihkan. <br/>
            2. Tumis bumbu halus, daun salam, serai, dan lengkuas dalam sedikit minyak hingga harum. <br/>
            3. Tambahkan nangka muda yang sudah direbus ke dalam tumisan bumbu. Aduk rata. <br/>
            4. Tuangkan air kelapa dan masak dengan api kecil hingga nangka muda menjadi empuk dan bumbu meresap. Hal ini dapat memakan waktu sekitar 3-4 jam. Jika air kelapa mulai habis, tambahkan air panas secukupnya. <br/>
            5. Setelah nangka muda empuk, masukkan kelapa parut sangrai, gula jawa serut, dan garam. Aduk rata dan masak lagi hingga bumbu meresap dan kuah mengental. <br/>
            6. Jika diinginkan, tambahkan telur rebus, ayam rebus, dan sambal goreng krecek ke dalam gudeg yang sudah matang. Masak sebentar hingga semua bahan tercampur dengan baik. <br/>
            7. Gudeg Jogjakarta siap disajikan. Sajikan dengan nasi putih. <br/>
        </p>
        <br/>
        <hr/>
        <div className="m-11 p-10 bg-orange-400 rounded-xl">
            <p className="text-center text-black text-3xl font-bold"> Contact Us </p>
            <p className="text-center text-gray-900 pt-5"> 
                Nurul Hasanah +62 838 9708 8438 <br/>
                Alliya Chyanda Putri +62 878 8316 1052
            </p>
        </div>
      </div>
  </div>
  );
}

export default App;
