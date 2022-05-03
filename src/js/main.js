window.onload = function scroll(e) {
    var nav = document.getElementsByClassName('nav')[0].style.display

    var offset = document.getElementsByClassName('header')[0].offsetTop;
    var menu = document.getElementsByClassName('header')[0];

    document.addEventListener('scroll', function () {

            if (document.body.scrollTop > offset || document.documentElement.scrollTop > offset && nav == '') {
                menu.style.background = 'none'
                menu.setAttribute('class', 'header fixed')
            } else {
                menu.setAttribute('class', 'header ')
                fechar_menu()

            }
        
    });
    
}

window.addEventListener('load', function () {
    var offset = document.getElementsByClassName('header')[0].offsetTop;
    var menu = document.getElementsByClassName('header')[0];
   


    var menu = document.getElementsByClassName('header')[0];
    if (document.body.scrollTop > offset || document.documentElement.scrollTop > offset) {
        menu.style.background = 'none'
        menu.setAttribute('class', 'header fixed')
    } else {
        menu.setAttribute('class', 'header ')

    }

})



function abrir_menu() {
    document.getElementsByClassName('nav')[0].style.display = 'flex'
    document.getElementsByClassName('header-button-mobile')[0].style.display = 'none'
    document.getElementsByClassName('header-button-fechar')[0].style.display = 'block'
    header = document.getElementsByClassName('header')[0]
    header.setAttribute('class', 'header fixed')

}

function fechar_menu() {
    document.getElementsByClassName('nav')[0].style.display = 'none'
    document.getElementsByClassName('header-button-mobile')[0].style.display = 'block'
    document.getElementsByClassName('header-button-fechar')[0].style.display = 'none'
}

window.addEventListener('resize', function () {
    fechar_menu()
});

