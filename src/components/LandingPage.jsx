import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div style={{ backgroundImage: 'url(/bg.jpg)', height: '100vh', backgroundSize: 'cover' }}>
      <h1>🌿 GreenLeaf Houseplants 🌿</h1>
      <p>Your one-stop shop for beautiful, healthy, and easy-to-care-for indoor plants.</p>
      <Link to="/products"><button>Get Started</button></Link>
    </div>
  );
}

export default LandingPage;
