function createHeart() {
  const heart = document.createElement('div');
  heart.textContent = '💜';
  heart.style.position = 'absolute';
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.bottom = '-20px';
  heart.style.fontSize = '14px';
  heart.style.opacity = '0.8';
  heart.style.animation = 'float 6s linear';

  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 6000);
}

setInterval(createHeart, 500);

const style = document.createElement('style');
style.innerHTML = `
@keyframes float {
  from { transform: translateY(0); opacity: 0; }
  10% { opacity: 1; }
  to { transform: translateY(-110vh); opacity: 0; }
}`;
document.head.appendChild(style);
