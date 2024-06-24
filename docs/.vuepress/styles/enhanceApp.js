// .vuepress/enhanceApp.js
import { defineClientConfig } from '@vuepress/client';

export default defineClientConfig({
  setup() {
    const setupMenu = () => {
      const menuButtons = document.querySelectorAll('.navbar-toggle, .vp-toggle-sidebar-button');
      const menus = document.querySelectorAll('.navbar-menu, .sidebar');

      const toggleMenu = () => {
        menus.forEach(menu => {
          menu.classList.toggle('active');
        });
      };

      menuButtons.forEach((menuButton) => {
        if (menuButton) {
          // Remove existing listeners to prevent duplicates
          menuButton.removeEventListener('click', toggleMenu);
          
          // Add event listener
          menuButton.addEventListener('click', toggleMenu);
        }
      });
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

      // Ensure setup runs when the document is ready
      document.addEventListener('DOMContentLoaded', setupMenu);
    }
  },
});
