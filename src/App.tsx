import { useState } from 'react';
import { ArrowDownRight, ArrowRight, ArrowUpRight, Menu, X, Globe2, ShieldCheck, Truck, Handshake, Sparkles, Phone, Mail, MapPin, Plus } from 'lucide-react';
import { motion } from 'framer-motion';

const activities = [
  {n:'01',title:'Beauté & cosmétique',desc:'Des essentiels de soin, de beauté et de parfumerie sélectionnés avec attention.',tag:'BEAUTÉ',img:'photo-1608248543803-ba4f8c70ae0b'},
  {n:'02',title:'Hygiène corporelle',desc:'Des produits du quotidien qui allient confort, confiance et qualité.',tag:'HYGIÈNE',img:'photo-1600185365483-26d7a4cc7519'},
  {n:'03',title:'Entretien domestique',desc:'Des solutions pratiques pour prendre soin des espaces de vie et de travail.',tag:'MAISON',img:'photo-1563453392212-326f5e854473'},
  {n:'04',title:'Petit électroménager beauté',desc:'Des appareils dédiés au soin et à la beauté, pensés pour un usage quotidien.',tag:'ÉQUIPEMENT',img:'photo-1522335789203-aabd1fc54bc9'},
  {n:'05',title:'Outdoor & loisirs',desc:'Des articles pour profiter pleinement des activités en extérieur, du camping au jardin.',tag:'OUTDOOR',img:'photo-1478131143081-80f7f84ca84d'},
  {n:'06',title:'Rangement & maison',desc:'Des solutions intelligentes pour organiser les espaces avec simplicité.',tag:'ORGANISATION',img:'photo-1618221195710-dd6b41faaea6'}
];
const fade = {hidden:{opacity:0,y:24},show:{opacity:1,y:0,transition:{duration:.65,ease:[.22,1,.36,1] as const}}};

function Logo(){return <a className="brand" href="#accueil" aria-label="Nostradis, accueil"><span className="brand-mark"><Globe2 size={25}/></span><span>NOSTRA<span className="orange">DIS</span></span></a>}

export default function App(){
 const [menu,setMenu]=useState(false);
 const close=()=>setMenu(false);
 return <main>
  <div className="topline"><span>IMPORTATION · FABRICATION · DISTRIBUTION</span><span>CASABLANCA, MAROC <span className="dot">●</span></span></div>
  <header className="header"><Logo/><nav className={menu?'nav open':'nav'}><a href="#activites" onClick={close}>Nos activités</a><a href="#approche" onClick={close}>Notre approche</a><a href="#entreprise" onClick={close}>L'entreprise</a><a className="nav-contact" href="#contact" onClick={close}>Parlons de votre projet <ArrowUpRight size={16}/></a></nav><button className="mobile-menu" onClick={()=>setMenu(!menu)} aria-label="Ouvrir le menu">{menu?<X/>:<Menu/>}</button></header>
  <section className="hero" id="accueil">
   <div className="hero-image"></div><div className="hero-shade"></div>
   <div className="hero-content">
    <motion.div initial="hidden" animate="show" variants={fade}><span className="eyebrow light"><i/> L'ART DE BIEN SÉLECTIONNER</span>
     <h1>Les bons produits.<br/><em>Les bonnes connexions.</em></h1>
     <p>NOSTRADIS accompagne les marques et les professionnels avec une expertise construite autour de la sélection, de l'importation et de la distribution.</p>
     <div className="hero-actions"><a className="btn btn-orange" href="#activites">Explorer nos activités <ArrowUpRight size={17}/></a><a className="text-link light-link" href="#entreprise">Découvrir NOSTRADIS <ArrowDownRight size={17}/></a></div>
    </motion.div>
   </div>
   <div className="hero-foot"><span>01 — 06&nbsp;&nbsp; NOS UNIVERS</span><span>UNE VISION DU COMMERCE QUI VA PLUS LOIN</span><span className="scroll-cue">DÉFILER ↓</span></div>
  </section>
  <section className="intro section-pad" id="entreprise">
   <motion.div className="intro-label" initial="hidden" whileInView="show" viewport={{once:true}} variants={fade}><span className="eyebrow"><i/> QUI SOMMES-NOUS</span><span className="vertical-note">NOSTRADIS · CASABLANCA</span></motion.div>
   <motion.div className="intro-main" initial="hidden" whileInView="show" viewport={{once:true}} variants={fade}><h2>Faire circuler<br/>la <em>qualité.</em></h2><div className="intro-copy"><p className="lead">Des produits utiles, des partenaires de confiance et une connaissance concrète du marché marocain.</p><p>NOSTRADIS intervient dans l'importation, la fabrication et la distribution de différentes familles de produits. Notre ambition : construire des relations durables entre les marques, les distributeurs et les consommateurs.</p><a className="text-link" href="#approche">Notre façon de travailler <ArrowUpRight size={17}/></a></div></motion.div>
   <div className="intro-bottom"><span>01 / NOTRE CONVICTION</span><span>EXIGENCE DANS LE CHOIX · SÉRIEUX DANS L'EXÉCUTION</span></div>
  </section>
  <section className="activities section-pad" id="activites">
   <div className="section-heading"><div><span className="eyebrow"><i/> NOS DOMAINES D'EXPERTISE</span><h2>Six univers.<br/><em>Une même exigence.</em></h2></div><p>Une offre diversifiée pour répondre aux besoins des marchés et des usages d'aujourd'hui.</p></div>
   <div className="activity-grid">{activities.map((a,i)=><motion.article className="activity-card" key={a.n} initial="hidden" whileInView="show" viewport={{once:true,amount:.15}} variants={fade}><div className="activity-photo" style={{backgroundImage:`url(https://images.unsplash.com/${a.img}?auto=format&fit=crop&w=1100&q=85)`}}><span className="activity-number">{a.n} / 06</span><span className="activity-tag">{a.tag}</span></div><div className="activity-info"><div><h3>{a.title}</h3><p>{a.desc}</p></div><a href="#contact" aria-label={`Contacter NOSTRADIS pour ${a.title}`}><ArrowUpRight size={20}/></a></div></motion.article>)}</div>
   <div className="activities-end"><span>UN PORTEFEUILLE D'ACTIVITÉS EN MOUVEMENT</span><span>CASABLANCA — MAROC</span></div>
  </section>
  <section className="approach" id="approche"><div className="approach-image"></div><div className="approach-content"><span className="eyebrow light"><i/> NOTRE APPROCHE</span><h2>Du premier contact<br/>à la <em>bonne livraison.</em></h2><p>Une chaîne de valeur cohérente, fondée sur l'écoute du marché, le choix des partenaires et le soin apporté à chaque étape.</p><div className="principles"><div><Globe2/><span><b>Ouverture internationale</b><small>Identifier des produits et partenaires pertinents.</small></span></div><div><ShieldCheck/><span><b>Exigence & conformité</b><small>Placer la qualité et la fiabilité au centre.</small></span></div><div><Truck/><span><b>Maîtrise de la distribution</b><small>Faire le lien entre l'offre et les besoins locaux.</small></span></div><div><Handshake/><span><b>Relations durables</b><small>Construire des collaborations de confiance.</small></span></div></div></div></section>
  <section className="statement section-pad"><span className="eyebrow"><i/> NOTRE ENGAGEMENT</span><h2>La confiance se construit<br/>dans <em>chaque détail.</em></h2><div className="statement-bottom"><span>UNE ENTREPRISE · PLUSIEURS UNIVERS · UN MÊME NIVEAU D'ATTENTION</span><Sparkles size={22}/></div></section>
  <section className="contact section-pad" id="contact"><div className="contact-left"><span className="eyebrow light"><i/> CONTACT</span><h2>Construisons<br/>la suite <em>ensemble.</em></h2><p>Vous êtes une marque, un distributeur ou un partenaire ? Échangeons autour de vos besoins.</p><a className="btn btn-orange" href="mailto:nostradis@hotmail.com">Écrire à NOSTRADIS <ArrowUpRight size={17}/></a></div><div className="contact-right"><div className="contact-item"><MapPin/><div><small>NOUS TROUVER</small><p>Lot N°10, Allée du Textile,<br/>Bd Chefchaouni, Sidi Bernoussi<br/>Casablanca, Maroc</p><a href="https://www.google.com/maps/search/?api=1&query=Lot+10+Allée+du+Textile+Boulevard+Chefchaouni+Casablanca" target="_blank" rel="noreferrer">Voir l'itinéraire <ArrowUpRight size={14}/></a></div></div><div className="contact-item"><Phone/><div><small>NOUS APPELER</small><p><a href="tel:+212522672777">+212 5 22 67 27 77</a><br/><a href="tel:+212522672882">+212 5 22 67 28 82</a></p></div></div><div className="contact-item"><Mail/><div><small>NOUS ÉCRIRE</small><p><a href="mailto:nostradis@hotmail.com">nostradis@hotmail.com</a></p></div></div></div></section>
  <footer><div className="footer-top"><Logo/><span>IMPORTER. FABRIQUER. DISTRIBUER.</span><a href="#accueil">RETOUR EN HAUT ↑</a></div><div className="footer-bottom"><span>© {new Date().getFullYear()} NOSTRADIS. TOUS DROITS RÉSERVÉS.</span><span>CASABLANCA · MAROC</span><span>CONÇU AVEC ATTENTION.</span></div></footer>
 </main>
}