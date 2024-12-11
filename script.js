const text = "POORVAJA VIJAYAN";
const typewriter = document.getElementById("typewriter");
let i = 0;

function typeWrite() {
    if (i < text.length) {
        typewriter.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWrite, 100);
    } else {
        setTimeout(resetTypewriter, 2000);
    }
}

function resetTypewriter() {
    typewriter.innerHTML = "";
    i = 0;
    typeWrite();
}
typeWrite();





$.fn.commentCards = function(){

  return this.each(function(){

    var $this = $(this),
        $cards = $this.find('.card'),
        $current = $cards.filter('.card--current'),
        $next;

    $cards.on('click',function(){
      if ( !$current.is(this) ) {
        $cards.removeClass('card--current card--out card--next');
        $current.addClass('card--out');
        $current = $(this).addClass('card--current');
        $next = $current.next();
        $next = $next.length ? $next : $cards.first();
        $next.addClass('card--next');
      }
    });

    if ( !$current.length ) {
      $current = $cards.last();
      $cards.first().trigger('click');
    }

    $this.addClass('cards--active');

  })

};

$('.cards').commentCards();






