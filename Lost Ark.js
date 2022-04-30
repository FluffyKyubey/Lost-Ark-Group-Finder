var click_down=document.querySelector(".top span");
var card=document.querySelector(".card");
var ulOne = document.querySelector(".list1");
var ultwo = document.querySelector(".list2");
var ulthree = document.querySelector(".list3");
var ulfour = document.querySelector(".list4");
var ulfive = document.querySelector(".list5");
var ulsix = document.querySelector(".list6");
var ulseven = document.querySelector(".list7");
var uleight = document.querySelector(".list8");
var ulnine = document.querySelector(".list9");
var ulten = document.querySelector(".list10");

var up=document.querySelector(".top span i");
click_down.addEventListener('click',function(){
// card.classList.toggle('heighten');
ulOne.classList.toggle('collapsed')
ultwo.classList.toggle('collapsed')
ulthree.classList.toggle('collapsed')
ulfour.classList.toggle('collapsed')
ulfive.classList.toggle('collapsed')
ulsix.classList.toggle('collapsed')
ulseven.classList.toggle('collapsed')
uleight.classList.toggle('collapsed')
ulnine.classList.toggle('collapsed')
ulten.classList.toggle('collapsed')

if(up.classList.contains("fa-angle-down")){
up.classList.remove('fa-angle-down');
up.classList.add('fa-angle-up');
}
else{
up.classList.add('fa-angle-down');
up.classList.remove('fa-angle-up');
}

});
window.scrollTo(0, 0);
window.scroll({
    top: 0, 
    left: 0, 
    behavior: 'smooth'
  });
  

var progress_bar = document.querySelectorAll(".progress-bar li");
function checked(id){
var checked = document.getElementById("check"+id);
checked.classList.toggle("list_checked");
var striked = document.getElementById("strike"+id);
striked.classList.toggle("strike_none");
var list_childs = document.getElementById(id);
list_childs.classList.toggle("list_active");
progress();
}
function progress(){
var checked_progress=document.querySelectorAll(".list li.list_active");
var length = checked_progress.length;
progress_bar.forEach(function(index){
index.classList.remove("active");
});

for(i=0;i<length;i++){ progress_bar[i].classList.add("active"); } var checked_tick=document.querySelector("#checked_toggle"); if(length>4){

    checked_tick.classList.remove("d-none");
    }else{
    checked_tick.classList.add("d-none");
    }

    }

