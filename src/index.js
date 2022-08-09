import { render } from 'preact';
import { render as renderToString } from "preact-render-to-string";
import App from './components/App';

render(<App />, document.getElementById('root'));