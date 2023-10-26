import './App.css';
import Header from './Header';
import Cardlist from './Cardlist';
import Tutoriallist from './Tutoriallist';
import Footer from './Footer';
import Plans from './Plans';
import Login from './Login';
import Signup from './Signup';
import Payment from './Payment';
import NewsletterSignup from './NewsletterSignup';
import { Route, Routes, useLocation } from 'react-router-dom';
import Completion from './Completion';
import { AuthProvider } from './Context/AuthContext';
import Post from './PostPage';

// Define the Home component
function Home() {
  return (
    <div>
      <div className="image-section">
        <div className="image-container">
          <img src="./img/game.png" alt="Logo" className="navbar-logo" />
          <h1 className="navbar-logo-text">Image</h1>
        </div>
        <div className="center-text">
          <h1>Featured Articles</h1>
        </div>
        <Cardlist />
        <div className="center-text">
          <h1>Featured Tutorials</h1>
        </div>
        <Tutoriallist />
        <NewsletterSignup />
        <Footer />
      </div>
    </div>
  );
}

function App() {
  const location = useLocation();

  // Decide whether to show the header based on the route
  const showHeader = location.pathname !== '/' && location.pathname !== '/signup';

  return (
    <div>
      <AuthProvider>
        {showHeader && <Header />}
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/plans" element={<Plans />} />
          <Route path="/post" element={<Post />} />
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/completion" element={<Completion />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
