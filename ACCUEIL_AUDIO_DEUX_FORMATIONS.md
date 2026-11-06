# Cyberilo — accueil, audio et deuxième formation

Révision du 6 novembre 2026. Lire ce document en premier pour cette livraison.

## Ce qui est livré

L’accueil présente désormais Cyberilo comme une plateforme de formations courtes : une promesse claire, une situation concrète, deux parcours disponibles, les étapes d’apprentissage et des réponses aux questions fréquentes. Les textes existent en français et en anglais. Le bouton principal mène au catalogue pour un visiteur et à l’espace personnel pour un compte connecté.

Sur mobile, l’en-tête tient sur une ligne : logo, avatar (ou connexion) et bouton menu. La langue et l’apparence sont accessibles dans le menu. Le nom complet n’étire plus l’en-tête. Les pieds de page publics, des cours et des tableaux de bord affichent Cyberilo. L’auteur reste présenté dans À propos ; le compte connecté conserve son propre nom dans les menus personnels.

Les bilans affichent le titre du parcours concerné. Les documents de suivi et fiches mémo portent la signature Cyberilo.

## Les deux formations

| Parcours | Contenu | Durée indicative |
| --- | --- | --- |
| Les bases de la sécurité numérique | 8 modules : manipulation, messages, liens, QR, fichiers, codes et premiers réflexes | 50 minutes |
| Protéger ses comptes au quotidien | 6 ateliers pratiques : messagerie, secrets et clés d’accès, double protection, WhatsApp, permissions et réaction après incident | 30 minutes |

La deuxième formation est intégralement en français et en anglais : 18 questions, 18 messages clés, 6 exercices interactifs. Chaque module demande 3 bonnes réponses sur 3 pour ouvrir le suivant. Les deux parcours peuvent être commencés indépendamment ; la première formation est conseillée pour découvrir les bases mais n’est pas un prérequis technique.

Les règles prennent en charge les deux contenus intégrés, même si aucun contenu n’a encore été publié depuis l’atelier. Lorsqu’un contenu est publié dans Firestore, son nombre de modules devient la référence pour le feedback. La progression, l’historique, les révisions et les avis de chaque parcours restent séparés. Les anciens acquis de la première formation gardent leur emplacement.

## Lecture vocale

Un bouton « Écouter cette étape » est proposé sur les cinq étapes explicatives de chaque module des deux parcours. Il utilise la synthèse vocale du navigateur : aucun abonnement vocal ou clé d’API supplémentaire n’est nécessaire dans le site.

Commandes : lecture, pause, reprise, arrêt et vitesse 0,85× / 1× / 1,15×. Changer d’étape, de page ou de langue arrête l’écoute. Passer l’onglet en arrière-plan l’arrête également. Aucune lecture automatique et aucune validation par simple écoute.

Le texte lu provient du module actif, dans la langue choisie. Il ne contient ni coordonnées du compte, ni saisies de contact, ni feedback. Les quiz ne sont pas lus automatiquement pour éviter de mêler explications et validation. Le texte écrit reste toujours disponible.

Il s’agit d’une lecture synthétique et non de fichiers MP3 enregistrés. La qualité, la prononciation et la disponibilité dépendent du navigateur, de ses voix installées et de l’appareil. Une connexion peut être nécessaire pour certaines voix. Les voix locales correspondant à la langue sont privilégiées ; un navigateur peut sinon utiliser son fournisseur vocal en ligne. Cette information figure dans le lecteur et dans la confidentialité. En l’absence de moteur utilisable, l’interface invite à continuer avec le texte.

Pour une narration identique sur tous les appareils, une prochaine évolution pourra utiliser des fichiers audio enregistrés. Ce paquet ne promet ni écoute hors ligne universelle ni narration humaine.

## Installation et Firebase

1. Conserver le projet Firebase existant et exporter les progressions importantes si nécessaire.
2. Publier le fichier `firestore.rules` COMPLET de ce ZIP. La fonction de validation des avis reconnaît maintenant le parcours `proteger-ses-comptes` et ses six modules. Les règles de la précédente livraison ne suffisent pas pour les avis de cette deuxième formation avant publication du contenu dans l’atelier.
3. Remplacer le contenu du dépôt GitHub par celui de `cyberilo-v1`, y compris les nouveaux fichiers `public/account-course.js`, `public/audio.js`, `public/mobile-ui.js`, `public/release.css` et l’index mis à jour.
4. Attendre la réussite du workflow Pages, puis recharger le site. `firebase.json` reste inchangé ; Firebase Hosting n’est pas nécessaire.
5. Pour vérifier localement : `python3 -m http.server 8080 --directory public`. Ajouter localhost aux domaines autorisés d’Authentication pour tester Google. Le localhost utilise toujours le projet Firestore configuré : les données de test réelles y seront écrites.

La collecte des avis reste facultative après le bilan de chaque formation. `feedbackEnabled: true` est conservé. Les commentaires ne sont pas publiés en témoignages ; ils restent accessibles à leur auteur et aux administrateurs habilités. Les administrateurs choisissent la formation avant de consulter ses avis ou de modifier ses contenus.

Aucun changement de configuration audio n’est nécessaire dans Firebase. Aucun nouveau projet, compte administrateur ou service payant n’est créé.

## Vérifications effectuées

- Syntaxe et ressources de tous les scripts.
- Structure bilingue, identifiants, exercices et quiz des deux formations.
- Tests de fusion des acquis, séparation des comptes et parcours, historique et profil.
- Tests audio avec moteur simulé : démarrage volontaire, pause/reprise, arrêt, rejet des événements d’une ancienne lecture, langue et exclusion des quiz.
- Navigateur : accueil public, version mobile à 320 et 390 pixels, thème sombre et langue anglaise, menu avec préférences, programme du deuxième parcours, validation 3/3 du premier atelier et déblocage du suivant, progression indépendante de la formation initiale et signature Cyberilo.
- Le navigateur de test n’a pas de voix exploitable : le message de remplacement a été vérifié. L’émission sonore effective et la qualité de prononciation doivent être testées sur vos téléphones et ordinateurs.

Les sessions utilisées pour le parcours privé dans le navigateur étaient simulées. Restent à effectuer sur votre domaine : connexion Google réelle, synchronisation entre deux appareils, envoi et modification du feedback après les six modules, consultation des avis du deuxième parcours et publication/restauration du contenu administrateur. Les règles n’ont pas été exécutées ici sur émulateur. Le paquet n’est pas déployé automatiquement sur GitHub.
