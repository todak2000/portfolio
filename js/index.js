$(document).ready(function(){
    $("#trucka_item").mouseover(function(){
     $("#trucka_content").removeClass("hide_div");
     
    })
   
     $("#trucka_item").mouseleave(function(){
     $("#trucka_content").addClass("hide_div");
     
    })
// **************
     $("#quiz_item").mouseover(function(){
     $("#quiz_content").removeClass("hide_div");
     
    })
   
     $("#quiz_item").mouseleave(function(){
     $("#quiz_content").addClass("hide_div");
     
    })
// **************
     $("#edu_item").mouseover(function(){
     $("#edu_content").removeClass("hide_div");
     
    })
   
     $("#edu_item").mouseleave(function(){
     $("#edu_content").addClass("hide_div");
     
    })
   // **************
   $("#score_item").mouseover(function(){
     $("#score_content").removeClass("hide_div");
     
    })
   
     $("#score_item").mouseleave(function(){
     $("#score_content").addClass("hide_div");
     
    })

	// setTimeout(function(){ $('.code').fadeIn(); }, 500);
    setTimeout(function(){ 
    	
    	$(".code0").removeClass("hide_div");
      $(".code0").addClass("typewriter"); 
      
     }, 1000);
     setTimeout(function(){ 
    	$(".code1").removeClass("hide_div");
      $(".code1").addClass("typewriter"); 
      
     }, 2000);
     setTimeout(function(){ 
    	$(".code2").removeClass("hide_div");
      $(".code2").addClass("typewriter"); 
      
     }, 3000);
    setTimeout(function(){ 
    	$(".code3").removeClass("hide_div");
      $(".code3").addClass("typewriter"); 
      
     }, 4000);
     
    setTimeout(function(){ 

      $(".mb-1").removeClass("hide_div");
      $(".mb-5").removeClass("hide_div");
      $(".code0").addClass("hide_div");
      $(".code1").addClass("hide_div");
      $(".code2").addClass("hide_div");
      $(".code3").addClass("hide_div"); }, 5000);
 })


   
   
