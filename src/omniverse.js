export container from 'di-strategy'

export {
	
	instanceOf,
	Interface,
	
	InterfacePrototype,
	InterfaceClass,
	
} from 'interface-prototype'

export mixin from './mixin'

export {
	
	mix,
	Mixin,
	
} from 'mixwith'




import {
	InterfacePrototype
} from 'interface-prototype'
import container from 'di-strategy'
container.setInterfacePrototypeDefault(InterfacePrototype);
