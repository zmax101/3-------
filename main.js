var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
$('ul.menu a[href^="#"').click(function () {
  let target = $(this).attr('href');
  $('html, body').animate({
    scrollTop: $(target).offset().top
  }, 500);
  $('ul.menu a[href^="#"').css({ 'color': '#212121' });
  $(this).css({ 'color': '#004bee' });
  return false;
})
$('.menu-icon').click(function () {
  $('nav').slideToggle(500);
  $('ul.menu').css({
    'display': 'flex', 'flex-direction': 'column'
  })
  if ($('.menu-icon').html() == '<i class="fas fa-bars"></i>') {
    $(this).html('<i class="fas fa-times"></i>')
  } else {
    $(this).html('<i class="fas fa-bars"></i>')
  }
})