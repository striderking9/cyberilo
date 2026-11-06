# Cyberilo — révision des sessions, avis et catalogue

Version du 6 novembre 2026. Ce document complète les guides précédents et fait foi pour cette livraison.

## Sessions et accès

- Après confirmation de la déconnexion, redirection vers `#/compte`, la page de connexion Google.
- L’espace personnel, les modules, exercices, résultats, documents, bilan et avis demandent une session. Un lien privé ouvert sans session mène à la connexion, puis retrouve la destination après connexion.
- Les informations publiques (accueil, catalogue, auteur, contact, aide et confidentialité) restent accessibles. L’accueil et la connexion ne montrent pas une progression personnelle à un visiteur.
- Les sauvegardes, brouillons d’avis et brouillons de contact sont séparés par compte. Les anciennes réponses asynchrones d’un compte quitté ne modifient plus l’état du compte courant.
- L’administration demande un rôle `admins/{uid}` avec `enabled: true`. Le retrait de ce rôle enlève les accès et le contenu administrateur déjà ouvert. Les règles Firestore assurent la protection des données ; le masquage des menus n’est qu’une couche d’interface.
- La copie locale demeure sur l’appareil après déconnexion pour permettre une reprise. Sur un appareil partagé, fermer également la session Google. Le stockage local n’est pas un coffre chiffré.

## Avis après la formation

Le feedback est facultatif et proposé après le bilan. Un compte n’ayant pas terminé peut contacter l’auteur pour signaler un problème, mais ne peut pas envoyer l’avis de fin de formation.

Le formulaire comporte une note de 1 à 5, le sentiment de préparation et un commentaire facultatif de 1 500 caractères maximum. Il permet de relire et modifier son avis déjà envoyé, de garder une copie ou d’effacer le brouillon local. Effacer un brouillon ne supprime pas l’avis déjà envoyé.

L’application attend la confirmation de sauvegarde de la progression avant d’envoyer l’avis. Les règles vérifient aussi la présence d’une progression complète. Si l’envoi échoue, la saisie reste conservée dans ce navigateur pour ce compte et cette formation. Aucun message de réussite n’est affiché avant confirmation du serveur. Un nouvel envoi remplace l’avis précédent du même compte pour cette formation.

Les avis restent privés : lecture par leur auteur et par les administrateurs habilités. L’administration affiche les avis de la formation sélectionnée ; aucune publication automatique de témoignages.

`feedbackEnabled: true` est activé dans ce paquet. Publier les nouvelles règles AVANT le site. Pour différer la collecte, mettre ce paramètre à false. Définir et communiquer votre durée de conservation avant l’ouverture publique.

## Organisation pour plusieurs formations

- Catalogue public avec une carte par formation disponible.
- Espace « Mes formations » avec les progressions conservées sur cet appareil.
- Page de détail par formation : description, programme et reprise.
- Sélecteur de formation dans l’espace personnel et l’administration.
- Résultats, exercices, révisions, historique et feedback rattachés à la formation sélectionnée.

Cette V1 contient toujours une seule formation réelle : les huit modules de sécurité numérique. Aucun faux cours ou indicateur de participants n’est ajouté. La structure est prête pour enregistrer d’autres formations ; la création complète d’une formation depuis un formulaire administrateur n’est pas incluse. L’atelier modifie les modules des formations déjà enregistrées.

Les cartes des autres formations utilisent les progressions déjà chargées sur cet appareil. Elles ne prétendent pas avoir téléchargé toutes les progressions distantes en parallèle. Ouvrir une formation lance sa synchronisation.

## Stockage et compatibilité

Les données de la première formation gardent leurs chemins existants : aucune migration destructive.

| Données | Première formation | Formations suivantes |
| --- | --- | --- |
| Progression | `progress/{uid}` | `progress/{uid}/courses/{courseId}` |
| Avis privé | `feedback/{uid}` | `courseFeedback/{courseId}/responses/{uid}` |
| Contenu publié | `content/catalog` | `content/{courseId}` |
| Brouillon de contenu | `contentDrafts/catalog` | `contentDrafts/{courseId}` |
| Versions | `contentVersions/{version}` | `contentHistory/{courseId}/versions/{version}` |
| Activités | `learning/{uid}.payload` | `learning/{uid}.payload.courses.{courseId}` |

Le profil reste commun au compte dans `learning/{uid}.payload.profile`. Les activités de la première formation sont plafonnées à 200 événements ; celles de chaque autre formation à 100, avec 12 formations supplémentaires maximum dans ce document. Prévoir une autre organisation de stockage si ce volume augmente fortement.

Pour ajouter une formation, enregistrer sa définition dans `window.CYBER_TRAININGS` dans un script chargé après les données pédagogiques et avant `experience.js` (voir le contrat de `platform.js`). Fournir un identifiant stable, titre/description/catégorie/niveau FR et EN, statut `published`, accès `free`, tableaux `fr` et `en` de même longueur, de 1 à 24 modules valides. Ne pas changer les identifiants de formations ou réordonner les modules existants : les acquis utilisent leurs indices. Publier ensuite le contenu correspondant dans l’atelier avant de collecter des avis de cette nouvelle formation. Les formations payantes et la gestion d’inscriptions ne sont pas incluses.

Les exports de progression contiennent désormais `courseId` et `progress`. Les anciens exports restent acceptés ; les nouveaux exports d’une autre formation sont refusés pour empêcher un mélange accidentel.

Pour effacer un compte complet, supprimer aussi ses sous-collections de progression et ses avis de chaque formation : supprimer un document parent Firestore ne supprime pas ses sous-collections. La suppression Authentication seule ne supprime pas Firestore.

## Publication

1. Sauvegarder les acquis importants par export. Conserver le projet Firebase existant et ses paramètres publics.
2. Remplacer et publier l’intégralité de `firestore.rules` dans le projet `cyber-reflexe-452a9`. `firebase.json` reste inchangé : il désigne ce fichier de règles. Firebase Hosting n’est pas utilisé.
3. Remplacer les fichiers du dépôt par le contenu de `cyberilo-v1`, y compris `.github`, `public`, `scripts` et les règles. Ne pas imbriquer un dossier parent supplémentaire.
4. Attendre la réussite du workflow GitHub Pages. Recharger le site sur ordinateur et téléphone.
5. Tester les scénarios ci-dessous sur le domaine final avant d’annoncer la synchronisation et la collecte opérationnelles.

## Vérifications et limites

Réussis localement : syntaxe et intégrité des ressources, sept contrôles de fusion des acquis, catalogue bilingue, historique et profil multidevice, séparation des activités par formation, politique d’accès et fonctions de changement de compte/déconnexion.

Vérifiés dans le navigateur avec des services et comptes de test simulés : redirection vers la connexion après sortie, refus d’un module sans session, second compte sans données ni rôle du premier, retrait du rôle admin, envoi/mise à jour d’un avis et consultation admin, blocage des avis avant la fin, changement entre deux formations avec conservation des acquis indépendants. La deuxième formation de test et les outils de simulation sont exclus de cette livraison.

À effectuer sur vos services réels : connexion/déconnexion Google, aller-retour entre ordinateur et téléphone, refus inter-comptes dans Firestore, envoi puis modification d’un avis, lecture admin et refus non-admin, publication/restauration des contenus. Les règles n’ont pas été exécutées ici sur un émulateur Firebase. Ce ZIP n’est pas déployé automatiquement sur GitHub.

Ces vérifications ne garantissent pas l’absence de tout bug. Le bilan reste déclaratif et ne constitue pas une certification officielle ou un examen sécurisé.
