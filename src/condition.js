export default function(condition){
	return function(fn){
		return function(...args){
			if(typeof condition === 'function'){
				if(!condition(...args)){
					return;
				}
			}
			else{
				if(!condition){
					return;
				}
			}
			return fn(...args);
		}
	};
};
