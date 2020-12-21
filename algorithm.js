function hasCollided(thisObject, thatObject) {
   bulletRightEdge = thisObject.x+thisObject.width;
   wallLeftEdge = thatObject.x;

   if(bulletRightEdge >= wallLeftEdge) {
       return true;
   }   else {
       return false;
   }
}