import heroDesktop from '../images/image-hero-desktop.png';
import heroMobile from '../images/image-hero-mobile.png';
import databiz from '../images/client-databiz.svg';
import audiophile from '../images/client-audiophile.svg';
import meet from '../images/client-meet.svg';
import maker from '../images/client-maker.svg';
import './MainContent.css';

const MainContent = () => {

  return (
    <div className='main-content'>
      <div className='page-text'>
        <div className='texts'>
          <h1>Make remote work</h1>
          <p>Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.</p>
          <button>Learn more</button>
        </div>
        <div className='logos'>
          <img src={databiz} alt="databiz" />
          <img src={audiophile} alt="audiophile" />
          <img src={meet} alt="meet" />
          <img src={maker} alt="maker" />
        </div>
      </div>
      <div className='page-img'>
        <img className='img-desktop' src={heroDesktop} alt="img" />
        <img className='img-mobile' src={heroMobile} alt="img" />
      </div>
    </div>
  );
};

export default MainContent;
