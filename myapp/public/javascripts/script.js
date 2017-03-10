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

/** Validate booking */

function validateBooking() {
    var name = document.forms["bookform"]["contactname"].value;
    var phone = document.forms["bookform"]["contactnr"].value;
    var seats = document.forms["bookform"]["seats"].value;
    var bookingdate = document.forms["bookform"]["datepicker"].value;
    var bookingtime = document.forms["bookform"]["timepicker"].value;

    if (name == "" || phone =="" || seats =="" || bookingdate == "" || bookingtime == "") {
        alert("All fields must be filled out");
        return false;
    }
}