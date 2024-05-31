  //type, timestamp , defaultPrevented
  //target, toElement, srcElement , currentTarget,
  // clientX, clientY, screenX , screenY
 //altkey , ctrlkey , shiftkey, keycode

document.getElementById('OWL').addEventListener('click', function(e) {
    console.log(e);

}, false) 
// False is default  
// e is Event Element


// Event Propogation 
// Event Bubbling 
if Images id is in ul inside which is different id 
when clicked on pic in images without having individual id 
 Image id action is performed 

//  If you click on a single image that has a separate ID from the UL's ID:

//  Both actions are performed: first, the action associated with the image's separate ID, and then the action associated with the UL's ID.
//  This process propagates from the inside to the outside, similar to a bubble moving from the bottom up.



 // Event Capturing using true instead of false
 Top to Bottom execution 

 we can use e.stopPropogation() // for this bubbling aur capturing


  We can prevent Default by using  like  function(e) {
    e.preventDefault()
  }

  document.querySelector('#images').addEventListener('click',
  function() {

  },false)


  let removeit =  e.target().parentNode() // to remove image from stack of images in galler

  removeit.remove();//  One Way

  // Another way 
  removeit.parentNode.removeChild(removeit)
  e.target.tagName== 'IMG'


  // Event Spillover
  
   
  





