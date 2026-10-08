const menu=document.getElementById("v11Menu"),nav=document.getElementById("v11Nav");
if(menu&&nav){menu.addEventListener("click",()=>{const open=nav.classList.toggle("open");menu.setAttribute("aria-expanded",open);menu.innerHTML=open?'<i class="fa-solid fa-xmark"></i>':'<i class="fa-solid fa-bars"></i>'})}

// V11.1 — true tab routing: only the selected page is visible.
const pagePanels=[...document.querySelectorAll(".page-panel[data-page]")];
const pageLinks=[...document.querySelectorAll("[data-page-link]")];
const pageTitles={about:"About",resume:"Resume",skills:"Skills",credentials:"Credentials",projects:"Projects",recruiters:"Recruiter Connect",forum:"Forum",contact:"Contact"};
function showPage(page,updateHash=true){
  if(!pageTitles[page]) page="about";
  pagePanels.forEach(panel=>panel.classList.toggle("page-active",panel.dataset.page===page));
  pageLinks.forEach(link=>link.classList.toggle("active",link.dataset.pageLink===page));
  document.title=`Karthikeyan M | ${pageTitles[page]} • Cybersecurity`;
  if(updateHash && location.hash!==`#${page}`) history.replaceState(null,"",`#${page}`);
  window.scrollTo({top:0,behavior:window.matchMedia("(prefers-reduced-motion: reduce)").matches?"auto":"smooth"});
  nav?.classList.remove("open");
  if(menu){menu.setAttribute("aria-expanded","false");menu.innerHTML='<i class="fa-solid fa-bars"></i>'}
}
pageLinks.forEach(link=>link.addEventListener("click",e=>{const page=link.dataset.pageLink;if(page){e.preventDefault();showPage(page,true)}}));
window.addEventListener("hashchange",()=>showPage(location.hash.slice(1),false));
showPage(location.hash.slice(1)||"about",false);

const modal=document.getElementById("certModal"),viewer=document.getElementById("certViewer"),pathLabel=document.getElementById("modalPath"),close=document.getElementById("modalClose");
function openEvidence(path){
 if(!modal||!viewer)return;
 const clean=path.replace(/^\.\//,""); pathLabel.textContent=clean; viewer.innerHTML="";
 const ext=clean.split(".").pop().toLowerCase();
 if(ext==="pdf"){const frame=document.createElement("iframe");frame.src="./"+clean;frame.title="Certificate evidence";viewer.appendChild(frame)}
 else if(["png","jpg","jpeg","webp"].includes(ext)){const im=document.createElement("img");im.src="./"+clean;im.alt="Certificate evidence";viewer.appendChild(im)}
 else viewer.innerHTML='<div style="padding:30px;color:#B9C6D8">Certificate file not found or unsupported. Add the real PDF/image under assets/certificates/.</div>';
 modal.classList.add("open");modal.setAttribute("aria-hidden","false");document.body.style.overflow="hidden";
}
function closeEvidence(){if(!modal)return;modal.classList.remove("open");modal.setAttribute("aria-hidden","true");viewer.innerHTML="";document.body.style.overflow=""}
document.querySelectorAll(".vault-card,.project-cert-link").forEach(el=>el.addEventListener("click",e=>{const btn=e.target.closest("button");const path=btn?.dataset.cert||el.dataset.cert;if(path)openEvidence(path)}));
close?.addEventListener("click",closeEvidence);modal?.addEventListener("click",e=>{if(e.target===modal)closeEvidence()});document.addEventListener("keydown",e=>{if(e.key==="Escape")closeEvidence()});

// Skill tabs
const skillTabs=document.querySelectorAll('.skill-tab'),skillPanels=document.querySelectorAll('.skill-panel');
skillTabs.forEach(tab=>tab.addEventListener('click',()=>{const id=tab.dataset.skill;skillTabs.forEach(t=>{const on=t===tab;t.classList.toggle('active',on);t.setAttribute('aria-selected',on?'true':'false')});skillPanels.forEach(panel=>{const on=panel.id===id;panel.hidden=!on;panel.classList.toggle('active',on)})}));

// Click-to-reveal contact details. Replace placeholders in index.html with your real values.
const revealStatus=document.getElementById('contactRevealStatus');
document.querySelectorAll('.contact-reveal').forEach(btn=>btn.addEventListener('click',()=>{const kind=btn.dataset.kind,value=btn.dataset.value;if(!revealStatus)return;if(!value||value.startsWith('YOUR_')){revealStatus.textContent=`Add your ${kind} in the data-value field in index.html.`;return}revealStatus.innerHTML='';const link=document.createElement('a');link.textContent=value;link.href=kind==='email'?`mailto:${value}`:`tel:${value.replace(/[^+\d]/g,'')}`;revealStatus.appendChild(link);btn.querySelector('span').textContent=`${kind==='email'?'Email':'Phone'} Revealed`}));

const reduced=window.matchMedia("(prefers-reduced-motion: reduce)").matches;
if(!reduced){const io=new IntersectionObserver(es=>es.forEach(x=>{if(x.isIntersecting){x.target.style.setProperty("--seen","1");io.unobserve(x.target)}}),{threshold:.12});document.querySelectorAll(".page-panel,.vault-card,.project-v11,.timeline-card,.skill-matrix article,.recruiter-tab-v11").forEach(x=>io.observe(x));}

document.querySelectorAll(".vault-card,.project-v11,.recruiter-tab-v11").forEach(card=>{card.addEventListener("pointermove",e=>{if(!window.matchMedia("(pointer:fine)").matches)return;const r=card.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;card.style.transform=`perspective(900px) rotateX(${(-y*1.5).toFixed(2)}deg) rotateY(${(x*1.5).toFixed(2)}deg) translateY(-4px)`});card.addEventListener("pointerleave",()=>card.style.transform="")});
