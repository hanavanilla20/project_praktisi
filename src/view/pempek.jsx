import Pempek from './Pempek.png';
import '.././App.css';

function App() {
  return (
    <div>
      <div className="mt-20 col-img">
        <img src={Pempek} alt=""></img>
      </div>

      <div className="header-sr">
        <h1 className="text-4xl text-amber-400"> Sejarah dan Resep
        <span className="text-orange-500"> Pempek </span> </h1>
      </div>

      <div className=" text-1xl text-amber-400 content-header-sp">
        <hr/>
        <br/>
        <div className="text-2xl text-center"><b> Sejarah </b></div>
        <br/>
        <hr/>
        <br/>
        <p>
          Pempek adalah makanan khas dari Palembang, Sumatera Selatan, Indonesia. Makanan ini terkenal dengan rasa yang 
          unik dan terbuat dari ikan yang digiling halus. Sejarah pempek sendiri bermula pada abad ke-16, saat Kerajaan 
          Sriwijaya masih berkuasa di daerah tersebut. <br/>
          <br/>
          Pada awalnya, pempek dibuat sebagai makanan untuk para awak kapal dan pelaut yang berlayar dari Palembang. 
          Pempek berfungsi sebagai makanan yang tahan lama, praktis, dan dapat disimpan dalam waktu yang lama tanpa perlu 
          khawatir basi atau rusak. Para pelaut akan membawa pempek dalam perjalanan mereka ke laut sebagai sumber makanan 
          yang dapat dikonsumsi selama perjalanan yang panjang. <br/>
          <br/>
          Pempek menjadi makanan yang sangat populer di Palembang dan sekitarnya. Seiring berjalannya waktu, pempek 
          berkembang menjadi berbagai variasi dan varian, seperti pempek lenjer, pempek kapal selam, pempek telur, dan 
          lainnya. Setiap varian pempek memiliki bentuk, ukuran, atau bahan tambahan yang berbeda, tetapi tetap 
          mempertahankan rasa dasar yang khas.
        </p>
        <br/>
       </div>
       
      <div className="text-1xl text-yellow-500 text-left content-header-sp1">
        <p>
          Pempek telah menjadi bagian penting dari budaya kuliner Palembang dan menjadi salah satu ikon kota tersebut. 
          Saat ini, pempek dapat ditemukan tidak hanya di Palembang, tetapi juga di berbagai kota di Indonesia, bahkan 
          hingga mancanegara. Rasanya yang lezat dan tekstur yang kenyal membuat pempek menjadi makanan yang disukai banyak 
          orang, baik di dalam maupun luar negeri.
        </p>
        <br/>      
          <hr/>
          <br/>
        <div className="text-2xl text-center"><b> Cara Membuat Pempek </b></div>
            <br/>
            <hr/>
            <br/>
            <p>
            Bahan: <br/>
            - 150 gram tepung sagu tani <br/>
            - 2 sendok makan tepung terigu <br/>
            - 2 siung bawang putih, haluskan <br/>
            - 1 sendok teh garam <br/>
            - 1/2 sdt merica bubuk <br/>
            - Air secukupnya <br/>
            - minyak goreng untuk menggoreng <br/>
            </p>
        </div>

        <div className="text-1xl text-yellow-500 text-left content-header-sp2">
        <p>
            Bahan untuk membuat kuah cuka <br/>
            - 200 ml air <br/>
            - 100 ml cuka <br/>
            - 10 gram gula merah, potong halus atau serut <br/>
            - 1 sendok teh garam <br/>
            - 5 cabe rawit, iris halus <br/>
            - bawang putih goreng sebagai taburan <br/>
        </p>
       </div>

       <div className="text-1xl text-yellow-500 text-left content-header-sp3">
        <p>
            Cara membuat: <br/>
            1. Bersihkan ikan tenggiri dari duri dan kulitnya. Cuci bersih dan tiriskan. <br/>
            2. Potong-potong ikan menjadi bagian-bagian kecil dan haluskan dengan blender atau food processor hingga lembut. <br/>
            3. Campurkan ikan yang sudah dihaluskan dengan tepung sagu, tepung terigu, bawang putih, garam, dan merica bubuk. Aduk rata. <br/>
            4. Tambahkan air sedikit demi sedikit sambil terus diaduk hingga adonan bisa dipulung dan tidak terlalu lembek atau terlalu keras. Pastikan adonan bisa dibentuk. <br/>
            5. Ambil sedikit adonan dan bentuk sesuai dengan preferensi Anda. Misalnya, bulat pipih atau oval. <br/>
            6. Panaskan air dalam panci hingga mendidih. Masukkan pempek ke dalam air mendidih dan masak hingga pempek mengapung. Angkat dan tiriskan. <br/>
            7. Panaskan minyak dalam wajan yang cukup banyak. Goreng pempek hingga kecokelatan dan matang. Angkat dan tiriskan. <br/>
            8. Untuk membuat kuah cuka, campurkan air, cuka, gula merah, garam, dan cabe rawit dalam panci. Masak hingga gula merah larut dan kuah mendidih. <br/>
            9. Saat menyajikan, tuangkan kuah cuka di atas pempek yang telah digoreng. Taburi dengan bawang putih goreng. <br/>
            10. Pempek siap disajikan. Nikmati dengan kuah cuka dan tambahan ebi goreng jika diinginkan. <br/>
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
