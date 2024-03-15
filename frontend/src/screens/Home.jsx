import brain from '../img/hat.png'
import home from '../img/home.jpg'

const Home = () => {


    return (
        <>
            <section id='home' className="section-main">
                <div className="main-container">
                    <div className="main-textbox">
                        <h1 className="heading">Educate better</h1>
                        <p className="main-text">Get your own learning program by using our platform</p>
                    </div>

                    <div className="main-imgbox">
                        <img src={brain} className='main-img' />
                    </div>
                </div>
            </section>
        </>
    );

}

export default Home