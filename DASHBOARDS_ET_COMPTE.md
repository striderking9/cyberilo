# Cyberilo — tableaux de bord et compte

## Ce qui change

L’espace utilisateur est organisé autour d’une barre latérale : vue d’ensemble, formation, résultats, historique, documents et profil. L’accueil donne priorité au module et à l’étape à reprendre. Les résultats affichés proviennent de la progression et des activités réellement enregistrées. Aucune statistique de participants n’est inventée.

L’administration possède une navigation distincte : vue d’ensemble, contenus, versions et avis. L’atelier conserve ses formulaires bilingues, avec des sections repliables pour les leçons, messages clés, exercices et quiz. Un avertissement protège les modifications non enregistrées lors d’un départ par lien ou d’une fermeture de page. Les versions et les avis disposent de pages séparées ; les avis peuvent être filtrés par note.

Le menu du compte est accessible depuis l’en-tête du site, des cours et des tableaux de bord. Il mène au dashboard, au profil, à l’administration lorsque le rôle le permet, et à la déconnexion. La navigation au clavier du menu utilise les flèches et Échap. Le menu latéral mobile peut être fermé par la croix, Échap ou le voile extérieur.

## Mon profil

Champs :

- Nom à afficher, requis, limité à 80 caractères : utilisé pour l’accueil et le bilan, sans modifier Google.
- Langue préférée : français ou anglais.
- Apparence : clair, sombre ou selon l’appareil. Le mode appareil suit aussi les changements du système.
- Adresse Google en lecture seule.

Ces préférences sont conservées dans `learning/{uid}.payload.profile`. Elles sont fusionnées entre appareils en conservant la version datée la plus récente. La progression existante garde sa structure et ses clés de stockage. Le profil ne demande pas de téléphone, date de naissance, adresse ou photo.

## Déconnexion

Le bouton Me déconnecter ouvre un écran dédié, avec le compte concerné et l’option de rester dans l’espace personnel. Lors de la confirmation, le site tente de terminer les sauvegardes déjà en attente, avec une attente limitée. Si le serveur ne confirme pas la sauvegarde, une copie locale reste conservée et un export est proposé avant de se déconnecter quand même. La déconnexion ne supprime ni le compte ni le parcours et ne ferme pas une éventuelle session Google ouverte dans un autre onglet.

Après déconnexion, le navigateur est redirigé vers la page de connexion (#/compte). Les routes privées redemandent une connexion. Une connexion réussie retrouve la destination privée demandée, ou le tableau de bord par défaut. Voir AUDIT_SESSIONS_FEEDBACK_CATALOGUE.md pour la dernière révision.

## Installer cette mise à jour

1. Exporter la progression sur les appareils importants par précaution.
2. Mettre à jour les fichiers du site depuis ce ZIP. Le nouveau `public/workspace.css` doit être présent. Les changements principaux sont dans `public/index.html`, `public/app.js`, `public/experience.js`, `public/progress-sync.js`, `public/workspace.css` et `firestore.rules`. Inclure aussi les scripts de vérification mis à jour.
3. Conserver les paramètres Firebase de votre installation dans `public/config.js` si vous les avez ajustés depuis le précédent ZIP. Le paquet conserve les mêmes valeurs publiques que la version précédente.
4. Publier l’intégralité de `firestore.rules` dans Firebase : le nouveau champ de profil doit être autorisé. `firebase.json` reste inchangé.
5. Conserver les habilitations `admins/{uid}` existantes. Cette mise à jour ne crée pas d’administrateur et ne donne pas accès aux progressions individuelles à l’administration.
6. Attendre la réussite du déploiement GitHub Pages, puis recharger le site sur les deux appareils.

Sans publication des nouvelles règles, le profil et les nouvelles sauvegardes de l’historique peuvent être refusés. Le site en conserve une copie locale mais la synchronisation ne doit pas être considérée comme validée.

## Vérifications

- Syntaxe de tous les scripts, huit modules et ressources : réussies.
- Sept tests de fusion de la progression : réussis.
- Tests du catalogue, de l’historique et de la fusion des préférences les plus récentes : réussis.
- Vérification navigateur dans des fixtures locales isolées : dashboards utilisateur et admin, menu de compte, modification du nom et des préférences, interface français/anglais, mode sombre, sections de l’éditeur et navigation mobile à 390 px.
- Vérification locale du parcours de déconnexion avec une session simulée : avertissement de sauvegarde non confirmée et écran de sortie. La session Google réelle n’a pas été utilisée pour ce test.

Restent à vérifier dans votre environnement : publication des règles, synchronisation du profil entre deux comptes/appareils de test, connexion/déconnexion Google réelle, accès admin et publication des contenus. Les règles n’ont pas été exécutées ici sur émulateur. Ce ZIP n’a pas été déployé sur votre dépôt GitHub.
