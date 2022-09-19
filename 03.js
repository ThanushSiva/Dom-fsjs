let section = document.createElement('section');
section.className = 'parent';
let h3 = document.createElement('h3');
h3.textContent = 'My New FAQ';

section.appendChild(h3);
document.querySelector('.accordion-homepage').appendChild(section)