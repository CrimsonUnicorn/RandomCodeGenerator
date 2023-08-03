const col=[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn=document.querySelector(".btn");
const color=document.querySelector(".gencol");
 
btn.addEventListener("click",function(){
  var hex="#";
  for(var i =0;i<6;i++)
    hex+= col[getRandomNum()];
  color.textContent=hex;
  document.body.style.backgroundColor= hex;
});
function getRandomNum()  {
  return Math.floor(Math.random()*col.length);
}