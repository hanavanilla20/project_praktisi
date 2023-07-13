import AyamTaliwang from './ayamTaliwang.jpg';
import '.././App.css';

function App() {
  return (
    <div>
      <div className="mt-20 col-img">
        <img src={AyamTaliwang} alt=""></img>
      </div>

      <div className="header-at">
        <h1 className="text-4xl text-amber-400"> Sejarah dan Resep
        <span className="text-orange-500"> Ayam Taliwang </span> </h1>
      </div>

      <div className=" text-1xl text-amber-400 content-header-sat">
        <hr/>
        <br/>
        <div className="text-2xl text-center"><b> Sejarah </b></div>
        <br/>
        <hr/>
        <br/>
        <p>
          Ayam Taliwang adalah hidangan khas dari Lombok, pulau yang terletak di sebelah timur Bali, Indonesia. Sejarah 
          Ayam Taliwang dapat ditelusuri ke desa Taliwang, Kabupaten Sumbawa, yang terletak di bagian barat daya Lombok.
          Konon, Ayam Taliwang pertama kali diperkenalkan oleh seorang wanita bernama Mak Kundus, yang berasal dari desa 
          Taliwang, pada tahun 1970-an. Ia membuat hidangan ayam dengan bumbu khusus yang kemudian dikenal sebagai Ayam 
          Taliwang. Hidangan ini segera populer di kalangan penduduk setempat dan menyebar luas di pulau Lombok. <br/>
          <br/>
          Ayam Taliwang terkenal dengan cita rasa pedas yang khas. Hidangan ini menggunakan ayam kampung yang dipotong 
          menjadi beberapa bagian, kemudian diolah dengan bumbu berbasis cabai merah, bawang putih, bawang merah, jeruk 
          limo, dan rempah-rempah lainnya. Ayam kemudian dibakar di atas arang sambil terus diolesi dengan bumbu hingga 
          matang sempurna dan berkulit renyah. <br/>
        </p>
        <br/>
       </div>
       
      <div className="text-1xl text-yellow-500 text-left content-header-sat1">
        <p>
          Hingga saat ini, Ayam Taliwang menjadi hidangan ikonik dari Lombok yang banyak dicari oleh wisatawan yang 
          berkunjung ke pulau tersebut. Kebanyakan restoran dan warung makan di Lombok menyajikan Ayam Taliwang sebagai 
          menu utama. Kelezatan dan kepedasan Ayam Taliwang membuatnya menjadi hidangan yang sangat populer dan menjadi 
          salah satu ikon kuliner dari daerah tersebut. <br/>
          Ayam Taliwang bukan hanya mencerminkan kelezatan hidangan khas Lombok, tetapi juga memperkaya ragam kuliner 
          Indonesia dengan variasi hidangan pedas dan beraroma rempah yang menggugah selera.
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

        <div className="text-1xl text-yellow-500 text-left content-header-sat2">
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

       <div className="text-1xl text-yellow-500 text-left content-header-sat3">
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
