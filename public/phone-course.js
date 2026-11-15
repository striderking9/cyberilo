'use strict';

window.CYBER_TRAININGS.push({
  id: 'proteger-son-telephone',
  title: {
    fr: 'Protéger son téléphone et ses données',
    en: 'Protect your phone and your data'
  },
  description: {
    fr: 'Six ateliers pour sécuriser votre appareil, vérifier vos sauvegardes et savoir quoi faire si votre téléphone disparaît.',
    en: 'Six workshops to secure your device, check your backups and know what to do if your phone goes missing.'
  },
  category: { fr: 'Téléphone et données', en: 'Phone and data' },
  level: { fr: 'Pratique · Tous publics', en: 'Practical · Everyone' },
  access: 'free',
  status: 'published',
  exerciseMode: 'settings',
  fr: [
    {
      id: 0,
      title: 'Verrouiller son téléphone',
      desc: 'Limiter ce que quelqu’un peut voir ou faire sans déverrouiller l’appareil.',
      time: 5,
      heading: 'Que montre votre écran quand vous vous éloignez ?',
      intro: 'Vous posez votre téléphone quelques minutes. Un verrouillage automatique court protège l’accès à l’appareil et évite de compter sur le souvenir de verrouiller à chaque fois.',
      detail: 'Choisissez un code difficile à deviner et évitez les dates de naissance ou les suites évidentes. Si vous utilisez l’empreinte ou le visage, votre code de déverrouillage reste un moyen d’accès. Gardez-le privé.',
      body: [
        'Le code de l’écran protège l’accès au téléphone. Le code PIN de la carte SIM protège l’usage de la ligne sur cette carte. Les deux réglages répondent à des risques différents.',
        'Un écran verrouillé peut encore montrer des messages. Réglez les aperçus pour que le contenu sensible apparaisse seulement après déverrouillage, ou masquez-le entièrement pour certaines applications.',
        'Verrouiller rapidement l’écran est particulièrement utile quand vous prêtez brièvement votre téléphone, le laissez sur un bureau ou le transportez dans un lieu fréquenté.'
      ],
      steps: [
        'Utiliser un code de déverrouillage difficile à deviner et le garder privé.',
        'Choisir un délai de verrouillage automatique court.',
        'Vérifier les aperçus sur l’écran verrouillé avec une notification de test.'
      ],
      keyMessages: [
        ['Le code reste important.', 'Il donne accès à l’appareil même quand la biométrie est activée.'],
        ['Verrouillé ne veut pas dire invisible.', 'Si les aperçus sont autorisés, un message peut être lu sans ouvrir le téléphone.'],
        ['Testez le résultat.', 'Verrouillez l’écran et demandez à un proche d’envoyer un message banal pour voir ce qui s’affiche.']
      ],
      scenario: 'Au bureau, votre écran se verrouille seulement après dix minutes. Même verrouillé, il montre tout le contenu de vos messages.',
      prompt: 'Quel réglage protège mieux vos échanges ?',
      practice: {
        options: ['Raccourcir le délai et masquer le contenu des aperçus.', 'Activer l’empreinte et conserver le délai et les aperçus actuels.'],
        correct: 0
      },
      reveal: 'Réduisez le délai de verrouillage et masquez les aperçus sensibles. Testez ensuite ce qu’une autre personne voit sans le code.',
      example: 'Gardez l’indication « Nouveau message » sur l’écran verrouillé et affichez le texte après déverrouillage, si votre appareil propose ce réglage.',
      takeaway: 'Vérifiez trois éléments ensemble : le code, le délai et ce que l’écran affiche une fois verrouillé.',
      q: [
        ['Que protège le code de déverrouillage ?', ['L’accès au téléphone.', 'Uniquement l’utilisation de la carte SIM.'], 0, 'Le code de l’écran contrôle l’accès à l’appareil. Le PIN SIM concerne la carte SIM.'],
        ['Quel réglage empêche un voisin de lire une notification sur un écran verrouillé ?', ['Raccourcir le délai et laisser les aperçus complets.', 'Masquer le contenu des aperçus sur l’écran verrouillé.'], 1, 'Le réglage des aperçus détermine si le contenu est visible sans déverrouiller.'],
        ['Après avoir ajouté votre empreinte, que faire du code ?', ['Le conserver difficile à deviner et privé.', 'Choisir un code plus simple puisque l’empreinte sert la plupart du temps.'], 0, 'Le code reste un moyen d’accès et peut être demandé lorsque la biométrie est indisponible.']
      ],
      lab: [
        'Écran de réglages fictif', 'Vérifiez la protection avant de poser le téléphone sur un bureau partagé.',
        ['Verrouillage automatique après dix minutes.', 'Code unique, gardé privé.', 'Texte complet des messages visible sur l’écran verrouillé.'],
        [0, 2],
        ['Un délai court réduit la période où l’appareil reste accessible.', 'Un code difficile à deviner et tenu secret est un réglage à conserver.', 'Masquez les aperçus sensibles pour protéger le contenu des messages.'],
        'Réglez un délai court, gardez un code sûr et testez les notifications après verrouillage.'
      ]
    },
    {
      id: 1,
      title: 'Installer les bonnes applications',
      desc: 'Contrôler la provenance d’une application et lui accorder les accès dont elle a besoin.',
      time: 6,
      heading: 'Une application doit justifier les accès qu’elle demande.',
      intro: 'Pour un besoin courant, ouvrez le magasin officiel de votre appareil. Vérifiez le nom exact de l’application et son éditeur avant de l’installer, surtout si plusieurs résultats se ressemblent.',
      detail: 'Une autorisation permet à l’application d’utiliser une fonction ou de consulter certaines données. La caméra peut servir à scanner un document. L’accès à tout le carnet d’adresses mérite une explication pour ce même usage.',
      body: [
        'Commencez par la fonction dont vous avez besoin. Cherchez si elle existe déjà sur le téléphone ou dans une application de confiance que vous utilisez.',
        'Utilisez l’autorisation la plus limitée qui suffit, selon les options disponibles : seulement pendant l’utilisation, pour quelques photos, ou pour cette fois. Accordez à nouveau un accès plus tard si une fonction utile le nécessite.',
        'Consultez les réglages de confidentialité pour revoir les accès accordés. Retirez les autorisations inutiles et désinstallez les applications dont vous n’avez plus besoin, après avoir récupéré les données locales que vous voulez garder.'
      ],
      steps: [
        'Trouver l’application dans le magasin officiel et vérifier son éditeur.',
        'N’accorder que les autorisations utiles à la tâche.',
        'Revoir les accès dans les paramètres de confidentialité.'
      ],
      keyMessages: [
        ['Vérifiez l’éditeur.', 'Le nom et l’icône peuvent se ressembler d’une application à l’autre.'],
        ['Reliez chaque accès à un besoin.', 'Demandez-vous ce qui cesserait de fonctionner si vous refusiez cette autorisation.'],
        ['Les accès se révisent.', 'Vous pouvez retirer une permission plus tard dans les réglages du téléphone.']
      ],
      scenario: 'Vous voulez numériser un reçu. L’application de scan demande la caméra, tous vos contacts et votre position précise en permanence.',
      prompt: 'Qu’accordez-vous pour numériser ce reçu ?',
      practice: {
        options: ['Tout accepter pour être sûr que le scan fonctionne.', 'Autoriser la caméra pendant le scan et refuser les accès sans rapport avec la tâche.'],
        correct: 1
      },
      reveal: 'L’appareil photo suffit à ce scan. Si l’application exige d’autres accès sans les expliquer, utilisez une fonction intégrée ou choisissez une autre application.',
      example: 'Pour joindre une photo à un formulaire, choisissez la photo voulue avec le sélecteur du téléphone, si l’option est proposée.',
      takeaway: 'Vérifiez l’éditeur et réduisez les autorisations à ce qui est nécessaire pour la fonction choisie.',
      q: [
        ['Deux applications ont presque le même nom. Que vérifier ?', ['La popularité de l’application et le nombre d’avis seulement.', 'Le nom de l’éditeur et la fiche du magasin officiel.'], 1, 'Une fiche officielle et un éditeur identifiable aident à retrouver l’application voulue.'],
        ['Une application de scan veut votre position en permanence. Que faire ?', ['Refuser cet accès pour le scan et vérifier pourquoi il est demandé.', 'Tout accepter car elle utilise aussi la caméra.'], 0, 'Accordez chaque autorisation selon la tâche, indépendamment des autres accès demandés.'],
        ['Où revoir une autorisation déjà accordée ?', ['Uniquement dans la fiche du magasin.', 'Dans les paramètres du téléphone, sous les applications ou la confidentialité.'], 1, 'Les réglages du téléphone permettent généralement de consulter et de modifier les permissions.']
      ],
      lab: [
        'Application de scan fictive', 'Vous souhaitez numériser un reçu. Examinez les autorisations proposées.',
        ['Caméra seulement pendant l’utilisation.', 'Accès à tout le carnet d’adresses.', 'Localisation précise même lorsque l’application est fermée.'],
        [1, 2],
        ['La caméra est cohérente avec le scan. Limiter l’accès à l’utilisation suffit ici.', 'Les contacts ne sont pas utiles pour numériser un reçu.', 'Suivre la position en arrière-plan dépasse le besoin décrit.'],
        'Autorisez la caméra pour le scan et refusez les deux accès excessifs. Cherchez une autre solution si l’application les impose.'
      ]
    },
    {
      id: 2,
      title: 'Faire les mises à jour',
      desc: 'Vérifier les mises à jour du téléphone et des applications depuis les bons menus.',
      time: 5,
      heading: 'Vérifiez le système et les applications.',
      intro: 'Une mise à jour peut corriger une faille, c’est-à-dire un défaut qu’une personne malveillante pourrait exploiter. Les corrections du système et celles de vos applications arrivent par des voies différentes.',
      detail: 'Cherchez les mises à jour du système dans les réglages du téléphone, puis celles des applications dans leur magasin officiel. Activez les mises à jour automatiques si cela vous convient et vérifiez qu’elles ont bien été installées.',
      body: [
        'Une mise à jour de sécurité peut être importante même quand l’écran et les menus ont exactement la même apparence.',
        'Si le téléchargement échoue, vérifiez l’espace disponible, le niveau de charge et la connexion. Prévoyez un réseau de confiance et un moment où vous pouvez laisser le téléphone redémarrer.',
        'Si un modèle ne reçoit plus de correctifs, vérifiez sa durée de prise en charge auprès du fabricant. Préparez la migration de vos usages sensibles vers un appareil encore pris en charge.'
      ],
      steps: [
        'Rechercher une mise à jour du système dans les réglages du téléphone.',
        'Vérifier les mises à jour des applications dans le magasin officiel.',
        'Contrôler le résultat de l’installation et prévoir un remplacement si les correctifs s’arrêtent.'
      ],
      keyMessages: [
        ['Deux vérifications distinctes.', 'Mettre à jour le système ne vous dispense pas de vérifier les applications.'],
        ['Préparez l’installation.', 'Prévoyez assez d’espace, une connexion de confiance et du temps pour le redémarrage.'],
        ['Vérifiez la prise en charge.', 'L’absence de mise à jour proposée peut vouloir dire que le fabricant a cessé de fournir des correctifs.']
      ],
      scenario: 'Votre téléphone propose un correctif système. Le magasin indique aussi que plusieurs applications attendent une mise à jour.',
      prompt: 'Comment traitez-vous ces deux notifications ?',
      practice: {
        options: ['Mettre à jour le système dans les réglages, puis vérifier les applications dans le magasin.', 'Mettre à jour une application et supposer que le système suivra.'],
        correct: 0
      },
      reveal: 'Vérifiez les deux emplacements. Les mises à jour des applications et les correctifs du téléphone ne se remplacent pas.',
      example: 'Si vos données mobiles sont limitées, programmez le téléchargement sur une connexion Wi-Fi de confiance dès que vous y avez accès.',
      takeaway: 'Vérifiez le système et les applications, puis confirmez que les mises à jour se sont installées.',
      q: [
        ['Pourquoi installer un correctif qui ne change pas les menus ?', ['La sécurité s’améliore seulement si l’interface change.', 'Il peut corriger une faille de sécurité sans changer l’interface.'], 1, 'Les corrections de sécurité sont souvent invisibles dans l’usage quotidien.'],
        ['Où chercher la mise à jour du système ?', ['Dans les réglages du téléphone, via le mécanisme du fabricant.', 'Dans le magasin, sur la fiche d’une application.'], 0, 'Le mécanisme prévu sur l’appareil permet d’obtenir les mises à jour adaptées au modèle.'],
        ['Un ancien modèle ne reçoit plus de correctifs. Quel geste préparer ?', ['Se fier uniquement aux mises à jour des applications pour les usages sensibles.', 'Migrer les usages sensibles vers un appareil encore pris en charge dès que possible.'], 1, 'Mettre à jour les applications ne corrige pas les failles d’un système qui n’est plus pris en charge.']
      ],
      lab: [
        'Bilan de maintenance fictif', 'Repérez ce qui demande une action avant de réutiliser le téléphone pour des tâches sensibles.',
        ['Le téléphone est connecté à un réseau de confiance et suffisamment chargé.', 'Le dernier correctif système proposé attend toujours le redémarrage.', 'Le magasin affiche trois applications à mettre à jour.'],
        [1, 2],
        ['La connexion et la charge sont adaptées à l’installation.', 'Certains correctifs ne sont appliqués qu’après le redémarrage.', 'Terminez aussi les mises à jour des applications depuis le magasin.'],
        'Appliquez le correctif système, redémarrez si demandé, puis vérifiez les applications.'
      ]
    },
    {
      id: 3,
      title: 'Sauvegarder et vérifier ses copies',
      desc: 'Confirmer que vos fichiers importants pourront être retrouvés si le téléphone tombe en panne.',
      time: 6,
      heading: 'Savez-vous où retrouver vos fichiers si le téléphone ne s’allume plus ?',
      intro: 'Commencez par les éléments que vous ne pourriez pas recréer facilement : contacts, photos, documents et données d’applications essentielles. Vérifiez où chacun est conservé et quand la dernière copie a réussi.',
      detail: 'La synchronisation garde des données à jour entre appareils et peut répercuter une suppression. Une copie indépendante de vos fichiers essentiels permet de revenir à un état antérieur. Protégez cette copie et conservez-la séparément du téléphone.',
      body: [
        'Une sauvegarde de l’appareil peut exclure certaines données. Sur Android, les données d’une application dépendent de la prise en charge par son éditeur. Sur iPhone, Photos iCloud fonctionne séparément de la sauvegarde de l’appareil quand la synchronisation est activée.',
        'Vérifiez la date et ce qui est inclus. Ouvrez un document de test depuis une copie sur un autre appareil ou dans un autre dossier, sans réinitialiser le téléphone.',
        'Gardez un moyen de récupérer le compte utilisé pour la sauvegarde si vous perdez le téléphone. Pour vos fichiers essentiels, une copie protégée sur un support séparé peut compléter la sauvegarde du système.'
      ],
      steps: [
        'Lister les contacts, photos, documents et données d’applications à conserver.',
        'Vérifier le contenu et la date de la dernière sauvegarde réussie.',
        'Ouvrir une copie de test et conserver un moyen de récupération indépendant du téléphone.'
      ],
      keyMessages: [
        ['Regardez ce qui est couvert.', 'Une sauvegarde peut être activée alors qu’une application ou un dossier suit une autre procédure.'],
        ['Synchroniser et sauvegarder sont deux usages.', 'Une modification ou une suppression peut se répercuter sur les appareils synchronisés.'],
        ['Testez avec un fichier sans enjeu.', 'Ouvrez une copie avant d’en avoir besoin.']
      ],
      scenario: 'Vous changez de téléphone. Les photos sont visibles sur le nouveau, mais vous n’avez pas encore retrouvé des documents et des données d’applications.',
      prompt: 'Quand pouvez-vous rendre l’ancien téléphone ?',
      practice: {
        options: ['Tout de suite, puisque les photos sont déjà visibles.', 'Après avoir vérifié que les données importantes sont accessibles et qu’une copie fonctionne.'],
        correct: 1
      },
      reveal: 'Vérifiez les catégories de données une par une et ouvrez un fichier de test sur le nouvel appareil avant de renoncer à l’ancien.',
      example: 'Créez un document de test, copiez-le dans votre sauvegarde habituelle et essayez de le retrouver et de l’ouvrir sur un appareil de confiance.',
      takeaway: 'Avant une migration ou une réinitialisation, contrôlez ce qui a été copié et ouvrez au moins un fichier depuis sa copie.',
      q: [
        ['Qu’indique une sauvegarde activée ?', ['La couverture dépend des réglages et des applications, qu’il faut vérifier.', 'Toutes les données sont forcément récupérables.'], 0, 'Certaines applications ou catégories ont des réglages à part.'],
        ['Pourquoi garder une copie indépendante ?', ['Pour disposer d’un état récupérable si une suppression se propage.', 'Pour que chaque modification soit répliquée sur les appareils synchronisés.'], 0, 'Une copie séparée peut rester disponible lorsque les données synchronisées changent.'],
        ['Quel test est utile sans effacer le téléphone ?', ['Vérifier uniquement que la sauvegarde est activée.', 'Ouvrir un fichier depuis une copie sur un appareil de confiance.'], 1, 'Un test de lecture confirme que vous savez retrouver et ouvrir au moins un fichier sauvegardé.']
      ],
      lab: [
        'Vérification avant remplacement', 'Vous allez rendre votre ancien téléphone. Que reste-t-il à vérifier ?',
        ['Les documents de travail n’ont pas encore été ouverts depuis la copie.', 'Un contact de test a été retrouvé sur le nouvel appareil.', 'La méthode de récupération du compte est uniquement accessible sur l’ancien téléphone.'],
        [0, 2],
        ['Assurez-vous que les fichiers utiles s’ouvrent vraiment depuis leur copie.', 'Ce contact est déjà vérifié. Poursuivez le contrôle des autres catégories.', 'Préparez un moyen d’accès de secours avant de rendre l’appareil.'],
        'Vérifiez les fichiers et les accès avant de rendre ou d’effacer l’ancien téléphone.'
      ]
    },
    {
      id: 4,
      title: 'Partager avec précaution',
      desc: 'Choisir le destinataire, le contenu utile et le bon niveau d’accès.',
      time: 5,
      heading: 'Avant l’envoi, vérifiez qui pourra voir quoi.',
      intro: 'Une photo, une capture ou un document peut contenir plus d’informations que prévu : un numéro, un autre message dans la capture, un visage en arrière-plan ou une localisation.',
      detail: 'Envoyez uniquement la partie nécessaire. Utilisez une copie finale qui ne contient plus les informations à retirer, puis ouvrez-la pour vérifier le résultat. Certains fichiers photo peuvent contenir une localisation dans leurs informations intégrées.',
      body: [
        'Un lien ouvert à toute personne qui le reçoit peut être retransmis. Quand le service le permet, choisissez un accès réservé aux personnes désignées et donnez un droit de lecture si elles n’ont pas besoin de modifier le fichier.',
        'Vérifiez les destinataires avant l’envoi, surtout en présence de groupes ou de noms similaires. Pour un document professionnel, utilisez le canal prévu par votre organisation.',
        'Quand le partage n’est plus utile, retirez les autorisations si le service le permet. Cette action ferme l’accès au lien, mais ne reprend pas les copies déjà enregistrées.'
      ],
      steps: [
        'Préparer une copie contenant seulement les informations utiles et vérifier ce qu’elle révèle.',
        'Vérifier le destinataire et choisir le niveau d’accès minimal.',
        'Retirer les accès devenus inutiles, en gardant à l’esprit les copies déjà remises.'
      ],
      keyMessages: [
        ['Contrôlez la copie envoyée.', 'Le contenu de l’image et les informations intégrées peuvent révéler des détails différents.'],
        ['Réservez le lien aux destinataires voulus.', 'Un lien public peut circuler au-delà du groupe prévu.'],
        ['Les copies restent chez leurs destinataires.', 'Révoquer un lien empêche l’accès futur par ce lien, sans effacer une copie déjà téléchargée.']
      ],
      scenario: 'Vous devez partager un reçu avec une seule personne. Le fichier contient aussi un numéro privé et le lien proposé est ouvert à tous.',
      prompt: 'Comment préparer l’envoi ?',
      practice: {
        options: ['Envoyer le lien ouvert, tant que le message ne part qu’à une personne.', 'Préparer une copie sans le numéro et limiter l’accès à la bonne personne.'],
        correct: 1
      },
      reveal: 'Ouvrez la copie finale, confirmez l’adresse du destinataire, puis restreignez les droits au besoin réel.',
      example: 'Avant d’envoyer une photo, vérifiez son arrière-plan et, si l’outil le permet, désactivez le partage de sa localisation.',
      takeaway: 'Avant d’envoyer, contrôlez le fichier final, les personnes qui y auront accès et ce qu’elles pourront faire.',
      q: [
        ['Un lien est ouvert à toute personne qui le possède. Que se passe-t-il s’il est transféré ?', ['Seul le premier destinataire pourra toujours l’ouvrir.', 'De nouvelles personnes peuvent accéder au fichier via le lien.'], 1, 'Le réglage du lien détermine qui peut l’ouvrir, indépendamment de votre premier message.'],
        ['Une photo peut-elle indiquer où elle a été prise ?', ['Oui, si des informations de localisation sont intégrées au fichier partagé.', 'Seulement si une adresse est écrite sur la photo.'], 0, 'Le lieu peut être enregistré dans les informations associées au fichier, selon l’appareil et le mode de partage.'],
        ['Retirer l’accès au lien efface-t-il les copies déjà téléchargées ?', ['Oui, retirer l’accès efface aussi les copies enregistrées.', 'Les copies déjà téléchargées peuvent rester accessibles à leurs destinataires.'], 1, 'Une copie déjà enregistrée peut rester accessible à son destinataire.']
      ],
      lab: [
        'Aperçu de partage fictif', 'Un collègue doit seulement lire votre reçu.',
        ['Destinataire vérifié par son adresse habituelle.', 'Lien accessible à toute personne qui le possède.', 'La copie contient encore un numéro privé qui n’est pas nécessaire.'],
        [1, 2],
        ['Vérifier le destinataire permet d’éviter une erreur d’adresse.', 'Restreignez l’accès au collègue et choisissez la lecture seule si elle suffit.', 'Retirez le numéro de la copie finale et rouvrez-la avant l’envoi.'],
        'Partagez la copie minimale avec l’adresse vérifiée et les droits de lecture nécessaires.'
      ]
    },
    {
      id: 5,
      title: 'Réagir à une perte ou à un vol',
      desc: 'Verrouiller à distance, protéger la ligne et choisir quand effacer les données.',
      time: 6,
      heading: 'Protégez l’accès et la ligne dès que possible.',
      intro: 'Avant que cela arrive, vérifiez le service de localisation de votre appareil et un moyen d’accéder à votre compte sans le téléphone. Rangez son numéro de série ou son IMEI en lieu sûr si vous devez le déclarer.',
      detail: 'Depuis un appareil de confiance, ouvrez Localiser sur iPhone ou le service Localiser de Google (Find Hub) sur Android et utilisez le verrouillage ou le mode perdu s’il est disponible. La localisation et le délai du verrouillage dépendent de la configuration et de la connexion de l’appareil.',
      body: [
        'Si l’appareil semble avoir été volé, faites un signalement aux autorités locales. Si la carte indique un lieu inconnu, évitez de vous y rendre pour récupérer le téléphone vous-même.',
        'Contactez rapidement l’opérateur pour sécuriser la ligne. Si le téléphone donnait accès à des services financiers ou professionnels, prévenez les services concernés par leurs canaux habituels et vérifiez votre activité.',
        'L’effacement à distance supprime les données présentes sur l’appareil et peut limiter sa localisation. Vérifiez vos possibilités de récupération et les conséquences avant de le déclencher. Sur iPhone, laissez l’appareil dans Localiser pour conserver le verrouillage d’activation.'
      ],
      steps: [
        'Depuis un appareil de confiance, utiliser le mode perdu ou le verrouillage à distance si disponible.',
        'Sécuriser la ligne avec l’opérateur et alerter les services concernés par le vol.',
        'Évaluer les copies, la situation et les conséquences de l’effacement à distance avant de décider.'
      ],
      keyMessages: [
        ['Préparez un accès de secours.', 'Vous devez pouvoir retrouver le compte de localisation sans dépendre uniquement du téléphone perdu.'],
        ['Protégez aussi les usages liés à la ligne.', 'Opérateur, portefeuille mobile et service professionnel peuvent chacun agir sur leurs accès.'],
        ['Effacer est une décision à part.', 'Les données locales seront supprimées et la localisation peut changer selon l’appareil.']
      ],
      scenario: 'Vous ne retrouvez plus votre téléphone à la sortie d’un trajet. Il sert à votre portefeuille mobile et vous voyez une position que vous ne connaissez pas.',
      prompt: 'Quelle est la meilleure première réaction ?',
      practice: {
        options: ['Utiliser le mode perdu, contacter l’opérateur et le portefeuille mobile, puis signaler le vol si nécessaire.', 'Aller seul à l’adresse affichée et attendre de voir si la ligne reste active.'],
        correct: 0
      },
      reveal: 'Ne prenez pas de risque sur place. Sécurisez l’appareil, la ligne et les services concernés depuis un canal fiable.',
      example: 'Si l’appareil est hors ligne, le verrouillage ou l’effacement demandé peut attendre une reconnexion. Sécurisez la ligne sans attendre la confirmation du téléphone.',
      takeaway: 'Préparez un moyen de retrouver votre compte. En cas de perte, sécurisez l’appareil et la ligne, puis évaluez l’effacement.',
      q: [
        ['Que préparer pendant que vous avez encore votre téléphone ?', ['Un accès de secours au compte et la configuration du service de localisation.', 'Une sauvegarde des photos, à elle seule.'], 0, 'L’accès au compte et la localisation doivent être disponibles pour agir depuis un autre appareil.'],
        ['Un téléphone qui sert au paiement mobile disparaît. Qui contacter rapidement ?', ['L’opérateur et le service de paiement, par leurs canaux habituels.', 'Uniquement le fabricant du téléphone.'], 0, 'Protéger la ligne et prévenir le service financier limite les usages non autorisés.'],
        ['Que faut-il vérifier avant l’effacement à distance ?', ['Uniquement si une demande de verrouillage a déjà été envoyée.', 'Ce que vous pourrez récupérer et l’effet de l’effacement sur votre appareil.'], 1, 'L’effacement supprime les données locales et peut modifier la possibilité de localiser l’appareil.']
      ],
      lab: [
        'Téléphone introuvable', 'Trois actions vous sont proposées. Repérez celles qu’il faut revoir.',
        ['Se rendre seul au point affiché pour reprendre le téléphone.', 'Activer le mode perdu depuis un appareil de confiance et appeler l’opérateur.', 'Effacer immédiatement sans vérifier les copies ni les conséquences.'],
        [0, 2],
        ['Une position sur une carte ne justifie pas de se mettre en danger.', 'Sécuriser l’appareil et la ligne sont des démarches immédiates adaptées.', 'Vérifiez la sauvegarde et l’effet de l’effacement avant de prendre cette décision.'],
        'Sécurisez l’appareil et la ligne, informez les services concernés et prenez une décision distincte pour l’effacement.'
      ]
    }
  ],
  en: [
    {
      id: 0,
      title: 'Lock your phone',
      desc: 'Limit what someone can see or do before unlocking your device.',
      time: 5,
      heading: 'What does your screen show when you step away?',
      intro: 'You put down your phone for a few minutes. A short auto-lock delay protects access to the device even if you forget to lock it yourself.',
      detail: 'Choose a passcode that is hard to guess. Avoid birthdays and obvious sequences. If you use your fingerprint or face to unlock the phone, the passcode can still provide access. Keep it private.',
      body: [
        'The screen passcode protects access to your phone. A SIM PIN protects the use of your line on that SIM card. The two settings address different risks.',
        'A locked screen can still show messages. Set previews to show sensitive content only after unlocking, or hide it entirely for some apps.',
        'Fast auto-lock is useful when you briefly lend your phone, leave it on a desk or carry it through a busy place.'
      ],
      steps: [
        'Use a hard-to-guess passcode and keep it private.',
        'Choose a short auto-lock delay.',
        'Check what appears on the lock screen with a test notification.'
      ],
      keyMessages: [
        ['Your passcode matters.', 'It can unlock the device even when biometrics are enabled.'],
        ['A locked screen can still show information.', 'If previews are enabled, someone could read a message without unlocking the phone.'],
        ['Check the result.', 'Lock the screen and have someone send an ordinary message to see what appears.']
      ],
      scenario: 'At work, your screen locks only after ten minutes. Even when locked, it shows the full text of your messages.',
      prompt: 'Which settings better protect your messages?',
      practice: {
        options: ['Shorten the delay and hide message previews.', 'Enable fingerprint unlock and keep the current delay and previews.'],
        correct: 0
      },
      reveal: 'Shorten the auto-lock delay and hide sensitive previews. Then check what another person can see without the passcode.',
      example: 'Keep a “New message” notice on your lock screen, with the text shown after unlocking, if your device offers that setting.',
      takeaway: 'Check three things together: your passcode, the auto-lock delay and what the locked screen still shows.',
      q: [
        ['What does the screen passcode protect?', ['Access to the phone.', 'Only use of the SIM card.'], 0, 'The screen passcode controls access to the device. A SIM PIN applies to the SIM card.'],
        ['Which setting stops someone reading a message on your locked screen?', ['Shorten the auto-lock delay and keep full previews.', 'Hide the content of lock screen previews.'], 1, 'Preview settings determine whether message content is visible before unlocking.'],
        ['After adding fingerprint unlock, what should you do with the passcode?', ['Keep it hard to guess and private.', 'Switch to a simpler code because you use your fingerprint most of the time.'], 0, 'The passcode can still unlock the device and may be needed when biometrics are unavailable.']
      ],
      lab: [
        'Simulated settings screen', 'Check your settings before leaving the phone on a shared desk.',
        ['Auto-lock after ten minutes.', 'Unique passcode, kept private.', 'Full message text visible on the lock screen.'],
        [0, 2],
        ['A short delay reduces the time your phone stays accessible.', 'Keep the hard-to-guess passcode private.', 'Hide sensitive previews to protect message content.'],
        'Choose a short delay, keep a secure passcode and test notifications after locking.'
      ]
    },
    {
      id: 1,
      title: 'Install apps wisely',
      desc: 'Check where an app comes from and give it the access it needs.',
      time: 6,
      heading: 'An app should have a reason for each permission.',
      intro: 'For everyday apps, open your device’s official store. Check the app name and developer before installing, especially when search results look similar.',
      detail: 'Permissions let an app use certain features or look at certain data. A scanner may need the camera. Access to your entire address book needs a clear reason for the same task.',
      body: [
        'Start with the feature you need. Check whether it is already available on the phone or in a trusted app you use.',
        'Choose the narrowest access that works when available, such as access while using the app, selected photos or a one-time permission. You can allow more access later if a feature you need requires it.',
        'Review permissions in your privacy settings. Remove unnecessary access and uninstall apps you no longer use after saving any local data you want to keep.'
      ],
      steps: [
        'Find the app in the official store and check its developer.',
        'Grant only the permissions needed for the task.',
        'Review app permissions in your privacy settings.'
      ],
      keyMessages: [
        ['Check the developer.', 'Different apps may have similar names and icons.'],
        ['Match permissions to the task.', 'Ask which feature would stop working if you declined an access request.'],
        ['Review permissions later.', 'You can revoke a permission in your phone settings.']
      ],
      scenario: 'You want to scan a receipt. The scanner asks for your camera, all contacts and precise location at all times.',
      prompt: 'What access should you grant to scan this receipt?',
      practice: {
        options: ['Allow everything to make sure scanning works.', 'Allow the camera while scanning and decline unrelated access.'],
        correct: 1
      },
      reveal: 'The camera is enough for this scan. If the app requires other access without explaining why, use a built-in feature or choose a different app.',
      example: 'To attach a picture to a form, use the phone’s photo picker to select just that picture if the option is available.',
      takeaway: 'Check the developer and grant the access required for the feature you chose.',
      q: [
        ['Two apps have nearly the same name. What should you check?', ['The app’s popularity and review count alone.', 'The developer and the official store listing.'], 1, 'The official listing and an identifiable developer help you find the intended app.'],
        ['A scanner wants your location at all times. What do you do?', ['Decline that access for scanning and check why it is requested.', 'Allow it because the app also uses the camera.'], 0, 'Assess each permission separately against the task.'],
        ['Where can you review a permission you already granted?', ['Only on the app’s store page.', 'In the phone’s app or privacy settings.'], 1, 'Device settings generally let you view and change permissions.']
      ],
      lab: [
        'Simulated scanner app', 'You want to scan a receipt. Review the requested permissions.',
        ['Camera access only while using the app.', 'Access to your complete contacts list.', 'Precise location even while the app is closed.'],
        [1, 2],
        ['The camera matches the scanning task. Access while using the app is enough here.', 'Scanning a receipt does not require your contacts.', 'Background location goes beyond the described task.'],
        'Allow the camera for the scan and decline the two excessive requests. Choose a different option if the app insists.'
      ]
    },
    {
      id: 2,
      title: 'Keep your phone up to date',
      desc: 'Check for system and app updates in the right places.',
      time: 5,
      heading: 'Check the system and your apps.',
      intro: 'An update can fix a vulnerability, a weakness someone could exploit. System fixes and fixes for individual apps arrive through different channels.',
      detail: 'Look for system updates in your phone settings and app updates in the official store. Enable automatic updates if that suits your situation, and check that they completed.',
      body: [
        'A security update can matter even when the interface looks exactly the same after installing it.',
        'If a download fails, check free space, battery charge and the connection. Use a trusted network and allow time for the phone to restart.',
        'If a model no longer gets fixes, check the manufacturer’s support information. Plan to move sensitive tasks to a device that still receives security updates.'
      ],
      steps: [
        'Check for system updates in the phone settings.',
        'Check for app updates in the official store.',
        'Confirm installation and plan a replacement if security updates stop.'
      ],
      keyMessages: [
        ['Check two places.', 'A system update does not replace checking for app updates.'],
        ['Prepare the installation.', 'Allow enough storage, a trusted connection and time to restart.'],
        ['Check support for your model.', 'Seeing no update may mean the manufacturer has stopped providing fixes.']
      ],
      scenario: 'Your phone offers a system security update. The store also shows that several apps are waiting to update.',
      prompt: 'How should you handle both notices?',
      practice: {
        options: ['Update the system in settings, then check the apps in the store.', 'Update one app and assume the system will follow.'],
        correct: 0
      },
      reveal: 'Check both places. App updates and system security fixes serve different purposes.',
      example: 'If your mobile data plan is limited, use a trusted Wi-Fi connection when you next have access.',
      takeaway: 'Check the system and apps, then confirm their updates installed.',
      q: [
        ['Why install an update that does not change the menus?', ['It improves security only if the screen looks different afterwards.', 'It can fix a security weakness without changing the interface.'], 1, 'Security fixes are often invisible in day-to-day use.'],
        ['Where should you check for a system update?', ['In the phone settings, using the manufacturer’s update feature.', 'In the app store, on a single app’s page.'], 0, 'The device update feature finds updates intended for your model.'],
        ['An older device no longer receives security fixes. What should you plan?', ['Rely on regular app updates alone for sensitive tasks.', 'Move sensitive tasks to a supported device as soon as practical.'], 1, 'Updating apps cannot patch vulnerabilities in an unsupported system.']
      ],
      lab: [
        'Simulated maintenance review', 'Spot what needs attention before using this phone for sensitive tasks.',
        ['The phone is charged and connected to a trusted network.', 'The latest system fix is waiting for a restart.', 'The store lists three apps that need updates.'],
        [1, 2],
        ['The connection and charge are suitable for installing updates.', 'Some fixes take effect only after restarting.', 'Complete app updates from the store as well.'],
        'Apply the system fix, restart if prompted, then check the app updates.'
      ]
    },
    {
      id: 3,
      title: 'Back up and check your copies',
      desc: 'Make sure you can recover important files if your phone stops working.',
      time: 6,
      heading: 'Could you find your files if the phone would not start?',
      intro: 'Start with what would be difficult to recreate: contacts, photos, documents and essential app data. Check where each is stored and when its last copy succeeded.',
      detail: 'Sync keeps data up to date across devices, so changes and deletions may be copied across them. An independent copy of essential files gives you an earlier version to recover. Protect this copy and store it separately from the phone.',
      body: [
        'A device backup may exclude some data. On Android, app data depends on developer support. On iPhone, iCloud Photos works separately from the device backup when photo sync is enabled.',
        'Check the date and contents of your backup. Open a test file from a copy on a trusted second device or in a different folder, without resetting your phone.',
        'Keep a way to recover the backup account if you lose your phone. For essential files, a protected copy on a separate drive can supplement the system backup.'
      ],
      steps: [
        'List the contacts, photos, documents and app data you need to keep.',
        'Check what was backed up and the date of the last successful copy.',
        'Open a test copy and keep a recovery method independent of the phone.'
      ],
      keyMessages: [
        ['Check what is covered.', 'Backup may be enabled while an app or folder uses a separate process.'],
        ['Sync and backup serve different needs.', 'A change or deletion may spread to synced devices.'],
        ['Test with an ordinary file.', 'Open a copy before you need it.']
      ],
      scenario: 'You are changing phones. Your photos are visible on the new device, but you have not found some documents and app data.',
      prompt: 'When should you hand over the old phone?',
      practice: {
        options: ['Now, because the photos are already visible.', 'After confirming that important data is accessible and that a copy works.'],
        correct: 1
      },
      reveal: 'Check each category of data and open a test file on the new device before giving up the old one.',
      example: 'Create a test document, copy it to your usual backup and try finding and opening it on a trusted device.',
      takeaway: 'Before migration or reset, check what was copied and open at least one file from its copy.',
      q: [
        ['What does enabling device backup tell you?', ['You still need to check which settings, files and apps are covered.', 'All app data is recoverable without further checks.'], 0, 'Some apps and types of data require separate settings.'],
        ['Why keep an independent copy?', ['To have a recoverable version if a deletion spreads through sync.', 'To make duplicates of each edit across synced devices.'], 0, 'A separate copy can still be available when synced data changes.'],
        ['What can you test without erasing the phone?', ['Check only that backup is switched on.', 'Open a file from a copy on a trusted device.'], 1, 'Opening a file confirms you can locate and read at least one backed-up item.']
      ],
      lab: [
        'Review before a phone replacement', 'You are about to hand over the old phone. What is still worth checking?',
        ['Work documents have not been opened from the copy yet.', 'A test contact was found on the new phone.', 'The account recovery method is accessible only on the old phone.'],
        [0, 2],
        ['Confirm that essential files really open from their copy.', 'This contact was verified. Check the other data categories as well.', 'Prepare a way to recover access before handing over the device.'],
        'Check files and account access before handing over or erasing the old phone.'
      ]
    },
    {
      id: 4,
      title: 'Share files with care',
      desc: 'Choose the recipient, the information they need and the appropriate level of access.',
      time: 5,
      heading: 'Before sending, check who can see what.',
      intro: 'A photo, screenshot or document can reveal more than expected: a number, another message, a face in the background or a location.',
      detail: 'Send only the part needed. Use a final copy with the extra information removed, then open it and check the result. Some photos contain location information embedded in the file.',
      body: [
        'A link available to anyone who receives it can be forwarded. Where supported, restrict access to the people you named and use view-only permissions when they do not need to edit.',
        'Check recipients before sending, especially when groups or similar names appear. Use your organisation’s approved channel for work documents.',
        'When sharing is no longer needed, remove permissions if the service supports it. This ends access through the link but cannot recover copies someone has already saved.'
      ],
      steps: [
        'Prepare and inspect a copy containing only the information needed.',
        'Check the recipient and use the minimum level of access.',
        'Remove access when it is no longer needed, allowing for copies already received.'
      ],
      keyMessages: [
        ['Inspect the actual copy.', 'The image and its embedded information may reveal different details.'],
        ['Restrict the link to intended recipients.', 'An open link can travel beyond the first group.'],
        ['Recipients can keep copies.', 'Revoking a link blocks later access through it but cannot delete copies downloaded earlier.']
      ],
      scenario: 'You need to share a receipt with one person. The file also contains a private number, and the suggested link is open to anyone.',
      prompt: 'How should you prepare it?',
      practice: {
        options: ['Send the open link as long as the message goes to one person.', 'Make a copy without the number and restrict access to the right person.'],
        correct: 1
      },
      reveal: 'Open the final copy, confirm the recipient’s address and grant only the access they need.',
      example: 'Before sending a photo, check the background and turn off location sharing if the sharing tool allows it.',
      takeaway: 'Before sending, check the final file, who can access it and what they can do.',
      q: [
        ['A link is open to anyone who has it. What happens if forwarded?', ['Only the first person you sent it to can still open it.', 'Other people with the link may be able to access the file.'], 1, 'The link setting determines access, regardless of your first message.'],
        ['Can a photo reveal where it was taken?', ['Yes, if the shared file includes location information.', 'Only if the address appears in the image.'], 0, 'Location may be embedded in the file, depending on the device and sharing method.'],
        ['Does revoking the link remove copies already downloaded?', ['Yes, removing link access also deletes copies.', 'No, it blocks access through the link while downloaded copies may remain.'], 1, 'A saved copy can remain available to its recipient.']
      ],
      lab: [
        'Simulated sharing preview', 'A colleague only needs to read your receipt.',
        ['Recipient confirmed using their usual address.', 'Anyone with the link can access the file.', 'The copy still contains an unnecessary private number.'],
        [1, 2],
        ['Confirming the recipient helps prevent a mix-up.', 'Restrict access to the colleague and choose view-only access if sufficient.', 'Remove the number from the final copy and reopen it before sending.'],
        'Share the smallest useful copy through the verified address with the necessary viewing rights.'
      ]
    },
    {
      id: 5,
      title: 'Respond to loss or theft',
      desc: 'Lock the phone remotely, protect your line and decide when to erase local data.',
      time: 6,
      heading: 'Protect the device and the line as soon as you can.',
      intro: 'Before loss occurs, check the device’s finding service and arrange a way to access your account without the phone. Keep its serial number or IMEI somewhere safe for reporting if needed.',
      detail: 'From a trusted device, open Find My for iPhone or Find Hub for Android. Use Lost Mode or remote locking if available. Location and the time it takes to lock depend on the phone’s settings and connection.',
      body: [
        'If the phone seems to have been stolen, report it to local authorities. If the map shows an unfamiliar place, avoid going there to retrieve the phone yourself.',
        'Contact your carrier promptly to secure the line. If the phone had access to financial or work services, notify those services through their usual channels and check your activity.',
        'Remote erase deletes data from the device and may limit tracking. Check what you can recover and what will happen before starting it. On iPhone, keep the device in Find My to retain Activation Lock.'
      ],
      steps: [
        'Use a trusted device to enable Lost Mode or remote locking if available.',
        'Secure the line with the carrier and notify the services affected by the loss.',
        'Review your copies, circumstances and what remote erase would do before deciding.'
      ],
      keyMessages: [
        ['Prepare another way to sign in.', 'You need a route to the account for locating the phone without relying only on the missing device.'],
        ['Protect services tied to the phone.', 'A carrier, mobile wallet and workplace can each act on access to their own service.'],
        ['Decide separately about erasing.', 'Local data will be removed and the ability to track the phone may change.']
      ],
      scenario: 'Your phone is missing after a trip. You use it for your mobile wallet and the map shows an unknown location.',
      prompt: 'What is the best first response?',
      practice: {
        options: ['Use Lost Mode, contact the carrier and wallet provider, and report theft if needed.', 'Go alone to the location on the map and wait to see if the line remains active.'],
        correct: 0
      },
      reveal: 'Avoid putting yourself at risk at the location. Secure the device, the line and affected services through channels you trust.',
      example: 'If the device is offline, a lock or erase request may need to wait for reconnection. Secure the line while you wait for the device to respond.',
      takeaway: 'Prepare access to your account. If the phone goes missing, secure the device and the line, then consider erasing it.',
      q: [
        ['What should you prepare while you still have the phone?', ['Another way to access the account and a configured finding service.', 'Only a backup of your photos.'], 0, 'You need account access and the finding feature to act from another device.'],
        ['A phone used for mobile payments goes missing. Who should you contact promptly?', ['Your carrier and the payment service, through their regular channels.', 'Only the phone manufacturer.'], 0, 'Securing the line and alerting the payment service limits unauthorised use.'],
        ['What should you check before using remote erase?', ['Whether you have already sent a lock command, without checking your backups.', 'What you can recover and what erasing will do on your device.'], 1, 'Erasing removes local data and may change whether you can track the device.']
      ],
      lab: [
        'Missing phone', 'You are offered three actions. Choose which ones to reconsider.',
        ['Go alone to the spot on the map to get the phone back.', 'Use Lost Mode from a trusted device and call the carrier.', 'Erase immediately without checking what you can recover or how tracking is affected.'],
        [0, 2],
        ['A location on a map does not justify putting yourself in danger.', 'Securing the device and line are useful immediate steps.', 'Check your backups and the effect of erasing before deciding.'],
        'Secure the device and line, tell the affected services and decide separately whether to erase.'
      ]
    }
  ]
});
