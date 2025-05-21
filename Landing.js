document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector(".navbar");
    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = "rgba(255, 255, 255, 0.9)";
            navbar.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.1)";
        } else {
            navbar.style.backgroundColor = "#ffffff";
            navbar.style.boxShadow = "none";
        }
    });

    const hamburger = document.createElement('button');
    hamburger.className = 'hamburger';
    hamburger.innerHTML = `
        <span></span>
        <span></span>
        <span></span>
    `;

    const menu = document.querySelector('.menu');
    
    const menuLinks = `
        <li><a href="#collection">TEA COLLECTIONS</a></li>
        <li><a href="#business">BUSINESS</a></li>
        <li><a href="#blog">BLOG</a></li>
        <li><a href="#contact">CONTACT US</a></li>
    `;
    menu.innerHTML = menuLinks;
    
    const mobileMenu = document.createElement('ul');
    mobileMenu.className = 'menu mobile-menu';
    
    mobileMenu.innerHTML = `
        ${menuLinks}
        <li><a href="#search">Search for Product</a></li>
        <li><a href="#profile">Profile</a></li>
        <li><a href="#shop">Shop</a></li>
    `;

    function smoothScroll(targetId) {
        const element = document.querySelector(targetId);
        if (!element) return;

        const navbarHeight = navbar.offsetHeight;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }

    document.querySelectorAll('.menu a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            smoothScroll(targetId);
        });
    });

    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            smoothScroll(targetId);
            
            hamburger.classList.remove('active');
            mobileMenu.classList.remove('nav-active');
        });
    });

    navbar.insertBefore(hamburger, navbar.firstChild);
    navbar.appendChild(mobileMenu);

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        mobileMenu.classList.toggle('nav-active');
    });

    document.addEventListener('click', (e) => {
        if (!navbar.contains(e.target)) {
            hamburger.classList.remove('active');
            mobileMenu.classList.remove('nav-active');
        }
    });

    document.querySelectorAll("a[href^='#']").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        });
    });
});
