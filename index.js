
 function justInvoke(fn) {
   return fn;
 }

 function setThisWithCall(fn, thisValue) {
   return this.call(thisValue);
 }
