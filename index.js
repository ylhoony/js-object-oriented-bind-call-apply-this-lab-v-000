
 function justInvoke(fn) {
   return fn();
 }

 function setThisWithCall(fn, thisValue) {
   return fn.call(thisValue);
 }

 function setThisWithApply(fn, thisValue, args) {
   return args ?  fn.apply(thisValue, [...args]) : fn.apply(thisValue);
 }
