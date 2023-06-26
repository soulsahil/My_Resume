var allProj = document.getElementById('all_proj');
var sections = document.querySelectorAll(".section");
function slideUp(sections,i){
    var translateY = [-20, -10];      
        var imgEdit = sections.querySelector(".img_edit")
        var cartlap = sections.querySelector(".cartlap");
        var loglap = sections.querySelector(".loglap");
        imgEdit.style.transform = "translateY("+translateY[i]+"%)";        
        imgEdit.style.transition = '3s ease';
        setTimeout(function() {
            cartlap.style.transform = "translateY(-70%)";
            cartlap.style.transition = '2s ease';
          }, 1000);
        setTimeout(function(){
            loglap.style.transform = "translateY(-60%)";
            loglap.style.transition = '2s ease';
        },1500)      
}

function slideDown(sections){
  
        var imgEdit = sections.querySelector(".img_edit");
        var cartlap = sections.querySelector(".cartlap");
        var loglap = sections.querySelector(".loglap");
        imgEdit.style.transform = "translateY(100%)";
        imgEdit.style.transition = 'none';
        
            cartlap.style.transform = "translateY(100%)";
            cartlap.style.transition = 'none';
          
        
            loglap.style.transform = "translateY(100%)";
            loglap.style.transition = 'none';
       
}

window.addEventListener('scroll', function() {
    for (var i = 0; i < sections.length; i++) {
      var section = sections[i];
      var screenPos = section.getBoundingClientRect().top;
      var sectionPos = window.innerHeight;
  
      if (screenPos < sectionPos) {
        slideUp(section,i);
      } else {
        slideDown(section);
      }
    }
  });






var skill = document.getElementsByClassName('skill');
var skillSec = document.getElementById('skill-section');
var box= document.querySelectorAll('.box');

function showProgress(){
    var width = [85, 90, 90, 75, 65, 70, 80];
    for(var i=0; i<box.length; i++)
    {
        
        skill[i].querySelector('.box').style.width = `${width[i]}%`;
        skill[i].querySelector('.box').style.transition = 'width 1s ease';
    }
}

function hideProgress(){
    var width = 0;
    for(var i=0; i<box.length; i++)
    {
        box[i].style.width = `${width}%`;
        box[i].style.transition = 'none';
    }
}

window.addEventListener('scroll', function(){
    var screenPos = skillSec.getBoundingClientRect().top;
    var sectionPos = window.innerHeight;
    if(screenPos<sectionPos)
    {
       
        setTimeout(showProgress, 800);
        
        
    }
    else 
    {
        hideProgress();
    }
});


var loader = document.getElementById("loading-page");
window.addEventListener("load", function(){
        loader.style.display = "none";
});
