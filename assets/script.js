function scrollToAbout() {
  document.getElementById('About').scrollIntoView({ behavior: 'smooth' });
}

function smoothScroll(event, sectionId) {
  event.preventDefault(); // Prevent default anchor behavior
  const section = document.getElementById(sectionId);
  if (section) {
      section.scrollIntoView({ 
          behavior: 'smooth' 
      });
  }
}
