import jpg from "./A.jpg";

function home() {
  return (
    <div className="Poopins">

      <div className="col-img">
        <img src={jpg} alt="" />
      </div>

      <div className="text-4xl mt-12 header">
        <h1 className="text-amber-300"> Kuliner <span> Indonesia </span> </h1>
      </div>

      <div className=" text-1xl content-header">
        <hr/>
        <br/>
        <p><b> Halo Food Blogger! </b></p>
        <p> Selamat datang di dunia kuliner Indonesia yang penuh dengan kelezatan dan keunikan! </p>
        <br/>
        <hr/>
        <br/>
        <br/>
        <h1 className="text-amber-300"><b> Bersiaplah untuk menjelajahi rasa dan cerita di balik setiap hidangan yang menggugah selera. </b></h1>
        <br/>
        <hr/>
        <br/>
        <p> Web ini akan berbagi tentang 10 kuliner dari 10 daerah di Indonesia. </p>
        <p>
          Dengan setiap tulisan dan foto yang dibagikan, diharapkan dapat menginspirasi Anda untuk 
          menjelajahi Dunia Kuliner Indonesia sendiri dan menemukan pesona di setiap suapan. 
          Bersiaplah untuk melibatkan indera Anda dalam perjalanan yang menggugah selera ini.
          Ayo, kita mulai menjelajahi dunia kuliner Indonesia bersama!
        </p>
      </div>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><hr/>
      <div className="m-11 p-10 bg-orange-400 rounded-xl">
            <p className="text-center text-black text-3xl font-bold"> Contact Us </p>
            <p className="text-center text-gray-900 pt-5"> 
                Nurul Hasanah +62 838 9708 8438 <br/>
                Alliya Chyanda Putri +62 878 8316 1052
            </p>
        </div>
    </div>
    
  );
}

export default home;
