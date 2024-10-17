import { loadCSS } from '../../scripts/aem.js';

export default function decorate(block) {
  // eslint-disable-next-line no-console
  console.log(block);
  loadCSS('styles/cta.css');
  const elements = [...block.children].map((row) => row.firstElementChild.textContent);
  const [headline, subheadline, cta, ctaUrl, ctaType, power, miles, seats] = elements;
  const [pictureContainer] = block.querySelectorAll('picture');
  const img = pictureContainer?.querySelector('img');
  if (img) {
    img.removeAttribute('height');
    img.removeAttribute('width');
  }

  const container = document.createElement('div');
  container.innerHTML = `<div class="row">
      <div class="hero-image col-sm-2 col-md-12 col-l-12 col-xl-12">
        ${pictureContainer ? pictureContainer.outerHTML : ''}
      </div>
    </div>
    <div class="row padding-s padding-m padding-l padding-xl">
      <div class="hero-overlay col-sm-2 col-md-12 col-l-12 col-xl-12">
          <div class="headline wds2-type-display-m">${headline}</div>
          <div class="subheadline wds2-type-body-light-m">${subheadline}</div>
          <div class="cta-wrapper wds2-type-action-button-m">
              <a class="cta cta-${ctaType} light small" href="${ctaUrl}">${cta}</a>
          </div>
          <div class="features row wds2-type-body-regular-m">
            <div class="feature-item">
              <span>24,222</span>
              <span class="wds2-type-disclaimer-light">Starting Price</span>
            </div>
            <div class="feature-item">
              <span>${power}</span>
              <span class="wds2-type-disclaimer-light">Horsepower</span>
            </div>
            <div class="feature-item">
              <span>${miles}</span>
              <span class="wds2-type-disclaimer-light">Miles per gallon</span>
            </div>
            <div class="feature-item">
              <span>${seats}</span>
              <span class="wds2-type-disclaimer-light">Seats</span>
            </div>
        </div>
      </div>
    </div>`;
  block.innerHTML = '';
  block.appendChild(container);
}
