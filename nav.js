window.addEventListener('scroll', function() {
    const nav = document.getElementById('nav-1');
    const content = document.getElementById('inverno');
    const showNavAt = content.offsetTop;
  
    if (window.scrollY >= showNavAt) {
      nav.classList.add('show');
    } else {
      nav.classList.remove('show');
    }
  });