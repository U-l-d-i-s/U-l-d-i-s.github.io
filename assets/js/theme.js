

    
    function navSlide(){
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('nav ul');
    const navLinks = document.querySelectorAll('nav li');
    const stopScroll = document.querySelector('body');

    burger.addEventListener('click', () => {
        //only animation
        //Toggle Nav
        nav.classList.toggle('nav-active');

        //Animate Line
        navLinks.forEach((link, index) => {
            if(link.style.animation){
                link.style.animation = '';
            }else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 5 + 0.7}s`
            }
        });
        //Burger animation
        burger.classList.toggle('toggle');

        //unable scroll
        if(nav.classList.contains('nav-active')){
            stopScroll.classList.toggle('stop-scroll');
            if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
            }else{
                stopScroll.classList.toggle('body-scrollbarmargin');
            }
        }else{
            stopScroll.classList.toggle('stop-scroll');
            if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
                console.log('sveiki!');
            }else{
                stopScroll.classList.toggle('body-scrollbarmargin');
            }

        }
    });   
    }
    const newTab = document.querySelectorAll('.openInNewTab');
    newTab.forEach( tab=>{
        console.log(tab);
        
        tab.addEventListener('click', () =>{
        const href = tab.getAttribute('href');
        console.log(href);
        const win = window.open(href, '_blank');
        console.log();
        win.location;
    });
    });
    
    if ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        responsiveNav();
    }
    window.addEventListener('resize', () =>{
        if ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
            responsiveNav();
        }
        // else{
        //     notResponsiveNav();
        // }
    })
    //neļauj kustināt header desktop versijā
    function notResponsiveNav(){
            window.addEventListener('scroll' , () => {
                document.querySelector('header').style.top = "0px";
            }
            )};
    //ievelk un izlaiž headeru/navbar
    function responsiveNav(){
        
        const stopScroll = document.querySelector('body');
        const nav = document.querySelector('nav ul');
        var prevScrollpos = window.pageYOffset;

        
            window.addEventListener( 'scroll' , () => {
            
                var currentScrollPos = window.pageYOffset;
                
                if (prevScrollpos > currentScrollPos) {
                    document.querySelector('header').style.top = "0px";

                } else {
                    //neļauj ievilkt un izlaist navbar neķeksī
                    if(nav.classList.contains('nav-active')){
                        stopScroll.classList.toggle('stop-scroll');
                    }else{
                    document.querySelector('header').style.top = "-90px"; 
                    }
                }
                prevScrollpos = currentScrollPos;   
            }
            )};  

        const arrow = document.querySelector(".arrowDown");
        
        //arrow fade function
        window.onscroll = arrowFade;
        function arrowFade() {
            arrow.style.opacity = '1';
            setTimeout( () => {
                arrow.style.transition = 'color 0.5s';
                arrow.style.color = 'color solid';
                arrow.style.transition = 'opacity 0.5s'
                arrow.style.opacity = '0';
                

            },1300);
        }
        const footerStop = document.querySelector('footer');    
        function BottomFunction(footerStop){
            if (footerStop.scrollTop < footerStop.scrollHeight - footerStop.clientHeight){ footerStop.scrollTop += 10; }
         
         }
        function BottomFunction() {
            window.scrollTo(0, document.body.scrollHeight || document.documentElement.scrollHeight);    
            
        }
        const move = document.querySelector('#overfooter');
        arrow.addEventListener('click', () => {
            
            move.scrollIntoView({behavior: 'smooth', inlnine: 'end'});
        });
        
navSlide();
