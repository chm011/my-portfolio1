console.log('IT’S ALIVE!'); 

// Utility function to select elements
function $$(selector, context = document) {
  return Array.from(context.querySelectorAll(selector));
}

// Define the pages for the navigation menu
/*let pages = [
  { url: '/my-portfolio/', title: 'Home' },
  { url: '/my-portfolio/projects', title: 'Projects' },
  { url: '/my-portfolio/resume', title: 'Resume' },
  { url: '/my-portfolio/contacts', title: 'Contacts' },
  { url: 'https://github.com/chm011', title: 'Github Profile' }
]; 

// Create the <nav> element and prepend it to the body
let nav = document.createElement('nav');
document.body.prepend(nav);


// Generate the links and append them to the nav
for (let p of pages) {
  console.log(`Adding link: ${p.title} -> ${p.url}`); //
  let a = document.createElement('a');
  a.href = p.url;
  a.textContent = p.title;
  nav.appendChild(a); // Append link to nav

// Highlight the current page link
if (a.host === location.host && a.pathname === location.pathname) {
    a.classList.add('current');
}
// Open external links in a new tab
if (a.host !== location.host) {
    a.target = '_blank';
}}
*/

// Insert the theme switcher into the body
/*document.body.insertAdjacentHTML(
  'beforeend', // Use 'beforeend' to prevent overwriting <nav>
  `
  <label class="color-scheme" style="position: absolute; top: 1rem; right: 1rem;">
    Theme:
    <select id="theme-switcher">
      <option value="light dark">Automatic</option>
      <option value="light">Light</option>
      <option value="dark">Dark</option>
    </select>
  </label>`
);

// Function to set the color scheme
function setColorScheme(scheme) {
  document.documentElement.style.setProperty('color-scheme', scheme);
}

// Handle theme switching
const select = document.querySelector('#theme-switcher');

if (select) {
  const savedScheme = localStorage.getItem('colorScheme');
  if (savedScheme) {
    setColorScheme(savedScheme);
    select.value = savedScheme;
  }

  select.addEventListener('input', function (event) {
    const scheme = event.target.value;
    setColorScheme(scheme);
    console.log('Color scheme changed to', scheme);
    localStorage.setItem('colorScheme', scheme);
  });
} 
*/