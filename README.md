# Cyber Réflexes

Un parcours gratuit de sensibilisation à la cybersécurité, proposé par **Oumar Bocoum**.

Le site fonctionne en HTML, CSS et JavaScript sur GitHub Pages. La connexion Google utilise Firebase Authentication ; la réception privée des avis utilise Cloud Firestore lorsque cette option est activée.

## Publier

Suivez **[CONFIGURATION.md](CONFIGURATION.md)** : configuration Firebase, règles de collecte des avis et publication GitHub Pages.

## Contenu du projet

| Élément | Rôle |
| --- | --- |
| `public/config.js` | Identité, signature LinkedIn, e-mail public et configuration Firebase |
| `public/index.html` | Entrée du site |
| `public/app.js` | Navigation, connexion, progression, bilan, contact et feedback |
| `public/course.js` | 8 modules, 24 messages clés, situations et 24 questions |
| `public/style.css` | Mise en page adaptative, Segoe UI, modes clair et sombre |
| `firestore.rules` | Accès aux avis et validation des données |
| `firebase.json` | Configuration CLI de déploiement des règles |
| `.github/workflows/pages.yml` | Publication automatique du dossier public |
| `scripts/check.cjs` | Contrôles locaux et avant déploiement |

## Tester localement

```bash
python3 -m http.server 8080 --directory public
```

Ouvrir `http://localhost:8080`. Pour vérifier les sources :

```bash
node scripts/check.cjs
```

## Fonctionnement

- Socle de huit modules avec six séquences par module, situations interactives et quiz expliqués.
- Trois bonnes réponses sur trois pour débloquer le module suivant.
- Progression et étape de lecture sauvegardées sur le navigateur ; export/import disponible.
- Bilan final, carte PNG, lien partageable et impression.
- Pages À propos et Contact ; feedback facultatif après le bilan.
- Signature liée au profil LinkedIn d’Oumar Bocoum. Les références pédagogiques sont en texte simple.
- Les paramètres Firebase sont volontairement vides : aucun faux projet ni identifiant n'est fourni.

## Vérifications réalisées

Affichage des cours, modes clair/sombre, reprise de lecture, validation des quiz, déblocage, parcours jusqu'au bilan, génération du PNG (1600 × 1120), affichage du lien partagé, pages institutionnelles et conservation du brouillon d'avis.

Les contrôles de sources vérifient aussi la présence des fichiers, les huit modules, les 24 questions et les messages clés.

La connexion Google réelle et l'écriture d'un avis dans votre base nécessitent les paramètres de votre projet. Elles doivent être confirmées sur l'adresse de publication. Les règles fournies n'ont pas été exécutées sur un émulateur dans cet environnement ; CONFIGURATION.md donne les contrôles à effectuer avant ouverture de la collecte.

## Limites connues

La connexion Google ne synchronise pas la progression entre appareils. La validation des modules reste locale et peut être modifiée par le visiteur. Les cartes et liens sont des bilans déclaratifs, sans registre de certification. Les liens partagés ne génèrent pas d'aperçu personnalisé dans les réseaux sociaux : utilisez la carte PNG pour joindre le visuel à une publication.

La page Contact ouvre la messagerie du visiteur ; elle ne transmet rien automatiquement. Le partage natif dépend du navigateur ; une copie de lien ou une image téléchargeable est proposée en remplacement.
