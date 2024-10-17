import { loadCSS } from '../../scripts/aem.js';

export default function decorate(block) {
  // eslint-disable-next-line no-console
  console.log(block);
  loadCSS('styles/cta.css');
  const [headline, subheadline, cta, ctaUrl, ctaType, power, miles, seats] = block.querySelectorAll('p');
  const [pictureContainer] = block.querySelectorAll('picture');
  const img = pictureContainer.querySelector('img');
  if (img) {
    img.removeAttribute('height');
    img.removeAttribute('width');
  }

  const container = document.createElement('div');
  container.classList.add('row');
  container.innerHTML = `<div class="hero-wrapper col-sm-2 col-md-12 col-l-12 col-xl-12">
    ${pictureContainer ? pictureContainer.outerHTML : ''}
    <div class="hero-overlay">
        <div class="headline wds2-type-display-m">${headline ? headline.innerHTML : ''}</div>
        <div class="features row">
          <div class="feature-item">
            <span class="wds2-type-body-regular-m">24,222</span>
            <span class="wds2-type-disclaimer-light">Starting Price</span>
          </div>
          <div class="feature-item">
            <span class="wds2-type-body-regular-m">${power ? power.innerHTML : ''}</span>
            <span class="wds2-type-disclaimer-light">Horsepower</span>
          </div>
          <div class="feature-item">
            <span class="wds2-type-body-regular-m">${miles ? miles.innerHTML : ''}</span>
            <span class="wds2-type-disclaimer-light">Miles per gallon</span>
          </div>
          <div class="feature-item">
            <span class="wds2-type-body-regular-m">${seats ? seats.innerHTML : ''}</span>
            <span class="wds2-type-disclaimer-light">Seats</span>
          </div>
        </div>
        <div class="subheadline wds2-type-body-light-m">${subheadline ? subheadline.innerHTML : ''}</div>
        <div class="cta-wrapper">
            <a class="cta cta-${(ctaType ? ctaType.innerHTML : 'primary').toLowerCase()} light small" href="${ctaUrl.innerHTML}">${cta.innerHTML}</a>
        </div>
    </div>
  </div>`;
  block.innerHTML = '';
  block.appendChild(container);
}
