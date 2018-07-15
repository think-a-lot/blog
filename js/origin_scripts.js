
//# recommend_BGM - id20180620_v2
//# Success - <button> - select only one genre
var $btns = $('.btn').click(function() {
  if (this.id == 'ALL') {
    $('#contents > li').fadeIn();
  } else {
    var $el = $('.' + this.id).fadeIn();
    $('#contents > li').not($el).fadeOut();
  }
  $btns.removeClass('active');
  $(this).addClass('active');
});


//# Success - checkbox - select multiple genre
//$("#labels :checkbox").click(function() 
//	{
//       	$("#contents li").hide();
//       	$("#labels :checkbox:checked").each(function() 
//       	{
//           $("." + $(this).val()).fadeIn();
//		});
//       
//        if($('#labels :checkbox').filter(':checked').length < 1) 
//        {
//        	$("#contents li").fadeIn();
//        }  
//    });


//# Mikka
//$(function() {
//    $(".checkbox").click(function(){
//      var filterValue = $(this).attr('data-filter');
//      
//      if(filterValue == "all")
//        {
//          $(".all").show("slow");
//        }
//      else{
//        $(".all").not('.'+filterValue).hide("slow");
//        
//        $(".all").filter('.'+filterValue).show("slow");
//      }
//    });
//});

//# First
////    $('input#label1').click(function(){
////        $("ul>li:not(.Chillout)").toggle(350);
////    });
////    $('input#label2').click(function(){
////        $("ul>li:not(.Jazz)").toggle(350);
////    });
////    $('input#label3').click(function(){
////        $("ul>li:not(.Relax)").toggle(350);
////    });
////    $('input#label4').click(function(){
////        $("ul>li:not(.Moist)").toggle(350);
////    });
////    $('input#label5').click(function(){
////        $("ul>li:not(.Cool)").toggle(350);
////    });
////    $('input#label6').click(function(){
////        $("ul>li:not(.Cheerful)").toggle(350);
////    });
////    $('input#label7').click(function(){
////        $("ul>li:not(.Focus)").toggle(350);
////    });
//});
