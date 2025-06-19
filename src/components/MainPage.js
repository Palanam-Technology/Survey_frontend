// This is the Main Page(over which LoginModal and SignUp modal appear)
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import LoginModal from './LoginModal'; 

const MainPage = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false); 
  const [isLoggedIn, setIsLoggedIn] = useState(false);  
  const navigate = useNavigate(); 

  const toggleLoginModal = () => {
    setIsLoginModalOpen(!isLoginModalOpen);
  };

  const handleLoginSuccess = () => {
    setIsLoggedIn(true); 
    setIsLoginModalOpen(false); 
    navigate('/survey'); 
  };

  return (
    <main className="relative w-full overflow-x-hidden">
      <div className="w-full h-[50vh] sm:h-[650vh] md:h-[50vh] lg:h-[50vh] bg-pink-200 relative overflow-hidden mt-2">
        <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <h2 className="text-white text-4xl md:text-6xl font-bold">
            Product Form
          </h2>
        </div>
      </div>
      {/* MainPage Content */}
      <button
        onClick={toggleLoginModal}
        className="fixed bottom-10 right-10 bg-blue-600 text-white p-4 rounded-full shadow-md"
      >
        My Profile
      </button>

      {/* Login Modal */}
      {isLoginModalOpen && <LoginModal onLoginSuccess={handleLoginSuccess} closeModal={toggleLoginModal} />}
    </main>
  );
};

export default MainPage;
