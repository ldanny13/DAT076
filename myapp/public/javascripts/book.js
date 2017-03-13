$(document).ready(function () {
   $('input[id$=datepicker]').datepicker({
     dateFormat: 'DD, d MM, yy',
     minDate:0,

     });
});

$(function() {
   //$( "#timepicker" ).timepicker();
   $('#timepicker').timepicker({ timeFormat: 'HH:mm',
   minTime: '09:00',
   maxTime: '19.30'
 });
});

$(function(){
  $(':input[type=number]').on('mousewheel',function(e){ $(this).blur(); });
});

function bookingconfirmed() {alert("Thank You for booking!");}
