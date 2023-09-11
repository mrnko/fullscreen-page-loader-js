function hiddenPreloader() {
  let preloader = document.getElementById('preloader');

  setTimeout(() => {
    preloader.classList.add('preloader--invisible');
    document.querySelector('html').style.overflowY = 'auto';

    setTimeout(() => {
      preloader.classList.add('preloader--hidden');
    }, 500)
  }, 2000)
}

document.querySelector('html').style.overflowY = 'hidden'

window.onload = () => {
  hiddenPreloader();
}