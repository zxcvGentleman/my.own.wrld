(()=>{"use strict";
const key="mow:settings:v1",defaults={theme:"dark",motion:"on",background:"on",corners:"rounded",sounds:"off"};
const allowed={theme:["dark","graphite","light"],motion:["on","off"],background:["on","off"],corners:["rounded","sharp"],sounds:["on","off"]};
let state={...defaults};try{const stored=JSON.parse(localStorage.getItem(key)||"{}");for(const k in defaults)if(allowed[k].includes(stored[k]))state[k]=stored[k]}catch(e){}
function apply(){for(const k in state)document.documentElement.dataset[k]=state[k]}
function save(){try{localStorage.setItem(key,JSON.stringify(state));return true}catch(e){return false}}
function sync(){document.querySelectorAll("[data-setting][data-value]").forEach(b=>{const selected=state[b.dataset.setting]===b.dataset.value;b.setAttribute("aria-pressed",String(selected));b.classList.toggle("is-selected",selected)})}
apply();
document.addEventListener("DOMContentLoaded",()=>{
sync();const status=document.getElementById("settings-status");
document.querySelectorAll("[data-setting][data-value]").forEach(b=>b.addEventListener("click",()=>{const k=b.dataset.setting,v=b.dataset.value;if(!allowed[k]||!allowed[k].includes(v))return;state[k]=v;apply();sync();if(status)status.textContent=save()?"SAVED":"NOT SAVED IN THIS BROWSER";else save()}));
const reset=document.getElementById("settings-reset");
if(reset)reset.addEventListener("click",()=>{state={...defaults};apply();sync();if(status)status.textContent=save()?"DEFAULTS RESTORED":"DEFAULTS ACTIVE FOR THIS PAGE"});
document.addEventListener("click",event=>{if(state.sounds!=="on"||!event.target.closest("button,a"))return;try{const AC=window.AudioContext||window.webkitAudioContext;if(!AC)return;const ctx=new AC(),osc=ctx.createOscillator(),gain=ctx.createGain();osc.type="sine";osc.frequency.value=570;gain.gain.setValueAtTime(.0001,ctx.currentTime);gain.gain.exponentialRampToValueAtTime(.018,ctx.currentTime+.01);gain.gain.exponentialRampToValueAtTime(.0001,ctx.currentTime+.075);osc.connect(gain);gain.connect(ctx.destination);osc.start();osc.stop(ctx.currentTime+.08);osc.onended=()=>ctx.close()}catch(e){}});
});
})();