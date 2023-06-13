(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').css('top', '0px');
        } else {
            $('.sticky-top').css('top', '-100px');
        }
    });
    
    
    // Dropdown on mouse hover
    // const $dropdown = $(".dropdown");
    // const $dropdownToggle = $(".dropdown-toggle");
    // const $dropdownMenu = $(".dropdown-menu");
    // const showClass = "show";
    
    //$(window).on("load resize", function() {
        //if (this.matchMedia("(min-width: 992px)").matches) {
            //$dropdown.hover(
            //function() {
                //const $this = $(this);
                //$this.addClass(showClass);
                //$this.find($dropdownToggle).attr("aria-expanded", "true");
                //$this.find($dropdownMenu).addClass(showClass);
            //},
            //function() {
                //const $this = $(this);
                //$this.removeClass(showClass);
                //$this.find($dropdownToggle).attr("aria-expanded", "false");
                //$this.find($dropdownMenu).removeClass(showClass);
            //}
            //);
        //} else {
            //$dropdown.off("mouseenter mouseleave");
        //}
    //});
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Header carousel
    $(".header-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        items: 1,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        margin: 24,
        dots: true,
        loop: true,
        nav : false,
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    
})(jQuery);

window.onunload = function() {
    window.location.href = "index.html"; // Replace "index.html" with the actual URL of your home page
  };

  
  document.addEventListener("DOMContentLoaded", function() {
    var menuToggle = document.getElementById("menu-toggle");
    var navbarLinks = document.querySelectorAll("#navbar-nav a");
  
    function closeMenu() {
      // Code to close the menu, e.g., hiding the menu element or updating CSS classes
      // Replace the next line with the appropriate code for closing the menu
      document.getElementById("#navbar-nav").classList.remove("show");
    }
  
    menuToggle.addEventListener("click", function() {
      // Code to toggle the menu visibility, e.g., showing or hiding the menu element
      // Replace the next line with the appropriate code for toggling the menu
      document.getElementById("#navbar-nav").classList.toggle("show");
    });
  
    navbarLinks.forEach(function(link) {
      link.addEventListener("click", closeMenu);
    });
  });
  
  // Phone Number Validation

      // Set the value of the phone number input field to "+91 " plus 10 zeros
     document.getElementById("Phone-Number").value = "+91 ";
     
     // Add an event listener to the phone number input field to prevent the user from deleting the "+91 " prefix
     document.getElementById("Phone-Number").addEventListener("input", function() {
       if (!this.value.startsWith("+91 ")) {
         this.value = "+91 " + this.value.slice(3);
       }
     });
  

   // Ajax Script
   
      $("#submit-form").submit((e)=>{
          e.preventDefault()
          $.ajax({
              url:"https://script.google.com/macros/s/AKfycbwBUHVSdiHFCNzhC82N7br7VsO_1HB5q4jivA6HRlczKTZu4EABXfb1vXWxK7RzFVatGw/exec",
              data:$("#submit-form").serialize(),
              method:"post",
              success:function (response){
                  alert("Form submitted successfully")
                  window.location.reload()
                  //window.location.href="https://google.com"
              },
              error:function (err){
                  alert("Something Error")
  
              }
          })
      })