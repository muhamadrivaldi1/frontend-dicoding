function scrollToAbout() {
  document.getElementById('Tentang').scrollIntoView({ behavior: 'smooth' });
  document.getElementById('Keindahan Alam').scrollIntoView({ behavior: 'smooth' });
  document.getElementById('Warisan budaya').scrollIntoView({ behavior: 'smooth' });
  document.getElementById('Kuliner Khas').scrollIntoView({ behavior: 'smooth' });
  document.getElementById('Hubungi Kami').scrollIntoView({ behavior: 'smooth' });
}

function smoothScroll(event, sectionId) {
  event.preventDefault(); 
  const section = document.getElementById(sectionId);
  if (section) {
      section.scrollIntoView({ 
          behavior: 'smooth' 
      });
  }
}


