document.addEventListener("DOMContentLoaded", function() {
    const openBtn = document.getElementById("openBtn");
    const closeBtn = document.getElementById("closeBtn");
    const sidenav = document.getElementById("mySidenav");

    openBtn.addEventListener("click", function() {
        sidenav.classList.add("active");
    });

    closeBtn.addEventListener("click", function() {
        sidenav.classList.remove("active");
    });

    const competencesSubmenuBtn = document.querySelector('.has-submenu > .submenu-btn');
    const competencesSubmenu = document.querySelector('.has-submenu > .submenu');

    competencesSubmenuBtn.addEventListener('click', function(event) {
        event.preventDefault();
        competencesSubmenu.classList.toggle('active');
    });

    const allSubmenuBtns = document.querySelectorAll('.has-submenu .submenu-btn');

    allSubmenuBtns.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            const submenu = this.nextElementSibling;
            const parentSubmenu = this.closest('.has-submenu').querySelector('.submenu');

            // Ferme tous les autres sous-menus du même niveau
            const allSubmenus = document.querySelectorAll('.has-submenu > .submenu');
            allSubmenus.forEach(sm => {
                if (sm !== submenu && sm !== parentSubmenu) {
                    sm.classList.remove('active');
                }
            });

            // Bascule l'état du sous-menu actuel
            submenu.classList.toggle('active');
        });
    });
});
