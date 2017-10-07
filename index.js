
 function justInvoke(fn) {
   return this;
 }

 function setThisWithCall(fn, thisValue) {
   return this.call(thisValue);
 }
