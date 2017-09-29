'use strict';

import Component from 'metal-component';
import Soy from 'metal-soy';
import defineWebComponent from 'metal.js/packages/metal-web-component/lib/define_web_component';
import templates from './List.soy.js';

import './web-component.scss';

class List extends Component {
}
Soy.register(List, templates);

List.STATE = {
	items: {
		value: []
	}
};

defineWebComponent('my-list', List);

export { List };
export default List;
