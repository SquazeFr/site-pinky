
    // Menu hamburger pour mobile
    document.addEventListener('DOMContentLoaded', function() {
        const hamburger = document.querySelector('.hamburger');
        const nav = document.getElementById('nav');
            
        hamburger.addEventListener('click', function() {
            nav.classList.toggle('active');
        });
            
        // Fermer le menu si on clique à l'extérieur
        document.addEventListener('click', function(event) {
            const isClickInsideNav = nav.contains(event.target);
            const isClickOnHamburger = hamburger.contains(event.target);
                
            if (!isClickInsideNav && !isClickOnHamburger && nav.classList.contains('active')) {
                nav.classList.remove('active');
            }
        });
    });