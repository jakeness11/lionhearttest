// Utility: on DOM ready
function ready(fn){ if(document.readyState!='loading'){ fn(); } else { document.addEventListener('DOMContentLoaded', fn); } }

ready(function(){
  // Current year
  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  // Contact form mock submit
  var form = document.querySelector('.contact-form');
  if (form) {
    form.addEventListener('submit', function(e){
      e.preventDefault();
      var name = form.querySelector('#name');
      var email = form.querySelector('#email');
      if (!name.value.trim() || !email.value.trim()) { alert('Please enter your name and email.'); return; }
      alert('Thanks! Your request has been received. I will get back to you within one business day.');
      form.reset();
    });
  }

  // ===== Testimonials Carousel =====
  var data = [
    { name: "Sam", quote: "Harry has been a fantastic personal trainer to work with in recent months. He always makes sure you get the most out of every session, no matter your goals. I’ve felt so much fitter since using his services." },
    { name: "John", quote: "It’s been brilliant working with Harry. I’ve seen a huge improvement in my health and fitness. He tailored sessions to my goals, and both my partner and I have gained confidence and great results." },
    { name: "Olivia", quote: "Harry is the best. I hadn’t had a PT before and didn’t feel confident in the gym, but Harry has been relaxed and fun from the start. I enjoy every session." },
    { name: "Adrian", quote: "Harry started me on a tailored programme that responded directly to my goals. His PT app helped me build momentum between sessions, and his communication is excellent. Highly recommend!" }
  ];

  var track = document.querySelector('.t-track');
  if (!track) return;

  var index = 0;

  function cardMarkup(item, isCenter){
    return '<li class="t-card'+(isCenter ? ' center' : '')+'">' +
             '<blockquote class="t-quote">“'+ item.quote + '”</blockquote>' +
             '<div class="t-name">— ' + item.name + '</div>' +
           '</li>';
  }

  function render(){
    var left = (index - 1 + data.length) % data.length;
    var center = index % data.length;
    var right = (index + 1) % data.length;
    track.innerHTML = cardMarkup(data[left], false) + cardMarkup(data[center], true) + cardMarkup(data[right], false);
  }

  function next(){ index = (index + 1) % data.length; render(); }
  function prev(){ index = (index - 1 + data.length) % data.length; render(); }

  var nextBtn = document.querySelector('.t-arrow.next');
  var prevBtn = document.querySelector('.t-arrow.prev');
  if (nextBtn) nextBtn.addEventListener('click', next);
  if (prevBtn) prevBtn.addEventListener('click', prev);
  document.addEventListener('keydown', function(e){ if (e.key === 'ArrowRight') next(); if (e.key === 'ArrowLeft') prev(); });

  render();
});
