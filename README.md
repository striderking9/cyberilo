# Cyberilo — V1

Formations gratuites de sensibilisation à la sécurité numérique, proposées par Oumar Bocoum.

Site statique HTML/CSS/JavaScript pour GitHub Pages. Connexion Google via Firebase Authentication et synchronisation privée via Cloud Firestore.

## Mise à jour de votre site

Cette version ajoute « Protéger son téléphone et ses données ». Le cours comporte six ateliers en français et en anglais, pour une durée indicative de 33 minutes.

Publiez le fichier complet `firestore.rules` dans le projet Firebase existant pour permettre l’envoi d’un avis à la fin du nouveau cours. Mettez ensuite à jour les fichiers du dépôt GitHub Pages. Les étapes figurent dans [CONFIGURATION.md](CONFIGURATION.md).

## Contenu

- Les bases de la sécurité numérique · 8 modules.
- Protéger ses comptes au quotidien · 6 ateliers.
- Protéger son téléphone et ses données · 6 ateliers sur le verrouillage, les applications, les mises à jour, la sauvegarde, le partage et la perte ou le vol.
- Chaque module comporte six étapes, trois messages clés, un exercice et un quiz corrigé. L’écoute utilise la voix disponible dans le navigateur.
- Validation de 3 questions sur 3 avant le module suivant.
- Progression locale et synchronisation des acquis entre appareils connectés au même compte.
- Thèmes clair et sombre, police Segoe UI et mise en page mobile.
- Sommaire mobile : croix de fermeture, clic extérieur et touche Échap.
- Bilan, carte PNG, lien de partage et impression ; feedback facultatif après le bilan.
- Pages À propos, Contact, Aide et Confidentialité. Signature Cyberilo dans les pieds de page ; auteur et lien LinkedIn dans À propos.
- Logos SVG/PNG dans public/assets ; charte PDF dans identite.

## Vérification locale

```bash
node scripts/check.cjs
node scripts/test-progress-sync.cjs
node scripts/test-experience.cjs
node scripts/test-platform.cjs
node scripts/test-audio.cjs
python3 -m http.server 8080 --directory public
```

Ouvrir http://localhost:8080 ; autoriser localhost dans Firebase pour tester Google.

## Validation et limites

Les tests vérifient la structure des 20 modules bilingues, la séparation des acquis et des avis, la fusion de progression, la fiche mémo et les commandes audio. En aperçu mobile avec un compte simulé, les six quiz ont mené au bilan du parcours téléphone et le formulaire d’avis a été testé.

Les règles Firestore ne sont pas encore publiées par ce paquet et n’ont pas été testées ici sur émulateur. Connexion Google, synchronisation réelle entre deux appareils et envoi d’avis doivent être vérifiés sur le site publié.

La progression est déclarative, modifiable côté navigateur ; ce parcours ne fournit pas de certification officielle. Le partage natif dépend du navigateur. Les liens de bilan ne produisent pas d’aperçu social personnalisé ; joindre la carte PNG. Le contact ouvre la messagerie, sans envoi automatique. Le formulaire des avis est activé dans ce paquet ; publier les nouvelles règles et effectuer la recette avant ouverture publique.

## Affichage de la sauvegarde

La synchronisation fonctionne en arrière-plan. Aucun bandeau de chargement, de sauvegarde ou de réussite n’est affiché sur l’accueil ou dans les modules. Un échec est signalé discrètement dans Mon espace ; cet avis disparaît à la reprise du service.

Les trois formations et leurs exercices sont disponibles en français et en anglais. Les rôles administrateur se configurent dans Firebase.

## Tableaux de bord et compte

Lire DASHBOARDS_ET_COMPTE.md pour la navigation utilisateur et administrateur, le profil, les écrans de connexion/déconnexion et la mise à jour des règles Firebase.
