import Header from '../components/Header';
import Footer from '../components/Footer';

export default function PageLayout() {
  const root = document.createElement('div');
  root.appendChild(Header());

  const main = document.createElement('main');
  main.id = 'main-content';
  main.className = '';
  root.appendChild(main);

  root.appendChild(Footer());
  return root;
}
