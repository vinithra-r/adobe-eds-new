import { getMetadata } from '../../scripts/aem.js';
import { loadFragment } from '../fragment/fragment.js';

/**
 * loads and decorates the footer
 * @param {Element} block The footer block element
 */
export default async function decorate(block) {
  // load footer as fragment
  const footerMeta = getMetadata('footer');
  const footerPath = footerMeta ? new URL(footerMeta, window.location).pathname : '/footer';
  const fragment = await loadFragment(footerPath);

  // decorate footer DOM
  block.textContent = '';
  const footer = document.createElement('div');
  while (fragment.firstElementChild) footer.append(fragment.firstElementChild);

  const footerWDS = document.createElement('div');
  footerWDS.classList.add('container');
  footerWDS.innerHTML = `<div class="row">
      <div class="col-sm-2 col-md-12 col-l-12 col-xl-12">
        <wds-footer>
          <wds-footer-top-row>
            <wds-footer-column>
              <h2 slot="heading">Services</h2>
              <wds-footer-links href="http://google.com" target="_blank">FAQs</wds-footer-links>
              <wds-footer-links href="http://google.com" target="_blank">Shop@Home</wds-footer-links>
              <wds-footer-links href="http://google.com" target="_blank">Glossary</wds-footer-links>
              <wds-footer-links href="http://google.com" target="_blank">Contact us</wds-footer-links>
              <wds-footer-links href="http://google.com" target="_blank">Tyre label information</wds-footer-links>
              <wds-footer-links href="http://google.com" target="_blank">Live Chat</wds-footer-links>
            </wds-footer-column>
            <wds-footer-column>
              <h2 slot="heading">Nissan range</h2>
              <wds-footer-links href="http://google.com" target="_blank">Commercial Vehicles</wds-footer-links>
              <wds-footer-links href="http://google.com" target="_blank">Shop@Electric Cars</wds-footer-links>
              <wds-footer-links href="http://google.com" target="_blank">Mild Hybrid Cars</wds-footer-links>
              <wds-footer-links href="http://google.com" target="_blank">Crossovers</wds-footer-links>
              <wds-footer-links href="http://google.com" target="_blank">Hatchback</wds-footer-links>
              <wds-footer-links href="http://google.com" target="_blank">Nismo</wds-footer-links>
            </wds-footer-column>
            <wds-footer-column>
              <h2 slot="heading">Nissan network</h2>
              <wds-footer-links href="http://google.com" target="_blank">Find Your Nissan Dealer</wds-footer-links>
              <wds-footer-links href="http://google.com" target="_blank">Check stock</wds-footer-links>
              <wds-footer-links href="http://google.com" target="_blank">Nissan Dealer Careers</wds-footer-links>
              <wds-footer-links href="http://google.com" target="_blank">Nissan Intelligent Mobility</wds-footer-links>
            </wds-footer-column>
            <wds-footer-column social="">
              <h2 slot="heading">Social</h2>
              <wds-footer-social-icons href="http://google.com" target="_blank" iconname="icon-social-facebook-fill">
              </wds-footer-social-icons>
              <wds-footer-social-icons href="http://google.com" target="_blank" iconname="icon-social-fb-messenger">
              </wds-footer-social-icons>
              <wds-footer-social-icons href="http://google.com" target="_blank" iconname="icon-social-whatsapp">
              </wds-footer-social-icons>
            </wds-footer-column>
          </wds-footer-top-row>
          <wds-footer-bottom-row>
            <span slot="left-section">
              <wds-footer-links position="left" href="http://google.com" target="_blank">Global sites
              </wds-footer-links>
              <wds-footer-links position="left" href="http://google.com" target="_blank">Sitemap
              </wds-footer-links>
              <wds-footer-links position="left" href="http://google.com" target="_blank">Newsroom
              </wds-footer-links>
              <wds-footer-links position="left" href="http://google.com" target="_blank">Recruitment
              </wds-footer-links>
            </span>
            <span slot="right-section">
              <wds-footer-links position="right" href="http://google.com" target="_blank">Privacy
              </wds-footer-links>
              <wds-footer-links position="right" href="http://google.com" target="_blank">Terms &amp; Conditions
              </wds-footer-links>
              <wds-footer-links position="right" copyright="">Nissan 2022</wds-footer-links>
            </span>
          </wds-footer-bottom-row>
        </wds-footer>
      </div>
    </div>`;
  block.appendChild(footerWDS);

  // block.append(footer);
}
