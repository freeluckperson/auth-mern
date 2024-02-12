import img1 from '../assets/js.svg'
import img2 from '../assets/jwt.svg' 
import img3 from '../assets/zod-seeklogo.svg'
import img4 from '../assets/bootstrap.svg'
import img5 from '../assets/react.svg'
import img6 from '../assets/mongo.svg'
import img7 from '../assets/docker.svg'
import img8 from '../assets/jest.svg'


const Home = () => {
  return (
   <>
   <div id="carouselExampleAutoplaying" className="carousel slide my-5 " data-bs-ride="carousel"  >
  <div className="carousel-inner">
    <div className="carousel-item active">
      <a href="https://developer.mozilla.org/es/docs/Web/JavaScript" target='_blank' rel="noreferrer">
        <img src={img1} className="d-block w-100" alt="..." style={{maxHeight:'450px', marginBottom:'150px'}} />
      </a>
    </div>
    <div className="carousel-item">
      <a href="https://jwt.io/" target='_blank' rel='noreferrer'>
        <img src={img2} className="d-block w-100" alt="..." style={{maxHeight:'450px', marginBottom:'150px'}} />
      </a>
    </div>
    <div className="carousel-item">
      <a href="https://zod.dev/" target='_blank' rel='noreferrer'>
        <img src={img3} className="d-block w-100" alt="..." style={{maxHeight:'450px', marginBottom:'150px'}} />
      </a>
    </div>
    <div className="carousel-item">
      <a href="https://getbootstrap.com/" target='_blank' rel='noreferrer'>
        <img src={img4} className="d-block w-100" alt="..." style={{maxHeight:'450px', marginBottom:'150px'}} />
      </a>
    </div>
    <div className="carousel-item">
      <a href="https://react.dev/" target='_blank' rel='noreferrer'>
        <img src={img5} className="d-block w-100" alt="..." style={{maxHeight:'450px', marginBottom:'150px'}} />
      </a>
    </div>
    <div className="carousel-item">
      <a href="https://www.mongodb.com/es" target='_blank' rel='noreferrer'>
        <img src={img6} className="d-block w-100" alt="..." style={{maxHeight:'450px', marginBottom:'150px'}}/>
      </a>
    </div>
    <div className="carousel-item">
      <a href="https://www.docker.com/" target='_blank' rel='noreferrer'>
        <img src={img7} className="d-block w-100" alt="..." style={{maxHeight:'450px', marginBottom:'150px'}} />
      </a>
    </div>
    <div className="carousel-item">
      <a href="https://jestjs.io/" target='_blank' rel='noreferrer'>
        <img src={img8} className="d-block w-100" alt="..." style={{maxHeight:'450px', marginBottom:'150px'}} />
      </a>
    </div>
  </div>
  <button className="carousel-control-prev " type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button  className="carousel-control-next " type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span  className="carousel-control-next-icon " aria-hidden="true"></span>
    <span  className="visually-hidden">Next</span>
  </button>
</div>
   </>
  );
};

export default Home;
