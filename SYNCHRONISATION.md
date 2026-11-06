> V1 enrichie : lire d’abord EVOLUTIONS_V1.md et publier les nouvelles règles complètes.

# Activer la synchronisation entre appareils

La progression est désormais sauvegardée dans `progress/{uid}` sur Firestore, indépendamment de l'option de collecte des avis. Chaque personne doit utiliser le **même compte Google** sur ses appareils.

## À faire dans votre console

1. Dans le projet `cyber-reflexe-452a9`, ouvrir **Firestore Database**. Créer la base `(default)` en mode production si elle n'existe pas.
2. Ouvrir **Règles**, remplacer le contenu par le fichier `firestore.rules` de cette modification, puis **Publier**. Les règles des feedbacks sont conservées ; les nouvelles règles limitent la progression à son propriétaire.
3. Fusionner la modification du site sur `main` et attendre la réussite du déploiement Pages.
4. Recharger le site sur l'appareil le plus avancé, se connecter avec le compte habituel et vérifier dans Firestore que le document du compte a été actualisé.
5. Sur l'autre appareil, se connecter avec exactement le même compte, puis recharger. Les modules validés sont fusionnés et la progression distante est récupérée.

Ne videz pas les données de vos navigateurs avant cette opération. La première synchronisation importe automatiquement la progression locale de l'espace du compte connecté. Pour une progression restée en mode invité, utilisez d'abord l'export puis l'import dans l'espace connecté.

## Fonctionnement

- Les acquis sont fusionnés : une copie moins avancée ne supprime pas les modules validés.
- L'étape la plus avancée d'un module est conservée entre appareils.
- Les réponses et le nom de bilan sont sauvegardés avec la progression.
- Les visiteurs ne peuvent ni lister les progressions ni accéder à celle d'un autre compte.
- La réinitialisation exige une connexion au serveur et s'applique au compte. Un numéro de génération empêche une ancienne copie locale de restaurer un parcours réinitialisé.
- En cas d'indisponibilité, la copie locale reste conservée. Un état indique si la synchronisation est bloquée, en attente ou réussie.
- La progression reste pédagogique, sans certification sécurisée.

## Recette requise après activation

Vérifier un module sur ordinateur puis sa présence sur téléphone, faire l'inverse, tester deux comptes distincts et vérifier qu'ils ne voient pas les données de l'autre. Tester également une interruption réseau puis la reconnexion. Vérifier le refus d'une lecture/écriture `progress/UID_B` depuis le compte A.

La syntaxe JavaScript et la fusion des acquis ont été testées localement. Les règles n'ont pas été exécutées sur un émulateur ici, et aucun test avec vos comptes sur deux appareils n'a été effectué. La recette réelle est nécessaire après la publication des règles.
