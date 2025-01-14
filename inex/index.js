let currentIndex = 0;
const images = document.querySelectorAll('.slider img');

function changeImage(direction) {
  images[currentIndex].classList.remove('active');
  currentIndex = (currentIndex + direction + images.length) % images.length;
  images[currentIndex].classList.add('active');
}


const links = document.querySelectorAll('.services a');


links.forEach(link => {
    link.addEventListener('mouseover', () => link.style.color = 'red');
    link.addEventListener('mouseout', () => link.style.color = '');
});


let currentLanguage = 'ka'; 

function loadTranslations() {
  fetch('file:///C:/Users/user/Desktop/inex/Translations.json')
    .then(response => response.json())
    .then(translations => {
      setLanguage(translations);
    });
}


function setLanguage(translations) {
  const language = translations[currentLanguage];


  document.getElementById('contact1').textContent = language.contact1;
  document.getElementById('contact2').textContent = language.contact2;
  document.getElementById('exclusive').textContent = language.exclusive;
  document.getElementById('description').textContent = language.description;
  document.getElementById('learnMore').textContent = language.learnMore;
  document.getElementById('box1').textContent = language.box1;
  document.getElementById('box1desc').textContent = language.box1desc;
  document.getElementById('box2').textContent = language.box2;
  document.getElementById('box2desc').textContent = language.box2desc;
  document.getElementById('box3').textContent = language.box3;
  document.getElementById('box3desc').textContent = language.box3desc;
  document.getElementById('box4').textContent = language.box4;
  document.getElementById('box4desc').textContent = language.box4desc;
  document.getElementById('box5').textContent = language.box5;
  document.getElementById('box5desc').textContent = language.box5desc;
  document.getElementById('box6').textContent = language.box6;
  document.getElementById('box6desc').textContent = language.box6desc;
  document.getElementById('box7').textContent = language.box7;
  document.getElementById('box7desc').textContent = language.box7desc;
  document.getElementById('footerDesc').textContent = language.footerDesc;
  document.getElementById('address').textContent = language.address;
  document.getElementById('contact').textContent = language.contact;
  document.getElementById('email').textContent = language.email;
  document.getElementById('servicesTitle').textContent = language.servicesTitle;
  document.getElementById('serviceLink1').textContent = language.serviceLink1;
  document.getElementById('serviceLink2').textContent = language.serviceLink2;
  document.getElementById('serviceLink3').textContent = language.serviceLink3;
  document.getElementById('serviceLink4').textContent = language.serviceLink4;
  document.getElementById('serviceLink5').textContent = language.serviceLink5;
  document.getElementById('serviceLink6').textContent = language.serviceLink6;
  document.getElementById('serviceLink7').textContent = language.serviceLink7;
  document.getElementById('serviceLink8').textContent = language.serviceLink8;
  document.getElementById('serviceLink9').textContent = language.serviceLink9;
  document.getElementById('usefulTitle').textContent = language.usefulTitle;
  document.getElementById('link1').textContent = language.link1;
  document.getElementById('link2').textContent = language.link2;
  document.getElementById('link3').textContent = language.link3;
  document.getElementById('link4').textContent = language.link4;
  document.getElementById('link5').textContent = language.link5;
  document.getElementById('link6').textContent = language.link6;
}


function changeLanguage(languageCode) {
  currentLanguage = languageCode;
  loadTranslations();
}


loadTranslations();
