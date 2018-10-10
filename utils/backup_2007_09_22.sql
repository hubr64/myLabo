-- Serveur: localhost
-- Généré le : Saturday 22 September at 15:16
-- Base de données: `gestlabo_db`
--

-- --------------------------------------------------------

-- 
-- Structure de la table `categorie`
-- 

DROP TABLE IF EXISTS `categorie`;
CREATE TABLE `categorie` (
  `id` mediumint(8) unsigned NOT NULL auto_increment,
  `nom` varchar(250) collate latin1_general_ci NOT NULL default '',
  PRIMARY KEY  (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=8 DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

-- 
-- Contenu de la table `categorie`
-- 

INSERT INTO `categorie` (`id`, `nom`) VALUES ('1', 'Physique');
INSERT INTO `categorie` (`id`, `nom`) VALUES ('2', 'Instrumentation');
INSERT INTO `categorie` (`id`, `nom`) VALUES ('3', 'Chimie');
INSERT INTO `categorie` (`id`, `nom`) VALUES ('4', 'Laboratoire');
INSERT INTO `categorie` (`id`, `nom`) VALUES ('5', 'Multimédia');
INSERT INTO `categorie` (`id`, `nom`) VALUES ('7', 'Ex. A.O.');


-- --------------------------------------------------------

-- 
-- Structure de la table `domaine`
-- 

DROP TABLE IF EXISTS `domaine`;
CREATE TABLE `domaine` (
  `id` mediumint(8) unsigned NOT NULL auto_increment,
  `categorie_id` mediumint(8) unsigned NOT NULL default '0',
  `nom` varchar(250) collate latin1_general_ci NOT NULL default '',
  PRIMARY KEY  (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=43 DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

-- 
-- Contenu de la table `domaine`
-- 

INSERT INTO `domaine` (`id`, `categorie_id`, `nom`) VALUES ('2', '1', 'Electronique & Electrotechnique');
INSERT INTO `domaine` (`id`, `categorie_id`, `nom`) VALUES ('3', '2', 'Connectique diverse');
INSERT INTO `domaine` (`id`, `categorie_id`, `nom`) VALUES ('4', '2', 'Alimentations & Générateurs');
INSERT INTO `domaine` (`id`, `categorie_id`, `nom`) VALUES ('5', '3', 'Modèles Moléculaires');
INSERT INTO `domaine` (`id`, `categorie_id`, `nom`) VALUES ('6', '3', 'Chromatographie et Kits d\'analyse');
INSERT INTO `domaine` (`id`, `categorie_id`, `nom`) VALUES ('8', '1', 'Electricité et Electrostatique');
INSERT INTO `domaine` (`id`, `categorie_id`, `nom`) VALUES ('9', '1', 'Optique');
INSERT INTO `domaine` (`id`, `categorie_id`, `nom`) VALUES ('42', '4', 'Produits chimiques');
INSERT INTO `domaine` (`id`, `categorie_id`, `nom`) VALUES ('11', '1', 'Sons et Ultrasons');
INSERT INTO `domaine` (`id`, `categorie_id`, `nom`) VALUES ('12', '1', 'Mécanique');
INSERT INTO `domaine` (`id`, `categorie_id`, `nom`) VALUES ('13', '1', 'Thermodynamique');
INSERT INTO `domaine` (`id`, `categorie_id`, `nom`) VALUES ('14', '1', 'Environnement');
INSERT INTO `domaine` (`id`, `categorie_id`, `nom`) VALUES ('15', '1', 'Nucléaire');
INSERT INTO `domaine` (`id`, `categorie_id`, `nom`) VALUES ('16', '2', 'Connectique standard');
INSERT INTO `domaine` (`id`, `categorie_id`, `nom`) VALUES ('17', '2', 'Outillage métrologie');
INSERT INTO `domaine` (`id`, `categorie_id`, `nom`) VALUES ('18', '2', 'Piles');
INSERT INTO `domaine` (`id`, `categorie_id`, `nom`) VALUES ('19', '2', 'Alimentations');
INSERT INTO `domaine` (`id`, `categorie_id`, `nom`) VALUES ('20', '2', 'Mesures électriques');
INSERT INTO `domaine` (`id`, `categorie_id`, `nom`) VALUES ('21', '2', 'Mesures physiques');
INSERT INTO `domaine` (`id`, `categorie_id`, `nom`) VALUES ('22', '2', 'Thermométrie');
INSERT INTO `domaine` (`id`, `categorie_id`, `nom`) VALUES ('23', '2', 'Mesures chimiques');
INSERT INTO `domaine` (`id`, `categorie_id`, `nom`) VALUES ('24', '2', 'Pesée');
INSERT INTO `domaine` (`id`, `categorie_id`, `nom`) VALUES ('25', '3', 'Electrochimie');
INSERT INTO `domaine` (`id`, `categorie_id`, `nom`) VALUES ('26', '3', 'Pile à combustible');
INSERT INTO `domaine` (`id`, `categorie_id`, `nom`) VALUES ('27', '4', 'Appareillage');
INSERT INTO `domaine` (`id`, `categorie_id`, `nom`) VALUES ('28', '4', 'Verrerie');
INSERT INTO `domaine` (`id`, `categorie_id`, `nom`) VALUES ('29', '4', 'Accessoires');
INSERT INTO `domaine` (`id`, `categorie_id`, `nom`) VALUES ('30', '4', 'Sécurité');
INSERT INTO `domaine` (`id`, `categorie_id`, `nom`) VALUES ('31', '7', 'Interfaces et modules');
INSERT INTO `domaine` (`id`, `categorie_id`, `nom`) VALUES ('32', '7', 'Oscilloscope USB');
INSERT INTO `domaine` (`id`, `categorie_id`, `nom`) VALUES ('33', '7', 'Logiciels');
INSERT INTO `domaine` (`id`, `categorie_id`, `nom`) VALUES ('34', '7', 'Capteurs');
INSERT INTO `domaine` (`id`, `categorie_id`, `nom`) VALUES ('35', '5', 'Mobilier audiovisuel et informatique');
INSERT INTO `domaine` (`id`, `categorie_id`, `nom`) VALUES ('36', '5', 'Ordinateurs');
INSERT INTO `domaine` (`id`, `categorie_id`, `nom`) VALUES ('37', '5', 'Scanners et imprimantes');
INSERT INTO `domaine` (`id`, `categorie_id`, `nom`) VALUES ('38', '5', 'Photo et acquisition vidéo');
INSERT INTO `domaine` (`id`, `categorie_id`, `nom`) VALUES ('39', '5', 'Tableaux interactifs');
INSERT INTO `domaine` (`id`, `categorie_id`, `nom`) VALUES ('40', '5', 'Audiovisuel : TV, magnétoscopes, DVD');
INSERT INTO `domaine` (`id`, `categorie_id`, `nom`) VALUES ('41', '5', 'Projecteurs');


-- --------------------------------------------------------

-- 
-- Structure de la table `marque`
-- 

DROP TABLE IF EXISTS `marque`;
CREATE TABLE `marque` (
  `id` int(10) unsigned NOT NULL auto_increment,
  `nom` varchar(250) collate latin1_general_ci NOT NULL default '',
  `adresse` longtext collate latin1_general_ci,
  `telephone` varchar(250) collate latin1_general_ci default NULL,
  `www` longtext collate latin1_general_ci,
  `mail` varchar(250) collate latin1_general_ci default NULL,
  `commentaire` longtext collate latin1_general_ci,
  PRIMARY KEY  (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

-- 
-- Contenu de la table `marque`
-- 

INSERT INTO `marque` (`id`, `nom`, `adresse`, `telephone`, `www`, `mail`, `commentaire`) VALUES ('1', 'Pierron Education', 'Parc Industriel Sud - Z.I. Gutenberg
2, rue Gutenberg
B.P. 80609
57206 SARREGUEMINES Cedex France', '0.825.37.38.39', 'http://www.pierron.fr', 'education-france@pierron.fr', '');
INSERT INTO `marque` (`id`, `nom`, `adresse`, `telephone`, `www`, `mail`, `commentaire`) VALUES ('2', 'Jeulin', 'Rue Jacques Monod
Z.I. N°1, Nétreville - B.P. 1900
27019 Evreux Cedex
France', '02.32.29.40.40', 'http://www.jeulin.fr', 'contact@jeulin.fr', 'Commandes possibles par Internet, téléphone, fax (au 02.32.29.43.43) ou courrier.');
INSERT INTO `marque` (`id`, `nom`, `adresse`, `telephone`, `www`, `mail`, `commentaire`) VALUES ('3', 'Ranchet Enseignement', '13, Impasse Lavoisier
69680 CHASSIEU
France', '04.78.90.72.72', 'http://www.ranchet.fr/', 'midipyrenees@ranchet.fr', 'Service Commercial 65 :
Christophe TERRIER
Portable : 06 89 72 81 83');
INSERT INTO `marque` (`id`, `nom`, `adresse`, `telephone`, `www`, `mail`, `commentaire`) VALUES ('4', 'Electrome - Approtech Pau', '4 rue Pasteur 
64 000 PAU', '05 59 30 05 23', '', '', '');
INSERT INTO `marque` (`id`, `nom`, `adresse`, `telephone`, `www`, `mail`, `commentaire`) VALUES ('5', 'MICRELEC', '4, place Abel Leblanc 
77120 Coulommiers', '01 64 65 04 50', 'http://www.micrelec.fr/', '', 'Conseiller régional : Mr Jargot');


-- --------------------------------------------------------

-- 
-- Structure de la table `objet`
-- 

DROP TABLE IF EXISTS `objet`;
CREATE TABLE `objet` (
  `id` int(10) unsigned NOT NULL auto_increment,
  `designation` varchar(250) collate latin1_general_ci NOT NULL default '',
  `domaine` mediumint(8) unsigned NOT NULL default '0',
  PRIMARY KEY  (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=137 DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci PACK_KEYS=0;

-- 
-- Contenu de la table `objet`
-- 

INSERT INTO `objet` (`id`, `designation`, `domaine`) VALUES ('8', 'Lentille divergente', '9');
INSERT INTO `objet` (`id`, `designation`, `domaine`) VALUES ('9', 'Agitateur magnétique', '27');
INSERT INTO `objet` (`id`, `designation`, `domaine`) VALUES ('10', 'Turbulent magnétique', '29');
INSERT INTO `objet` (`id`, `designation`, `domaine`) VALUES ('11', 'Barre aimantée pour turbulent', '29');
INSERT INTO `objet` (`id`, `designation`, `domaine`) VALUES ('17', 'Spectroscope à réseaux', '9');
INSERT INTO `objet` (`id`, `designation`, `domaine`) VALUES ('13', 'Lentille convergente', '9');
INSERT INTO `objet` (`id`, `designation`, `domaine`) VALUES ('16', 'Miroir', '9');
INSERT INTO `objet` (`id`, `designation`, `domaine`) VALUES ('15', 'Lame à faces parallèles', '9');
INSERT INTO `objet` (`id`, `designation`, `domaine`) VALUES ('18', 'Supports pour banc d\'optique', '9');
INSERT INTO `objet` (`id`, `designation`, `domaine`) VALUES ('19', 'Porte-lentille pour banc d\'optique', '9');
INSERT INTO `objet` (`id`, `designation`, `domaine`) VALUES ('20', 'Porte-diapositive pour banc d\'optique', '9');
INSERT INTO `objet` (`id`, `designation`, `domaine`) VALUES ('21', 'Porte-écran pour banc d\'optique', '9');
INSERT INTO `objet` (`id`, `designation`, `domaine`) VALUES ('22', 'Porte-prisme pour banc d\'optique', '9');
INSERT INTO `objet` (`id`, `designation`, `domaine`) VALUES ('23', 'Support de sources pour banc d\'optique', '9');
INSERT INTO `objet` (`id`, `designation`, `domaine`) VALUES ('24', 'Diaphragme pour banc d\'optique', '9');
INSERT INTO `objet` (`id`, `designation`, `domaine`) VALUES ('25', 'Ecran', '9');
INSERT INTO `objet` (`id`, `designation`, `domaine`) VALUES ('26', 'Pince pour objet sur banc d\'optique', '9');
INSERT INTO `objet` (`id`, `designation`, `domaine`) VALUES ('27', 'Diapositive - pour banc d\'optique', '9');
INSERT INTO `objet` (`id`, `designation`, `domaine`) VALUES ('28', 'Fentes pour banc d\'optique', '9');
INSERT INTO `objet` (`id`, `designation`, `domaine`) VALUES ('29', 'Sphère pour jeu d\'ombres', '9');
INSERT INTO `objet` (`id`, `designation`, `domaine`) VALUES ('30', 'Ombre rectangulaire -  canson noir', '9');
INSERT INTO `objet` (`id`, `designation`, `domaine`) VALUES ('31', 'Source lumineuse', '9');
INSERT INTO `objet` (`id`, `designation`, `domaine`) VALUES ('32', 'Diapositive', '9');
INSERT INTO `objet` (`id`, `designation`, `domaine`) VALUES ('33', 'Fiches diverses', '9');
INSERT INTO `objet` (`id`, `designation`, `domaine`) VALUES ('35', 'Filtres transparents', '9');
INSERT INTO `objet` (`id`, `designation`, `domaine`) VALUES ('36', 'Chambre noire', '9');
INSERT INTO `objet` (`id`, `designation`, `domaine`) VALUES ('37', 'Kit de propagation rectiligne de la lumière', '9');
INSERT INTO `objet` (`id`, `designation`, `domaine`) VALUES ('38', 'Prisme', '9');
INSERT INTO `objet` (`id`, `designation`, `domaine`) VALUES ('39', 'Réseau', '9');
INSERT INTO `objet` (`id`, `designation`, `domaine`) VALUES ('40', 'Bougie', '9');
INSERT INTO `objet` (`id`, `designation`, `domaine`) VALUES ('41', 'Fil de différents diamètres', '9');
INSERT INTO `objet` (`id`, `designation`, `domaine`) VALUES ('42', 'Vaporisateur de flamme', '9');
INSERT INTO `objet` (`id`, `designation`, `domaine`) VALUES ('43', 'Cuve en verre - polarisation de la lumière', '9');
INSERT INTO `objet` (`id`, `designation`, `domaine`) VALUES ('44', 'Réfraction de la lumière', '9');
INSERT INTO `objet` (`id`, `designation`, `domaine`) VALUES ('45', 'Source à condenseur', '9');
INSERT INTO `objet` (`id`, `designation`, `domaine`) VALUES ('46', 'Platine de cablage', '2');
INSERT INTO `objet` (`id`, `designation`, `domaine`) VALUES ('47', 'Multiplieur sur socle AD 633', '2');
INSERT INTO `objet` (`id`, `designation`, `domaine`) VALUES ('48', 'Amplificateur opérationnel', '2');
INSERT INTO `objet` (`id`, `designation`, `domaine`) VALUES ('49', 'Module Transmission - Réception d\'une information', '11');
INSERT INTO `objet` (`id`, `designation`, `domaine`) VALUES ('50', 'Transistor', '2');
INSERT INTO `objet` (`id`, `designation`, `domaine`) VALUES ('51', 'Adaptateur Baladeur/micro', '2');
INSERT INTO `objet` (`id`, `designation`, `domaine`) VALUES ('52', 'Micro', '11');
INSERT INTO `objet` (`id`, `designation`, `domaine`) VALUES ('53', 'Moteur', '2');
INSERT INTO `objet` (`id`, `designation`, `domaine`) VALUES ('54', 'Moteur-Générateur', '12');
INSERT INTO `objet` (`id`, `designation`, `domaine`) VALUES ('55', 'Stroboscope', '9');
INSERT INTO `objet` (`id`, `designation`, `domaine`) VALUES ('56', 'Vibreur', '12');
INSERT INTO `objet` (`id`, `designation`, `domaine`) VALUES ('57', 'Diapason', '11');
INSERT INTO `objet` (`id`, `designation`, `domaine`) VALUES ('58', 'Diapason', '11');
INSERT INTO `objet` (`id`, `designation`, `domaine`) VALUES ('59', 'Sonomètre à corde', '11');
INSERT INTO `objet` (`id`, `designation`, `domaine`) VALUES ('60', 'Haut-parleur', '11');
INSERT INTO `objet` (`id`, `designation`, `domaine`) VALUES ('61', 'Banc d\'étude des ondes sonores', '11');
INSERT INTO `objet` (`id`, `designation`, `domaine`) VALUES ('62', 'Aimant', '8');
INSERT INTO `objet` (`id`, `designation`, `domaine`) VALUES ('63', 'Alimentation continue symétrique  /-15V', '4');
INSERT INTO `objet` (`id`, `designation`, `domaine`) VALUES ('64', 'Oscilloscope', '20');
INSERT INTO `objet` (`id`, `designation`, `domaine`) VALUES ('65', 'Générateur de tension continue 0 à 30V', '4');
INSERT INTO `objet` (`id`, `designation`, `domaine`) VALUES ('66', 'Alimentation réglable 3 à 15V', '4');
INSERT INTO `objet` (`id`, `designation`, `domaine`) VALUES ('67', 'GBF', '4');
INSERT INTO `objet` (`id`, `designation`, `domaine`) VALUES ('68', 'GBF Amplificateur', '4');
INSERT INTO `objet` (`id`, `designation`, `domaine`) VALUES ('69', 'Multiprise', '16');
INSERT INTO `objet` (`id`, `designation`, `domaine`) VALUES ('70', 'Prise sans terre', '16');
INSERT INTO `objet` (`id`, `designation`, `domaine`) VALUES ('71', 'Banc d\'optique', '9');
INSERT INTO `objet` (`id`, `designation`, `domaine`) VALUES ('72', 'Fiche BNC pour oscilloscope', '16');
INSERT INTO `objet` (`id`, `designation`, `domaine`) VALUES ('81', 'Argent (Ag)', '42');
INSERT INTO `objet` (`id`, `designation`, `domaine`) VALUES ('74', 'Multimètre', '21');
INSERT INTO `objet` (`id`, `designation`, `domaine`) VALUES ('75', 'Coffret d\'électricité Peuzelec', '8');
INSERT INTO `objet` (`id`, `designation`, `domaine`) VALUES ('76', 'Support de lampe', '8');
INSERT INTO `objet` (`id`, `designation`, `domaine`) VALUES ('77', 'Interrupteur', '8');
INSERT INTO `objet` (`id`, `designation`, `domaine`) VALUES ('78', 'Boitier pour pile', '8');
INSERT INTO `objet` (`id`, `designation`, `domaine`) VALUES ('79', 'Résistance', '8');
INSERT INTO `objet` (`id`, `designation`, `domaine`) VALUES ('80', 'Diode', '8');
INSERT INTO `objet` (`id`, `designation`, `domaine`) VALUES ('82', 'Aluminium (Al)', '42');
INSERT INTO `objet` (`id`, `designation`, `domaine`) VALUES ('83', 'Ammonium (NH4)', '42');
INSERT INTO `objet` (`id`, `designation`, `domaine`) VALUES ('84', 'Chlorure (Cl)', '42');
INSERT INTO `objet` (`id`, `designation`, `domaine`) VALUES ('85', 'Ammoniaque (NH3)', '42');
INSERT INTO `objet` (`id`, `designation`, `domaine`) VALUES ('86', 'Brome (Br)', '42');
INSERT INTO `objet` (`id`, `designation`, `domaine`) VALUES ('87', 'Calcium (Ca)', '42');
INSERT INTO `objet` (`id`, `designation`, `domaine`) VALUES ('88', 'Eprouvette graduée', '28');
INSERT INTO `objet` (`id`, `designation`, `domaine`) VALUES ('89', 'Carbone (C)', '42');
INSERT INTO `objet` (`id`, `designation`, `domaine`) VALUES ('90', 'Chrome (Cr)', '42');
INSERT INTO `objet` (`id`, `designation`, `domaine`) VALUES ('91', 'Cobalt (Co)', '42');
INSERT INTO `objet` (`id`, `designation`, `domaine`) VALUES ('92', 'Cuivre (Cu)', '42');
INSERT INTO `objet` (`id`, `designation`, `domaine`) VALUES ('93', 'Etain (Sn)', '42');
INSERT INTO `objet` (`id`, `designation`, `domaine`) VALUES ('94', 'Fer (Fe)', '42');
INSERT INTO `objet` (`id`, `designation`, `domaine`) VALUES ('95', 'Iode (I)', '42');
INSERT INTO `objet` (`id`, `designation`, `domaine`) VALUES ('96', 'Magnésium (Mg)', '42');
INSERT INTO `objet` (`id`, `designation`, `domaine`) VALUES ('97', 'Manganèse (Mn)', '42');
INSERT INTO `objet` (`id`, `designation`, `domaine`) VALUES ('98', 'Mercure (Hg)', '42');
INSERT INTO `objet` (`id`, `designation`, `domaine`) VALUES ('99', 'Phosphore (P)', '42');
INSERT INTO `objet` (`id`, `designation`, `domaine`) VALUES ('100', 'Potassium (K)', '42');
INSERT INTO `objet` (`id`, `designation`, `domaine`) VALUES ('102', 'Nickel (Ni)', '42');
INSERT INTO `objet` (`id`, `designation`, `domaine`) VALUES ('103', 'Nitrate (NO3)', '42');
INSERT INTO `objet` (`id`, `designation`, `domaine`) VALUES ('104', 'Sodium (Na)', '42');
INSERT INTO `objet` (`id`, `designation`, `domaine`) VALUES ('105', 'Zinc (Zn)', '42');
INSERT INTO `objet` (`id`, `designation`, `domaine`) VALUES ('106', 'Plomb (Pb)', '42');
INSERT INTO `objet` (`id`, `designation`, `domaine`) VALUES ('107', 'Strontium (Sr)', '42');
INSERT INTO `objet` (`id`, `designation`, `domaine`) VALUES ('108', 'Antimoine', '42');
INSERT INTO `objet` (`id`, `designation`, `domaine`) VALUES ('109', 'Ampoule de rechange pour source à condenseur', '9');
INSERT INTO `objet` (`id`, `designation`, `domaine`) VALUES ('110', 'Miroir multiforme', '9');
INSERT INTO `objet` (`id`, `designation`, `domaine`) VALUES ('111', 'Boite de résistances', '8');
INSERT INTO `objet` (`id`, `designation`, `domaine`) VALUES ('112', 'Armoire de stockage', '35');
INSERT INTO `objet` (`id`, `designation`, `domaine`) VALUES ('113', 'Bécher', '28');
INSERT INTO `objet` (`id`, `designation`, `domaine`) VALUES ('114', 'Erlenmeyer', '28');
INSERT INTO `objet` (`id`, `designation`, `domaine`) VALUES ('115', 'Ampoule à décanter', '28');
INSERT INTO `objet` (`id`, `designation`, `domaine`) VALUES ('116', 'Agitateur', '28');
INSERT INTO `objet` (`id`, `designation`, `domaine`) VALUES ('117', 'Bouchons', '29');
INSERT INTO `objet` (`id`, `designation`, `domaine`) VALUES ('118', 'Capsule pour compte-goutte', '29');
INSERT INTO `objet` (`id`, `designation`, `domaine`) VALUES ('119', 'Gants', '29');
INSERT INTO `objet` (`id`, `designation`, `domaine`) VALUES ('120', 'Tube à gaz', '29');
INSERT INTO `objet` (`id`, `designation`, `domaine`) VALUES ('121', 'Anneau de support pour ampoule à décanter', '29');
INSERT INTO `objet` (`id`, `designation`, `domaine`) VALUES ('122', 'Glucose', '42');
INSERT INTO `objet` (`id`, `designation`, `domaine`) VALUES ('123', 'Cyclohexane', '42');
INSERT INTO `objet` (`id`, `designation`, `domaine`) VALUES ('124', 'Acide acétique', '42');
INSERT INTO `objet` (`id`, `designation`, `domaine`) VALUES ('125', 'Hydroxyde de sodium', '42');
INSERT INTO `objet` (`id`, `designation`, `domaine`) VALUES ('126', 'Dichlorométhane', '42');
INSERT INTO `objet` (`id`, `designation`, `domaine`) VALUES ('127', 'DVD - C\'est pas Sorcier', '40');
INSERT INTO `objet` (`id`, `designation`, `domaine`) VALUES ('128', 'Films divers', '40');
INSERT INTO `objet` (`id`, `designation`, `domaine`) VALUES ('129', 'Module SONDOR', '34');
INSERT INTO `objet` (`id`, `designation`, `domaine`) VALUES ('130', 'Module photocolor', '34');
INSERT INTO `objet` (`id`, `designation`, `domaine`) VALUES ('131', 'Réglette Magnum', '12');
INSERT INTO `objet` (`id`, `designation`, `domaine`) VALUES ('132', 'Capteur pour étude de chute libre', '34');
INSERT INTO `objet` (`id`, `designation`, `domaine`) VALUES ('133', 'Capteur de Température', '34');
INSERT INTO `objet` (`id`, `designation`, `domaine`) VALUES ('134', 'pH-mètre - millivoltmètre - thermomètre', '23');
INSERT INTO `objet` (`id`, `designation`, `domaine`) VALUES ('135', 'Train à ressort pour étude de la propagation d\'une onde', '12');
INSERT INTO `objet` (`id`, `designation`, `domaine`) VALUES ('136', 'Cellule conductimétrique', '34');


-- --------------------------------------------------------

-- 
-- Structure de la table `objet_asso`
-- 

DROP TABLE IF EXISTS `objet_asso`;
CREATE TABLE `objet_asso` (
  `objet_id` int(10) unsigned NOT NULL default '0',
  `sous_objet_id` varchar(8) collate latin1_general_ci NOT NULL default '0'
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

-- 
-- Contenu de la table `objet_asso`
-- 

INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('8', 'UN000001');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('8', 'UN000002');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('9', 'UN000003');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('9', 'UN000004');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('9', 'UN000005');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('10', 'UN000006');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('11', 'UN000007');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('8', 'UN000008');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('13', 'UN000011');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('13', 'UN000010');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('13', 'UN000012');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('13', 'UN000013');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('13', 'UN000014');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('13', 'UN000015');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('13', 'UN000016');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('13', 'UN000017');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('13', 'UN000018');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('13', 'UN000019');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('13', 'UN000020');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('13', 'UN000021');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('13', 'UN000022');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('13', 'UN000023');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('13', 'UN000024');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('13', 'UN000025');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('8', 'UN000028');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('15', 'UN000027');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('8', 'UN000029');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('8', 'UN000030');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('16', 'UN000031');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('16', 'UN000032');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('16', 'UN000033');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('17', 'UN000034');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('17', 'UN000035');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('17', 'UN000036');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('17', 'UN000037');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('17', 'UN000038');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('17', 'UN000039');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('18', 'UN000040');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('19', 'UN000041');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('20', 'UN000042');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('21', 'UN000043');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('22', 'UN000044');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('23', 'UN000045');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('24', 'UN000046');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('24', 'UN000047');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('24', 'UN000048');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('24', 'UN000049');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('24', 'UN000050');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('25', 'UN000051');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('25', 'UN000052');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('16', 'UN000053');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('26', 'UN000054');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('27', 'UN000055');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('27', 'UN000056');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('28', 'UN000057');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('28', 'UN000058');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('28', 'UN000059');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('29', 'UN000060');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('29', 'UN000061');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('25', 'UN000062');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('25', 'UN000063');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('25', 'UN000066');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('30', 'UN000065');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('31', 'UN000067');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('32', 'UN000068');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('32', 'UN000069');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('32', 'UN000070');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('32', 'UN000071');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('33', 'UN000072');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('33', 'UN000073');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('33', 'UN000074');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('33', 'UN000075');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('33', 'UN000076');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('35', 'UN000081');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('35', 'UN000080');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('35', 'UN000079');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('32', 'UN000078');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('25', 'UN000077');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('31', 'UN000082');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('36', 'UN000083');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('36', 'UN000084');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('36', 'UN000085');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('37', 'UN000086');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('38', 'UN000087');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('38', 'UN000088');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('39', 'UN000089');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('39', 'UN000090');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('39', 'UN000091');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('40', 'UN000092');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('32', 'UN000093');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('41', 'UN000094');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('31', 'UN000095');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('31', 'UN000096');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('42', 'UN000097');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('43', 'UN000098');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('44', 'UN000099');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('44', 'UN000100');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('44', 'UN000101');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('45', 'UN000102');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('46', 'UN000103');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('47', 'UN000104');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('46', 'UN000105');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('48', 'UN000106');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('47', 'UN000107');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('48', 'UN000108');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('48', 'UN000109');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('49', 'UN000110');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('49', 'UN000111');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('49', 'UN000112');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('50', 'UN000113');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('50', 'UN000114');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('51', 'UN000115');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('52', 'UN000116');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('52', 'UN000117');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('53', 'UN000118');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('53', 'UN000119');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('54', 'UN000120');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('55', 'UN000121');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('55', 'UN000122');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('55', 'UN000123');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('56', 'UN000124');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('56', 'UN000125');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('57', 'UN000126');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('58', 'UN000127');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('59', 'UN000128');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('60', 'UN000129');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('60', 'UN000130');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('60', 'UN000131');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('61', 'UN000132');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('62', 'UN000133');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('62', 'UN000134');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('62', 'UN000135');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('63', 'UN000136');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('63', 'UN000137');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('63', 'UN000138');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('63', 'UN000139');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('63', 'UN000140');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('63', 'UN000141');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('63', 'UN000142');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('63', 'UN000143');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('63', 'UN000144');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('63', 'UN000145');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('64', 'UN000146');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('64', 'UN000147');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('64', 'UN000148');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('64', 'UN000149');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('64', 'UN000150');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('64', 'UN000151');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('64', 'UN000152');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('64', 'UN000153');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('64', 'UN000154');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('64', 'UN000155');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('64', 'UN000156');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('65', 'UN000157');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('65', 'UN000158');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('65', 'UN000159');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('65', 'UN000160');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('66', 'UN000161');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('66', 'UN000162');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('66', 'UN000163');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('66', 'UN000164');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('66', 'UN000165');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('66', 'UN000166');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('66', 'UN000167');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('66', 'UN000168');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('66', 'UN000169');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('66', 'UN000170');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('66', 'UN000171');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('67', 'UN000172');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('67', 'UN000173');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('67', 'UN000174');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('67', 'UN000175');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('67', 'UN000176');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('67', 'UN000177');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('67', 'UN000178');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('67', 'UN000179');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('68', 'UN000180');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('68', 'UN000181');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('68', 'UN000182');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('69', 'UN000183');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('70', 'UN000184');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('71', 'UN000185');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('72', 'UN000186');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('86', 'QU000028');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('85', 'QU000027');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('84', 'QU000026');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('84', 'QU000025');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('84', 'QU000024');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('84', 'QU000023');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('84', 'QU000022');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('83', 'QU000021');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('83', 'QU000020');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('83', 'QU000019');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('83', 'QU000018');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('83', 'QU000017');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('83', 'QU000016');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('83', 'QU000015');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('83', 'QU000014');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('83', 'QU000013');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('83', 'QU000012');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('82', 'QU000011');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('82', 'QU000010');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('82', 'QU000009');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('82', 'QU000008');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('82', 'QU000007');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('81', 'QU000006');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('81', 'QU000005');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('81', 'QU000004');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('81', 'QU000003');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('81', 'QU000002');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('81', 'QU000001');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('74', 'UN000215');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('74', 'UN000216');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('74', 'UN000217');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('74', 'UN000218');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('74', 'UN000219');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('74', 'UN000220');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('74', 'UN000221');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('74', 'UN000222');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('74', 'UN000223');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('74', 'UN000224');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('74', 'UN000225');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('74', 'UN000226');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('74', 'UN000227');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('74', 'UN000228');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('74', 'UN000229');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('74', 'UN000230');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('74', 'UN000231');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('74', 'UN000232');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('74', 'UN000233');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('74', 'UN000234');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('74', 'UN000235');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('74', 'UN000236');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('74', 'UN000237');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('74', 'UN000238');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('74', 'UN000239');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('74', 'UN000240');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('74', 'UN000241');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('74', 'UN000242');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('75', 'UN000243');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('76', 'UN000244');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('76', 'UN000245');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('76', 'UN000246');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('76', 'UN000247');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('77', 'UN000248');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('77', 'UN000249');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('77', 'UN000250');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('77', 'UN000251');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('78', 'UN000252');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('79', 'UN000253');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('79', 'UN000254');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('79', 'UN000255');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('80', 'UN000256');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('86', 'QU000029');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('86', 'QU000030');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('87', 'QU000031');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('87', 'QU000032');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('87', 'QU000033');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('87', 'QU000034');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('88', 'QU000035');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('87', 'QU000036');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('87', 'QU000037');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('87', 'QU000038');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('87', 'QU000039');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('87', 'QU000040');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('87', 'QU000041');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('87', 'QU000042');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('87', 'QU000043');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('87', 'QU000044');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('87', 'QU000045');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('87', 'QU000046');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('87', 'QU000047');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('89', 'QU000048');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('89', 'QU000049');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('89', 'QU000050');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('89', 'QU000051');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('89', 'QU000052');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('90', 'QU000053');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('91', 'QU000054');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('91', 'QU000055');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('92', 'QU000056');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('92', 'QU000057');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('92', 'QU000058');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('92', 'QU000059');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('92', 'QU000060');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('92', 'QU000061');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('92', 'QU000062');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('92', 'QU000063');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('92', 'QU000064');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('92', 'QU000065');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('92', 'QU000066');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('92', 'QU000067');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('92', 'QU000068');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('92', 'QU000069');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('92', 'QU000070');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('92', 'QU000071');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('92', 'QU000072');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('92', 'QU000073');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('92', 'QU000074');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('92', 'QU000075');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('93', 'QU000076');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('93', 'QU000077');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('93', 'QU000078');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('94', 'QU000079');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('88', 'QU000084');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('88', 'QU000083');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('88', 'QU000082');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('88', 'QU000081');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('88', 'QU000080');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('88', 'QU000085');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('88', 'QU000086');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('88', 'QU000087');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('94', 'QU000088');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('94', 'QU000089');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('94', 'QU000090');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('94', 'QU000091');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('94', 'QU000092');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('94', 'QU000093');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('94', 'QU000094');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('94', 'QU000095');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('94', 'QU000096');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('94', 'QU000097');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('94', 'QU000098');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('94', 'QU000099');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('94', 'QU000100');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('94', 'QU000101');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('94', 'QU000102');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('94', 'QU000103');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('94', 'QU000104');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('94', 'QU000105');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('94', 'QU000106');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('94', 'QU000107');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('94', 'QU000108');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('94', 'QU000109');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('94', 'QU000110');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('94', 'QU000111');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('94', 'QU000112');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('95', 'QU000113');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('95', 'QU000114');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('95', 'QU000115');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('95', 'QU000116');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('95', 'QU000117');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('95', 'QU000118');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('95', 'QU000119');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('95', 'QU000120');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('95', 'QU000121');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('95', 'QU000122');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('95', 'QU000123');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('96', 'QU000124');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('96', 'QU000125');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('96', 'QU000126');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('96', 'QU000127');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('96', 'QU000128');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('96', 'QU000129');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('96', 'QU000130');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('96', 'QU000131');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('96', 'QU000132');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('97', 'QU000133');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('97', 'QU000134');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('97', 'QU000135');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('97', 'QU000136');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('98', 'QU000137');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('98', 'QU000138');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('98', 'QU000139');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('99', 'QU000140');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('99', 'QU000141');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('99', 'QU000142');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('100', 'QU000143');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('100', 'QU000144');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('100', 'QU000145');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('100', 'QU000146');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('100', 'QU000147');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('100', 'QU000148');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('100', 'QU000149');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('100', 'QU000150');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('100', 'QU000151');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('100', 'QU000152');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('100', 'QU000153');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('100', 'QU000154');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('100', 'QU000155');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('100', 'QU000156');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('100', 'QU000157');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('100', 'QU000158');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('100', 'QU000174');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('100', 'QU000173');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('100', 'QU000172');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('100', 'QU000171');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('100', 'QU000170');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('100', 'QU000169');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('100', 'QU000168');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('100', 'QU000167');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('100', 'QU000166');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('100', 'QU000165');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('100', 'QU000164');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('100', 'QU000163');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('100', 'QU000162');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('100', 'QU000161');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('100', 'QU000160');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('100', 'QU000159');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('100', 'QU000175');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('100', 'QU000176');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('100', 'QU000177');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('100', 'QU000178');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('100', 'QU000179');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('100', 'QU000180');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('100', 'QU000181');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('100', 'QU000182');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('100', 'QU000183');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('100', 'QU000184');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('100', 'QU000185');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('100', 'QU000186');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('102', 'QU000187');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('102', 'QU000188');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('103', 'QU000189');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('103', 'QU000190');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('104', 'QU000191');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('104', 'QU000192');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('104', 'QU000193');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('104', 'QU000194');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('104', 'QU000195');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('104', 'QU000196');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('104', 'QU000197');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('104', 'QU000198');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('104', 'QU000199');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('104', 'QU000200');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('104', 'QU000201');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('104', 'QU000202');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('104', 'QU000203');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('104', 'QU000204');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('104', 'QU000205');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('104', 'QU000206');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('104', 'QU000207');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('104', 'QU000208');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('104', 'QU000209');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('104', 'QU000210');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('104', 'QU000211');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('104', 'QU000212');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('104', 'QU000213');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('104', 'QU000214');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('104', 'QU000215');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('104', 'QU000216');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('104', 'QU000217');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('104', 'QU000218');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('104', 'QU000219');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('104', 'QU000220');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('104', 'QU000221');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('104', 'QU000222');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('104', 'QU000223');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('104', 'QU000224');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('104', 'QU000225');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('104', 'QU000226');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('104', 'QU000227');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('104', 'QU000228');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('104', 'QU000229');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('104', 'QU000230');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('104', 'QU000231');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('104', 'QU000232');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('104', 'QU000233');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('104', 'QU000234');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('104', 'QU000235');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('104', 'QU000236');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('104', 'QU000237');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('104', 'QU000238');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('105', 'QU000239');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('105', 'QU000240');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('105', 'QU000241');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('105', 'QU000242');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('105', 'QU000243');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('105', 'QU000244');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('105', 'QU000245');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('105', 'QU000246');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('105', 'QU000247');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('105', 'QU000248');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('105', 'QU000249');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('105', 'QU000250');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('105', 'QU000251');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('106', 'QU000252');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('106', 'QU000253');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('107', 'QU000254');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('107', 'QU000255');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('108', 'QU000256');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('108', 'QU000257');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('109', 'UN000257');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('110', 'UN000258');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('56', 'UN000259');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('56', 'UN000260');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('74', 'UN000261');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('111', 'UN000262');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('112', 'UN000263');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('113', 'UN000264');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('114', 'UN000265');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('115', 'UN000266');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('116', 'UN000267');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('117', 'UN000268');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('117', 'UN000269');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('118', 'UN000270');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('119', 'UN000271');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('120', 'UN000272');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('121', 'UN000273');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('122', 'QU000258');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('123', 'QU000259');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('124', 'QU000260');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('125', 'QU000261');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('126', 'QU000262');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('127', 'UN000277');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('127', 'UN000275');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('128', 'UN000276');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('127', 'UN000278');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('127', 'UN000279');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('129', 'UN000280');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('130', 'UN000281');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('131', 'UN000282');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('132', 'UN000283');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('133', 'UN000284');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('134', 'UN000285');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('135', 'UN000286');
INSERT INTO `objet_asso` (`objet_id`, `sous_objet_id`) VALUES ('136', 'UN000287');


-- --------------------------------------------------------

-- 
-- Structure de la table `objet_quantite`
-- 

DROP TABLE IF EXISTS `objet_quantite`;
CREATE TABLE `objet_quantite` (
  `id` varchar(8) collate latin1_general_ci NOT NULL default '',
  `designation` varchar(250) collate latin1_general_ci NOT NULL default '',
  `quantite` float NOT NULL default '0',
  `unite` varchar(10) collate latin1_general_ci default NULL,
  `seuil_alerte` float default NULL,
  `placard` int(10) unsigned NOT NULL default '0',
  `etagere` varchar(250) collate latin1_general_ci default NULL,
  `commentaire` longtext collate latin1_general_ci,
  `reference` varchar(250) collate latin1_general_ci default NULL,
  `marque` int(11) default NULL,
  `prix` float default NULL,
  PRIMARY KEY  (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

-- 
-- Contenu de la table `objet_quantite`
-- 

INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000001', 'Nitrate d\'Argent Pur en solution (Ag ,NO3-)', '80', 'mL', '20', '7', '3A', 'M = 189,87 g/mol', '', '2', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000002', 'Nitrate d\'Argent Pur en poudre (AgNO3)', '49', 'g', '10', '7', '3A', 'M = 169,89 g/mol', '', '3', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000003', 'Nitrate d\'Argent Pur en poudre (AgNO3)', '43', 'g', '10', '7', '3A', 'M = 169,89 g/mol', '', '0', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000004', 'Nitrate d\'Argent Pur en solution (Ag ,NO3-)      C= 0,50 mol/L', '240', 'mL', '20', '7', '3A', 'M = 189,87 g/mol
Préparé en Juin 2007', '', '0', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000005', 'Métal Argent - une lame', '5', 'g', '1', '7', '3A', '', '', '0', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000006', 'Fil d\'Argent', '3', 'g', '1', '7', '3A', '', '', '0', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000007', 'Sulfate d\'aluminium (AlSO4) blanc en morceaux', '90', 'g', '30', '7', '3A', '', '', '0', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000008', 'Sulfate d\'aluminium (Al)2(SO4)3    - C non fournie', '2', 'ml', '0', '7', '3A', '', '', '0', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000009', 'Tournure d\'aluminium (Al)', '24', 'g', '10', '7', '3A', '', '', '0', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000010', 'Fil d\'aluminium (Al)', '24', 'g', '10', '7', '3A', '', '', '0', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000011', 'Aluminium en poudre', '339', 'g', '50', '7', '3A', 'Environ 300g dans une boite métallique et 39g dans une boite en Verre Jeulin.', '', '2', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000012', 'Oxalate d\'ammonium pur en poudre - (NH4)2C2O4,H2O', '200', 'g', '50', '7', '3A', 'M = 142,11 g/mol', '105 008', '2', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000013', 'Oxalate d\'ammonium en solution - (NH4)2C2O4,H2O                                  C non fournie', '85', 'mL', '30', '7', '3A', '', '', '0', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000014', 'Sulfate d\'ammonium en solution - (2NH4 ,SO4 2-)Pour pile Leclanché', '320', 'mL', '50', '7', '3A', '', '', '0', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000015', 'Nitrate d\'ammonium en solution saturée -  (NH4 ,NO3-)   C = 40g/L', '415', 'mL', '50', '7', '3A', '', '', '0', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000016', 'Molybdate d\'ammonium en solution 1% -   (NH4)6MoO24,4H2O', '250', 'mL', '50', '7', '3A', '', '', '0', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000017', 'Molybdate d\'ammonium en poudre pur -   (NH4)6MoO24,4H2O', '83', 'g', '50', '7', '3A', '', '107 229', '2', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000018', 'Carbonate d\'ammonium en poudre pur -   (NH4)C', '200', 'g', '50', '7', '3A', '', '', '0', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000019', 'Chlorure d\'ammonium en poudre pur -   (NH4)Cl', '900', 'g', '100', '7', '3A', 'M = 80,04 g/mol', '', '3', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000020', 'Chlorure d\'ammonium en solution -   (NH4 ,Cl-)        C non fournie', '475', 'mL', '100', '7', '3A', 'M = 80,04 g/mol', '', '3', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000021', 'Nitrate d\'ammonium en granule  (NH4)NO3', '180', 'mL', '50', '7', '3A', 'M = 80,04 g/mol', '', '1', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000022', 'Chlorure de Baryum cristallisé pur    BaCl2,2H20', '240', 'g', '50', '7', '3A', 'M = 244,31 g/mol', '', '0', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000023', 'Chlorure de Baryum à 10%    BaCl2,2H20', '900', 'mL', '100', '7', '3A', 'M = 244,31 g/mol', '105 007', '2', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000024', 'Chlorure de Baryum en cristaux    BaCl2,2H20', '15', 'g', '10', '7', '3A', 'M = 244,31 g/mol', '', '0', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000025', 'Chlorure de Baryum en solution       t=15g/100 mL d\'eau', '250', 'mL', '100', '7', '3A', 'M = 244,31 g/mol', '', '0', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000026', 'Chlorure de Baryum en solution       C=0,1 M', '1000', 'mL', '100', '7', '3A', 'M = 244,31 g/mol', '', '0', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000027', 'Ammoniaque aqueux NH3     C=0,01 M', '5', 'mL', '2', '7', '3A', '', '', '0', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000028', 'Bromure de sodium pur à 99%      NaBr', '400', 'g', '100', '7', '3A', 'M=102,9 g/mol', '107 395', '2', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000029', 'Eau de brome saturée   Br2', '450', 'mL', '100', '7', '3A', 'M=102,9 g/mol', '171 072 1610', '3', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000030', 'Eau de brome  Br2', '30', 'mL', '10', '7', '3A', 'M=102,9 g/mol', '', '0', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000031', 'Carbure de calcium   CaC', '2000', 'g', '150', '7', '3A', 'M=100,09 g/mol', '', '0', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000032', 'Hydroxyde de calcium ou Chaux éteinte   Ca(OH)2', '900', 'g', '150', '7', '3A', 'M=74 g/mol', '01 272 980', '3', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000033', 'Chlorure de calcium CaCl2 pur anhydre', '145', 'g', '50', '7', '3A', 'M=74 g/mol', '107 022', '2', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000034', 'Phosphate de calcium   Ca3(PO4)2', '125', 'g', '50', '7', '3A', 'M=74 g/mol', '', '1', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000035', 'Eprouvette graduée 1L', '1', ' -', '1', '7', '1', '', '', '0', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000036', 'Carbonate de calcium   CaCO3', '1000', 'g', '100', '7', '3A', '', '', '1', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000037', 'Chlorure de calcium anhydre en granules', '100', 'g', '50', '7', '3A', '', '', '1', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000038', 'Marbre blanc concassé', '1', '', '0', '7', '3A', '', '', '1', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000039', 'Métal Calcium     Ca', '142', 'g', '50', '7', '3A', '', '', '2', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000040', 'Chaux sodée granulé', '500', 'g', '100', '7', '3A', '', '', '0', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000041', 'Galène', '1', '', '0', '7', '3A', '', '', '0', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000042', 'Calcium fondu en râpures', '25', 'g', '10', '7', '3A', 'M = 40,08 g/mol', '01 266 050', '3', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000043', 'Fluorure de calcium  CaF2', '1', 'g', '0', '7', '3A', 'M = 40,08 g/mol', '', '0', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000044', 'Chlorure de calcium CaCl2     C=3g/100mL', '450', 'mL', '100', '7', '3A', '', '107 022', '2', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000045', 'Hydroxyde de calcium Ca(OH)2           C = 0,01 mol/L', '650', 'mL', '100', '7', '3A', '', '', '0', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000046', 'Phosphate de calcium   Ca3(PO4)2     C non fournie', '50', 'mL', '25', '7', '3A', '', '', '0', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000047', 'Morceaux de craie', '0', '', '0', '7', '3A', '', '', '0', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000048', 'Morceaux de fusain  C', '30', 'morceau', '15', '7', '3B', '', '', '0', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000049', 'Charbon végétal actif', '40', 'g', '15', '7', '3B', '', '', '0', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000050', 'Charbon végétal poudre', '100', 'g', '30', '7', '3B', 'M = 12,01 g/mol', '103 015', '2', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000051', 'Oxyde de cuivre   carbone   CuO   C', '35', 'g', '10', '7', '3B', '', '', '0', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000052', 'Noir de carbone', '30', 'g', '10', '7', '3B', '', '', '0', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000053', 'Oxyde de chrome VI pur   CrO3', '320', 'g', '100', '7', '3B', 'M = 99,99 g/mol', '104 016', '2', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000054', 'Chlorure de cobalt  (CoCl2)  en cristaux', '250', 'g', '100', '7', '3B', '', '', '0', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000055', 'Chlorure de cobalt  (CoCl2)  en solution', '15', 'mL', '100', '7', '3B', '', '', '0', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000056', 'Sulfate de cuivre anhydre en poudre   CuSO4', '200', 'g', '50', '7', '3B', 'M = 159,60 g/mol', '01 317 500', '3', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000057', 'Sulfate de cuivre en poudre   CuSO4,5H20', '893', 'g', '150', '7', '3B', 'M = 249,68 g/mol', '01 319 980', '3', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000058', 'Sulfate de cuivre en solution   (Cu2 ,SO42-)          C = 0,01 mol/L', '250', 'mL', '50', '7', '3B', '', '', '0', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000059', 'Sulfate de cuivre en solution   (Cu2 ,SO42-)          C = 0,2 mol/L', '250', 'mL', '50', '7', '3B', '', '', '0', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000060', 'Sulfate de cuivre en solution   (Cu2 ,SO42-)          C = 0,1 mol/L', '425', 'mL', '50', '7', '3B', '', '', '0', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000061', 'Sulfate de cuivre en solution   (Cu2 ,SO42-)          C = 0,5 mol/L', '130', 'mL', '50', '7', '3B', '', '', '0', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000062', 'Sulfate de cuivre en solution   (Cu2 ,SO42-)          C = 1 mol/L', '85', 'mL', '50', '7', '3B', '', '', '0', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000063', 'Sulfate de cuivre en solution   (Cu2 ,SO42-)          C = 0,0001 mol/L', '1000', 'mL', '50', '7', '3B', '', '', '0', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000064', 'Nitrate de cuivre II  Cu(NO3)2', '15', 'g', '10', '7', '3B', '', '', '0', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000065', 'Oxyde de cuivre II  noir pur en poudre  à 99%     CuO', '260', 'g', '50', '7', '3B', 'M = 79,55 g/mol', '01 316 250', '3', '8.95');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000066', 'Chlorure de cuivre  CuCl', '250', 'g', '50', '7', '3B', 'M = 98,99 g/mol', '', '0', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000067', 'Nitrate de cuivre II  pur trihydraté   Cu(NO3)2,3(H20)', '100', 'g', '50', '7', '3B', 'M = 241,60 g/mol', '104 117', '2', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000068', 'Nitrate de cuivre   Cu(NO3)2       C = 0,50 mol/L', '460', 'mL', '50', '7', '3B', 'Fabriqué en Juin 2007', '', '0', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000069', 'Oxyde de cuivre rouge  Cu2O', '500', 'g', '50', '7', '3B', '', '', '0', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000070', 'Chlorure de cuivre dihydraté  CuCl2,2H2O', '30', 'g', '10', '7', '3B', 'M = 170,48 g/mol', '', '0', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000071', 'Bromure de cuivre  CuBr2', '100', 'g', '50', '7', '3B', '', '', '0', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000072', 'Bromure de cuivre  CuBr2   C = 0,1 mol/L', '255', 'mL', '100', '7', '3B', '', '', '0', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000073', 'Cuivre synthétisé à partir de CuO   C', '20', 'g', '0', '7', '3B', '', '', '0', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000074', 'Tournure de cuivre pur   Cu', '70', 'g', '20', '7', '3B', 'M = 63,4 g/mol', '', '0', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000075', 'Tournure de cuivre fine  Cu', '250', 'g', '100', '7', '3B', 'M = 63,4 g/mol', '', '0', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000076', 'Chlorure d\'étain poudre     SnCl2', '230', 'g', '100', '7', '3B', '', '', '0', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000077', 'Chlorure d\'étain II dihydraté     SnCl2,2H2O', '450', 'g', '50', '7', '3B', 'M = 225,63 g/mol', '107 172', '2', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000078', 'Chlorure d\'étain     SnCl2     C = 6 g/L', '30', 'g', '10', '7', '3B', '', '', '0', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000079', 'Chlorure de Fer III pur à 98% en morceaux   FeCl3,6H2O', '140', 'g', '50', '7', '3B', 'M = 270,30 g/mol', '01417 250', '3', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000084', 'Eprouvette graduée 50 mL', '11', ' -', '5', '4', '3', '', '', '0', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000083', 'Eprouvette graduée 60 mL', '11', ' -', '5', '4', '3', '', '', '0', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000082', 'Eprouvette graduée 100 mL', '11', ' -', '5', '4', '3', '', '', '0', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000081', 'Eprouvette graduée 250 mL', '11', ' -', '5', '4', '3', '', '', '0', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000080', 'Eprouvette graduée 500 mL', '2', ' -', '1', '4', '3', '', '', '0', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000085', 'Eprouvette graduée 25 mL', '11', ' -', '5', '4', '3', '', '', '0', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000086', 'Eprouvette graduée 10 mL', '11', ' -', '5', '4', '3', '', '', '0', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000087', 'Eprouvette graduée 5 mL', '11', ' -', '5', '4', '3', '', '', '0', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000088', 'Chlorure de Fer III pur en poudre   FeCl3,6H2O', '70', 'g', '30', '7', '3B', 'M = 270,30 g/mol', '01417 250', '3', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000089', 'Chlorure de Fer III pur en poudre   FeCl3,6H2O', '100', 'g', '30', '7', '3B', 'M = 270,30 g/mol', '107174', '2', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000090', 'Chlorure de Fer III en solution  (Fe3 ,3Cl-)       C=0,5 mol/L', '200', 'mL', '50', '7', '3B', '', '', '0', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000091', 'Chlorure de Fer III en solution  (Fe3 ,3Cl-)       C=0,2 mol/L', '100', 'mL', '25', '7', '3B', '', '', '0', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000092', 'Chlorure de Fer III en solution  (Fe3 ,3Cl-)       C=0,1 mol/L', '400', 'mL', '100', '7', '3B', '', '', '0', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000093', 'Chlorure de Fer III en solution  (Fe3 ,3Cl-)       C=0,01 mol/L', '100', 'mL', '30', '7', '3B', '', '', '0', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000094', 'Chlorure de Fer III en solution  (Fe3 ,3Cl-)       C=0,001 mol/L', '25', 'mL', '10', '7', '3B', '', '', '0', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000095', 'Chlorure de Fer III en solution  (Fe3 ,3Cl-)       C=0,001 mol/L', '25', 'mL', '10', '7', '3B', '', '', '0', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000096', 'Chlorure de Fer II en poudre  FeCl2', '50', 'g', '10', '7', '3B', 'M = 198,81 g/mol', '01 416 100', '3', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000097', 'Chlorure de Fer II en solution  (Fe2 , 2Cl-)       C = 0,1 mol/L', '400', 'mL', '100', '7', '3B', '', '', '0', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000098', 'Chlorure de Fer II en solution  (Fe2 , 2Cl-)       C = 0,1 mol/L', '400', 'mL', '100', '7', '3B', '', '', '0', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000099', 'Sulfate de fer en poudre FeSO4', '1000', 'g', '100', '7', '3B', '', '', '0', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000100', 'Sulfate de fer heptahydraté en poudre  FeSO4,7H2O', '600', 'g', '100', '7', '3B', '', '', '0', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000101', 'Alun ferrique ammoniacal dodécahydraté   NH4Fe(SO4)2,12H2O', '200', 'g', '50', '7', '3B', 'M = 482,19 g/mol', '', '0', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000102', 'Sulfate d\'ammonium de fer II hexahydraté  Fe( NH4)2(SO4)2,6H2O', '350', 'g', '25', '7', '3B', 'M = 392,4 g/mol', '', '0', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000103', 'Sulfate d\'ammonium de fer II hexahydraté  Fe( NH4)2(SO4)2,6H2O', '500', 'g', '25', '7', '3B', 'M = 392,4 g/mol', '', '0', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000104', 'Sulfate d\'ammonium de fer II hexahydraté  Fe( NH4)2(SO4)2,6H2O', '200', 'g', '25', '7', '3B', 'M = 392,4 g/mol', '', '0', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000105', 'Sulfate de fer en solution (Fe2  , SO42-)    C=0,1 mol/L', '800', 'mL', '100', '7', '3B', '', '', '0', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000106', 'Sulfate de fer en solution (Fe2  , SO42-)    C=0,2 mol/L', '200', 'mL', '100', '7', '3B', '', '', '0', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000107', 'Magnétite de fer à 64 %  Fe304', '70', 'g', '30', '7', '3B', '', '', '0', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000108', 'Pyrite de fer Fe', '70', 'g', '30', '7', '3B', '', '', '0', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000109', 'Limaille de fer pur Fe', '800', 'g', '100', '7', '3B', 'M = 55,85 g/mol', '', '0', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000110', 'Clou en fer Fe', '100', 'g', '10', '7', '3B', '', '', '0', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000111', 'Oxyde de Fer  Fe203 anhydre pur', '200', 'g', '50', '7', '3B', 'M = 150,69 g/mol', '', '3', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000112', 'Oxyde de Fer  Fe203   Al', '40', 'g', '20', '7', '3B', '', '', '0', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000113', 'Iode bisublimé pur  I2', '50', 'g', '20', '7', '3C', 'M = 253,81 g/mol', '', '0', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000114', 'Iode bisublimé en granulé  I2', '40', 'g', '20', '7', '3C', 'M = 253,81 g/mol', '', '0', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000115', 'Iode titrée en solution   I2    C = 0,05 mol/L', '500', 'mL', '100', '7', '3C', 'M = 253,81 g/mol', '01 493 500', '3', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000116', 'Iode Iodurée forte  1g  I2 pour 2g de KI dans 100 mL d\'eau', '50', 'mL', '20', '7', '3C', '', '', '0', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000117', 'Diiode en solution I2     C = 0,004 mol/L', '350', 'mL', '20', '7', '3C', '', '', '0', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000118', 'Diiode en solution I2     C = 0,005 mol/L', '15', 'mL', '10', '7', '3C', '', '', '0', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000119', 'Diiode en solution I2     C = 0,0055 mol/L', '200', 'mL', '50', '7', '3C', '', '', '0', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000120', 'Diiode en solution I2     C = 0,05 mol/L', '600', 'mL', '100', '7', '3C', '', '', '0', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000121', 'Diiode en solution I2     C = 0,05 mol/L', '400', 'mL', '100', '7', '3C', '', '', '0', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000122', 'Diiode en solution I2     C  non fourni', '200', 'mL', '50', '7', '3C', '', '', '0', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000123', 'Diiode en solution I2     C  non fourni', '50', 'mL', '10', '7', '3C', '', '', '0', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000124', 'Poudre de magnésium Mg', '300', 'g', '50', '7', '3C', 'M = 24,31 g/mol', '', '0', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000125', 'Ruban de magnésium Mg', '100', 'g', '50', '7', '3C', 'M = 24,31 g/mol', '', '0', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000126', 'Tournure de magnésium Mg', '200', 'g', '50', '7', '3C', 'M = 24,31 g/mol', '', '0', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000127', 'Hydroxyde de magnésium en poudre Mg(OH)2', '500', 'g', '50', '7', '3C', 'M = 58,33 g/mol', '', '0', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000128', 'Sulfate de magnésium en poudre MgSO4', '500', 'g', '50', '7', '3C', 'M = 120,36 g/mol', '', '0', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000129', 'Sulfate de magnésium hydraté en poudre  MgSO4, 7H20', '250', 'g', '50', '7', '3C', 'M = 246,48 g/mol', '107 215', '2', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000130', 'Sulfate de magnésium en solution  (Mg2  , SO42-)      C = 3g pour 100 mL d\'eau', '200', 'mL', '50', '7', '3C', '', '', '0', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000131', 'Chlorure de magnésium hydraté en poudre  MgCl2, 6H20', '500', 'g', '50', '7', '3C', 'M = 203,31 g/mol', '01 557 250', '3', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000132', 'Peroxyde de magnésium', '30', 'g', '10', '7', '3C', 'M = 203,31 g/mol', '01 557 250', '3', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000133', 'Dioxyde de manganèse en poudre    MnO2', '500', 'g', '100', '7', '3C', '', '', '2', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000134', 'Bioxyde de manganèse pur en poudre    MnO2', '400', 'g', '100', '7', '3C', '', '', '0', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000135', 'Sulfate de manganèse II hydraté en poudre    MnSO4, H2O', '400', 'g', '100', '7', '3C', 'M = 169, 01 g/mol', '', '0', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000136', 'Sulfate de manganèse II en solution    (Mn ,SO42-)    C = 0,1 mol/L', '800', 'mL', '100', '7', '3C', '', '', '0', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000137', 'Chlorure mercurique en poudre', '90', 'g', '50', '7', '3C', '', '', '0', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000138', 'Chlorure mercurique en solution', '50', 'mL', '50', '7', '3C', '', '', '0', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000139', 'Oxyde rouge de mercure en poudre', '50', 'g', '10', '7', '3C', '', '', '0', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000140', 'Anhydre phosphorique', '200', 'mL', '50', '7', '3C', '', '', '0', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000141', 'Phosphate de chaux', '40', 'g', '10', '7', '3C', '', '', '0', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000142', 'Phosphate blanc', '10', 'g', '1', '7', '3C', '', '', '0', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000143', 'Thiocyanate de potassium en poudre    KSCN', '600', 'g', '100', '7', '3C', 'M = 97,18 g/mol', '105063', '2', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000144', 'Thiocyanate de potassium en solution   K ,SCN-  C=200 g/L', '90', 'mL', '100', '7', '3C', 'M = 97,18 g/mol
Pour le TP spé \"Vin\"', '', '0', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000145', 'Thiocyanate de potassium en solution   K ,SCN-  C=200 g/L', '15', 'mL', '10', '7', '3C', '', '', '0', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000146', 'Thiocyanate de potassium en solution   K ,SCN-  C=50 g/L', '800', 'mL', '100', '7', '3C', '', '', '0', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000147', 'Thiocyanate de potassium en solution   K ,SCN-  C=0,05 mol/L', '300', 'mL', '100', '7', '3C', '', '', '0', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000148', 'Dichromate de potassium en solution titrée  2K ,Cr2O7  C= 1/60  mol/L', '1000', 'mL', '100', '7', '3C', '', '', '0', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000149', 'Dichromate de potassium en solution  2K ,Cr2O7  C= 0,014  mol/L', '100', 'mL', '50', '7', '3C', '', '', '0', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000150', 'Dichromate de potassium en poudre  K2,Cr2O7', '400', 'g', '100', '7', '3C', '', '', '0', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000151', 'Chromate de potassium en poudre  K2,CrO4', '200', 'g', '100', '7', '3C', 'M = 194,20 g/mol', '107 312', '2', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000152', 'Chromate de potassium en poudre  K2,CrO4', '100', 'g', '50', '7', '3C', 'M = 194,20 g/mol', '', '0', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000153', 'Chromate de potassium en solution  K2,CrO4 ----         C non fournie', '100', 'mL', '50', '7', '3C', 'couleur jaune fluo', '', '0', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000154', 'Peroxodisulfate de potassium en poudre (Potassium persulfate)  K2,S2O8', '200', 'g', '50', '7', '3C', 'M = 270,32 g/mol', '01 702 250', '3', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000155', 'Peroxodisulfate de potassium en solution  2K ,(S2O8)2- ------- C = 0,05 mol/L', '1000', 'mL', '100', '7', '3C', '', '', '0', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000156', 'Peroxodisulfate de potassium en solution  2K ,(S2O8)2- ------- C = 0,04 mol/L', '1000', 'mL', '100', '7', '3C', '', '', '0', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000157', 'Peroxodisulfate de potassium en solution  2K ,(S2O8)2- ------- C = 0,04 mol/L', '200', 'mL', '50', '7', '3C', '', '', '0', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000158', 'Peroxodisulfate de potassium en solution  2K ,(S2O8)2- ------- C = 0,01 mol/L', '200', 'mL', '50', '7', '3C', '', '', '0', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000172', 'Iodure de potassium en solution  K ,I- ------- C = 0,1 mol/L', '0', 'mL', '0', '7', '3C', 'M = 166,01 g/mol
TP spé ', '', '0', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000171', 'Iodure de potassium en solution  K ,I- ------- C = 0,2 mol/L', '250', 'mL', '100', '7', '3C', 'M = 166,01 g/mol', '', '0', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000170', 'Iodure de potassium en solution  K ,I- ------- C = 0,25 mol/L', '100', 'mL', '25', '7', '3C', 'M = 166,01 g/mol', '', '0', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000169', 'Iodure de potassium en solution  K ,I- ------- C = 0,4 mol/L', '0', 'g', '50', '7', '3C', 'M = 166,01 g/mol', '', '0', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000168', 'Iodure de potassium en solution  K ,I- ------- C = 3 g/L', '0', 'g', '50', '7', '3C', 'M = 166,01 g/mol', '', '0', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000167', 'Iodure de potassium en poudre  KI', '200', 'g', '50', '7', '3C', 'M = 166,01 g/mol', '', '0', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000166', 'Permanganate de potassium en solution  K , MNO4-  ------ C non fournie', '100', 'mL', '10', '7', '3C', '', '', '0', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000165', 'Permanganate de potassium en solution  K , MNO4-  ------ C non fournie', '100', 'mL', '10', '7', '3C', '', '', '0', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000164', 'Permanganate de potassium en solution  K , MNO4-  ------ C non fournie', '1000', 'mL', '100', '7', '3C', '', '', '0', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000163', 'Permanganate de potassium en solution  K , MNO4-  ------ C = 0,001 mol/L', '5', 'mL', '0', '7', '3C', '', '', '0', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000162', 'Permanganate de potassium en solution  K , MNO4-  ------ C = 0,004 mol/L', '200', 'mL', '5', '7', '3C', '', '', '0', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000161', 'Permanganate de potassium en solution  K , MNO4-  ------ C = 0,005 mol/L', '15', 'mL', '0', '7', '3C', '', '', '0', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000160', 'Permanganate de potassium en solution  K , MNO4-  ------ C = 0,1 mol/L', '10', 'mL', '5', '7', '3C', '', '', '0', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000159', 'Permanganate de potassium en poudre  KMNO4', '300', 'g', '50', '7', '3C', '', '', '0', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000173', 'Iodure de potassium en solution  K ,I- ------- C = 0,02 mol/L', '400', 'mL', '100', '7', '3C', 'M = 166,01 g/mol
', '', '0', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000174', 'Iodure de potassium en solution  K ,I- ------- C = 0,01 mol/L', '300', 'mL', '100', '7', '3C', 'M = 166,01 g/mol
', '', '0', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000175', 'Iodure de potassium en solution  K ,I- ------- C = 0,002 mol/L', '100', 'mL', '25', '7', '3C', 'M = 166,01 g/mol
', '', '0', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000176', 'Iodure de potassium en solution  K ,I- ------- C = 0,001 mol/L', '150', 'mL', '50', '7', '3C', 'M = 166,01 g/mol
', '', '0', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000177', 'Iodure de potassium en solution  K ,I- ------- C non fourni', '75', 'mL', '0', '7', '3C', 'M = 166,01 g/mol
', '', '0', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000178', 'Bromure de potassium en poudre KBr', '150', 'g', '50', '7', '3C', 'M = 119,01 g/mol
', '', '0', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000179', 'Bromure de potassium en solution  K ,Br -  ------- C = 0,1 mol/L', '150', 'g', '50', '7', '3C', 'Fabriquée en Juin 2007
', '', '0', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000180', 'Bromure de potassium en solution  K ,Br -  ------- C = 0,1 mol/L', '150', 'g', '50', '7', '3C', 'Fabriquée en Juin 2007
', '', '0', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000181', 'Chlorure de potassium en poudre KCl', '100', 'g', '50', '7', '3C', 'M = 119,01 g/mol
', '', '0', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000182', 'Chlorure de potassium en solution  K , Cl- ------- C = 0,2 mol/L', '0', 'mL', '0', '7', '3C', 'M = 119,01 g/mol
', '', '0', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000183', 'Chlorure de potassium en solution  K , Cl- ------- C = 0,1 mol/L', '0', 'mL', '0', '7', '3C', 'M = 119,01 g/mol
', '', '0', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000184', 'Chlorure de potassium en solution  K ,Cl- ---- C = 0,01 mol/L', '300', 'g', '50', '7', '3C', 'M = 422,39 g/mol', '', '0', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000185', 'Hexacyanoferrate de potassium en poudre  K4(Fe(CN)6),3H20', '100', 'g', '25', '7', '3C', 'M = 422,39 g/mol', '', '0', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000186', 'Hexacyanoferrate de potassium en solution--- C non fourni', '400', 'mL', '50', '7', '3C', '', '', '0', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000187', 'Sulfate de nickel en poudre NiSO4', '50', 'g', '20', '7', '3c', '', '', '0', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000188', 'Sulfate de nickel en solution NiSO4', '15', 'mL', '10', '7', '3c', '', '', '0', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000189', 'Nitrate de plomb', '100', 'g', '25', '7', '3C', '', '', '0', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000190', 'Nitrate de potassium', '25', 'g', '10', '7', '3C', '', '', '0', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000191', 'Sodium en poudre à 98,7%  Na', '100', 'g', '25', '7', '3D', 'M = 22,99 g/mol', '101 009', '2', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000192', 'Carbonate de sodium hydraté en poudre  Na2CO3,10H20', '600', 'g', '100', '7', '3D', 'M = 286,14 g/mol', '', '3', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000193', 'Carbonate de sodium hydraté en poudre  Na2CO3,10H20', '600', 'g', '100', '7', '3D', 'M = 286,14 g/mol', '', '0', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000194', 'Carbonate de sodium déshydraté', '100', 'g', '10', '7', '3D', 'l', '', '3', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000195', 'Carbonate de sodium en solution  Na2CO3 --- C non fournie', '900', 'mL', '10', '7', '3D', 'l', '', '3', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000196', 'Bicarbonate de sodium en poudre (hydrogénocarbonate de sodium) NaHCO3', '1400', 'g', '200', '7', '3D', 'M = 84,01 g/mol', '', '3', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000197', 'Bicarbonate de sodium en poudre (hydrogénocarbonate de sodium) NaHCO3', '1200', 'g', '200', '7', '3D', 'M = 84,01 g/mol', '', '2', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000198', 'Bicarbonate de sodium en solution (hydrogénocarbonate de sodium) NaHCO3 --- C = 3000 mg/L', '100', 'mL', '25', '7', '3D', '', '', '0', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000199', 'Bicarbonate de sodium en solution (hydrogénocarbonate de sodium) NaHCO3 --- C = 300 mg/L', '900', 'mL', '100', '7', '3D', '', '', '0', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000200', 'Bicarbonate de sodium en solution (hydrogénocarbonate de sodium) NaHCO3 --- C = 0,1 mol/L', '300', 'mL', '50', '7', '3D', '', '', '0', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000201', 'Bicarbonate de sodium en solution (hydrogénocarbonate de sodium) NaHCO3 --- C non fournie', '300', 'mL', '50', '7', '3D', '', '', '0', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000202', 'Chlorure de sodium en poudre pur à 99%   NaCl', '75', 'g', '25', '7', '3D', 'M = 58,44 g/mol', '', '0', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000203', 'Chlorure de sodium en poudre pur à 99,97 %   NaCl', '450', 'g', '50', '7', '3D', 'M = 58,44 g/mol', '01 808 980', '3', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000204', 'Chlorure de sodium  cristallisé NaCl', '500', 'g', '50', '7', '3D', 'M = 58,44 g/mol', '', '0', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000205', 'Chlorure de sodium en cristaux NaCl', '60', 'g', '10', '7', '3D', 'M = 58,44 g/mol', '', '0', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000206', 'Chlorure de sodium  - Sel Fin', '200', 'g', '50', '7', '3D', 'M = 58,44 g/mol', '', '0', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000207', 'Chlorure de sodium  - Gros sel', '120', 'g', '50', '7', '3D', 'M = 58,44 g/mol', '', '0', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000208', 'Chlorure de sodium en solution  Na ,Cl- ------ C = 50 g/L', '50', 'mL', '10', '7', '3D', 'M = 58,44 g/mol', '', '0', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000209', 'Chlorure de sodium en solution  Na ,Cl- ------ C = 0,1 mol/L', '400', 'mL', '50', '7', '3D', 'M = 58,44 g/mol', '', '0', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000210', 'Chlorure de sodium en solution  Na ,Cl- ------ C non fournie', '300', 'mL', '50', '7', '3D', 'M = 58,44 g/mol', '', '0', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000211', 'Sulfite de sodium Na2SO3', '300', 'g', '50', '7', '3D', 'M = 126,04 g/mol', '01 836 250', '3', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000212', 'Sulfate de sodium anhydre pur   Na2SO4', '900', 'g', '50', '7', '3D', 'M = 142,04 g/mol', '', '3', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000213', 'Sulfate de sodium anhydre pur   Na2SO4', '900', 'g', '50', '7', '3D', 'M = 142,04 g/mol', '', '3', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000214', 'Sulfate de sodium anhydre pur   Na2SO4', '1000', 'g', '100', '7', '3D', 'M = 142,04 g/mol', '', '0', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000215', 'Sulfate de sodium en solution   Na2SO4  ---- C = 1 g/L', '800', 'mL', '100', '7', '3D', 'M = 142,04 g/mol', '', '0', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000216', 'Thiosulfate de sodium anhydre    Na2S2O3', '250', 'g', '50', '7', '3D', 'M = 158,11 g/mol', '', '0', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000217', 'Thiosulfate de sodium en cristaux    Na2S2O3', '100', 'g', '25', '7', '3D', '', '', '0', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000218', 'Thiosulfate de sodium pentahydraté en cristaux    Na2S2O3,5H20', '0', 'g', '25', '7', '3D', '', '', '0', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000219', 'Thiosulfate de sodium en solution   2Na , S2O3 2-  ---- C = 1 mol/L', '700', 'mL', '100', '7', '3D', '', '', '0', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000220', 'Thiosulfate de sodium en solution   2Na , S2O3 2-  ---- C = 0,2 mol/L', '500', 'mL', '100', '7', '3D', '', '', '0', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000221', 'Thiosulfate de sodium en solution   2Na , S2O3 2-  ---- C = 0,1 mol/L', '850', 'mL', '100', '7', '3D', '', '', '0', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000222', 'Thiosulfate de sodium en solution   2Na , S2O3 2-  ---- C = 0,05 mol/L', '300', 'mL', '50', '7', '3D', '', '', '0', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000223', 'Thiosulfate de sodium en solution   2Na , S2O3 2-  ---- C = 0,02 mol/L', '200', 'mL', '50', '7', '3D', '', '', '0', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000224', 'Thiosulfate de sodium en solution   2Na , S2O3 2-  ---- C = 0,01 mol/L', '500', 'mL', '100', '7', '3D', '', '', '0', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000225', 'Nitrate de sodium en solution   Na , NO3  ---- C = 1 mol/L', '150', 'mL', '20', '7', '3D', '', '', '0', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000226', 'Nitrate de sodium en solution   Na , NO3  ---- C non renseigné', '100', 'mL', '20', '7', '3D', '', '', '0', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000227', 'Bromure de sodium en solution   Na , Br  ---- C = 0,4 mol/L', '400', 'mL', '50', '7', '3D', '', '', '0', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000228', 'Acétate de sodium anhydre    NaOOCH3', '150', 'g', '25', '7', '3D', 'M = 82,03 g/mol', '', '0', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000229', 'Acétate de sodium trihydraté    NaOOCH3, 3H20', '900', 'g', '150', '7', '3D', 'M = 136,08 g/mol', '', '3', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000230', 'Acétate de sodium en solution    C = 0,01 mol/L', '1200', 'mL', '150', '7', '3D', 'M = 136,08 g/mol', '', '3', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000231', 'Acétate de sodium en solution    C non renseigné', '100', 'mL', '20', '7', '3D', 'Dans un compte-goutte', '', '3', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000232', 'Nitrite de sodium pur NaNO2', '1000', 'g', '100', '7', '3D', 'M = 82,03 g/mol', '', '0', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000233', 'Nitrate de sodium pur NaNO3', '200', 'g', '50', '7', '3D', '', '', '0', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000234', 'Dihydrogénophosphate de sodium  NaHPO4,12H20', '1000', 'g', '100', '7', '3D', 'M =358,14 g/mol', '', '0', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000235', 'Tartrate de potatssium et de sodium  KNaC4H4O6,4H20', '250', 'g', '50', '7', '3D', 'M =282,23 g/mol', '', '0', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000236', 'Benzoate de sodium  C7H5NaO2', '100', 'g', '50', '7', '3D', 'M =144,10 g/mol', '', '0', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000237', 'Fluorure de sodium pur NaF', '200', 'g', '50', '7', '3D', 'M =144,10 g/mol', '', '0', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000238', 'Chromate de sodium en solution    C = 0,2 mol/L', '25', 'mL', '10', '7', '3D', 'M = 136,08 g/mol', '', '3', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000239', 'Chlorure de zinc en poudre ZnCl2', '200', 'g', '50', '7', '3D', 'M = 136,28 g/mol', '', '0', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000240', 'Chlorure de zinc en solution  ZnCl2 ---- C non renseignée', '100', 'mL', '50', '7', '3D', '', '', '0', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000241', 'Sulfate de zinc hydraté en poudre ZnSO4,H20', '150', 'g', '50', '7', '3D', 'M = 179,45 g/mol', '', '0', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000242', 'Sulfate de zinc en solution ZnSO4,H20  ---  C = 0,2 mol/L', '900', 'mL', '100', '7', '3D', 'M = 179,45 g/mol', '', '0', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000243', 'Sulfate de zinc en solution ZnSO4,H20  ---  C = 0,1 mol/L', '500', 'mL', '50', '7', '3D', 'M = 179,45 g/mol', '', '0', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000244', 'Sulfate de zinc en solution ZnSO4,H20  ---  C = 0,01 mol/L', '900', 'mL', '50', '7', '3D', 'M = 179,45 g/mol', '', '0', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000245', 'Sulfate de zinc en solution ZnSO4,H20  ---  C non renseignée', '90', 'mL', '20', '7', '3D', 'M = 179,45 g/mol', '', '0', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000246', 'Nitrate de zinc en poudre ZnNO3', '25', 'g', '10', '7', '3D', '', '', '0', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000247', 'Nitrate de zinc en solution Zn2 , NO3 2-  ----  C = 0,5 mol/L', '100', 'mL', '10', '7', '3D', '', '', '0', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000248', 'Zinc pur - grenaille', '150', 'g', '25', '7', '3D', 'M = 65,38 g/mol', '107 129', '2', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000249', 'Zinc pur - poudre', '1050', 'g', '250', '7', '3D', 'M = 65,38 g/mol', '', '3', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000250', 'Peroxyde de zinc - poudre', '25', 'g', '25', '7', '3D', 'M = 65,38 g/mol', '', '3', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000251', 'Oxyde de zinc - poudre', '30', 'g', '10', '7', '3D', 'M = 81,37 g/mol', '', '0', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000252', 'Nitrate de plomb en poudre  -- Pb(NO3)2', '400', 'g', '100', '7', '3D', 'M = 331,21 g/mol  ', '', '0', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000253', 'Peroxyde de plomb en poudre', '10', 'g', '5', '7', '3D', 'M = 331,21 g/mol  ', '', '0', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000254', 'Nitrate de strontium', '35', 'g', '5', '7', '3D', '', '', '0', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000255', 'Sulfure de strontium', '10', 'g', '5', '7', '3D', '', '', '0', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000256', 'Chlorure d\'antimoine', '20', 'g', '5', '7', '3D', '', '', '0', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000257', 'Sulfure d\'antimoine', '20', 'g', '5', '7', '3D', '', '', '0', '0');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000258', 'Glucose monohydraté', '500', 'g', '100', '13', '', '', '01 449 500', '3', '7.26');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000259', 'Cyclohexane', '1000', 'mL', '200', '13', '', '', '01 320 980', '3', '12.62');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000260', 'Acide acétique -- C = 0,1 mol/L', '1000', 'mL', '250', '12', '', '', '01 021 931', '3', '13.16');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000261', 'Hydroxyde de sodium -- C = 0,1 mol/L', '1000', 'mL', '250', '11', '', '', '01 821 980', '3', '11.37');
INSERT INTO `objet_quantite` (`id`, `designation`, `quantite`, `unite`, `seuil_alerte`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('QU000262', 'Dichlorométhane', '1000', 'mL', '250', '13', '', '', '01 347 980', '3', '10.7');


-- --------------------------------------------------------

-- 
-- Structure de la table `objet_unite`
-- 

DROP TABLE IF EXISTS `objet_unite`;
CREATE TABLE `objet_unite` (
  `id` varchar(8) collate latin1_general_ci NOT NULL default '',
  `designation` varchar(250) collate latin1_general_ci NOT NULL default '',
  `nombre` mediumint(9) NOT NULL default '0',
  `statut` mediumint(9) unsigned NOT NULL default '0',
  `placard` int(10) unsigned NOT NULL default '0',
  `etagere` varchar(250) collate latin1_general_ci default NULL,
  `commentaire` longtext collate latin1_general_ci,
  `reference` varchar(250) collate latin1_general_ci default NULL,
  `marque` int(11) default NULL,
  `prix` float default NULL,
  PRIMARY KEY  (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

-- 
-- Contenu de la table `objet_unite`
-- 

INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000001', 'Lentilles divergentes biconcaves - Grand diamètre', '5', '6', '3', '5', 'Carton \" Lentilles grands diamètres\".', '', '0', '0');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000002', 'Lentilles divergentes aimantées - Plan concave', '1', '6', '3', '5', 'Petite boite carton blanc \"Défauts de l\'oeil\".', '', '0', '0');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000003', 'Agitateur noir - Magnetic Stirrer HI 190M', '7', '1', '4', '1', '', '', '0', '0');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000004', 'Agitateur blanc', '3', '1', '4', '1', '', '', '2', '0');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000005', 'Agitateur 35011 Heidolph', '1', '1', '4', '1', '', '', '0', '0');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000006', 'Turbulent', '15', '6', '4', '1', '', '', '0', '0');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000007', 'Barre aimantée', '6', '6', '4', '1', '', '', '0', '0');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000008', 'Lentilles divergentes - A poser sur table - Plan concave', '12', '6', '3', '5', 'Boitier plastique  dans carton blanc \"Lentilles cylindriques à poser sur table\"
', '', '0', '0');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000011', 'Lentilles convergentes biconvexes', '8', '6', '3', '5', 'Grand diamètre de focale 25cm
Carton \" Lentilles grands diamètres\"
', '', '0', '0');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000010', 'Lentilles convergentes biconvexes', '4', '6', '3', '5', 'Grand diamètre de focale 15cm
Carton \" Lentilles grands diamètres\"
', '', '0', '0');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000012', 'Lentilles convergentes aimantées', '4', '6', '3', '5', '3 biconvexes   1 plan convexe
Petite boite carton blanc \"Défauts de l\'oeil\"

', '', '0', '0');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000013', 'Lentilles convergentes', '3', '6', '3', '5', '1 biconvexe   2 plan convexes
Petite boite carton blanc \"Défauts de l\'oeil\"

', '', '0', '0');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000014', 'Lentilles convergentes L1 cylindriques - f = 8 cm', '10', '6', '3', '5', 'Boitier plastique vert dans carton blanc \"Lentilles cylindriques à poser sur table\"
Plan convexes - A poser sur les tables           f = 8 cm

', '', '0', '0');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000015', 'Lentilles convergentes L2 cylindriques- f = 12 cm', '12', '6', '3', '5', 'Boitier plastique vert dans carton blanc \"Lentilles cylindriques à poser sur table\"
Plan concaves - A poser sur les tables             f = 12 cm


', '', '0', '0');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000016', 'Lentilles convergentes pour banc d\'optique N°1 - f = 5 cm', '11', '6', '3', '5', 'Petite boite carton blanc \"Lentilles pour banc d\'optique Convergentes\"



', '', '0', '0');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000017', 'Lentilles convergentes pour banc d\'optique N°2 - f = 10 cm', '11', '6', '3', '5', 'Petite boite carton blanc \"Lentilles pour banc d\'optique Convergentes\"



', '', '0', '0');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000018', 'Lentilles convergentes pour banc d\'optique N°3 - f = 12 cm', '7', '6', '3', '5', 'Petite boite carton blanc \"Lentilles pour banc d\'optique Convergentes\"



', '', '0', '0');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000019', 'Lentilles convergentes pour banc d\'optique N°4 - f = 12,5 cm', '12', '6', '3', '5', 'Petite boite carton blanc \"Lentilles pour banc d\'optique Convergentes\"



', '', '0', '0');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000020', 'Lentilles convergentes pour banc d\'optique N°5 - f = 20 cm', '15', '6', '3', '5', 'Petite boite carton blanc \"Lentilles pour banc d\'optique Convergentes\"



', '', '0', '0');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000021', 'Lentilles convergentes pour banc d\'optique N°6 - f = 25 cm', '4', '6', '3', '5', 'Petite boite carton blanc \"Lentilles pour banc d\'optique Convergentes\"



', '', '0', '0');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000022', 'Lentilles convergentes pour banc d\'optique N°7  -  f = 30 cm', '3', '6', '3', '5', 'Petite boite carton blanc \"Lentilles pour banc d\'optique Convergentes\"



', '', '0', '0');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000023', 'Lentilles convergentes pour banc d\'optique N°8 - f = 33 cm', '3', '6', '3', '5', 'Petite boite carton blanc \"Lentilles pour banc d\'optique Convergentes\"



', '', '0', '0');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000024', 'Lentilles convergentes très grands diamètres : Plan convexe, biconvexe, ménisque convergent', '6', '6', '3', '5', 'Boite en carton \" Lentilles très grands diamètres\"




', '', '0', '0');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000025', 'Lentilles convergentes très grands diamètres : Plan convexe, biconvexe, ménisque convergent', '6', '6', '3', '5', 'Boite en carton \" Lentilles très grands diamètres\"




', '', '0', '0');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000028', 'Lentilles divergentes - banc d\'optique N°7 - f = -10 cm', '9', '6', '3', '5', 'Petite boite carton blanc \"Lentilles pour banc d\'optique Divergentes\"
', '', '0', '0');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000027', 'Lame à faces parallèles', '15', '6', '3', '5', 'Carton \"Lames à faces parallèles\"
', '', '0', '0');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000029', 'Lentilles divergentes - banc d\'optique N°8 - f = -20 cm', '2', '6', '3', '5', 'Petite boite carton blanc \"Lentilles pour banc d\'optique Divergentes\"
', '', '0', '0');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000030', 'Lentilles divergentes - banc d\'optique N°9 - f = -50 cm', '2', '6', '3', '5', 'Petite boite carton blanc \"Lentilles pour banc d\'optique Divergentes\"
', '', '0', '0');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000031', 'Miroir convexe - pour banc d\'optique - f = 15 cm', '6', '6', '3', '5', 'Petite boite en carton blanc \" Miroirs pour banc d\'optique\"
', '', '0', '0');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000032', 'Miroir concave - pour banc d\'optique', '4', '6', '3', '5', 'Petite boite en carton blanc \" Miroirs pour banc d\'optique\"
', '', '0', '0');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000033', 'Miroir plan - pour banc d\'optique', '8', '6', '3', '5', 'Petite boite en carton blanc \" Miroirs pour banc d\'optique\"
', '', '0', '0');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000034', 'Spectroscope à 2 spectres', '13', '6', '3', '14', 'Boite en carton \" Spectroscope 1\"
', '', '0', '0');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000035', 'Spectroscope à 2 spectres', '18', '6', '3', '14', 'Boite en bois \" Spectroscope 2\"
', '', '0', '0');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000036', 'Spectroscope à 3 spectres', '5', '6', '3', '14', 'Boite en carton \" Spectroscope 1\"
', '', '0', '0');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000037', 'Spectroscope à échelle graduée avec réseau', '1', '6', '3', '14', 'Boite en carton \" Spectroscope 1\"
', '', '0', '0');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000038', 'Spectroscope à échelle graduée - en carton', '12', '6', '3', '14', 'Boite en carton \" Spectroscope 3\"
', '', '0', '0');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000039', 'Spectroscope sans réseaux', '4', '6', '3', '14', 'Boite en bois\" Spectroscope 2\"
', '', '0', '0');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000040', 'Supports pour banc d\'optique', '42', '6', '3', '6', 'Boite en carton \" Supports pour banc d\'optique\"
', '', '0', '0');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000041', 'Porte-lentille pour banc d\'optique- avec bague', '28', '6', '3', '6', 'Boite en carton blanc \" Portes lentilles pour banc d\'optique\"
', '', '0', '0');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000042', 'Porte-diapositive pour banc d\'optique avec les pinces métalliques', '15', '6', '3', '6', 'Boite en carton \" Portes diapositives et écran \" 
', '', '0', '0');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000043', 'Porte-écran pour banc d\'optique avec pince métallique', '9', '6', '3', '6', 'Boite en carton \" Portes diapositives et écran \" 
', '', '0', '0');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000044', 'Porte-prisme pour banc d\'optique - aimanté', '8', '6', '3', '6', 'Boite en carton \" supports pour sources lumineuses - banc d\'optique \"
', '', '0', '0');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000045', 'Support de sources pour banc d\'optique - aimanté', '8', '6', '3', '6', 'Petite boite en carton blanc \" Supports pour sources aimantés \" 
', '', '0', '0');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000046', 'Diaphragme - diamètre 2 mm', '8', '6', '3', '6', 'Petite boite en carton blanc \"Diaphragmes et diapositives pour banc d\'optique\"
', '', '0', '0');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000047', 'Diaphragme - diamètre 5 mm', '8', '6', '3', '6', 'Petite boite en carton blanc \"Diaphragmes et diapositives pour banc d\'optique\"
', '', '0', '0');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000048', 'Diaphragme - diamètre 10 mm', '9', '6', '3', '6', 'Petite boite en carton blanc \"Diaphragmes et diapositives pour banc d\'optique\"
', '', '0', '0');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000049', 'Diaphragme - diamètre réglable', '1', '6', '3', '6', 'Petite boite en carton blanc \"Diaphragmes et diapositives pour banc d\'optique\"
', '', '0', '0');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000050', 'Diaphragmes divers diamètres', '4', '6', '3', '6', 'Petite boite en carton blanc \"Diaphragmes et diapositives pour banc d\'optique\"
', '', '0', '0');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000051', 'Ecran plastique pour banc d\'optique', '9', '6', '3', '6', 'Boite en carton blanc \"Ecran   Objet F   Pinces pour banc d\'optique \"
', '', '0', '0');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000052', 'Ecran en carton - à tenir à la main', '10', '6', '3', '1', 'Boite en carton \"Propagation rectiligne de la lumière - Ombre - Système Terre/Lune\"


', '', '0', '0');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000053', 'Miroir plan - Petit format', '3', '6', '3', '1', 'Boite en bois \"Synthèse additive des couleurs \" 

', '', '0', '0');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000054', 'Pince pour objet sur banc d\'optique', '6', '6', '3', '6', 'Boite en carton blanc \"Ecran   Objet F   Pinces pour banc d\'optique \"
', '', '0', '0');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000055', 'Lettre F - acheté', '8', '6', '3', '6', 'Boite en carton blanc \"Ecran   Objet F   Pinces pour banc d\'optique \"
', '', '0', '0');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000056', 'Lettre F - fabriqué', '5', '6', '3', '6', 'Boite en carton blanc \"Ecran   Objet F   Pinces pour banc d\'optique \"
', '', '0', '0');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000057', 'Fente simple', '25', '6', '3', '6', 'Boite en carton blanc \" Diaphragmes et fentes\"
', '', '0', '0');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000058', 'Fente double de Young', '8', '6', '3', '6', 'Boite en carton blanc \" Diaphragmes et fentes\"
', '', '0', '0');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000059', 'Lettre en pointillée (1)', '8', '6', '3', '6', 'Boite en carton blanc \" Diaphragmes et fentes\"
', '', '0', '0');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000060', 'Sphère en polystryrène avec leur support métallique - diamètre = 5 cm', '10', '6', '3', '1', 'Boite en carton \"Propagation rectiligne de la lumière - Ombre - Système Terre/Lune\"
', '', '0', '0');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000061', 'Sphère en papier avec leur support plastique - diamètre = 1 cm', '10', '6', '3', '1', 'Boite en carton \"Propagation rectiligne de la lumière - Ombre - Système Terre/Lune\"
', '', '0', '0');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000062', 'Ecran blanc en bois - à tenir à la main', '8', '6', '3', '1', '


', '', '0', '0');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000063', 'Ecran gradué', '1', '6', '3', 'Placard bas 1', '


', '', '2', '0');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000066', 'Ecran noir en papier canson - à poser sur les écrans blancs en bois', '8', '6', '3', '1', '


', '', '0', '0');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000065', 'Papier canson noir pour ombres rectangulaires', '13', '6', '3', '1', 'Boite en carton \"Propagation rectiligne de la lumière - Ombre - Système Terre/Lune\"
', '', '0', '0');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000067', 'Source lumineuse à 3 miroirs', '1', '1', '3', '1', '12 V - 21 W
Boite en bois \"Synthèse additive des couleurs \" 
', '', '1', '0');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000068', 'Kit de 6 diapositives aimantées - pour synthèse des couleurs', '1', '6', '3', '1', 'Boite en bois \"Synthèse additive des couleurs \" 
', '', '0', '0');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000069', 'Diapositives - couleurs primaires', '1', '6', '3', '1', 'Boite en bois \"Synthèse additive des couleurs \" 
', '', '0', '0');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000070', 'Kit de 6 diapositives - synthèse des couleurs', '9', '6', '3', '1', 'Boite en carton blanc \" Kit  Synthèse des couleurs \"
Avec seulement 7 notices', '', '2', '0');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000071', 'Kit de 12 diapositives - Le soleil et son système', '1', '6', '3', '1', 'Boite en carton blanc \" Kit  Synthèse des couleurs \"
Source \"Diapofilm\"', '', '0', '0');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000072', 'Fiche sur l\'oeil', '1', '6', '3', '5', 'Pochette \"Oeil et ses défauts   illusions d\'optique\"
', '', '0', '0');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000073', 'Fiche sur les illusions d\'optique', '1', '6', '3', '5', 'Pochette \"Oeil et ses défauts   illusions d\'optique\"
', '', '0', '0');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000074', 'Transparent pour synthèse additive des couleurs', '1', '6', '3', '1', 'Boite en carton blanc  \" Kit  Synthèse des couleurs\"
Avec rétroprojecteur
', '', '0', '0');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000075', 'Transparent pour synthèse soustractive des couleurs', '1', '6', '3', '1', 'Boite en carton blanc  \" Kit  Synthèse des couleurs\"
Avec rétroprojecteur
', '', '0', '0');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000076', 'Fiche sur les spectres d\'absorption et d\'émission', '12', '6', '3', '14', 'Boite en carton \" Spectroscope 1\"

', '', '0', '0');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000080', 'Filtre rouge', '2', '6', '3', '1', 'Boite en carton blanc \" Kit Synthèse des couleurs \"
', '', '0', '0');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000079', 'Filtre vert', '2', '6', '3', '1', 'Boite en carton blanc \" Kit Synthèse des couleurs \"
', '', '0', '0');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000078', 'Kit de 12 diapositives - Observation du ciel àl\'oeil nu', '1', '6', '3', '1', 'Boite en carton blanc \" Kit  Synthèse des couleurs \"
Source \"Diapofilm\"', '', '0', '0');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000077', 'Ecran avec différentes couleurs en papier canson - Etude de la couleur des objets', '10', '6', '3', '1', 'Boite en carton blanc  \" Kit  Synthèse des couleurs \"


', '', '0', '0');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000081', 'Filtre bleu', '1', '6', '3', '1', 'Boite en carton blanc \" Kit Synthèse des couleurs \"
', '', '0', '0');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000082', 'Source lumineuse', '9', '1', '3', '3', '12 V - 21 W', '', '1', '0');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000083', 'Chambre noire  - diamètre 1 mm', '4', '6', '3', '5', 'Boite en carton \"Chambre noire - bougies\"
', '', '0', '0');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000084', 'Chambre noire  - diamètre 3 mm', '5', '6', '3', '5', 'Boite en carton \"Chambre noire - bougies\"
', '', '0', '0');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000085', 'Chambre noire  avec support lentille', '12', '6', '3', 'haut placard', 'Boite bleu Pierron
', '', '1', '0');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000086', 'Kit de 3 cartons perçés   bâtonnet en bois', '11', '6', '3', '1', 'Boite en carton \"Propagation rectiligne de la lumière - Ombre - Système Terre/Lune\"
', '', '0', '0');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000087', 'Prisme en verre', '13', '6', '3', '7', 'Boitier en plastique dans carton \"Dispersion de la lumière - Diffraction de la lumière\"
', '', '0', '0');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000088', 'Prisme en plastique', '1', '6', '3', '7', 'Boitier en plastique dans carton \"Dispersion de la lumière - Diffraction de la lumière\"
', '', '0', '0');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000089', 'Réseau 1000 traits', '7', '6', '3', '7', 'Boitier en plastique dans carton \"Dispersion de la lumière - Diffraction de la lumière\"
', '', '0', '0');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000090', 'Réseau 530 traits', '7', '6', '3', '7', 'Boitier en plastique dans carton \"Dispersion de la lumière - Diffraction de la lumière\"
', '', '0', '0');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000091', 'Réseau 140 traits', '22', '6', '3', '7', 'Boitier en plastique dans carton \"Dispersion de la lumière - Diffraction de la lumière\"
', '', '0', '0');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000092', 'Bougie de taille diverse', '15', '6', '3', '5', 'Boite en carton \"Chambre noire - bougies\"
', '', '0', '0');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000093', 'Diapositives - avec fil ou cheveu', '10', '6', '3', '7', 'Boitier en plastique dans carton \"Dispersion de la lumière - Diffraction de la lumière\"
', '', '0', '0');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000094', 'Fil de différents diamètres', '6', '6', '3', '7', 'Carton \"Dispersion de la lumière - Diffraction de la lumière\"
', '', '0', '0');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000095', 'Source au néon rectiligne', '1', '1', '3', '14', 'Boite en carton \"Spectroscope 2\"', '', '1', '0');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000096', 'Diode laser', '1', '1', '3', 'Placard Bas 1', '1mW - 650 nm', '', '1', '0');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000097', 'Vaporisateur de flamme', '8', '6', '3', '14', 'Nitrate de strontium-CuSO4 - Chlorure de Baryum - Chlorure de lithium - Hydrogénocarbonate de strontium - Chlorure de calcium - Chlorure de potassium
', '', '0', '0');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000098', 'Cuve en verre - polarisation de la lumière', '5', '6', '3', 'Placard bas 1', 'Carton \" Indice de réfraction de la lumière \" 
', '', '0', '0');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000099', 'Demi-cylindre creux en plastique', '10', '6', '3', 'Placard bas 1', 'Carton \" Indice de réfraction de la lumière \" 
', '', '0', '0');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000100', 'Demi-cylindre plein en verre', '9', '6', '3', 'Placard bas 1', 'Carton \" Indice de réfraction de la lumière \" 
', '', '0', '0');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000101', 'Sphère plane - graduée et plastifiée', '8', '6', '3', 'Placard bas 1', 'Carton \" Indice de réfraction de la lumière \" 
', '', '0', '0');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000102', 'Source à condenseur', '3', '8', '3', '3', '2 sources commandées pour la rentrée 2007', '01158.10.186', '1', '116');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000103', 'Platine de cablage', '15', '6', '5', '2A', 'Dans carton \"Platine de cablage\"', '', '0', '0');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000104', 'Multiplieur sur socle AD 633', '3', '1', '5', '2B', '', '03827.10.140', '1', '119');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000105', 'Boite de circuit connexion Suprator', '2', '6', '5', '2A', 'Dans petit carton blanc \"Circuit de connexion - AOP - Multiplieur AD633\"', '', '0', '0');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000106', 'AOP S16 B', '1', '1', '5', '2A', 'Dans petit carton blanc \"Circuit de connexion - AOP - Multiplieur AD633\"', '', '0', '0');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000107', 'Multiplieur sur socle AD 633', '1', '1', '5', '2A', 'Dans petit carton blanc \"Circuit de connexion - AOP - Multiplieur AD633\"', '03827.10.140', '1', '119');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000108', 'AOP sur support', '5', '1', '5', '2A', 'Dans petit carton blanc \"AOP sur support\"', '', '0', '0');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000109', 'AOP sans support', '3', '1', '5', '2A', 'Dans petit carton blanc \"AOP sur support\"', '', '0', '0');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000110', 'Module Transmission - Réception d\'une information par fibre optique', '2', '6', '5', '2A', 'Carton \"Module Transmission - Réception d\'une information par fibre optique\"', '', '4', '0');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000111', 'Module VFO - Visualisation balayage d\'écran à l\'aide d\'une fibre optique', '2', '6', '5', '2B', 'Carton \"Module Transmission - Réception d\'une information\"', '', '4', '42');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000112', 'Laser modulé', '1', '6', '5', '2B', 'Carton \"Module Transmission - Réception d\'une information\"', '', '4', '0');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000113', 'Transistor', '10', '1', '5', '2B', 'Dans petit carton \"Transistors\"', '', '0', '0');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000114', 'Support de transistor', '9', '1', '5', '2B', 'Dans petit carton \"Transistors\"', '', '0', '0');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000115', 'Adaptateur Baladeur/micro', '9', '6', '5', '2B', 'Dans carton \"Adaptateur Baladeur/micro\"', '', '0', '0');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000116', 'Micro UDM 616 bleu', '2', '1', '5', '2B', 'Dans carton \"Micro\"', '', '0', '0');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000117', 'Micro DM 201', '1', '3', '5', '2B', 'Dans carton \"Micro\"', '', '0', '0');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000118', 'Petit moteur', '10', '1', '5', '2A', 'Dans carton \"Moteur\"', '', '0', '0');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000119', 'Moteur cassé', '4', '3', '5', '2A', 'Dans carton \"Moteur\"', '', '0', '0');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000120', 'Moteur - Générateur', '1', '1', '5', '5B', '', '', '0', '0');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000121', 'Stroboscope à LED', '8', '1', '5', '2C', 'Dans carton \" Petits stroboscopes moteurs\"
Alimentation par GBF 30V maxi', '', '0', '0');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000122', 'Stroboscope tachymère', '1', '1', '5', '2C', 'Dans carton \" Petits stroboscopes moteurs\"
Alimentation par secteur
Fréquence variable : 100 à 5000 éclairs/min', '04614.10.202', '1', '299');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000123', 'Stroboscope tachymère', '1', '1', '5', '2C', 'Dans carton \" Petits stroboscopes moteurs\"
Alimentation par secteur
Fréquence fixe 50 hz', '04614.10.202', '1', '299');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000124', 'Vibreur pour expérience de Melde', '4', '1', '5', '2C', 'Dans carton \"vibreur de Melde\"
Fréquence constante 50hz
Alimentation sous du 6V', '', '0', '0');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000125', 'Vibreur professeur', '1', '1', '5', '2C', 'Dans carton \"vibreur de Melde\"
Fréquence variable
Alimentation sous du 220V', '', '0', '0');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000126', 'Paire de diapasons   marteau', '2', '1', '5', '2C', 'La3 - 440 Hz', '221 001 02', '2', '100');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000127', 'Paire de diapasons   marteau', '2', '1', '5', '2C', 'La3 - 440 Hz', '221 001 02', '2', '100');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000128', 'Sonomètre à corde', '1', '1', '5', '2C', 'Composition du kit : 
support en bois, servant de caisse de résonnance. 
1 fil métallique et un fil en nylon tendus avec des clés.
1 fil métallique.
2 chevalets amovibles.
2 aimants en U à entrefer variable.
=> Carton \"Sonomètre à corde\"
', '04752.10.195', '1', '117');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000129', 'Haut-parleur Boomer', '4', '1', '5', '3B', 'Diamètre 20 cm.
Puissance max 70 W.
Bande passante : 50 à 2500 Hz', '03027.10.196', '1', '30');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000130', 'Haut-parleur pour banc d\'étude des ondes sonores', '1', '1', '5', '3B', 'Dans carton blanc \"hauts-parleurs faible puissance\"
8 ohm - 0,3W
', '03303.10.196', '1', '20');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000131', 'Haut-parleur faible puissance cablé', '1', '1', '5', '3B', 'Dans carton blanc \"hauts-parleurs faible puissance\"
8 ohm - 0,3W
', '03303.10.196', '1', '20');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000132', 'Banc d\'étude des ondes sonores', '1', '7', '5', '3C', 'Comprenant :
Un tube en plastique.
Un microphone coulissant.
Un haut-parleur faible puissance, dans carton \"Haut-parleur faible puissance\"', '04611.10.198', '1', '108');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000133', 'Aimant à entrefer variable', '2', '6', '5', '3C', 'Dans cartont \"Sonomètre de TP\"', '03724.10.130', '1', '31.6');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000134', 'Aimant divers', '5', '6', '5', '3C', 'Dans cartont \"Sonomètre de TP\"', '', '0', '0');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000135', 'Aimant ferrite', '10', '6', '5', '3C', 'Dans cartont \"Sonomètre de TP\"', '', '2', '0');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000136', 'Alimentation symétrique  / - 15V AOP 11 N°1', '1', '1', '5', '1B', 'Dans carton \"Alimentations symétriques  /-15V\"', '', '0', '0');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000137', 'Alimentation symétrique  / - 15V AOP 11 N°2', '1', '1', '5', '1B', 'Dans carton \"Alimentations symétriques  /-15V\"', '', '0', '0');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000138', 'Alimentation symétrique  / - 15V AOP 11 N°3', '1', '1', '5', '1B', 'Dans carton \"Alimentations symétriques  /-15V\"', '', '0', '0');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000139', 'Alimentation symétrique  / - 15V AOP 11 N°4', '1', '1', '5', '1B', 'Dans carton \"Alimentations symétriques  /-15V\"', '', '0', '0');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000140', 'Alimentation symétrique  / - 15V AOP 11 N°5', '1', '2', '5', '1B', 'Dans carton \"Alimentations symétriques  /-15V\"', '', '0', '0');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000141', 'Alimentation symétrique  / - 15V AOP 11 N°6', '1', '1', '5', '1B', 'Dans carton \"Alimentations symétriques  /-15V\"', '', '0', '0');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000142', 'Alimentation symétrique  / - 15V AOP 11 N°7', '1', '1', '5', '1B', 'Dans carton \"Alimentations symétriques  /-15V\"', '', '0', '0');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000143', 'Alimentation symétrique  / - 15V AOP 11 N°8', '1', '1', '5', '1B', 'Dans carton \"Alimentations symétriques  /-15V\"', '', '0', '0');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000144', 'Alimentation symétrique  / - 15V AOP 11 N°9', '1', '1', '5', '1B', 'Dans carton \"Alimentations symétriques  /-15V\"', '', '0', '0');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000145', 'Alimentation symétrique N°10', '1', '1', '5', '1B', 'Dans carton \"Alimentations symétriques  /-15V\"
Pouvant aller jusqu\'à 10 V en réglable', '', '0', '0');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000146', 'Oscilloscope Hameg 20 MHz HM 203-7 N°2', '1', '1', '5', '4', '', '', '0', '0');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000147', 'Oscilloscope Hameg 20 MHz HM 203-7 N°3', '1', '1', '5', '4', '', '', '0', '0');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000148', 'Oscilloscope Hameg 20 MHz HM 203-7 N°5', '1', '1', '5', '4', '', '', '0', '0');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000149', 'Oscilloscope Hameg 35 MHz HM 303-6  N°1', '1', '1', '5', '4', '', '', '0', '0');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000150', 'Oscilloscope Hameg 35 MHz HM 303-6  N°7', '1', '1', '5', '4', '', '', '0', '0');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000151', 'Oscilloscope Hameg 30 MHz HM 303 N°8', '1', '1', '5', '4', '', '', '0', '0');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000152', 'Oscilloscope Hameg 20 MHz HM STORAGE SCOPE N°4', '1', '1', '5', '4', '', '', '0', '0');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000153', 'Oscilloscope Goldstar OS - 702OA 20 MHz N°1', '1', '1', '5', '4', '', '', '0', '0');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000154', 'Oscilloscope Manudax PS 200 N°6', '1', '1', '5', '1A', '', '', '0', '0');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000155', 'Oscilloscope Pintex PS 257 - 25 MHz DMM N°7', '1', '1', '5', '1A', '', '', '0', '0');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000156', 'Oscilloscope X65 Multimétrix', '10', '1', '3', '26 - 27 - 30 -31', '', '', '0', '0');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000157', 'Générateur de tension continue - AL 301 S - N°1', '1', '1', '3', '33', '1,2 V à 30V', '', '4', '0');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000158', 'Générateur de tension continue - AL 301 S - N°2', '1', '1', '3', '33', '1,2 V à 30V', '', '4', '0');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000159', 'Générateur de tension continue - AL 301 S - N°3', '1', '1', '3', '33', '1,2 V à 30V', '', '4', '0');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000160', 'Générateur de tension continue - AL 301 S - N°4', '1', '1', '3', '33', '1,2 V à 30V', '', '4', '0');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000161', 'Alimentation réglable 3 à 15V - N°0', '1', '1', '3', '34', '', '', '0', '0');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000162', 'Alimentation réglable 3 à 15V - N°1', '1', '1', '3', '34', '', '', '0', '0');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000163', 'Alimentation réglable 3 à 15V - N°2', '1', '1', '3', '34', '', '', '0', '0');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000164', 'Alimentation réglable 3 à 15V - N°3', '1', '1', '3', '34', '', '', '0', '0');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000165', 'Alimentation réglable 3 à 15V - N°4', '1', '1', '3', '34', '', '', '0', '0');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000166', 'Alimentation réglable 3 à 15V - N°5', '1', '1', '3', '34', '', '', '0', '0');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000167', 'Alimentation réglable 3 à 15V - N°6', '1', '1', '3', '34', '', '', '0', '0');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000168', 'Alimentation réglable 3 à 15V - N°7', '1', '1', '3', '34', '', '', '0', '0');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000169', 'Alimentation réglable 3 à 15V - N°8', '1', '1', '3', '34', '', '', '0', '0');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000170', 'Alimentation réglable 3 à 15V - N°9', '1', '1', '3', '34', '', '', '0', '0');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000171', 'Alimentation réglable 3 à 15V - N°10', '1', '1', '3', '34', '', '', '0', '0');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000172', 'GBF100 Bleu - N°1', '1', '1', '3', '38', 'Gamme de fréquence : de 0 à 100 kHz
Gamme de tension : de 0 à 20 V', '', '0', '0');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000173', 'GBF100 Bleu - N°2', '1', '1', '3', '38', 'Gamme de fréquence : de 0 à 100 kHz
Gamme de tension : de 0 à 20 V', '', '0', '0');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000174', 'GBF100 Bleu - N°3', '1', '1', '3', '38', 'Gamme de fréquence : de 0 à 100 kHz
Gamme de tension : de 0 à 20 V', '', '0', '0');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000175', 'GBF100 Bleu - N°4', '1', '1', '3', '38', 'Gamme de fréquence : de 0 à 100 kHz
Gamme de tension : de 0 à 20 V', '', '0', '0');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000176', 'GBF100 Blanc - N°5', '1', '1', '3', '39', 'Gamme de fréquence : de 0 à 100 kHz
Gamme de tension : de 0 à 20 V', '', '0', '0');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000177', 'GBF15 Blanc - N°6', '1', '1', '3', '39', 'Gamme de fréquence : de 0 à 100 kHz
Gamme de tension : de 0 à 20 V', '', '0', '0');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000178', 'GBF15 Blanc - N°7', '1', '1', '3', '39', 'Gamme de fréquence : de 0 à 100 kHz
Gamme de tension : de 0 à 20 V', '', '0', '0');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000179', 'GBF Gentrad 368 A', '3', '1', '3', '40', 'Gamme de fréquence : de 0 à 10 kHz
', '', '0', '0');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000180', 'GBF Amplificateur Matelco 6155 N°2', '1', '1', '3', '35', '', '', '0', '0');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000181', 'GBF Amplificateur Matelco N°8', '1', '1', '3', '35', '', '', '0', '0');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000182', 'GBF Amplificateur Jeulin N°7', '1', '1', '3', '35', '', '', '0', '0');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000183', 'Multiprise', '5', '1', '3', '29', '', '', '0', '0');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000184', 'Prise sans terre', '4', '1', '3', '29', '', '', '0', '0');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000185', 'Banc d\'optique', '8', '6', '6', '', '', '03211.10.157', '1', '298');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000186', 'Fiche BNC pour oscilloscope', '22', '1', '3', '22', '', '', '0', '0');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000268', 'Bouchons en caoutchouc N°5', '10', '8', '8', '', '', '075 10.10.413', '1', '3.55');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000267', 'Agitateur en verre', '10', '8', '4', '', '', '02 006 008', '3', '0.46');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000266', 'Ampoule à décanter avec col en téflon  -- 125 mL', '4', '8', '4', '', '', '02 030 004', '3', '49.2');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000265', 'Erlenmeyer col large Pyrex  -- 100 mL', '2', '8', '4', '', '', '02 065 100', '3', '8.16');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000264', 'Bécher forme basse  Pyrex  -- 250 mL', '3', '8', '4', '5', '', '02 060 250', '3', '6');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000263', 'Armoire de stockage multirisque - 4 compartiments', '1', '8', '7', '', 'Réservé pour l\'ordinateur portable et le vidéoprojecteur', '10 001 079', '3', '350');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000262', 'Boite de résistances à 5 décades', '3', '8', '3', '32', '', '05 292 004', '3', '125');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000261', 'Multimètre avec fréquencemètre', '2', '8', '3', '37', '', '019 74.10.294', '1', '69');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000260', 'Corde pour propagation des ondes', '3', '8', '5', '2C', 'Commandés pour la rentrée 2007', '04 749.10.210', '1', '3.9');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000259', 'Vibreur de Melde à fréquence variable', '3', '8', '5', '2C', 'Commandés pour la rentrée 2007', '04 748.10.210', '1', '128');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000258', 'Miroir multiforme aimanté', '3', '8', '3', '6', 'Commandés pour la rentrée 2007', '04 438.10.172', '1', '21.8');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000257', 'Ampoule de rechange pour source à condenseur 6V - 5A', '1', '8', '3', 'Placard 2 - Etagère 1', 'Commandée pour la rentrée 2007', '04 476.10.186', '1', '15.5');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000215', 'Multimètre M92A (orange) -  N°1', '1', '1', '3', '37', '', '', '0', '0');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000216', 'Multimètre M92A (orange)  -  N°2', '1', '1', '3', '37', '', '', '0', '0');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000217', 'Multimètre M92A (orange) -  N°3', '1', '1', '3', '37', '', '', '0', '0');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000218', 'Multimètre M92A (orange) -  N°4', '1', '1', '3', '37', '', '', '0', '0');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000219', 'Multimètre MASTECH M92A (jaune) -  N°1', '1', '1', '3', '37', '', '', '0', '0');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000220', 'Multimètre MASTECH M92A (jaune) -  N°2', '1', '1', '3', '37', '', '', '0', '0');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000221', 'Multimètre MASTECH M92A (jaune) -  N°3', '1', '1', '3', '37', '', '', '0', '0');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000222', 'Multimètre MASTECH M92A (jaune) -  N°4', '1', '1', '3', '37', '', '', '0', '0');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000223', 'Multimètre MASTECH M92A (jaune) -  N°5', '1', '1', '3', '37', '', '', '0', '0');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000224', 'Multimètre MASTECH M92A (jaune) -  N°6', '1', '1', '3', '37', '', '', '0', '0');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000225', 'Multimètre MASTECH M92A (jaune) -  N°7', '1', '1', '3', '37', '', '', '0', '0');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000226', 'Multimètre MASTECH M92A (jaune) -  N°8', '1', '1', '3', '37', '', '', '0', '0');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000227', 'Multimètre MASTECH M92A (jaune) -  N°9', '1', '1', '3', '37', '', '', '0', '0');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000228', 'Multimètre MASTECH M92A (jaune) -  N°10', '1', '1', '3', '37', '', '', '0', '0');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000229', 'Multimètre MASTECH M92A (jaune) -  N°11', '1', '1', '3', '37', '', '', '0', '0');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000230', 'Multimètre Multimetrix  (gris) -  N°1', '1', '1', '3', '37', '', '', '0', '0');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000231', 'Multimètre Multimetrix  (gris) -  N°2', '1', '1', '3', '37', '', '', '0', '0');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000232', 'Multimètre Multimetrix  (gris) -  N°3', '1', '1', '3', '37', '', '', '0', '0');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000233', 'Multimètre Multimetrix  (gris) -  N°4', '1', '1', '3', '37', '', '', '0', '0');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000234', 'Multimètre Multimetrix  (gris) -  N°5', '1', '1', '3', '37', '', '', '0', '0');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000235', 'Multimètre Multimetrix  (gris) -  N°6', '1', '1', '3', '37', '', '', '0', '0');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000236', 'Multimètre Multimetrix  (gris) -  N°7', '1', '1', '3', '37', '', '', '0', '0');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000237', 'Multimètre Multimetrix  (gris) -  N°8', '1', '1', '3', '37', '', '', '0', '0');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000238', 'Multimètre Multimetrix  (gris) -  N°9', '1', '1', '3', '37', '', '', '0', '0');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000239', 'Multimètre Multimetrix  (gris) -  N°10', '1', '1', '3', '37', '', '', '0', '0');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000240', 'Multimètre Multimetrix  (gris) -  N°11', '1', '1', '3', '37', '', '', '0', '0');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000241', 'Multimètre Multimetrix  (gris) -  N°12', '1', '1', '3', '37', '', '', '0', '0');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000242', 'Multimètre DM 206', '6', '1', '3', '37', '', '', '0', '0');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000243', 'Coffret d\'électricité Peuzelec', '12', '6', '3', '19-23-24', '', '302 139 01', '2', '68');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000244', 'Support de lampe - bois blanc', '30', '1', '3', '21', 'Dans carton \"Support de lampe\"', '', '0', '0');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000245', 'Support de lampe - bois vernis', '4', '1', '3', '21', 'Dans carton \"Support de lampe\"', '', '0', '0');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000246', 'Support de lampe en bois - Pierron', '20', '1', '3', '22', 'Dans carton \"Lampes Pierron-Jeulin\"', '', '0', '0');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000247', 'Support de lampe en bois - Jeulin', '6', '1', '3', '22', 'Dans carton \"Lampes Pierron-Jeulin\"', '', '0', '0');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000248', 'Interrupteur poussoir', '12', '1', '3', '18', 'Dans carton \"Interrupteur poussoir\"', '', '0', '0');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000249', 'Interrupteur bascule sur support bois', '13', '1', '3', '18', 'Dans carton \"interrupteurs bascules\"', '', '0', '0');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000250', 'Interrupteur bascule noir', '24', '1', '3', '18', 'Dans carton \"interrupteurs bascules\"', '', '0', '0');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000251', 'Gros Interrupteur bascule ou poussoir', '6', '1', '3', '18', 'Dans carton \"interrupteurs bascules\"', '', '0', '0');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000252', 'Boitier pour pile', '11', '1', '3', '21', 'Dans carton \"Suport de pile\"', '', '0', '0');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000253', 'Résistance sur support bois R1 = 270 ohm', '8', '6', '3', '17', 'Dans boite en bois \"Résistances\"', '', '0', '0');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000254', 'Résistance sur support bois R2 = 100 ohm', '12', '6', '3', '17', 'Dans boite en bois \"Résistances\"', '', '0', '0');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000255', 'Résistance sur support bois R3 = 10 ohm', '8', '6', '3', '17', 'Dans boite en bois \"Résistances\"', '', '0', '0');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000256', 'Diode sur support bois', '13', '6', '3', '17', 'Dans boite en bois \"Diodes\"', '', '0', '0');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000269', 'Bouchons en caoutchouc N°1', '20', '8', '8', '', '', '075 01.10.413', '1', '1.75');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000270', 'Capsule pour compte-goutte  -- 30 mL', '10', '8', '8', '', '', '02 018 048', '3', '0.55');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000271', 'Gants en latex - taille L', '1', '8', '9', '', '', '02 215 004', '3', '7.9');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000272', 'Tube à gaz - diamètre 12x18', '3', '8', '9', '', '', '02 000 003', '3', '18.5');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000273', 'Anneau de support pour ampoule à décanter - diamètre 45', '4', '8', '4', '', '', '02 001 027', '3', '2.58');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000277', 'Les sorciers décrochent la lune', '1', '1', '15', 'Dossier vidéo', 'Astronomie - Optique 
Programme des classes de 5ème et 4ème

Lune - Ombres - Eclipses - Phases de la lune - Mesure de la vitesse de la lumière', '', '0', '0');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000275', 'Centrales nucléaires', '1', '1', '14', '', 'Thème de l\'enseignement scientifique en 1ère L - Les enjeux énergétiques :
Fission - gestion des déchets dans une centrale nucléaire - uranium ', '', '0', '0');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000276', 'Galilée, la naissance d\'une étoile', '1', '1', '14', '', 'Observation des planètes à la lunette
Démarche scientifique
Système héliocentrique contre géocentrique
Théories d\'Aristote, Ptolémée, Copernic
Jusqu\'au procès de Galilée (pas de détails du procès)', '', '0', '0');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000278', 'Plein feux sur le système solaire', '1', '1', '15', 'Dossier vidéo', 'Astronomie - Optique 
Programme des classes de 5ème et 4ème

Mouvement des astres, notre étoile le soleil, comment observer les astres. 
Présentation du fonctionnement du système solaire, les astres qui le composent, les types d\'astres et satellites, la gravité, le soleil à la loupe, les constellations.', '', '0', '0');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000279', 'Accordons nos violons', '1', '1', '14', 'Dossier vidéo', 'Thème de spécialité de Terminale S - Produire des sons :
Propagation d\'une onde - fondamental - harmonique - instruments de musique', '', '0', '0');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000280', 'Module SONDOR pour Orphy GTS - GTS2', '1', '1', '16', '', 'Mesure de la vitesse du son dans l\'air
La méthode de mesure consiste à mesurer le temps mis par le son pour effectuer la distance entre 2 microphones (fournis) à l\'aide de 2 barres en bois (fournies).
', 'M 103 98', '5', '315');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000281', 'Module PHOTOCOLOR pour Orphy GTS et GTS2', '6', '1', '16', '', 'Suivi de cinétiques chimiques

Objectifs :

Mesurer sur une longue durée la capacité d\'absorption d\'une solution à parti de mesures de flux lumineux utilisant un colorimètre à différentes longueurs d\'ondes.

S\'en servir pour suivre l\'évolution au cours du temps de la concentration c d\'un réactant ou d\'un produit de réaction lors d\'une réaction lente.

Représenter graphiquement les résultats précédents sous la forme c = f(t) pour visualiser l\'évolution.

Interpréter graphiquement les notions de vitesse instantanée et moyenne.

Déduire des mesures ou du graphique des valeurs de ces vitesses.

Modéliser éventuellement les variations de c = f(t) suivant les hypothèses faites sur l\'ordre de la réaction.', 'M10G203', '5', '262');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000282', 'Réglette Magnum', '5', '1', '16', '', 'Réglette pour chute libre', 'M10P502', '5', '21');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000283', 'Capteur DB15 fourchette optique', '6', '1', '16', '', ' 	


Capteur se branchant directement sur les prises DB15 des Orphy® GTS2 et GTI


Capteur à connecteur 15 broches.

Grande simplicité : le capteur dispose d\'un système de reconnaissance automatique.

Entièrement compatible avec la gamme Orphy® GTS2 et GTI.

Reconnu automatiquement dans Régressi et WinOrphy.

Les potentiomètres pour régler le capteur sont disponibles dans le logiciel. Ils apparaissent automatiquement dès le branchement du capteur.

Fourchette qui permet de mesurer avec une grande précision le déplacement d\'un mobile.

S\'utilise avec l\'ensemble MAGNUM.', 'M12P205', '5', '98');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000284', 'Capteur Température pour Orphy GTS', '9', '1', '16', '', 'Mesure de la température dans des liquides ou des gaz.

Nécessite l\'emploi de l\'adaptateur DIN GTI 2 (M12G504) pour une utilisation avec les Orphy GTI 2.', 'M10G302', '5', '74');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000285', 'pH-mètre PH206 avec électrode', '8', '1', '16', '', 'sortie analogique
Une grande impédance d\'entrée, une sortie millivoltmètre, une correction automatique de température avec la sonde TP06 ou une correction manuelle au choix, une sortie analogique pour des mesures aisées, précises, facilement lisibles grâce à son afficheur de 18 mm de hauteur.

Afficheur : 18 mm LCD 3 1/2 digits,

Mesures : pH - mV - Température avec sonde optionnelle,

Impédance en pH et mV : 10 puissance 12 Ohms,

Compensation en température : manuelle de 0 à 100°C (bouton sur la face avant) automatique avec la sonde additionnelle,

Temps d\'échantillonnage : 2,5 fois / seconde,

Température d\'utilisation : 0 à 50°C,

Humidité : maximum 90 % d\'humidité relative de 0 à 35°C,

Calibration : externe pH 4 / pH 7,

Alimentation : pile 9 V non fournie,

Consommation : environ 2,7 mA,

Dimensions : 160 x 80 x 35 mm,

Poids : 250 g (pile incluse),

Electrode : toute électrode pourvue d\'un connecteur BNC et d\'une impédance supérieure à 200 MOhms.

Livré avec une électrode PE03.

Pour le cordon adaptateur PH206, voir la Référence M15G500.', 'M15G608', '5', '185');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000286', 'Train à ressorts', '1', '1', '16', '', 'Train à ressorts
Un train qui progresse comme une onde, ou comment le milieu influence la célérité d?une onde ?

Présentation du produit :

Le dispositif expérimental est constitué de dix petits chariots reliés par des ressorts identiques. L?ensemble, posé sur un rail horizontal ou à même la table de travail, est maintenu tendu entre deux tiges sur supports magnétiques.

Les dimensions des wagonnets sont adaptées aux ressorts. La masse des wagonnets peut être modifiée en posant sur ceux-ci des masses additionnelles (elles sont assorties aux wagonnets).

Les ressorts peuvent être remplacés par d?autres de même dimension mais de coefficients de raideur k différents.

Composition et caractéristiques techniques : 10 wagonnets (40 x 50 mm) à 4 roues - 20 masselottes identiques - 11 ressorts de traction type 1 N - 11 ressorts de traction type 2 N - 11 ressorts de traction type 5 N - 2 tiges sur support magnétique.

Livré avec notice.


Extrait du document d?accompagnement : Montrer sur un exemple concret comment les caractéristiques physiques d?un milieu sont susceptibles d?influer sur la célérité d?une onde. On se propose d?étudier l?influence de l?inertie et de l?élasticité d?un milieu à une dimension sur la célérité d?une onde progressive longitudinale et de contribuer par là même à la construction du concept d?onde progressive.', '04776.10.209', '0', '59');
INSERT INTO `objet_unite` (`id`, `designation`, `nombre`, `statut`, `placard`, `etagere`, `commentaire`, `reference`, `marque`, `prix`) VALUES ('UN000287', 'Cellule conductimétrique', '4', '1', '16', '', '', '', '0', '0');


-- --------------------------------------------------------

-- 
-- Structure de la table `placard`
-- 

DROP TABLE IF EXISTS `placard`;
CREATE TABLE `placard` (
  `id` mediumint(8) unsigned NOT NULL auto_increment,
  `salle_id` int(11) NOT NULL default '0',
  `nom` varchar(250) collate latin1_general_ci NOT NULL default '',
  `position` varchar(250) collate latin1_general_ci NOT NULL default '',
  PRIMARY KEY  (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=17 DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

-- 
-- Contenu de la table `placard`
-- 

INSERT INTO `placard` (`id`, `salle_id`, `nom`, `position`) VALUES ('3', '4', 'Grand Placard du Fond', '1,1,1,1');
INSERT INTO `placard` (`id`, `salle_id`, `nom`, `position`) VALUES ('4', '5', 'Placard du fond', '12,1,2,2');
INSERT INTO `placard` (`id`, `salle_id`, `nom`, `position`) VALUES ('5', '6', 'Grand placard', '12,12,12,12');
INSERT INTO `placard` (`id`, `salle_id`, `nom`, `position`) VALUES ('6', '6', 'Libre', '1,1,1,1');
INSERT INTO `placard` (`id`, `salle_id`, `nom`, `position`) VALUES ('7', '7', 'Placard central droite', '1,1,1,1');
INSERT INTO `placard` (`id`, `salle_id`, `nom`, `position`) VALUES ('8', '7', 'Paillasse', '12,12,12,12');
INSERT INTO `placard` (`id`, `salle_id`, `nom`, `position`) VALUES ('9', '7', 'Placard gauche sous paillasse', '12,12,12,12');
INSERT INTO `placard` (`id`, `salle_id`, `nom`, `position`) VALUES ('10', '7', 'Placard droit sous paillasse', '12,12,12,12');
INSERT INTO `placard` (`id`, `salle_id`, `nom`, `position`) VALUES ('11', '7', 'Placard acide-base gauche', '12,12,12,12');
INSERT INTO `placard` (`id`, `salle_id`, `nom`, `position`) VALUES ('12', '7', 'Placard acide-base droit', '12,12,12,12');
INSERT INTO `placard` (`id`, `salle_id`, `nom`, `position`) VALUES ('13', '7', 'Placard central gauche', '1,1,1,1');
INSERT INTO `placard` (`id`, `salle_id`, `nom`, `position`) VALUES ('14', '8', 'Classeur CD-DVD Sophie', '1,1,1,2');
INSERT INTO `placard` (`id`, `salle_id`, `nom`, `position`) VALUES ('15', '8', 'Portable Sophie', '1,1,1,1');
INSERT INTO `placard` (`id`, `salle_id`, `nom`, `position`) VALUES ('16', '9', 'Placard 1', '1,1,1,1');


-- --------------------------------------------------------

-- 
-- Structure de la table `salle`
-- 

DROP TABLE IF EXISTS `salle`;
CREATE TABLE `salle` (
  `id` int(10) unsigned NOT NULL auto_increment,
  `nom` varchar(250) collate latin1_general_ci NOT NULL default '',
  PRIMARY KEY  (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=10 DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

-- 
-- Contenu de la table `salle`
-- 

INSERT INTO `salle` (`id`, `nom`) VALUES ('4', 'Laboratoire de Physique');
INSERT INTO `salle` (`id`, `nom`) VALUES ('5', 'Laboratoire de chimie');
INSERT INTO `salle` (`id`, `nom`) VALUES ('6', 'Salle intermédiaire EXAO/physique');
INSERT INTO `salle` (`id`, `nom`) VALUES ('7', 'Salle de préparation');
INSERT INTO `salle` (`id`, `nom`) VALUES ('8', 'Sophie multimédia');
INSERT INTO `salle` (`id`, `nom`) VALUES ('9', 'Salle EXAO');


-- --------------------------------------------------------

-- 
-- Structure de la table `statut`
-- 

DROP TABLE IF EXISTS `statut`;
CREATE TABLE `statut` (
  `id` mediumint(8) unsigned NOT NULL auto_increment,
  `nom` varchar(250) collate latin1_general_ci NOT NULL default '',
  `alerte` smallint(5) unsigned NOT NULL default '0',
  PRIMARY KEY  (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=9 DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

-- 
-- Contenu de la table `statut`
-- 

INSERT INTO `statut` (`id`, `nom`, `alerte`) VALUES ('1', 'En fonctionnement', '0');
INSERT INTO `statut` (`id`, `nom`, `alerte`) VALUES ('2', 'Cassé', '1');
INSERT INTO `statut` (`id`, `nom`, `alerte`) VALUES ('3', 'En réparation', '1');
INSERT INTO `statut` (`id`, `nom`, `alerte`) VALUES ('4', 'Plus utilisé', '0');
INSERT INTO `statut` (`id`, `nom`, `alerte`) VALUES ('5', 'Perdu', '1');
INSERT INTO `statut` (`id`, `nom`, `alerte`) VALUES ('6', 'Jeu complet', '0');
INSERT INTO `statut` (`id`, `nom`, `alerte`) VALUES ('7', 'Jeu partiel', '1');
INSERT INTO `statut` (`id`, `nom`, `alerte`) VALUES ('8', 'En commande', '0');


-- --------------------------------------------------------

-- 
-- Structure de la table `utilisateur`
-- 

DROP TABLE IF EXISTS `utilisateur`;
CREATE TABLE `utilisateur` (
  `nom` varchar(250) collate latin1_general_ci NOT NULL default '',
  `prenom` varchar(250) collate latin1_general_ci NOT NULL default '',
  `login` varchar(7) collate latin1_general_ci NOT NULL default '',
  `motdepasse` varchar(7) collate latin1_general_ci NOT NULL default '',
  PRIMARY KEY  (`login`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

-- 
-- Contenu de la table `utilisateur`
-- 

INSERT INTO `utilisateur` (`nom`, `prenom`, `login`, `motdepasse`) VALUES ('Martin-Deidier', 'Sophie', 'smartin', 'hendaye');
INSERT INTO `utilisateur` (`nom`, `prenom`, `login`, `motdepasse`) VALUES ('Martin-Deidier', 'Hubert', 'hmartin', 'blink18');
INSERT INTO `utilisateur` (`nom`, `prenom`, `login`, `motdepasse`) VALUES ('root', 'root', 'root', 'blink18');


-- --------------------------------------------------------

