import { mix, Mixin } from 'mixwith'

export default function mixin(...mixinClasses){
	return function(classDef){
		return class extends mix(classDef).with(...mixinClasses){};
	};
};
