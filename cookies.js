function carregarScriptsOpcionais() {
  if (window.carregouScriptsOpcionais) return;
  window.carregouScriptsOpcionais = true;
}

function esconderBannerCookies() {
  var banner = document.getElementById('cookieBanner');
  if (!banner) return;
  banner.classList.remove('visivel');
  setTimeout(function () { banner.style.display = 'none'; }, 400);
}

function aceitarCookies() {
  localStorage.setItem('eronak_cookies', 'aceitos');
  esconderBannerCookies();
  carregarScriptsOpcionais();
}

function recusarCookies() {
  localStorage.setItem('eronak_cookies', 'essenciais');
  esconderBannerCookies();
}

if (localStorage.getItem('eronak_cookies') === null) {
  window.addEventListener('load', function () {
    var banner = document.getElementById('cookieBanner');
    if (banner) {
      setTimeout(function () { banner.classList.add('visivel'); }, 1200);
    }
  });
}