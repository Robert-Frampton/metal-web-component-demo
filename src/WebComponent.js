'use strict';

import Component from 'metal-component';
import Soy from 'metal-soy';
import defineWebComponent from 'metal.js/packages/metal-web-component/lib/define_web_component';
import templates from './WebComponent.soy.js';

import './web-component.scss';

class WebComponent extends Component {
}
Soy.register(WebComponent, templates);

WebComponent.STATE = {
	message: {
		value: ''
	}
};

defineWebComponent('web-component', WebComponent);

export { WebComponent };
export default WebComponent;
