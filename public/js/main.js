$(".animsition").animsition({
  inClass:"fade-in-left-lg",
  outClass:"fade-out-left-lg",
  linkElement: "header a",
  inDuration: 500,
  outDuration: 500
});

$(".header").sticky({
    getWidthFrom: ".container",
    responsiveWidth: true
});

$(".header").on("sticky-start", function(){
$(".description").html("Have a <strong>GREAT</strong> Day!");
});
$(".header").on("sticky-end", function(){
$(".description").html("Have a Great Day!");
});
$(".work").sticky({
  topSpacing: 60,
  getWidthFrom: ".container",
  responsiveWidth: true
});
$(".work").on("sticky-start",function(){
  $(this).append("<a href='mailto:email@website.com' class='email-text'>Email&nbsp;us</a>");
});
$(".work").on("sticky-end",function(){
  $(".email-text").remove();
})
