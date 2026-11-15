(()=>{"use strict";
const skins=[
{name:"THE WINTERFEST BANDIT",image:"https://fortnite-api.com/images/cosmetics/br/character_acrylicstitch/featured.png",url:"https://fortnite.gg/cosmetics?id=21410"},
{name:"ROSETTE TIGERESS",image:"https://fortnite-api.com/images/cosmetics/br/character_tigerfashiondale/icon.png",url:"https://fortnite.gg/cosmetics?id=15289"},
{name:"BYTES",image:"https://fortnite-api.com/images/cosmetics/br/character_bites/icon.png",url:"https://fortnite.gg/cosmetics?id=8331"}];
const image=document.getElementById("locker-preview-image"),name=document.getElementById("locker-preview-name"),link=document.getElementById("locker-preview-link"),count=document.getElementById("locker-count"),buttons=[...document.querySelectorAll(".locker-choice")];
if(!image||!name||!link||buttons.length!==3)return;
let current=0;
function select(n){current=(n+3)%3;const skin=skins[current];image.classList.remove("locker-pop");image.src=skin.image;image.alt=skin.name+" Fortnite outfit";name.textContent=skin.name;link.href=skin.url;count.textContent=String(current+1).padStart(2,"0")+" / 03";buttons.forEach((b,i)=>{b.classList.toggle("is-selected",i===current);b.setAttribute("aria-pressed",String(i===current))});void image.offsetWidth;image.classList.add("locker-pop");try{localStorage.setItem("mow:locker",String(current))}catch(e){}}
buttons.forEach((b,i)=>b.addEventListener("click",()=>select(i)));
document.getElementById("locker-prev").addEventListener("click",()=>select(current-1));
document.getElementById("locker-next").addEventListener("click",()=>select(current+1));
document.getElementById("locker-showcase").addEventListener("keydown",e=>{if(e.key!=="ArrowLeft"&&e.key!=="ArrowRight")return;e.preventDefault();select(current+(e.key==="ArrowRight"?1:-1));buttons[current].focus()});
try{const value=Number(localStorage.getItem("mow:locker"));if(Number.isInteger(value)&&value>=0&&value<3)current=value}catch(e){}
select(current);
})();