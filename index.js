
 function justInvoke(fn) {
   return fn();
 }

 function setThisWithCall(fn, thisValue) {
   return fn.call(thisValue);
 }
