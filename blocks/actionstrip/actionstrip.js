import { loadScript } from '../../scripts/aem.js';

export default function decorate(block) {
  loadScript('https://libs-europe.nissan-cdn.net/etc/designs/nissan-pace-vlp-plus/clientlibs-24.09.30.NISSAN-5/libs/analyticsManager.min.js');
  const [heading, primaryBtn, secondaryBtn, theme] = block.querySelectorAll('p');
  const wdsActionStrip = document.createElement('div');
  wdsActionStrip.innerHTML = `<div class="actionstrip">
    <div class="row">
      <div class="col-sm-2 col-md-12 col-l-12 col-xl-12">
        <wds-action-strip heading="${heading.innerHTML}" background="${theme ? theme.innerHTML : 'grey'}">
          <h2 slot="heading">${heading.innerHTML}</h2>
          <wds-action-strip-button slot="buttons" buttontype="primary" background="light">${primaryBtn.innerHTML}</wds-action-strip-button>
          <wds-action-strip-button slot="buttons" buttontype="secondary" background="light">${secondaryBtn.innerHTML}</wds-action-strip-button>
        </wds-action-strip>
      </div>
    </div>
  </div><div class="actionstrip_icon">
    <div class="row">
      <div class="col-sm-2 col-md-12 col-l-12 col-xl-12">
        <wds-action-strip heading="Title lorem ipsum" background="dark">
          <h2 slot="heading">Continue with your Ariya</h2>
          <wds-action-strip-icon slot="fourIcons" variant="four-icons" iconname="icon-assisted_steering" href="http://www.google.com">Book a test drive</wds-action-strip-icon>
          <wds-action-strip-icon slot="fourIcons" variant="four-icons" iconname="icon-download-brochure" href="http://www.google.com">Download brochure</wds-action-strip-icon>
          <wds-action-strip-icon slot="fourIcons" variant="four-icons" iconname="icon-trade-in-quote" href="http://www.google.com">
            Get a quote</wds-action-strip-icon>
          <wds-action-strip-icon slot="fourIcons" variant="four-icons" iconname="icon-onboarding_to_ownership" href="http://www.google.com">Nissan ownership</wds-action-strip-icon>
        </wds-action-strip>
      </div>
    </div>
  </div>`;
  block.innerHTML = '';
  block.appendChild(wdsActionStrip);
}
