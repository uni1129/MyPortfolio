'use strict';

// ハンバーガーバー
{
  const open = document.getElementById('open');
  const close = document.getElementById('close');
  const overlay = document.querySelector('.overlay');

  open.addEventListener('click', () => {
    overlay.classList.add('show');
    open.classList.add('hidden');
  });

  close.addEventListener('click', () => {
    overlay.classList.remove('show');
    open.classList.remove('hidden');
  });
}

// アコーディオン
{

}


{
  const next = document.getElementById('next');
  const prev = document.getElementById('prev');
  const ul = document.querySelector('ol');
  const slides = ul.children;
  const slideWidth = slides[0].getBoundingClientRect().width;
  let currentIndex = 0;
  function updateButtons() {
    prev.classList.remove("hidden");
    next.classList.remove("hidden");
    if (currentIndex === 0) {
      prev.classList.add("hidden");
    }
    if (currentIndex === slides.length - 1) {
      next.classList.add("hidden");
    }

  }
  function moveSlides() {
    updateButtons();
    ul.style.transform = `translateX(${-1 * slideWidth * currentIndex}px)`;
  }

  const button = document.createElement("button");

  updateButtons();
  next.addEventListener('click', () => {
    currentIndex++;
    moveSlides();
  });
  prev.addEventListener('click', () => {
    currentIndex--;
    moveSlides();
  });

}