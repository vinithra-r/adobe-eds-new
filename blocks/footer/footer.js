import { getMetadata, loadScript } from '../../scripts/aem.js';
import { loadFragment } from '../fragment/fragment.js';
import '../../dist/bundle.js';

/**
 * Loads and decorates the footer.
 * @param {Element} block The footer block element.
 */
export default async function decorate(block) {
  loadScript('https://libs-europe.nissan-cdn.net/etc/designs/nissan-pace-vlp-plus/clientlibs-24.09.30.NISSAN-5/libs/analyticsManager.min.js');
  // Load footer as fragment
  const footerMeta = getMetadata('footer');
  const footerPath = footerMeta ? new URL(footerMeta, window.location).pathname : '/footer';
  const fragment = await loadFragment(footerPath);

  const footer = document.createElement('div');

  // Append the loaded fragment to the footer
  while (fragment.firstElementChild) {
    footer.append(fragment.firstElementChild);
  }

  // Append the carousel to the footer
  // footer.append(carouselContainer);

  // Create and configure the WdsButton
  const button = document.createElement('wds-button');
  button.setAttribute('background', 'light');
  button.setAttribute('variant', 'primary');
  button.setAttribute('iconSize', 'small');
  button.textContent = 'Click Me';// Set button text
  // // Create and configure the WdsButton
  // const button1 = document.createElement('Button');
  // button1.setAttribute('variant', Variant.Default);
  // button1.setAttribute('darkMode', true);
  // button1.setAttribute('size', Size.default);
  // button1.setAttribute('disabled', false);
  // button1.setAttribute('leftGlyph', '<Icon glyph={leftGlyph} />');
  // button1.setAttribute('rightGlyph', '<Icon glyph={rightGlyph} />');
  // button1.textContent = 'Click Me';// Set button text

  const tool = document.createElement('div');
  tool.innerHTML = `<button id="tooltipButton" data-tooltip-target="tooltip-animation" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Animated tooltip</button>
    <div id="tooltipContent" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
        Tooltip content
        <div class="tooltip-arrow" data-popper-arrow></div>
    </div>`;
  const modalContent = document.createElement('div');
  modalContent.innerHTML = `<div id="modalEl" tabindex="-1" aria-hidden="true" class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
  <div class="relative w-full max-w-2xl max-h-full">
      <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <div class="flex items-start justify-between p-5 border-b rounded-t dark:border-gray-600">
              <h3 class="text-xl font-semibold text-gray-900 lg:text-2xl dark:text-white">
                  Terms of Service
              </h3>
              <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white">
                  <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                  </svg>
                  <span class="sr-only">Close modal</span>
              </button>
          </div>
          <div class="p-6 space-y-6">
              <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                  With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.
              </p>
              <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                  The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.
              </p>
          </div>
          <div class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
              <wds-button background="light" variant="primary" iconSize="small" >WDS Button</wds-button>
              <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">I accept</button>
              <button type="button" class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600">Decline</button>
          </div>
      </div>
    </div>
  </div>`;

  const modalOptions = {
    placement: 'bottom-right',
    backdrop: 'dynamic',
    backdropClasses: 'bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-40',
    onHide: () => {
      // eslint-disable-next-line no-console
      console.log('modal is hidden');
    },
    onShow: () => {
      // eslint-disable-next-line no-console
      console.log('modal is shown');
    },
    onToggle: () => {
      // eslint-disable-next-line no-console
      console.log('modal has been toggled');
    },
  };

  // Append the button to the footer
  footer.append(button);
  footer.append(modalContent);
  // footer.append(tool);

  block.append(footer);

  const modalElement = document.querySelector('#modalEl');
  // eslint-disable-next-line no-undef
  const modal = new Modal(modalElement, modalOptions);

  modal.show();
  // Add click event listener if needed
  modalElement.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON' || e.target.tagName === 'WDS-BUTTON') {
      modal.hide();
    }
  });

  // Add click event listener if needed
  button.addEventListener('click', () => {
    modal.hide();
    // eslint-disable-next-line no-console
    console.log('Button clicked!');
    // Add your click handling logic here
  });
}
