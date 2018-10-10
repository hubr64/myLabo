-- phpMyAdmin SQL Dump
-- version 2.6.1
-- http://www.phpmyadmin.net
-- 
-- Serveur: localhost
-- Généré le : Mercredi 17 Janvier 2007 à 19:00
-- Version du serveur: 4.1.9
-- Version de PHP: 4.3.10
-- 
-- Base de données: `gestlabo_db`
-- 

-- --------------------------------------------------------

-- 
-- Structure de la table `categorie`
-- 

DROP TABLE IF EXISTS `categorie`;
CREATE TABLE `categorie` (
  `id` mediumint(8) unsigned NOT NULL auto_increment,
  `nom` varchar(250) character set utf8 collate utf8_unicode_ci NOT NULL default '',
  PRIMARY KEY  (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1 AUTO_INCREMENT=8 ;

-- 
-- Contenu de la table `categorie`
-- 

INSERT INTO `categorie` VALUES (1, 'Physique');
INSERT INTO `categorie` VALUES (2, 'Instrumentation');
INSERT INTO `categorie` VALUES (3, 'Chimie');
INSERT INTO `categorie` VALUES (4, 'Laboratoire');
INSERT INTO `categorie` VALUES (5, 'Multimédia');
INSERT INTO `categorie` VALUES (6, 'Médiathéque');
INSERT INTO `categorie` VALUES (7, 'Ex. A.O.');

-- --------------------------------------------------------

-- 
-- Structure de la table `domaine`
-- 

DROP TABLE IF EXISTS `domaine`;
CREATE TABLE `domaine` (
  `id` mediumint(8) unsigned NOT NULL auto_increment,
  `categorie_id` mediumint(8) unsigned NOT NULL default '0',
  `nom` varchar(250) character set latin1 collate latin1_general_ci NOT NULL default '',
  PRIMARY KEY  (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1 AUTO_INCREMENT=7 ;

-- 
-- Contenu de la table `domaine`
-- 

INSERT INTO `domaine` VALUES (1, 1, 'Electricité & Electrostatique');
INSERT INTO `domaine` VALUES (2, 1, 'Electronique & Electrotechnique');
INSERT INTO `domaine` VALUES (3, 2, 'Connectique & Outillage');
INSERT INTO `domaine` VALUES (4, 2, 'Alimentations & Générateurs');
INSERT INTO `domaine` VALUES (5, 3, 'Modèle Moléculaire');
INSERT INTO `domaine` VALUES (6, 3, 'Chromatographie & Kit d''Analyse');

-- --------------------------------------------------------

-- 
-- Structure de la table `marque`
-- 

DROP TABLE IF EXISTS `marque`;
CREATE TABLE `marque` (
  `id` int(10) unsigned NOT NULL auto_increment,
  `nom` varchar(250) character set utf8 collate utf8_unicode_ci NOT NULL default '',
  `adresse` longtext character set utf8 collate utf8_unicode_ci,
  `telephone` varchar(250) character set utf8 collate utf8_unicode_ci default NULL,
  `www` longtext,
  `mail` varchar(250) character set utf8 collate utf8_unicode_ci default NULL,
  `commentaire` longtext character set utf8 collate utf8_unicode_ci,
  PRIMARY KEY  (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1 AUTO_INCREMENT=2 ;

-- 
-- Contenu de la table `marque`
-- 

INSERT INTO `marque` VALUES (1, 'Pierron Education', 'Parc Industriel Sud - Z.I. Gutenberg\r\n2, rue Gutenberg\r\nB.P. 80609\r\n57206 SARREGUEMINES Cedex France', '0.825.37.38.39', 'http://www.pierron.fr', 'education-france@pierron.fr', NULL);

-- --------------------------------------------------------

-- 
-- Structure de la table `objet`
-- 

DROP TABLE IF EXISTS `objet`;
CREATE TABLE `objet` (
  `id` int(10) unsigned NOT NULL auto_increment,
  `designation` varchar(250) character set latin1 collate latin1_general_ci NOT NULL default '',
  `domaine` mediumint(8) unsigned NOT NULL default '0',
  PRIMARY KEY  (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1 PACK_KEYS=0 AUTO_INCREMENT=2 ;

-- 
-- Contenu de la table `objet`
-- 

INSERT INTO `objet` VALUES (1, 'Nouvel objet de test', 2);

-- --------------------------------------------------------

-- 
-- Structure de la table `objet_asso`
-- 

DROP TABLE IF EXISTS `objet_asso`;
CREATE TABLE `objet_asso` (
  `objet_id` int(10) unsigned NOT NULL default '0',
  `sous_objet_id` varchar(8) character set utf8 collate utf8_unicode_ci NOT NULL default '0'
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- 
-- Contenu de la table `objet_asso`
-- 

INSERT INTO `objet_asso` VALUES (1, 'UN000002');
INSERT INTO `objet_asso` VALUES (1, 'UN000001');

-- --------------------------------------------------------

-- 
-- Structure de la table `objet_quantite`
-- 

DROP TABLE IF EXISTS `objet_quantite`;
CREATE TABLE `objet_quantite` (
  `id` varchar(8) character set latin1 collate latin1_general_ci NOT NULL default '',
  `designation` varchar(250) character set latin1 collate latin1_general_ci NOT NULL default '',
  `quantite` float NOT NULL default '0',
  `unite` varchar(10) character set latin1 collate latin1_general_ci default NULL,
  `seuil_alerte` float default NULL,
  `placard` int(10) unsigned NOT NULL default '0',
  `etagere` varchar(250) character set latin1 collate latin1_general_ci default NULL,
  `commentaire` longtext character set latin1 collate latin1_general_ci,
  `reference` varchar(250) character set latin1 collate latin1_general_ci default NULL,
  `marque` int(11) default NULL,
  `prix` float default NULL,
  PRIMARY KEY  (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- 
-- Contenu de la table `objet_quantite`
-- 


-- --------------------------------------------------------

-- 
-- Structure de la table `objet_unite`
-- 

DROP TABLE IF EXISTS `objet_unite`;
CREATE TABLE `objet_unite` (
  `id` varchar(8) character set latin1 collate latin1_general_ci NOT NULL default '',
  `designation` varchar(250) character set latin1 collate latin1_general_ci NOT NULL default '',
  `nombre` mediumint(9) NOT NULL default '0',
  `statut` mediumint(9) unsigned NOT NULL default '0',
  `placard` int(10) unsigned NOT NULL default '0',
  `etagere` varchar(250) character set latin1 collate latin1_general_ci default NULL,
  `commentaire` longtext character set latin1 collate latin1_general_ci,
  `reference` varchar(250) character set latin1 collate latin1_general_ci default NULL,
  `marque` int(11) default NULL,
  `prix` float default NULL,
  PRIMARY KEY  (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- 
-- Contenu de la table `objet_unite`
-- 

INSERT INTO `objet_unite` VALUES ('UN000001', '2Nouvelle unité de test', 2321, 2321, 1, '2Prout', '2', NULL, NULL, NULL);
INSERT INTO `objet_unite` VALUES ('UN000002', '3', 33, 3, 1, '3', '3', '3', 1, 3);

-- --------------------------------------------------------

-- 
-- Structure de la table `placard`
-- 

DROP TABLE IF EXISTS `placard`;
CREATE TABLE `placard` (
  `id` mediumint(8) unsigned NOT NULL auto_increment,
  `salle_id` int(11) NOT NULL default '0',
  `nom` varchar(250) NOT NULL default '',
  `position` varchar(250) character set utf8 collate utf8_unicode_ci NOT NULL default '',
  PRIMARY KEY  (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1 AUTO_INCREMENT=8 ;

-- 
-- Contenu de la table `placard`
-- 

INSERT INTO `placard` VALUES (1, 1, 'Placard du Fond', '21,65,43,128');
INSERT INTO `placard` VALUES (2, 2, 'Placard Verrerie', '22,64,37,107');
INSERT INTO `placard` VALUES (3, 1, 'Placard en métal', '171,157,246,185');
INSERT INTO `placard` VALUES (4, 2, 'Placard en bois pour oscilloscope', '177,37,204,100');
INSERT INTO `placard` VALUES (6, 24, 'Nouveau petit placard', '12,34,56,78');
INSERT INTO `placard` VALUES (7, 42, 'Plcard name''s', '12,14,16,18');

-- --------------------------------------------------------

-- 
-- Structure de la table `salle`
-- 

DROP TABLE IF EXISTS `salle`;
CREATE TABLE `salle` (
  `id` int(10) unsigned NOT NULL auto_increment,
  `nom` varchar(250) character set utf8 collate utf8_unicode_ci NOT NULL default '',
  PRIMARY KEY  (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1 AUTO_INCREMENT=45 ;

-- 
-- Contenu de la table `salle`
-- 

INSERT INTO `salle` VALUES (1, 'Labo Physique');
INSERT INTO `salle` VALUES (8, 'Laboratoire de Chimie');
INSERT INTO `salle` VALUES (23, 'Salle nouvelle');
INSERT INTO `salle` VALUES (44, 'Test pour ID2');
INSERT INTO `salle` VALUES (43, 'coucou');
INSERT INTO `salle` VALUES (42, 'coucou 243');

-- --------------------------------------------------------

-- 
-- Structure de la table `utilisateur`
-- 

DROP TABLE IF EXISTS `utilisateur`;
CREATE TABLE `utilisateur` (
  `nom` varchar(250) character set utf8 collate utf8_unicode_ci NOT NULL default '',
  `prenom` varchar(250) character set utf8 collate utf8_unicode_ci NOT NULL default '',
  `login` varchar(7) character set utf8 collate utf8_unicode_ci NOT NULL default '',
  `motdepasse` varchar(7) character set utf8 collate utf8_unicode_ci NOT NULL default '',
  PRIMARY KEY  (`login`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- 
-- Contenu de la table `utilisateur`
-- 

INSERT INTO `utilisateur` VALUES ('Martin-Deidier', 'Sophie', 'smartin', 'hendaye');
