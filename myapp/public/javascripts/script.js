     //var $ = require('jQuery');

     $(document).ready(function() {
       //responsive menu toggle
       $("#menutoggle").click(function() {
         $('.xs-menu').toggleClass('displaynone');

         });
       //add active class on menu
       $('ul li').click(function(e) {
         e.preventDefault();
         $('li').removeClass('active');
         $(this).addClass('active');
       });
     //drop down menu
         $(".drop-down").hover(function() {
           $('.mega-menu').addClass('display-on');
         });
         $(".drop-down").mouseleave(function() {
           $('.mega-menu').removeClass('display-on');
         });

     });

     function modify_qty(val) {
         var qty = document.getElementById('qty').value;
         var new_qty = parseInt(qty,10) + val;

         if (new_qty < 1) {
             new_qty = 1;
         }

         document.getElementById('qty').value = new_qty;
         return new_qty;
     }
