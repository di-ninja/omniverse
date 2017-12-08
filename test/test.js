import { expect } from 'chai'

import {
	mixin,
	Mixin,
} from '../browser'

describe('mixwith @mixin decorator',function(){
	
	const MyMixin = Mixin((superclass) => class extends superclass {

		constructor(...args) {
			super(...args);
		}

		
		hello() {
			return super.hello();
		}

		who() {
			return 'world !';
		}
		
	});
	
	@mixin(MyMixin)
	class A{
		hello(){
			return 'Hello';
		}
		helloWorld(){
			return this.hello()+' '+this.who();
		}
	}
	
	it('sould return "Hello world !"',function(){
		const a = new A();
		expect( a.helloWorld() ).equal("Hello world !");		
	});
	

});
