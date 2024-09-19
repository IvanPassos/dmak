const btn = document.getElementById("btn")

btn.addEventListener("click", function(){
    window.scrollTo(0,0)
});

document.addEventListener('scroll',ocultar)

function ocultar(){
    if(window.scrollY > 10){
        btn.style.display = "flex"
    } else {
        btn.style.display = "none"
    }
}
ocultar()//End scrolltop

// Scroll One Page Menu
$('a.nav-link, .cbp-spmenu a').on('click', function(event){
    //var $nav_height = $('#navigation.affix').outerHeight();		
    var $anchor = $(this);
    $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top
    }, 1200, 'easeInOutExpo');
   event.preventDefault();;
    $('#interface').affix({offset: {top: 50} });
    
    
});
