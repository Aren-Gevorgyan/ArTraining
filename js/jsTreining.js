//press
let next = document.getElementById("next");
let previous = document.getElementById("previous");
let array_press = document.querySelectorAll(".press");
let array_description = document.querySelectorAll(".desc_press");
let array_title = document.querySelectorAll(".press_level");

let index = 0;

next.onclick = function(){
	 if(index == array_press.length - 1){
	 	return;
	 }
	 array_press[index].style.display = "none";
	 array_press[index + 1].style.display = "block";
	 array_description[index].style.display = "none";
	 array_description[index + 1].style.display = "block";
	 array_title[index].style.display = "none";
	 array_title[index + 1].style.display = "block";
     return index++;
}
previous.onclick = function(){
	 if(index == 0){
	 	return;
	 }
	 array_press[index].style.display = "none";
	 array_press[index - 1].style.display = "block";
	 array_description[index].style.display = "none";
	 array_description[index - 1].style.display = "block";
	 array_title[index].style.display = "none";
	 array_title[index - 1].style.display = "block";
	 return index--;
} 


//chest
let chest_next = document.getElementById("chest_next");
let chest_previous = document.getElementById("chest_previous");
let array_chest = document.querySelectorAll(".chest");
let array_desc_chest = document.querySelectorAll(".chest_level");
let array_title_pair = document.querySelectorAll(".desc_chest");

let index_chest = 0;

chest_next.onclick = function(){
	 if(index_chest == array_press.length - 1){
	 	return;
	 }
	 array_chest[index_chest].style.display = "none";
	 array_chest[index_chest + 1].style.display = "block";
	 array_desc_chest[index_chest].style.display = "none";
	 array_desc_chest[index_chest + 1].style.display = "block";
	 array_title_pair[index_chest].style.display = "none";
	 array_title_pair[index_chest + 1].style.display = "block";
     return index_chest++;
}
chest_previous.onclick = function(){
	 if(index_chest == 0){
	 	return;
	 }
	 array_chest[index_chest].style.display = "none";
	 array_chest[index_chest - 1].style.display = "block";
	 array_desc_chest[index_chest].style.display = "none";
	 array_desc_chest[index_chest - 1].style.display = "block";
	 array_title_pair[index_chest].style.display = "none";
	 array_title_pair[index_chest - 1].style.display = "block";
	 return index_chest--;
}

//hend
let hend_next = document.getElementById("hend_next");
let hend_previous = document.getElementById("hend_previous");
let array_hend = document.querySelectorAll(".hend");
let array_desc_hend = document.querySelectorAll(".desc_hend");
let array_title_hend = document.querySelectorAll(".hend_level");

let index_hend = 0;

hend_next.onclick = function(){
	 if(index_hend == array_hend.length - 1){
	 	return;
	 }
	 array_hend[index_hend].style.display = "none";
	 array_hend[index_hend + 1].style.display = "block";
	 array_desc_hend[index_hend].style.display = "none";
	 array_desc_hend[index_hend + 1].style.display = "block";
	 array_title_hend[index_hend].style.display = "none";
	 array_title_hend[index_hend + 1].style.display = "block";
     return index_hend++;
}
hend_previous.onclick = function(){
	 if(index_hend == 0){
	 	return;
	 }
	 array_hend[index_hend].style.display = "none";
	 array_hend[index_hend - 1].style.display = "block";
	 array_desc_hend[index_hend].style.display = "none";
	 array_desc_hend[index_hend - 1].style.display = "block";
	 array_title_hend[index_hend].style.display = "none";
	 array_title_hend[index_hend - 1].style.display = "block";
	 return index_hend--;
} 

//back
let back_next = document.getElementById("back_next");
let back_previous = document.getElementById("back_previous");
let array_back = document.querySelectorAll(".back");
let array_desc_back = document.querySelectorAll(".desc_back");
let array_title_back = document.querySelectorAll(".back_level");

let index_back = 0;

back_next.onclick = function(){
	 if(index_back == array_back.length - 1){
	 	return;
	 }
	 array_back[index_back].style.display = "none";
	 array_back[index_back + 1].style.display = "block";
	 array_desc_back[index_back].style.display = "none";
	 array_desc_back[index_back + 1].style.display = "block";
	 array_title_back[index_back].style.display = "none";
	 array_title_back[index_back + 1].style.display = "block";
     return index_back++;
}
back_previous.onclick = function(){
	 if(index_back == 0){
	 	return;
	 }
	 array_back[index_back].style.display = "none";
	 array_back[index_back - 1].style.display = "block";
	 array_desc_back[index_back].style.display = "none";
	 array_desc_back[index_back - 1].style.display = "block";
	 array_title_back[index_back].style.display = "none";
	 array_title_back[index_back - 1].style.display = "block";
	 return index_back--;
}

//foot
let foot_next = document.getElementById("foot_next");
let foot_previous = document.getElementById("foot_previous");
let array_foot = document.querySelectorAll(".foot");
let array_desc_foot = document.querySelectorAll(".desc_foot");
let array_title_foot = document.querySelectorAll(".foot_level");

let index_foot = 0;

foot_next.onclick = function(){
	 if(index_foot == array_foot.length - 1){
	 	return;
	 }
	 array_foot[index_foot].style.display = "none";
	 array_foot[index_foot + 1].style.display = "block";
	 array_desc_foot[index_foot].style.display = "none";
	 array_desc_foot[index_foot + 1].style.display = "block";
	 array_title_foot[index_foot].style.display = "none";
	 array_title_foot[index_foot + 1].style.display = "block";
     return index_foot++;
}
foot_previous.onclick = function(){
	 if(index_foot == 0){
	 	return;
	 }
	 array_foot[index_foot].style.display = "none";
	 array_foot[index_foot - 1].style.display = "block";
	 array_desc_foot[index_foot].style.display = "none";
	 array_desc_foot[index_foot - 1].style.display = "block";
	 array_title_foot[index_foot].style.display = "none";
	 array_title_foot[index_foot - 1].style.display = "block";
	 return index_foot--;
} 