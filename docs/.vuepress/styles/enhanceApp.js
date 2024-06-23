// docs/.vuepress/enhanceApp.js
export default ({ router }) => {
  if (typeof window !== 'undefined') {
    document.addEventListener('DOMContentLoaded', () => {
      const menuButton = document.querySelector('.navbar-toggle');
      const menu = document.querySelector('.navbar-menu');

      if (menuButton && menu) {
        menuButton.addEventListener('click', () => {
          menu.classList.toggle('active');
        });
      }
    });
  }
};