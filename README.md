# Cyberilo — V1

Parcours gratuit de sensibilisation à la sécurité numérique, proposé par Oumar Bocoum.

Site statique HTML/CSS/JavaScript pour GitHub Pages. Connexion Google via Firebase Authentication et synchronisation privée via Cloud Firestore.

## Mise à jour de votre site

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
python3 -m http.server 8080 --directory public
```

Ouvrir http://localhost:8080 ; autoriser localhost dans Firebase pour tester Google.

## Validation et limites

Contrôle JavaScript et contenu des 8 modules réussi. Sept tests de fusion de progression réussis. Fermeture mobile vérifiée par croix, Échap et clic extérieur sur une largeur de 390 pixels.

Les règles Firestore ne sont pas encore publiées par ce paquet et n’ont pas été testées ici sur émulateur. Connexion Google, synchronisation réelle entre deux appareils et envoi d’avis doivent être vérifiés sur le site publié.

La progression est déclarative, modifiable côté navigateur ; ce parcours ne fournit pas de certification officielle. Le partage natif dépend du navigateur. Les liens de bilan ne produisent pas d’aperçu social personnalisé ; joindre la carte PNG. Le contact ouvre la messagerie, sans envoi automatique. Les avis restent désactivés jusqu’à la recette Firestore.
