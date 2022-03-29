function getCSS(obj,style){
  if(window.getComputedStyle){
      return getComputedStyle(obj)[style];
  }
  return obj.currentStyle[style];
};

(function con(){
var oBox = document.getElementById('box');
var aDl = oBox.getElementsByTagName('dl');
var oSb = document.getElementById('sb');
var oColor = oInset = '';
reset.onclick = function(){
history.go();
}
for(var i = 0, leni = aDl.length; i < leni; i++){
  var oDt = aDl[i].getElementsByTagName('dt')[0];
  var aDd = aDl[i].getElementsByTagName('dd');
  aDl[i].last = 0;

  for(var j = 0,lenj = aDd.length; j < lenj; j++){
    aDd[j].index = j;
    aDd[j].onclick = function(){
      var oDl = this.parentNode;
      var oDt = oDl.getElementsByTagName('dt')[0];
      var aDd = oDl.getElementsByTagName('dd');
      aDd[oDl.last].style.cssText = 'color: black; background-color: rgba(255,255,255,0.3);'; 
      this.style.cssText = 'color: white; background-color: black;';

      oSb.style[oDt.innerHTML] = this.innerHTML;
    
      
      oDl.last = this.index;
    }
  }
} 
})();