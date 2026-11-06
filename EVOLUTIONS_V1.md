> Mise à jour des dashboards et du compte : consulter aussi DASHBOARDS_ET_COMPTE.md.

# Cyberilo — V1 enrichie

## Ce qui a été ajouté

- Un message fictif à examiner dans chaque module, avec trois éléments sélectionnables, correction expliquée et scénario à embranchements. Les choix peuvent conduire à vérifier, poursuivre ou s’arrêter et sécuriser le compte. Aucun lien dangereux ni code actif.
- Un quiz de départ, sans effet sur le déblocage des modules, et des révisions ciblées selon les résultats récents.
- Mon espace : parcours commencé, progression, résultats, historique des activités récentes et documents. L’historique commence avec cette mise à jour ; les modules déjà validés restent acquis.
- Une fiche mémo téléchargeable au format HTML autonome, lisible hors ligne et imprimable en PDF depuis le navigateur, et un export CSV de l’historique. La carte PNG de fin de parcours reste disponible.
- Un atelier d’administration avec formulaires : contenu des leçons, messages clés, quiz et exercice interactif, en français et en anglais. Brouillons, publication atomique des deux langues, historique des versions et reprise d’une ancienne version en brouillon. Ajout de modules à la fin du socle, jusqu’à 24 ; les identifiants existants ne sont pas réordonnés.
- Consultation des 50 derniers avis dans l’administration, réservée aux comptes autorisés.
- Huit modules rédigés en français et en anglais, sélecteur de langue persistant, interface du parcours et espace personnel bilingues. La langue choisie ne change pas les acquis. Le profil de compte permet aussi de choisir le nom à afficher et le thème. Les contenus publiés doivent être maintenus dans les deux langues.

La présente version conserve un seul parcours de formation. Un catalogue de formations indépendantes et des offres commerciales ne sont pas inclus. L’audio enregistré et d’autres langues restent à prévoir.

## Mise en service : étapes obligatoires

1. Exporter les progressions existantes par précaution. Ne pas effacer les données des navigateurs.
2. Remplacer le contenu du dépôt GitHub existant par les fichiers de ce paquet, y compris les nouveaux fichiers du dossier public et le workflow. Conserver votre adresse actuelle et le même projet Firebase.
3. Dans Firebase, projet cyber-reflexe-452a9, base Firestore (default), publier **l’intégralité du nouveau fichier firestore.rules**. Les anciennes règles ne suffisent pas pour l’historique, les contenus administrables et les rôles.
4. Dans Authentication → Users, retrouver votre compte Google et copier son UID exact.
5. Dans Firestore → Données, créer manuellement la collection `admins`, puis le document dont l’identifiant est votre UID exact. Ajouter le champ `enabled` de type **boolean**, valeur **true**. Ne pas utiliser l’adresse e-mail comme identifiant du document.
6. Vous déconnecter puis vous reconnecter au site. Ouvrir `#/espace` ; le lien Administration apparaîtra pour votre compte. L’adresse `#/admin` est également disponible.
7. Pour retirer un administrateur, modifier son document `admins/{uid}` avec `enabled: false` depuis la console. Aucun visiteur ne peut créer ou modifier ces rôles depuis l’application. Désigner uniquement les personnes chargées de gérer les contenus et les avis privés.

Aucun secret administrateur n’est placé dans le navigateur. La protection repose sur Firebase Authentication et les règles Firestore ; cacher un bouton ne constitue pas le contrôle d’accès.

## Publier un contenu

- Ouvrir Administration et choisir le module et sa langue.
- Modifier les champs. Passer à une autre langue ou un autre module conserve les changements en mémoire dans l’atelier.
- Cliquer **Enregistrer le brouillon** avant de quitter. Un brouillon peut être incomplet ; il n’est jamais affiché aux participants.
- Compléter les deux langues et vérifier toutes les questions, leurs bonnes réponses et les indices de l’exercice.
- Cliquer **Publier les deux langues**, puis confirmer. Un contrôle bloque les champs manquants, les quiz mal formés et les exercices sans indice.
- La publication crée une nouvelle version. La première publication archive aussi le socle initial. Une publication concurrente est refusée pour éviter d’écraser le travail d’un autre administrateur.
- Les participants reçoivent les nouveaux contenus en rechargeant le site. Un cours ouvert n’est pas remplacé au milieu d’une interaction.
- Pour restaurer : Afficher les versions → Reprendre en brouillon → vérifier → Publier les deux langues. Une ancienne version n’écrase jamais directement le site.

Pour ajouter un module, cliquer Ajouter un module bilingue, compléter les deux langues et publier. Le module est ajouté après les précédents. Les textes ne peuvent pas contenir du HTML actif : ils sont affichés comme du texte. Ne pas déplacer les identifiants existants ; ils servent à conserver les acquis.

## Avis et confidentialité

Cette révision active `feedbackEnabled: true`. Publier les nouvelles règles, définir la durée de conservation et effectuer un envoi de test. Les avis sont privés, relisibles et modifiables par leur auteur après validation de la formation ; les administrateurs peuvent les consulter. Voir AUDIT_SESSIONS_FEEDBACK_CATALOGUE.md.

Les documents privés sont séparés :

| Chemin | Usage | Accès du site |
| --- | --- | --- |
| progress/{uid} | Modules et étapes | Uniquement le compte concerné |
| learning/{uid} | Diagnostic, révisions, exercices et historique | Uniquement le compte concerné |
| admins/{uid} | Habilitation administrateur | Lecture de son propre rôle ; écriture uniquement via console privilégiée |
| content/catalog | Contenus publiés français/anglais | Lecture publique ; écriture administrateur |
| contentDrafts/catalog | Brouillon bilingue | Administrateurs uniquement |
| contentVersions/{version} | Archives des contenus | Lecture administrateur ; création sans modification ultérieure |
| feedback/{uid} | Avis des participants | Lecture/écriture du compte concerné ; lecture administrateur |

La synchronisation reste silencieuse. Un problème durable de sauvegarde peut être signalé dans Mon compte ou Mon espace. L’historique conserve au plus 200 activités ; l’affichage en présente les 30 dernières. Une copie locale permet de continuer si le service distant est indisponible. Une connexion au même compte reste nécessaire pour retrouver les données sur un autre appareil.

La réinitialisation du parcours ne supprime pas l’historique des activités. Pour une demande d’effacement complet, supprimer aussi `learning/{uid}`, `progress/{uid}` et `feedback/{uid}` dans la console, ainsi que l’utilisateur Authentication si demandé. Supprimer uniquement Authentication ne suffit pas.

## Vérifications réalisées et recette à terminer

- Syntaxe de tous les scripts, structure des modules et ressources locales : vérifiées.
- Tests de fusion des acquis antérieurs : réussis.
- Tests du catalogue bilingue, refus de quiz et d’indices mal formés, union des événements entre appareils, maintien des résultats les plus récents : réussis.
- Navigateur, en mode local de test : diagnostic, recommandations ciblées, scénario à embranchements, validation d’un module en anglais et déblocage, présence des résultats dans l’historique, changement de langue et affichage mobile à 390 px vérifiés.
- Éditeur de contenu : champs structurés, conservation en mémoire des changements lors du passage d’une langue à l’autre et ajout d’un module testés dans une fixture locale isolée, sans accès administrateur réel.

Restent à vérifier sur votre projet après publication des règles : connexion réelle, synchronisation sur deux appareils, sauvegarde et publication d’un brouillon, archivage/restauration, consultation des avis et refus d’accès pour un compte non administrateur. Les règles n’ont pas été exécutées ici sur un émulateur Firebase. Le paquet n’a pas été déployé sur votre dépôt GitHub.

Le bilan et les résultats restent déclaratifs : cette version ne fournit pas de certification officielle ni de contrôle antifraude des examens.
