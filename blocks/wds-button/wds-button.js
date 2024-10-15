export default function decorate(block) {
  // eslint-disable-next-line no-console
  console.log(block);
  const [btnLabel, btnType] = block.querySelectorAll('p');
  const button = document.createElement('wds-button');
  button.setAttribute('background', 'light');
  button.setAttribute('variant', btnType);
  button.setAttribute('iconSize', 'small');
  button.textContent = btnLabel;
  block.appendChild(button);
}
