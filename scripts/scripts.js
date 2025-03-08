// Original Parallax Animation on Scroll (as provided)
let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains3 = document.getElementById('mountains3');
let mountains4 = document.getElementById('mountains4');
let river = document.getElementById('river');
let boat = document.getElementById('boat');
let maintitle = document.querySelector(".main-title");
let  =document.getElementById('mountains7');

window.onscroll = function() {
  let value = scrollY;
  stars.style.left = value + "px";
  moon.style.top = value * 3 + "px";
  mountains3.style.top = value * 1 + "px";
  mountains4.style.top = value * .5 + "px";
  river.style.top = value + "px";
  boat.style.top = value + "px";
  boat.style.left = value * 2 + "px";
  mountains7.style.top = value * .5 + "px";
  maintitle.style.fontSize = value *0.5  + "px";

  if (value >= 67) {
    maintitle.style.fontSize = 67*0.5 +'px';

    if (value >= 250) {
        maintitle.style.display = "none";
    } else {
        maintitle.style.display = "block";
    }
    if (value >= 127) {
        document.querySelector('.main').style.background ='linear-gradient(#376281,#10001f)';
    } else {
        document.querySelector('.main').style.background = 'linear-gradient(#200016,#220140)';
    }
  }
};

// Projects Modal Functionality
const projectCards = document.querySelectorAll('.project-card');
const modal = document.getElementById('project-modal');
const modalClose = document.getElementById('modal-close');
const modalTitle = document.getElementById('modal-title');
const modalImg = document.getElementById('modal-img');
const modalTools = document.getElementById('modal-tools');
const demoLink = document.getElementById('demo-link');
const githubLink = document.getElementById('github-link');

projectCards.forEach(card => {
  card.addEventListener('click', () => {
    // Retrieve data attributes from the card
    const title = card.getAttribute('data-title');
    const imgSrc = card.getAttribute('data-img');
    const demo = card.getAttribute('data-demo');
    const github = card.getAttribute('data-github');
    const tools = card.getAttribute('data-tools');
    
    // Populate the modal with project details
    modalTitle.textContent = title;
    modalImg.src = imgSrc;
    modalTools.innerHTML = `<strong>Tools used:</strong> ${tools}`;
    demoLink.href = demo;
    githubLink.href = github;
    
    // Display the modal with animation
    modal.style.display = 'flex';
  });
});

modalClose.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Close modal when clicking outside the content
window.addEventListener('click', (e) => {
  if (e.target == modal) {
    modal.style.display = 'none';
  }
});

// Contact Form Handling (using mailto)
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const subject = encodeURIComponent('New message from portfolio website');
  const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
  window.location.href = `mailto:abdallahemad080@gmail.com?subject=${subject}&body=${body}`;
  
  // Clear the form fields after sending the message
  contactForm.reset();
});
