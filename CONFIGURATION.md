# Guide de mise en ligne — Cyber Réflexes

## État de livraison

- Nom et signature : Oumar Bocoum.
- Profil LinkedIn : `https://www.linkedin.com/in/oumar-bocoum-10505114a/`.
- Contact public : `obocoum.66@gmail.com` (modifiable dans `public/config.js`).
- Les quatre champs Firebase restent à renseigner avec votre propre projet.
- `feedbackEnabled` reste à `false` jusqu'à l'installation des règles et à la recette de la collecte.
- L'hébergement cible est GitHub Pages ; aucun serveur applicatif à installer.

## 1. Créer le projet Firebase

1. Ouvrir la console Firebase : https://console.firebase.google.com/.
2. Créer ou choisir votre projet. Google Analytics n'est pas nécessaire.
3. Ajouter une application **Web** (`</>`), nommée par exemple `Cyber Reflexes Web`.
4. Ne pas activer Firebase Hosting : le site sera hébergé sur GitHub Pages.
5. Récupérer la configuration publique de l'application Web dans les paramètres du projet.
6. Compléter uniquement les valeurs de votre projet dans `public/config.js` :

```javascript
window.CYBER_CONFIG = {
  author: 'Oumar Bocoum',
  authorLinkedIn: 'https://www.linkedin.com/in/oumar-bocoum-10505114a/',
  contactEmail: 'obocoum.66@gmail.com',
  feedbackEnabled: false,
  firebase: {
    apiKey: 'COPIER_LA_VALEUR_FIREBASE',
    authDomain: 'COPIER_LA_VALEUR_FIREBASE',
    projectId: 'COPIER_LA_VALEUR_FIREBASE',
    appId: 'COPIER_LA_VALEUR_FIREBASE'
  }
};
```

Les valeurs de configuration Web Firebase identifient l'application et sont destinées au code client. Ne jamais placer de clé privée, secret OAuth, fichier de compte de service ou jeton personnel dans ce projet.

## 2. Activer Google Authentication

1. Dans **Authentication → Sign-in method**, activer **Google**.
2. Compléter le nom public et l'e-mail de support demandés, puis enregistrer.
3. Dans **Authentication → Settings → Authorized domains**, ajouter le nom d'hôte final sans protocole ni chemin : par exemple `votre-compte.github.io`.
4. Ajouter votre domaine personnalisé si vous en utilisez un. Pour un test local, ajouter `localhost` explicitement.
5. Dans l'écran de consentement Google, vérifier le nom de l'application, les coordonnées et les éventuelles demandes de publication affichées dans votre console. Si le projet est en mode test, ajouter les comptes de test ; terminer les étapes exigées avant l'ouverture générale.

Quand les quatre champs Firebase sont remplis, le site demande une connexion Google pour ouvrir les modules. Les pages d'information et la carte d'un bilan partagé restent accessibles sans connexion.

Sans paramètres Firebase, le site permet une exploration locale et explique que Google n'est pas encore actif. Cela permet de prévisualiser la mise en page, mais ne constitue pas une recette de la connexion.

## 3. Activer la réception privée des feedbacks

**Firestore est nécessaire pour conserver les avis à distance.** Il ne sert pas à synchroniser la progression dans cette version.

1. Dans **Firestore Database**, créer une base **Standard / Native** `(default)` en mode production, et choisir une région adaptée à vos besoins.
2. Ouvrir l'onglet **Rules / Règles**.
3. Remplacer le contenu par celui du fichier `firestore.rules`, puis publier les règles. Ne pas utiliser des règles de test ouvertes.
4. Dans l'outil de simulation des règles, vérifier les cas de la section « Recette » ci-dessous. Pour une validation automatisée plus complète, utiliser les émulateurs officiels Firebase.
5. Dans `public/config.js`, passer `feedbackEnabled` à `true`, puis publier cette modification sur GitHub.
6. Se connecter avec un compte de test, terminer les modules et envoyer un avis.
7. Dans **Firestore → Data**, vérifier la présence du document `feedback/{uid}`.
8. Refaire un envoi depuis le même compte : le document est mis à jour au lieu d'en créer un second.

Les retours contiennent : identifiant de compte, note d'utilité, sentiment d'être mieux préparé, commentaire facultatif, version de parcours, nombre de modules déclaré et date de réception serveur. Ils ne sont pas affichés publiquement. Aucun champ supplémentaire de nom ou d'e-mail n'est envoyé dans le document d'avis.

Le responsable consulte les avis dans la console Firebase avec ses droits d'administration. L'application du visiteur n'a aucun accès de lecture aux avis. Ne partagez pas votre compte d'administration avec les participants.

### Recette des règles

| Cas | Résultat attendu |
| --- | --- |
| Visiteur non connecté écrit un avis | Refus |
| Compte A écrit dans `feedback/UID_B` | Refus |
| Compte Google A écrit son avis valide dans `feedback/UID_A` | Acceptation |
| Note hors intervalle 1–5 | Refus |
| Commentaire de plus de 1 500 caractères | Refus |
| Champ supplémentaire dans l'avis | Refus |
| Visiteur ou participant lit la collection | Refus |
| Compte A met à jour son propre avis valide | Acceptation |

Le champ `completedModules` est validé dans sa forme ; les règles ne prouvent pas la réalisation effective du parcours, car la progression est locale.

### Déploiement facultatif par CLI

Si vous disposez déjà de la CLI officielle Firebase, vous pouvez publier uniquement les règles :

```bash
firebase login
firebase deploy --only firestore:rules --project VOTRE_PROJECT_ID
```

Remplacer `VOTRE_PROJECT_ID` par votre identifiant réel. Aucune configuration Hosting n'est requise.

### Conservation et suppression

Avant d'ouvrir la collecte, définir la durée de conservation de vos avis et la renseigner dans la notice de confidentialité (`public/app.js`, fonction `privacy`). Pour une demande d'effacement, le responsable supprime le document correspondant dans Firestore. Supprimer l'utilisateur d'Authentication ne supprime pas automatiquement son avis.

Quand la collecte est désactivée, le site sauvegarde seulement un brouillon sur le navigateur et le signale clairement. Il ne dit pas que l'avis a été envoyé. L'avis est facultatif et n'empêche jamais le bilan ni son partage.

## 4. Publier sur GitHub Pages

1. Créer un dépôt GitHub vide, par exemple `cyber-reflexes`. Choisir une visibilité compatible avec votre offre GitHub Pages.
2. Décompresser le ZIP. Envoyer **le contenu** du dossier `cyber-reflexes` à la racine du dépôt, notamment le dossier `.github` ; ne pas ajouter un niveau de dossier parent.
3. Dans **Settings → Pages → Build and deployment**, sélectionner **GitHub Actions**.
4. Dans **Actions**, lancer le workflow `Publier Cyber Reflexes sur GitHub Pages`, ou pousser un commit sur `main`.
5. Attendre le déploiement réussi. L'adresse exacte figure dans **Settings → Pages** et dans l'environnement `github-pages`.
6. Reporter le nom d'hôte de cette adresse dans les domaines autorisés Firebase.

Depuis votre ordinateur :

```bash
git init
git add .
git commit -m "Publier Cyber Réflexes"
git branch -M main
git remote add origin https://github.com/VOTRE_COMPTE/cyber-reflexes.git
git push -u origin main
```

Remplacer le compte et le nom du dépôt. Si vous travaillez dans un dépôt existant, conservez son historique et intégrez les fichiers sans réinitialisation.

Le workflow publie uniquement le dossier `public`. Aucun build ni installation de dépendances n'est nécessaire. La navigation utilise des fragments (`#/module/0`) compatibles avec les sous-chemins GitHub Pages et le rechargement des pages.

## 5. Contact et signature

Toutes les signatures textuelles « Oumar Bocoum » du site ouvrent le profil LinkedIn dans un nouvel onglet. La carte PNG est une image : sa signature est visible mais n'est pas un lien cliquable.

La page Contact utilise l'adresse de `contactEmail`. Le bouton ouvre la messagerie du visiteur avec un message prérempli ; l'envoi est effectué par le visiteur dans son application. Vérifier cette ouverture depuis un appareil avec une messagerie configurée. Modifier l'adresse avant publication si vous souhaitez une autre boîte de contact.

Les références pédagogiques restent en texte simple. Seule la signature personnelle a été liée au profil demandé.

## 6. Derniers contrôles sur l'adresse finale

- Page d'accueil, page À propos, Contact et aide : affichage correct sur téléphone et ordinateur.
- Signatures : le profil LinkedIn est le bon.
- Connexion Google et déconnexion : fonctionnelles depuis le domaine final.
- Quiz erroné : module suivant verrouillé ; quiz corrigé : déblocage.
- Rechargement : progression et étape de lecture conservées sur le navigateur.
- Dernier quiz : page de félicitations et bilan disponibles.
- Carte PNG : génération, enregistrement et nom affiché corrects.
- Lien de bilan : ouverture sur un autre navigateur sans connexion, quand le site est public.
- Feedback : envoi réel confirmé dans Firestore ; aucune lecture publique.
- Contact : ouverture de la messagerie vers l'adresse choisie.

Les quatre paramètres Firebase et les opérations dans votre console restent à réaliser. Sans eux, Google et la collecte à distance ne peuvent pas être vérifiés ni annoncés comme actifs.
