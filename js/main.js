const music = document.getElementById('bg-music');
const btn = document.getElementById('startMusic');

btn.addEventListener('click', () => {
  music.volume = 0.1; // тихо и приятно
  music.play();
});

$('.show-text').click(function(){
  const hidden = $(this).closest('.block').find('.hidden-block');

  hidden.fadeToggle();

  $(this).text(
    hidden.is(':visible') ? 'Скрыть' : 'Показать'
  );
});

function slowScroll(id){
  $("html, body").animate({
      scrollTop: $(id).offset().top -30
  },500);
  return false;
};
document.getElementById('toFinal').addEventListener('click', () => {
  document.getElementById('final').classList.add('show');
  document.getElementById('final').scrollIntoView({ behavior: 'smooth' });
});