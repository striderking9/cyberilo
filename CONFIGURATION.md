# Publication de Cyberilo V1

## 1. Préserver les données existantes

Avant de remplacer le site, exporter la progression sur chaque appareil important depuis « Exporter ma progression ». Conserver le même dépôt GitHub, le même projet Firebase et le même domaine de publication. Les clés de sauvegarde du navigateur sont volontairement inchangées. Ne pas effacer les données du navigateur.

Le fichier public/config.js contient déjà la configuration publique de votre projet cyber-reflexe-452a9. Ne pas créer un second projet pour le changement de nom. Aucune clé privée ni compte de service ne doit être ajouté au site. Le nom technique CYBER_CONFIG est conservé.

## 2. Firebase Authentication

Dans votre console Firebase existante :

1. Authentication → Sign-in method : vérifier que Google est activé.
2. Authentication → Settings → Authorized domains : vérifier striderking9.github.io (sans protocole ni chemin). Ajouter le domaine personnalisé si nécessaire.
3. Mettre le nom public de l’application à Cyberilo et vérifier l’adresse de support ainsi que l’écran de consentement Google.
4. Pour des tests locaux, ajouter localhost aux domaines autorisés.

Les modules demandent une connexion Google lorsque Firebase est configuré. Les pages d’information restent publiques.

## 3. Firestore : indispensable pour la synchronisation

1. Ouvrir Firestore Database dans le même projet. Créer la base (default) en mode production si elle n’existe pas.
2. Dans Règles, remplacer le contenu par firestore.rules fourni à la racine du ZIP, puis publier.
3. Ne pas utiliser des règles ouvertes. Chaque compte accède seulement à progress/{uid}. Les autres utilisateurs ne peuvent pas lister ces données.
4. Suivre la recette complète de SYNCHRONISATION.md avant d’annoncer la synchronisation opérationnelle.

Si la CLI Firebase officielle est déjà installée et authentifiée :

```bash
firebase deploy --only firestore:rules --project cyber-reflexe-452a9
```

Firebase Hosting n’est pas nécessaire. Le site reste sur GitHub Pages.

## 4. Mettre à jour GitHub Pages

1. Décompresser Cyberilo_V1.zip.
2. Copier le contenu du dossier cyberilo-v1 à la racine de votre dépôt existant striderking9/cyber-reflexe. Remplacer les fichiers existants et inclure .github, public, scripts et firestore.rules. Ne pas envoyer le ZIP lui-même ni ajouter un dossier parent supplémentaire.
3. Dans Settings → Pages, choisir GitHub Actions.
4. Valider les changements sur main ; attendre que le workflow « Publier Cyberilo sur GitHub Pages » réussisse.
5. Le workflow publie le dossier public, qui contient index.html. Ne pas publier la racine du dépôt : cela afficherait le README.
6. Recharger le site sur ordinateur et téléphone. Si une ancienne version reste visible, effectuer un rechargement complet.

Le nom du dépôt peut rester cyber-reflexe : il n’est pas nécessaire de changer l’adresse du site pour afficher Cyberilo.

## 5. Activer les feedbacks après la recette

La collecte reste désactivée avec feedbackEnabled: false. Les brouillons restent sur le navigateur et aucun avis n’est annoncé envoyé.

Après publication des règles :

1. Choisir une durée de conservation des avis et l’indiquer dans la notice de confidentialité (fonction privacy dans public/app.js).
2. Passer feedbackEnabled à true dans public/config.js puis publier.
3. Avec un compte de test ayant terminé les modules, ouvrir le bilan puis envoyer un avis.
4. Vérifier dans Firestore le document feedback/{uid}. Un nouvel avis du même compte remplace le précédent.
5. Vérifier le refus des visiteurs non connectés, d’un compte écrivant pour un autre, des notes hors 1–5 et des commentaires de plus de 1500 caractères. Les visiteurs n’ont pas accès en lecture aux avis.

Les retours sont privés, facultatifs et consultables par le responsable dans la console Firebase. La note, le commentaire, le sentiment de préparation, l’identifiant du compte et la date serveur sont transmis. Le nombre de modules est déclaratif, sans certification sécurisée.

Supprimer un compte Authentication ne supprime pas automatiquement sa progression ni son avis. Pour une demande d’effacement, supprimer également les documents correspondants dans Firestore avec les droits d’administration.

## 6. Recette avant ouverture

- Se connecter avec Google sur le domaine final.
- Valider un module sur ordinateur et le retrouver sur téléphone avec le même compte, puis faire l’inverse. Attendre « Progression synchronisée » avant de changer d’appareil.
- Tester la reconnexion réseau, une réinitialisation volontaire sur un compte de test et deux comptes séparés.
- Vérifier dans le simulateur de règles que A ne peut pas lire/écrire progress/UID_B et qu’un visiteur anonyme est refusé.
- Vérifier la croix du sommaire mobile, le clic extérieur, Échap, les thèmes et le bilan.
- Vérifier la signature LinkedIn et le formulaire Contact, qui ouvre la messagerie sans envoyer automatiquement.

Les vérifications locales réussissent, mais la publication des règles et la recette de vos services restent à effectuer dans votre environnement.
