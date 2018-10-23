import {COMMA, ENTER} from '@angular/cdk/keycodes';

'use strict';

export const sep='/';
export const version: string="0.1";

export const userProfilAdmin = 'ADMIN';
export const userProfilUser = 'USER';
export const userProfilRead = 'READONLY';

export const serverURL = 'http://mylabo.home:8080';
export const requestRefreshTimer = 1000 * 60 * 5; //5 minutes

export const activeScreenDebugMessage = false;

export const dangers = [
  {logo:"explosion",titre:"Danger d'explosion",description:"Les produits peuvent exploser au contact d’une flamme, d’une étincelle, d’électricité statique, sous l’effet de la chaleur, d’un choc, de frottements… Ce sont par exemple certaines matières explosibles, auto-réactives ou certains peroxydes organiques."},
  {logo:"inflammable",titre:"Danger d'inflammabilité",description:"Les produits peuvent s’enflammer au contact d’une flamme, d’une étincelle, d’électricité statique… Mais aussi sous l’effet de la chaleur, de frottements, au contact de l’air (= composés pyrophoriques) ou encore au contact de l’eau s’ils dégagent des gaz. (voir également Classification des produits inflammables système pré-existant et CLP)"},
  {logo:"comburant",titre:"Danger produits comburant",description:"Les produits comburants (oxydants) qui peuvent provoquer ou aggraver un incendie, ou même provoquer une explosion en présence de produits inflammables."},
  {logo:"pression",titre:"Gaz sous pression",description:"Ils peuvent exploser sous l’effet de la chaleur. Il s’agit de gaz comprimés, de gaz liquéfiés et de gaz dissous. Les gaz liquéfiés réfrigérés peuvent, quant à eux, être responsables de brûlures ou de blessures liées au froid appelées brûlures cryogéniques."},
  {logo:"corrosif",titre:"Danger de corrosion",description:"Les produits corrosifs provoquent la destruction « non spécifique des tissus » (peau, muqueuses et yeux et voie digestive) par contact ou projection."},
  {logo:"toxique",titre:"Danger de toxicité aiguë",description:"Les produits portant ce pictogramme empoisonnent rapidement, même à faible dose et peuvent provoquer des effets très variés sur l’organisme : nausées, vomissements, maux de tête, perte de connaissance ou d’autres troubles plus importants entraînant la mort. Toxicité par voie orale, cutanée ou par inhalation."},
  {logo:"CMR",titre:"CMR",description:"Utilisé pour signaler des produits cancérogènes, mutagènes, reprotoxiques (CMR) et tous produits pouvant modifier le fonctionnement de certains organes comme le foie, le système nerveux, etc… Selon les produits, ces effets toxiques apparaissent si l’on a été exposé une seule fois ou bien à plusieurs reprises. D’autres produits peuvent également entraîner des effets graves sur les poumons pouvant être mortels s’ils pénètrent dans les voies respiratoires. Il regroupe également les produits qui provoquent des allergies respiratoires comme l’asthme."},
  {logo:"nocif",titre:"Nocif / irritant",description:"Ce pictogramme signale lui aussi des dangers sur la santé. Les produits chimiques peuvent provoquer l’un ou plusieurs des effets suivants : empoisonnement à forte dose, irritation des yeux, de la gorge, du nez ou de la peau. Ils peuvent provoquer des allergies cutanées (type eczémas) et provoquer des états de somnolence ou de vertige."},
  {logo:"pollution",titre:"Danger pour l'environnement",description:"Notamment pour les organismes du milieu aquatique (poissons, crustacés, algues…) ou pour la couche d’ozone. Ce pictogramme concerne également l’Air, l’Eau et le Sol."}
];
export const separatorKeysCodes: number[] = [ENTER, COMMA];

