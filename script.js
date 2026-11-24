const projects=[
  {title:'StudyBuddy AI',type:'Generative AI / RAG / Data Engineering',desc:'AI-powered document Q&A system that turns uploaded PDFs into a searchable knowledge base using retrieval-augmented generation.',tech:['Python','Streamlit','ChromaDB','Google Gemini','BGE Small','RAG'],details:'End-to-end pipeline with PDF ingestion, recursive chunking, embeddings, semantic retrieval, persistent ChromaDB storage, source‑grounded answers, document management, chat history and voice assistance. Development included 103+ processed document chunks.',link:'https://github.com/Rohit-lpu-ai'},
  {title:'Bodh Setu',type:'Education / Platform',desc:'An AI-powered platform that simplifies complex government policies using NLP, RAG, and intelligent document search. Enables policy comparison and delivers source-verified answers.',tech:['Python','FastAPI','NLP','RAG','PostgreSQL','BM25','Dense Embeddings','Reciprocal Rank Fusion','LLMs','JavaScript','HTML','CSS'],details:'BodhSetu is an AI-powered policy intelligence platform that transforms complex government documents, regulations, and official notifications into clear, searchable, and actionable information. It leverages Natural Language Processing (NLP), Retrieval-Augmented Generation (RAG), and semantic search to help users understand policies, ask questions about official documents, and identify changes between different policy versions. The platform provides source-verified answers with document and clause-level references, making government information more accessible, transparent, and easier to understand.',link:'https://github.com/Rohit-lpu-ai/Bodh-Setu'},
  {title:'Intelligent CPU Scheduler Simulator',type:'Operating Systems / Algorithms',desc:'Interactive CPU scheduling simulator with visual Gantt charts, performance metrics and algorithm comparison.',tech:['Python','Flask','JavaScript','OS','DSA'],details:'Implements seven scheduling approaches including FCFS, SJF, Round Robin, Priority and MLFQ, with visualization and performance analysis.',link:'https://github.com/Rohit-lpu-ai/Intelligent-CPU-Scheduler-Simulator'},
  {title:'JANADESH',type:'Voting System / Data / DSA',desc:'Smart voting application covering users, candidates, secure voting workflows and live election‑result tracking.',tech:['Python','SQL','DSA','Analytics'],details:'The project concept includes voter and candidate management, secure role‑based access, one‑vote‑per‑user processing and live analysis.',link:'https://github.com/Rohit-lpu-ai'},
  {title:'Urban Heat & Micro-Climate',type:'Data Analytics / Power BI',desc:'Interactive analysis combining weather and earth‑observation signals to understand urban heat stress.',tech:['Power BI','OpenWeather API','NASA LST','NDVI','PM2.5'],details:'Explores temperature, land‑surface temperature, NDVI, PM2.5 and building density to derive a heat‑stress view of urban environments.',link:'https://github.com/Rohit-lpu-ai'},
  {title:'AURA',type:'Agentic Commerce / Generative AI',desc:'A concept for commerce where AI translates user intent into actions.',tech:['AI Agents','Generative AI','LLMs','Commerce'],details:'AURA — “Where AI Turns Intent Into Action.” Implementation details are intentionally kept open until the project repository contains more documented information.',link:'https://github.com/Rohit-lpu-ai'}
];

const certs=[
  {title:'Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate',issuer:'Oracle · Jun 2025',img:'assets/certificates/Oracle_AI_Foundations.pdf',note:'Certificate supplied by Rohit. CV also lists this credential.'},
  {title:'Java Programming Fundamentals',issuer:'Infosys · Aug 21, 2025',img:'assets/certificates/Java_Programming_Fundamentals.pdf',note:'Certificate record states successful completion on August 21, 2025.'},
  {title:'Database Management System',issuer:'Infosys · Jul 2026',img:'assets/certificates/Database_Management.pdf',note:'Certificate supplied by Rohit and listed in the latest CV.'},
  {title:'Python Certificate',issuer:'Certificate asset supplied',img:'assets/certificates/Python.png',note:'Certificate asset supplied in the portfolio materials.'},
  {title:'IGC-MUN Participation',issuer:'IGC-MUN · 2025',img:'assets/certificates/IGC-MUN_2025.jpeg',note:'Participation certificate/asset supplied in the portfolio materials.'}
];

const projectGrid=document.querySelector('#projectGrid');
projectGrid.innerHTML=projects.map((p,i)=>`<article class="project-card reveal" data-index="${i}"><div><span class="project-index">0${i+1} / ${p.type}</span><h3>${p.title}</h3><p>${p.desc}</p></div><div><div class="project-tech">${p.tech.map(t=>`<span>${t}</span>`).join('')}</div><div class="open-project">Explore project ↗</div></div></article>`).join('');

const certGrid=document.querySelector('#certGrid');
certGrid.innerHTML=certs.map((c,i)=>`<article class="cert reveal" data-cert="${i}"><div class="cert-img"><iframe src="${c.img}#page=1&toolbar=0&navpanes=0" title="${c.title}" loading="lazy" style="width:100%;height:100%;border:0"></iframe></div><div class="cert-info"><h3>${c.title}</h3><p>${c.issuer}</p></div></article>`).join('');

const modal=document.querySelector('#modal'), modalContent=document.querySelector('#modalContent');
function openModal(html){modalContent.innerHTML=html;modal.classList.add('open');modal.setAttribute('aria-hidden','false');document.body.style.overflow='hidden'}
function closeModal(){modal.classList.remove('open');modal.setAttribute('aria-hidden','true');document.body.style.overflow=''}
document.querySelectorAll('[data-close]').forEach(x=>x.addEventListener('click',closeModal));
projectGrid.addEventListener('click',e=>{const card=e.target.closest('.project-card');if(!card)return;const p=projects[+card.dataset.index];openModal(`<span class="mono" style="color:var(--cyan);font-size:10px">PROJECT ${String(+card.dataset.index+1).padStart(2,'0')}</span><h2>${p.title}</h2><p>${p.details}</p><div class="modal-meta">${p.tech.map(t=>`<span>${t}</span>`).join('')}</div><a class="btn" href="${p.link}" target="_blank" rel="noreferrer">View GitHub ↗</a>`)});
certGrid.addEventListener('click',e=>{const card=e.target.closest('.cert');if(!card)return;const c=certs[+card.dataset.cert];openModal(`<span class="mono" style="color:var(--cyan);font-size:10px">CERTIFICATION</span><h2>${c.title}</h2><p>${c.issuer}</p><p>${c.note}</p><a class="btn" href="${c.img}" target="_blank" rel="noreferrer">Open Certificate ↗</a>`)});

const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(x=>observer.observe(x));

const progress=document.querySelector('#progressBar');const nav=document.querySelector('#nav');
window.addEventListener('scroll',()=>{const h=document.documentElement.scrollHeight-innerHeight;progress.style.width=(scrollY/h*100)+'%';nav.classList.toggle('scrolled',scrollY>30)},{passive:true});

const themeBtn=document.querySelector('#themeBtn');const saved=localStorage.getItem('theme');if(saved==='light')document.body.classList.add('light');themeBtn.textContent=document.body.classList.contains('light')?'☾':'☼';themeBtn.onclick=()=>{document.body.classList.toggle('light');const light=document.body.classList.contains('light');localStorage.setItem('theme',light?'light':'dark');themeBtn.textContent=light?'☾':'☼'};

const menuBtn=document.querySelector('#menuBtn');menuBtn.onclick=()=>nav.classList.toggle('open');document.querySelectorAll('.nav-links a').forEach(a=>a.onclick=()=>nav.classList.remove('open'));

const dot=document.querySelector('.cursor-dot'),ring=document.querySelector('.cursor-ring');let mx=innerWidth/2,my=innerHeight/2,rx=mx,ry=my;addEventListener('pointermove',e=>{mx=e.clientX;my=e.clientY;dot.style.left=mx+'px';dot.style.top=my+'px'});function cursorLoop(){rx+=(mx-rx)*.16;ry+=(my-ry)*.16;ring.style.left=rx+'px';ring.style.top=ry+'px';requestAnimationFrame(cursorLoop)}cursorLoop();

document.querySelectorAll('a,button,.project-card,.cert').forEach(el=>{el.addEventListener('mouseenter',()=>ring.classList.add('hover'));el.addEventListener('mouseleave',()=>ring.classList.remove('hover'))});

document.querySelectorAll('.project-card').forEach(card=>{card.addEventListener('pointermove',e=>{const r=card.getBoundingClientRect();card.style.setProperty('--mx',((e.clientX-r.left)/r.width*100)+'%');card.style.setProperty('--my',((e.clientY-r.top)/r.height*100)+'%')})});

document.querySelectorAll('.magnetic').forEach(el=>{el.addEventListener('pointermove',e=>{const r=el.getBoundingClientRect();el.style.transform=`translate(${(e.clientX-r.left-r.width/2)*.12}px,${(e.clientY-r.top-r.height/2)*.12}px)`});el.addEventListener('pointerleave',()=>{el.style.transform=''});});

const canvas=document.querySelector('#neural-canvas'),ctx=canvas.getContext('2d');let pts=[];function resize(){canvas.width=innerWidth*devicePixelRatio;canvas.height=innerHeight*devicePixelRatio;ctx.setTransform(devicePixelRatio,0,0,devicePixelRatio,0,0);pts=Array.from({length:Math.min(65,Math.floor(innerWidth/18))},()=>({x:Math.random()*innerWidth,y:Math.random()*innerHeight,vx:(Math.random()-.5)*.25,vy:(Math.random()-.5)*.25}))}resize();addEventListener('resize',resize);function draw(){ctx.clearRect(0,0,innerWidth,innerHeight);for(const p of pts){p.x+=p.vx;p.y+=p.vy;if(p.x<0||p.x>innerWidth)p.vx*=-1;if(p.y<0||p.y>innerHeight)p.vy*=-1;ctx.fillStyle='rgba(66,232,255,.55)';ctx.fillRect(p.x,p.y,1.5,1.5)}for(let i=0;i<pts.length;i++)for(let j=i+1;j<pts.length;j++){const a=pts[i],b=pts[j],d=Math.hypot(a.x-b.x,a.y-b.y);if(d<125){ctx.strokeStyle=`rgba(90,150,255,${(1-d/125)*.11})`;ctx.lineWidth=1;ctx.beginPath();ctx.moveTo(a.x,a.y);ctx.lineTo(b.x,b.y);ctx.stroke()}}requestAnimationFrame(draw)}draw();

// AI Easter egg: type AI to trigger a short neural pulse.
let typed='';addEventListener('keydown',e=>{typed=(typed+e.key.toLowerCase()).slice(-8);if(typed.endsWith('ai')){document.body.classList.add('ai-mode');setTimeout(()=>document.body.classList.remove('ai-mode'),1400)}});

const form=document.querySelector('#contactForm');form.addEventListener('submit',e=>{e.preventDefault();const data=new FormData(form);const subject=encodeURIComponent(data.get('subject'));const body=encodeURIComponent(`Name: ${data.get('name')}\nEmail: ${data.get('email')}\n\n${data.get('message')}`);location.href=`mailto:rohit.sharma200156@gmail.com?subject=${subject}&body=${body}`;document.querySelector('#formNote').textContent='Opening your email client…'});
