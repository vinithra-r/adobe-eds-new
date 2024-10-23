async function fetchDynamicPrice(url) {
  // const response = await fetch(url, { mode: 'no-cors' });
  // // eslint-disable-next-line no-console
  // console.log(response);
  // if (!response.ok) {
  //   throw new Error('Failed to fetch price');
  // }
  // const data = await response.text();
  // return data.price; // Adjust according to the structure of your response

  fetch(url)
    .then((response) => response.text())
    .then((data) => {
      // eslint-disable-next-line no-console
      console.log(data);
    })
    .catch((error) => {
      // eslint-disable-next-line no-console
      console.error('Fetch error:', error);
    });
}

export default async function decorate(block) {
  const elements = [...block.children].map((row) => row.firstElementChild.textContent);
  const [headline, subheadline, cta, ctaUrl, ctaType, power, miles, seats] = elements;
  const [pictureContainer] = block.querySelectorAll('picture');
  const img = pictureContainer?.querySelector('img');
  if (img) {
    img.removeAttribute('height');
    img.removeAttribute('width');
  }
  // Fetch the dynamic price
  let dynamicPrice;
  try {
    dynamicPrice = await fetchDynamicPrice('https://www.nissan.fr/content/nissan_prod/fr_FR/univ-price/individual-vehicles-price-data/individualVehiclesPriceJSON_NAVARAD23B_navara-my18.html');
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
    dynamicPrice = ''; // Fallback if fetching fails
  }

  const featureItem = `<div class="feature-item">
      <span>${dynamicPrice}</span>
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
    </div>`;
  const container = document.createElement('div');
  container.innerHTML = `<div class="row full-bleed">
      <div class="hero-image col-sm-2 col-md-12 col-l-12 col-xl-12">
        ${pictureContainer ? pictureContainer.outerHTML : ''}
      </div>
    </div>
    <div class="row container bleed">
      <div class="hero-overlay hero-overlay-s col-sm-2 col-md-7 col-l-7 col-xl-7">
        <div class="headline wds2-type-display-m">${headline}</div>
        <div class="subheadline wds2-type-body-light-m">${subheadline}</div>
        <div class="cta-wrapper wds2-type-action-button-m">
            <wds-button background="light" variant="${ctaType}" data-src="${ctaUrl}">${cta}</wds-button>
        </div>
        <div class="hero-features row wds2-type-body-regular-m">
          ${featureItem}
        </div>
      </div>
      <div class="hero-overlay hero-overlay-m col-sm-2 col-md-5 col-l-5 col-xl-5">
        <div class="hero-features row wds2-type-display-xs">
            ${featureItem}
        </div>
      </div>
    </div>  
    <wds-icon href="sss" iconName="icon-assistance" iconSize=48></wds-icon>`;
  block.innerHTML = '';
  block.appendChild(container);
}
