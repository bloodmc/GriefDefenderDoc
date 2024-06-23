// .vuepress/enhanceApp.js
import { defineClientConfig } from '@vuepress/client';

export default defineClientConfig({
  setup() {
    if (typeof window !== 'undefined') {
      const setupMenu = () => {
        const menuButton = document.querySelector('.navbar-toggle');
        const menu = document.querySelector('.navbar-menu');

        const toggleMenu = () => {
          menu.classList.toggle('active');
        };

        if (menuButton && menu) {
          menuButton.addEventListener('click', toggleMenu);
        }
      };

      document.addEventListener('DOMContentLoaded', setupMenu);
      router.afterEach(() => {
        setupMenu();
      });
    }
  },
});
