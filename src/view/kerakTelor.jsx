import KerakTelor from './kerakTelor.jpg';
import '.././App.css';

function App() {
  return (
    <div>
      <div className="mt-20 col-img">
        <img src={KerakTelor} alt=""></img>
      </div>

      <div className="header-sr">
        <h1 className="text-4xl text-amber-400"> Sejarah dan Resep
        <span className="text-orange-500"> Kerak Telor </span> </h1>
      </div>

      <div className=" text-1xl text-amber-400 content-header-skt">
        <hr/>
        <br/>
        <div className="text-2xl text-center"><b> Sejarah </b></div>
        <br/>
        <hr/>
        <br/>
        <p>
          Konon, sejak zaman penjajahan Belanda dulu, kuliner kerak telor ini sudah ada. Eksistensinya hingga saat ini 
          masih terus ada dan menjadi makanan yang tak lekang oleh waktu dan banyak disukai oleh masyarakat. Melansir 
          Disbud DKI, asal usul kerak telor tidak disengaja dan tidak disangka-sangka. Jadi, pada zaman dulu terdapat 
          banyak pohon kelapa yang tumbuh di daerah Jakarta atau yang dulu masih dikenal dengan sebutan Batavia. <br/>
          <br/>
          Buah kelapa yang banyak pun dimanfaatkan oleh warga Betawi untuk diolah menjadi kudapan yang akhirnya disebut 
          sebagai kerak telor. Kuliner khas Betawi ini mulai dijajakan di sekitar Monas sejak tahun 1970-an dan ternyata 
          banyak orang yang menyukainya. Campuran beras dan telor tersebut terasa renyah serta telur dan kelapanya 
          memiliki cita rasa gurih. Sehingga kerak telor menjadi sebuah kuliner yang spesial karena perpaduan dari rasa 
          dan teksturnya yang unik tersebut.
          <br/>
        </p>
        <br/>
       </div>
       
      <div className="text-1xl text-yellow-500 text-left content-header-skt1">
        <p>
          Setelah itu, peminat kerak telor pun semakin meningkat seiring berjalannya waktu. Kenikmatan semakin terasa 
          ketika makanan disantap saat masih hangat. Biasanya penjual akan membuatnya sesuai dengan pembeli yang membeli. 
          Jadi, masih fresh dan hangat saat disantap.
        </p>
        <br/>      
          <hr/>
          <br/>
        <div className="text-2xl text-center"><b> Cara Membuat Kerak Telor </b></div>
            <br/>
            <hr/>
            <br/>
            <p>
            Bahan: <br/>
            - 50 gr beras ketan <br/>
            - 1 btr telur ayam/bebek <br/>
            - 5 sdm air <br/>
            - 50 gr kelapa parut <br/>
            - 1 sdm ebi/rebon <br/>
            - 1/4 sdt garam <br/>
            - 1/4 sdt lada <br/>
            </p>
        </div>

        <div className="text-1xl text-yellow-500 text-left content-header-skt2">
        <p>
            Topping: <br/>
            - Bawang goreng <br/>
            - Serundeng kelapa/kelapa sangrai <br/>
            - Bon cabe lv.30 <br/>
            - Ebi sangrai halus <br/>
            - 1 buah cabai merah keriting iris tipis (garnish) daun kemangi layu. <br/>
        </p>
       </div>

       <div className="text-1xl text-yellow-500 text-left content-header-skt3">
        <p>
            Cara membuat: <br/>
            1. Rendam beras ketan semalaman, lalu cuci bersih, tiriskan. <br/>
            2. Sangrai kelapa parut hingga kecoklatan, sisihkan. Sangrai ebi lalu haluskan, sisihkan dulu. <br/>
            3. Siapkan wajan, panaskan dengan api kecil. Masukkan beras ketan, beri 5 sdm air. Masak selama kurang lebih 5 
            menit. Siapkan campuran telur, 2 sdm kelapa sangrai, 1 sdt ebi yang sudah halus, garam dan lada aduk rata. 
            Campurkan ke dalam beras ketan. <br/>
            4. Aduk dan ratakan hingga tipis merata. Setelah pinggiran agak kecokelatan, balikkan wajan masak kembali 
            sebentar hingga permukaannya kecoklatan juga, matikan api. <br/>
            5. Beri topping kelapa sangrai, ebi halus, bawang goreng, bon cabe dan irisan cabai. Kerak telor siap 
            dinikmati. <br/>
            <br/>
            <hr/>
        </p>
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
