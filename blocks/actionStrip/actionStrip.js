import { loadScript } from '../../scripts/aem.js';

export default function decorate(block) {
  loadScript('https://libs-europe.nissan-cdn.net/etc/designs/nissan-pace-vlp-plus/clientlibs-24.09.30.NISSAN-5/libs/analyticsManager.min.js');

  const [heading, primaryBtn, secondaryBtn] = block.querySelectorAll('p');
  const wdsActionStrip = document.createElement('div');
  wdsActionStrip.innerHTML = `<div class="actionStrip">
    <div class="row">
      <div class="col-sm-2 col-md-12 col-l-12 col-xl-12">
        <wds-action-strip heading="${heading.innerHTML}" background="grey">
          <h2 slot="heading">${heading.innerHTML}</h2>
          <wds-action-strip-button slot="buttons" buttontype="primary" background="light">${primaryBtn.innerHTML}</wds-action-strip-button>
          <wds-action-strip-button slot="buttons" buttontype="secondary" background="light">${secondaryBtn.innerHTML}</wds-action-strip-button>
        </wds-action-strip>
      </div>
    </div>
  </div>`;
  block.innerHTML = '';
  block.appendChild(wdsActionStrip);
}
