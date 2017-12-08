import { mix, Mixin } from 'mixwith'

export default function mixin(...mixinClasses){
	return (classDef)=>{
		return class extends mix(classDef).with(...mixinClasses){};
	};
};
