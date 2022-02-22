$(".img").click(function(){
   let thisImg = $(this).attr('src');
   let mainImg = $(".main").attr('src');
   $(this).attr('src', mainImg)
   $(".main").attr('src',thisImg)
})