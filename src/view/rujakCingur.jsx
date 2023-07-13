import RujakCingur from './rujakCingur.jpg';
import '.././App.css';

function App() {
  return (
    <div>
      <div className="mt-20 col-img">
        <img src={RujakCingur} alt=""></img>
      </div>

      <div className="header-sr">
        <h1 className="text-4xl text-amber-400"> Sejarah dan Resep
        <span className="text-orange-500"> Rujak Cingur </span> </h1>
      </div>

      <div className=" text-1xl text-amber-400 content-header-src">
        <hr/>
        <br/>
        <div className="text-2xl text-center"><b> Sejarah </b></div>
        <br/>
        <hr/>
        <br/>
        <p>
          Rujak Cingur adalah salah satu hidangan tradisional Indonesia yang berasal dari daerah Jawa Timur, khususnya 
          Surabaya. Sejarah Rujak Cingur dapat ditelusuri ke masa kolonial Belanda pada abad ke-19. Konon, pada masa itu 
          terdapat pabrik pengolahan karet di daerah Surabaya. Para pekerja di pabrik tersebut menggunakan bagian muka 
          (cingur) dari kepala sapi sebagai makanan mereka. Bagian muka sapi ini biasanya diolah dengan merebus dan 
          memotongnya menjadi irisan kecil. Kemudian, irisan cingur sapi tersebut disajikan dengan berbagai bahan lain 
          seperti sayuran, buah-buahan, dan saus bumbu kacang. <br/>
          <br/>
          Nama "cingur" kemudian melekat pada hidangan ini, dan disebut sebagai Rujak Cingur. Hidangan ini semakin 
          populer di kalangan masyarakat Jawa Timur, bahkan menjadi salah satu hidangan yang khas dan terkenal dari 
          Surabaya. <br/>
          <br/>
          Rujak Cingur terdiri dari berbagai bahan, seperti irisan cingur sapi yang direbus, irisan sayuran segar seperti 
          mentimun, kacang panjang, taoge, dan kangkung, serta buah-buahan seperti mangga, bengkoang, dan nanas. Semua 
          bahan tersebut disajikan dengan saus bumbu kacang yang khas, yang terbuat dari bahan seperti kacang tanah, gula 
          merah, petis, air jeruk nipis, dan cabai. 
        </p>
        <br/>
       </div>
       
       <div className="text-1xl text-yellow-500 text-left content-header-src1">
        <p>
          Hingga saat ini, Rujak Cingur tetap menjadi hidangan yang populer di Jawa Timur dan di seluruh Indonesia. 
          Keanekaragaman bahan serta cita rasa unik dari saus bumbu kacangnya membuat Rujak Cingur menjadi hidangan 
          yang khas dan menggugah selera. Hidangan ini juga mencerminkan keanekaragaman kuliner Indonesia serta kebiasaan 
          mengolah bahan-bahan alami menjadi hidangan yang lezat dan bergizi. <br />
        </p>
        <br/>      
          <hr/>
          <br/>
        <div className="text-2xl text-center"><b> Cara Membuat Rujak Cingur </b></div>
        <br/>
        <hr/>
        <br/>
        <p>
            Bahan-bahan: <br/>
            - 200 gram cingur sapi (cingur yang sudah direbus dan dipotong-potong kecil) <br/>
            - 1 buah mentimun, potong-potong <br/>
            - 100 gram kacang panjang, potong-potong <br/>
            - 100 gram taoge <br/>
            - 100 gram kangkung <br/>
            - 1 buah bengkoang, potong-potong <br/>
            - 1 buah mangga muda, potong dadu <br/>
            - 1 buah nanas, potong dadu <br/>
            - Daun kemangi secukupnya (sebagai hiasan) <br/>
        </p>
        <br/>
        </div>

        <div className="text-1xl text-yellow-500 text-left content-header-src2">
        <p> 
            Bumbu saus: <br/>
            - 100 gram kacang tanah, sangrai dan haluskan <br/>
            - 3 siung bawang putih, haluskan <br/>
            - 2 sendok makan gula merah, serut halus <br/>
            - 2 sendok makan petis <br/>
            - 2 sendok makan air jeruk nipis <br/>
            - 2-3 buah cabai rawit (opsional, sesuai selera) <br/>
            - Garam secukupnya <br/>
            - Air secukupnya <br/>
        </p>
       </div>

       <div className="text-1xl text-yellow-500 text-left content-header-src3">
       <p>
            Cara membuat: <br/>
            1. Campurkan kacang tanah yang sudah dihaluskan, bawang putih halus, gula merah, petis, air jeruk nipis, dan 
            cabai rawit (jika menggunakan) dalam sebuah wadah. Aduk rata hingga bumbu tercampur merata. <br/>
            2. Tambahkan air secukupnya untuk mencapai konsistensi saus yang diinginkan. Aduk hingga bumbu larut dan 
            tercampur rata. Koreksi rasa dengan garam dan sesuaikan dengan selera Anda. <br/>
            3. Siapkan piring saji. Tata cingur sapi, mentimun, kacang panjang, taoge, kangkung, bengkoang, mangga, dan 
            nanas di atas piring. <br/>
            4. Tuangkan saus bumbu kacang di atas bahan-bahan tersebut, sehingga semua bahan terendam oleh saus. <br/>
            5. Taburi dengan daun kemangi sebagai hiasan. <br/>
            6. Rujak Cingur siap disajikan. Nikmati dalam keadaan segar. <br/>
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
