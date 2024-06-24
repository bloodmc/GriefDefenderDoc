// .vuepress/enhanceApp.js
import { defineClientConfig } from '@vuepress/client';

export default defineClientConfig({
  setup() {
    const setupMenu = () => {
      const menuButton = document.querySelector('.navbar-toggle');
      const menu = document.querySelector('.navbar-menu');

      const toggleMenu = () => {
        menu.classList.toggle('active');
      };

      if (menuButton && menu) {
        // Remove existing listeners to prevent duplicates
        menuButton.removeEventListener('click', toggleMenu);
        
        // Add event listener
        menuButton.addEventListener('click', toggleMenu);
      }
    };

    if (typeof window !== 'undefined') {
      // Initial setup on page load
      window.addEventListener('load', setupMenu);

      // Setup after each route change
      router.afterEach(() => {
        setTimeout(() => {
          setupMenu();
        }, 0);
      });
    }
  },
});
