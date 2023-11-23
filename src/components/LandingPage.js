
import { Link } from 'react-router-dom';

function LandingPage({onLogout}) {

  return (
    <div className="landing-page">
      <header>
        <div className="container">
          <p className="logo">Closet Chronicles: <b><em>Curated Fashion for Every Occasion</em></b></p>
          <ul className="links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/work">Work</Link></li>
            <li><Link to="/info">Info</Link></li>
            <button onClick={onLogout} className='logout-btn'>Log Out</button>
          </ul>
        </div>
      </header>
      <div className="content">
        <div className="container">
          <div className="info">
            <h1>Threads of Elegance: <br/>Your Ultimate Fashion Destination</h1>
            <p>Welcome to <b>Closet Chronicles:</b>, where fashion meets passion. Dive into a world of exquisite style and curated collections that redefine your wardrobe. Our handpicked selection of clothing caters to every trend, from timeless classics to the latest runway sensations. Indulge in the joy of dressing up, express your individuality, and embrace the confidence that comes with wearing outfits crafted for you. At <b>Closet Chronicles</b>, fashion is more than just clothing; it's a statement. Join us on this sartorial journey and elevate your style to new heights. Your perfect look awaits!</p>
            <Link to="/shirts"><button>Shirts</button></Link>
            <Link to="/shoes"><button>Shoes</button></Link>
            <Link to="/trousers"><button>Trousers</button></Link>
          </div>
          <div className="image">
            <img src="https://png.pngtree.com/thumb_back/fh260/background/20230711/pngtree-d-render-of-a-white-background-with-an-orange-shopping-cart-image_3833238.jpg" alt="Inspiration" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;