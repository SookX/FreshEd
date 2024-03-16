import brain from '../img/hat.png'
import home from '../img/backpack.png'
import { useContext } from 'react';
import { DataContext } from '../context/DataContext';

const Home = () => {
    const { handleAlert } = useContext(DataContext)

    return (
        <section id='home' className="section-main">
            <div className="main-container">
                <div className="main-textbox">
                    <h1 className="heading">Educate better</h1>
                    <p className="main-text">Get your own learning program by using our platform</p>
                    <button className="btn" onClick={() => handleAlert('success', 'Alerting the alert')}>Alert</button>
                </div>

                <img src={home} className='main-img' />
            </div>
        </section>
    );

}

export default Home