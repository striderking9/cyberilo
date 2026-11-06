# Cyberilo — V1

Parcours gratuit de sensibilisation à la sécurité numérique, proposé par Oumar Bocoum.

Site statique HTML/CSS/JavaScript pour GitHub Pages. Connexion Google via Firebase Authentication et synchronisation privée via Cloud Firestore.

## Mise à jour de votre site

**Commencer par AUDIT_SESSIONS_FEEDBACK_CATALOGUE.md** : correction des sessions, accès privés, avis et structure pour plusieurs formations. Puis lire CONFIGURATION.md pour la publication des règles.


Suivre CONFIGURATION.md puis SYNCHRONISATION.md. La configuration publique du projet existant est conservée. Le dépôt et le projet Firebase gardent leurs noms techniques pour préserver les accès et les sauvegardes.

## Contenu

- 8 modules, 6 séquences par module, 24 messages clés et 24 questions expliquées.
- Validation de 3 questions sur 3 avant le module suivant.
- Progression locale et synchronisation des acquis entre appareils connectés au même compte.
- Thèmes clair et sombre, police Segoe UI et mise en page mobile.
- Sommaire mobile : croix de fermeture, clic extérieur et touche Échap.
- Bilan, carte PNG, lien de partage et impression ; feedback facultatif après le bilan.
- Pages À propos, Contact, Aide et Confidentialité. Signature LinkedIn d’Oumar Bocoum.
- Logos SVG/PNG dans public/assets ; charte PDF dans identite.

## Vérification locale

```bash
node scripts/check.cjs
node scripts/test-progress-sync.cjs
node scripts/test-experience.cjs
node scripts/test-platform.cjs
python3 -m http.server 8080 --directory public
```

Ouvrir http://localhost:8080 ; autoriser localhost dans Firebase pour tester Google.

## Validation et limites

Contrôle JavaScript et contenu des 8 modules réussi. Sept tests de fusion de progression réussis. Fermeture mobile vérifiée par croix, Échap et clic extérieur sur une largeur de 390 pixels.

Les règles Firestore ne sont pas encore publiées par ce paquet et n’ont pas été testées ici sur émulateur. Connexion Google, synchronisation réelle entre deux appareils et envoi d’avis doivent être vérifiés sur le site publié.

La progression est déclarative, modifiable côté navigateur ; ce parcours ne fournit pas de certification officielle. Le partage natif dépend du navigateur. Les liens de bilan ne produisent pas d’aperçu social personnalisé ; joindre la carte PNG. Le contact ouvre la messagerie, sans envoi automatique. Le formulaire des avis est activé dans ce paquet ; publier les nouvelles règles et effectuer la recette avant ouverture publique.

## Affichage de la sauvegarde

La synchronisation fonctionne en arrière-plan. Aucun bandeau de chargement, de sauvegarde ou de réussite n’est affiché sur l’accueil ou dans les modules. Un échec est signalé discrètement dans Mon espace ; cet avis disparaît à la reprise du service.

Les huit modules existent aussi en anglais. Les nouveaux scripts experience.js, learning-data.js et course-en.js ajoutent le diagnostic, les exercices, les révisions, le tableau de bord et les formulaires administrateur. Les rôles se configurent depuis la console Firebase, jamais depuis une liste d’e-mails publique dans le code.

## Tableaux de bord et compte

Lire DASHBOARDS_ET_COMPTE.md pour la navigation utilisateur et administrateur, le profil, les écrans de connexion/déconnexion et la mise à jour des règles Firebase.
