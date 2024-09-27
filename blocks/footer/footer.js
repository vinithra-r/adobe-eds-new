import { getMetadata } from '../../scripts/aem.js';
import { loadFragment } from '../fragment/fragment.js';
import '../../dist/bundle.js';

/**
 * Loads and decorates the footer.
 * @param {Element} block The footer block element.
 */
export default async function decorate(block) {
  // Load footer as fragment
  const footerMeta = getMetadata('footer');
  const footerPath = footerMeta ? new URL(footerMeta, window.location).pathname : '/footer';
  const fragment = await loadFragment(footerPath);

  // Create the carousel container
  const carouselContainer = document.createElement('div');
  carouselContainer.classList.add('carousel-container');

  // Add slides to the carousel
  const slide1 = document.createElement('div');
  slide1.textContent = 'Your Slide 1 Content';
  const slide2 = document.createElement('div');
  slide2.textContent = 'Your Slide 2 Content';
  const slide3 = document.createElement('div');
  slide3.textContent = 'Your Slide 3 Content';

  carouselContainer.append(slide1, slide2, slide3);

  // Clear existing content and append new footer and carousel
  block.textContent = '';
  const footer = document.createElement('div');

  // Append the loaded fragment to the footer
  while (fragment.firstElementChild) {
    footer.append(fragment.firstElementChild);
  }

  // Append the carousel to the footer
  footer.append(carouselContainer);

  // Create and configure the WdsButton
  const button = document.createElement('wds-button');
  button.setAttribute('background', 'light');
  button.setAttribute('variant', 'primary');
  button.setAttribute('iconSize', 'small');
  button.textContent = 'Click Me';// Set button text

  // Add click event listener if needed
  button.addEventListener('click', () => {
    // eslint-disable-next-line no-console
    console.log('Button clicked!');
    // Add your click handling logic here
  });

  // Append the button to the footer
  footer.append(button);

  block.append(footer);

  // initializeCarousel('.carousel-container');
}


// import { getMetadata } from '../../scripts/aem.js';
// import { loadFragment } from '../fragment/fragment.js';

// /**
//  * loads and decorates the footer
//  * @param {Element} block The footer block element
//  */
// export default async function decorate(block) {
//   // load footer as fragment
//   const footerMeta = getMetadata('footer');
//   const footerPath = footerMeta ? new URL(footerMeta, window.location).pathname : '/footer';
//   const fragment = await loadFragment(footerPath);

//   // decorate footer DOM
//   block.textContent = '';
//   const footer = document.createElement('div');
//   while (fragment.firstElementChild) footer.append(fragment.firstElementChild);

//   block.append(footer);
// }

