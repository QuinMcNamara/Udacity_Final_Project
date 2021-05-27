import {clickHandler, retrieveCoordinates} from './js/app';

import './styles/footer.scss';
import './styles/main.scss';

document.getElementById('generate').addEventListener('click', clickHandler());

export {
    clickHandler,
    retrieveCoordinates
}