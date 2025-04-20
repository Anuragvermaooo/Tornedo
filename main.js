// 
//   * Copyright © 2025 Anurag Verma
//   * 
//   * This code is a part of the Tornedo Project developed by Anurag Verma.
//   * All rights reserved.
//   * 
//   * Unauthorized copying, distribution, modification, or use of this code
//   * in whole or in part, is strictly prohibited without prior written permission
//   * from the author (Anurag Verma).
//   * 
//   * Tornedo is a privacy-focused project dedicated to developing secure, AI-driven,
//   * and high-performance technologies.
//   *
//   * For collaboration or licensing, contact: anuragverma8303425@gmail.com
//   *+91 8303425374
//   


// Simple animation on scroll (you can use AOS later for more)
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.classList.toggle('scrolled', window.scrollY > 50);
});

// Wait for full page load
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

function toggleChatbot() {
    const chatbotWindow = document.getElementById('chatbotWindow');
    chatbotWindow.style.display = chatbotWindow.style.display === 'block' ? 'none' : 'block';
  }
  
  function handleChatbotInput(event) {
    if (event.key === 'Enter') {
      const input = document.getElementById('chatbotInput');
      const message = input.value.trim();
      if (message) {
        const chatbotBody = document.getElementById('chatbotBody');
        const userMessage = document.createElement('p');
        userMessage.textContent = message;
        chatbotBody.appendChild(userMessage);
        input.value = '';
        // Add your chatbot response logic here
      }
    }
  }
  