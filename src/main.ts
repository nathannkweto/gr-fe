import './styles.css';
import PageLayout from './layout/PageLayout';
import { register, renderRoute } from './router';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Quote from './pages/Quote';

const app = document.getElementById('app')!;
app.appendChild(PageLayout());

// register routes
register('/', Home);
register('/about', About);
register('/services', Services);
register('/contact', Contact);
register('/quote', Quote);

// 404 fallback (optional)
register('/404', async () => {
  const el = document.createElement('div');
  el.innerHTML = '<h2 class="text-2xl font-bold">Not found</h2>';
  return el;
});

// initial render
renderRoute();
