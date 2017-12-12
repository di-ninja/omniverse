import memoize from 'fast-memoize'

export default function(options){
	return function(fn){
		return memoize(fn, options);
	};
};
