import { loadScript } from '../../scripts/aem.js';

export default function decorate(block) {
  loadScript('dist/bundle.js');
  loadScript('https://libs-europe.nissan-cdn.net/etc/designs/nissan-pace-vlp-plus/clientlibs-24.09.30.NISSAN-5/libs/analyticsManager.min.js');
  const isPublishMode = document.querySelector('main');
  if (isPublishMode) {
    const [heading, description] = block.querySelectorAll('p');
    const wdsAccordian = document.createElement('div');
    wdsAccordian.innerHTML = `<div class="accordion container">
      <div class="row">
        <div class="col-sm-2 col-md-12 col-l-12 col-xl-12">
          <wds-accordion heading="${heading.innerHTML}" headingLevel=6>
            <span slot="body">${description.innerHTML}</span>
          </wds-accordion>
        </div>  
      </div>
    </div>`;
    block.innerHTML = '';
    block.appendChild(wdsAccordian);
  }
}
