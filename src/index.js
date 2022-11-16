import { createRoot } from 'react-dom/client';
import Terminal from './components/Terminal';

const rootReactElement = <Terminal />;

const root = createRoot(document.getElementById('root'));

root.render(rootReactElement);
