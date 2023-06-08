import './Home.css'

const Home = () => {
    return (
        <div>
            <h3 className='text-center py-3'>Welcome to <span className="clr-cstm-2">Harmony</span>
              Camp</h3>
            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100 caro-img" src="https://cdn.pixabay.com/photo/2016/11/23/00/23/hands-1851426_1280.jpg" alt="First slide"/>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100 caro-img" src="https://cdn.pixabay.com/photo/2016/11/29/03/42/mic-1867121_1280.jpg" alt="Second slide"/>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100 caro-img" src="https://cdn.pixabay.com/photo/2016/09/08/21/09/piano-1655558_1280.jpg" alt="Third slide"/>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div>
    );
};

export default Home;