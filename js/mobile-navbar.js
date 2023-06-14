//MENU MOBILE

class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind(this);
    }

    animateLinks() {
        this.navLinks.forEach((link, index) => {
                link.style.animation
                    ? (link.style.animation = "")
                    : (link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`);
        });
    }

    handleClick() {
        // código mostrar e esconder navList
        var navList_mostrar_esconder = document.querySelector(".nav-list");
        if (navList_mostrar_esconder.style.display === 'flex') {
            navList_mostrar_esconder.style.display = 'none'
        } else {
            navList_mostrar_esconder.style.display = 'flex'
        }
        // fim código mostrar e esconder navList        
        this.navList.classList.toggle(this.activeClass);
        this.mobileMenu.classList.toggle(this.activeClass);
        this.animateLinks();
    }

    addClickEvent() {
        this.mobileMenu.addEventListener("click", this.handleClick);
    }

    init() {
        if (this.mobileMenu) {
            this.addClickEvent();
        }
        return this;
    }
}

const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
);
mobileNavbar.init();

// PÁGINA DE LOGIN E CADASTRO

const forms = document.querySelector(".forms"),
      pwShowHide = document.querySelectorAll(".eye-icon"),
      links = document.querySelectorAll(".link");

pwShowHide.forEach(eyeIcon => {
    eyeIcon.addEventListener("click", () => {
        let pwFields = eyeIcon.parentElement.parentElement.querySelectorAll(".password");

        pwFields.forEach(password => {
            if(password.type === "password"){
                password.type = "text";
                eyeIcon.classList.replace("bx-hide, bx-show");
                return;
            }
            password.type = "password";
                eyeIcon.classList.replace("bx-show, bx-hide");
        })
    })
})

links.forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault(); //impedindo o envio de formulários
        forms.classList.toggle("show-signup");
    })
})

/* PÁGINA DE DÚVIDAS */