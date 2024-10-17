export default function decorate(block) {
  const [btnLabel, btnType] = block.querySelectorAll('p');
  const button = document.createElement('wds-button');
  button.setAttribute('background', 'light');
  button.setAttribute('variant', btnType.innerHTML);
  button.setAttribute('iconSize', 'small');
  button.textContent = btnLabel.innerHTML;
  block.innerHTML = '';
  block.appendChild(button);
}
