import brain from '../img/school-backpack-neon-sign-pupil-600nw-1434179477.png'

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