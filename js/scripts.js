/*!
* Start Bootstrap - Grayscale v7.0.6 (https://startbootstrap.com/theme/grayscale)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});
function check(){
    let name = document.getElementById('YourName');
    let NameError = document.getElementById('NameError');
    NameError.textContent = '';
    let email = document.getElementById('exampleInputEmail1');
    let EmailErrorl = document.getElementById('EmailError');
    EmailErrorl.textContent = '';
    let password = document.getElementById('exampleInputPassword1');
    let PasswordErr = document.getElementById('PasswordError');
    PasswordErr.textContent = '';
    if(name.value == ''){
        NameError.innerText = 'Cannot empty name!';
        return false;
    }else if(email.value == ''){
        EmailErrorl.innerText = 'Cannot empty email';
        return false;
    }else if(password.value == ''){
        PasswordErr.innerText = 'Cannot empty password';
        return false;
    }
    return true;
}