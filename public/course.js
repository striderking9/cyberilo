window.COURSE = [
  {
    "title": "Comprendre le piège",
    "desc": "Reconnaître la manipulation avant de cliquer.",
    "time": 6,
    "body": [
      "Le phishing, ou hameçonnage, consiste à se faire passer pour une personne ou un service de confiance pour obtenir un secret, un paiement ou une action dangereuse. Il peut arriver par e-mail, SMS, réseau social ou appel.",
      "Les leviers courants : urgence, peur, récompense et autorité. Un message bien écrit avec un logo connu peut être frauduleux. Un compte appartenant à un ami peut aussi être compromis.",
      "Le bon réflexe : faire une pause et vérifier par un autre canal, avec un numéro ou une application que vous connaissez déjà."
    ],
    "example": "« Ton compte sera fermé dans 15 minutes ! » → Ouvrez vous-même l’application officielle pour vérifier cette alerte.",
    "q": [
      [
        "Un message contient un beau logo et aucune faute. Est-il fiable ?",
        [
          "Oui, les fraudeurs font toujours des fautes.",
          "Pas forcément : il faut vérifier la demande."
        ],
        1,
        "La présentation et l’orthographe ne prouvent pas l’identité de l’expéditeur."
      ],
      [
        "Un proche demande un transfert urgent. Que faire ?",
        [
          "L’appeler sur son numéro habituel pour confirmer.",
          "Payer immédiatement pour l’aider."
        ],
        0,
        "Un compte connu peut être piraté. Un autre canal aide à vérifier."
      ],
      [
        "Le message vous demande de garder le secret. Que faire ?",
        [
          "Respecter le secret sans vérifier.",
          "Vérifier la demande avec une personne de confiance."
        ],
        1,
        "L’isolement et le secret peuvent empêcher la vérification."
      ]
    ],
    "id": 0,
    "heading": "Le piège commence souvent par une émotion",
    "intro": "Vous recevez un message au moment où vous êtes occupé. Il semble venir d’une personne connue et vous demande un petit service. Le premier objectif du fraudeur est de vous faire agir avant que vous ayez le temps de réfléchir. Cela peut arriver à tout le monde, même à une personne qui connaît bien Internet.",
    "detail": "Il ne cherche pas toujours votre mot de passe immédiatement. Il peut commencer par discuter, vous faire déplacer la conversation vers une autre application ou vous demander un petit paiement. La confiance se construit parfois sur plusieurs jours.",
    "steps": [
      "Faites une pause : une vraie demande peut généralement attendre le temps d’une vérification.",
      "Demandez-vous si vous attendiez ce message et si l’action demandée est habituelle.",
      "Contactez la personne ou l’organisme par un chemin connu, indépendant du message."
    ],
    "scenario": "Un ami vous écrit : « Je suis bloqué, envoie-moi 15 000 F CFA. Je t’explique après. »",
    "prompt": "Un numéro connu suffit-il pour faire confiance ?",
    "reveal": "Non. Son compte peut être compromis. Appelez-le sur son numéro habituel ou vérifiez avec une autre personne de confiance avant de transférer de l’argent.",
    "takeaway": "Prendre 30 secondes pour vérifier peut éviter des heures de récupération.",
    "keyMessages": [
      [
        "Une demande urgente n’est pas une preuve.",
        "Le sentiment d’urgence cherche à raccourcir votre temps de réflexion. Faites une pause avant de décider."
      ],
      [
        "Un compte connu peut être compromis.",
        "La bonne question n’est pas seulement « Qui m’écrit ? », mais aussi « Comment vérifier sa demande ? »."
      ],
      [
        "Vérifier ailleurs, c’est reprendre le contrôle.",
        "Appelez la personne sur son numéro habituel ou ouvrez vous-même le service concerné."
      ]
    ],
    "practice": {
      "options": [
        "J’envoie l’argent pour ne pas le laisser bloqué.",
        "Je l’appelle sur son numéro habituel avant de décider."
      ],
      "correct": 1
    }
  },
  {
    "title": "E-mails & SMS",
    "desc": "Déjouer les fausses alertes et les faux cadeaux.",
    "time": 6,
    "body": [
      "Le nom affiché de l’expéditeur peut être imité. Regardez son adresse complète, tout en sachant qu’une adresse familière ne garantit pas qu’un compte est intact.",
      "Une pièce jointe inattendue, une demande de code ou un paiement imprévu doivent vous faire vérifier. Les messages de fausse livraison, de recrutement ou de remboursement sont des exemples fréquents.",
      "Ne répondez pas avec vos secrets. Ne contactez pas le prétendu support via les coordonnées du message : retrouvez celles du service officiel. Signalez le message avec les outils de votre messagerie."
    ],
    "example": "« Votre colis est bloqué. Payez 500 F CFA ici. » → Vérifiez la commande depuis le site ou l’application du transporteur.",
    "q": [
      [
        "Un SMS réclame votre code PIN Mobile Money pour débloquer un gain.",
        [
          "Je garde mon code et vérifie via le service officiel.",
          "Je donne le code pour recevoir le gain."
        ],
        0,
        "Un code PIN sert à autoriser vos opérations : gardez-le secret."
      ],
      [
        "Une facture inattendue arrive en pièce jointe.",
        [
          "Je l’ouvre pour comprendre.",
          "Je confirme auprès de l’expéditeur via un canal connu."
        ],
        1,
        "Vérifiez avant d’ouvrir un fichier inattendu."
      ],
      [
        "Le message propose un numéro de support pour vérifier son authenticité.",
        [
          "J’utilise uniquement ce numéro.",
          "Je retrouve les coordonnées officielles ailleurs."
        ],
        1,
        "Le faux message peut aussi fournir un faux numéro de support."
      ]
    ],
    "id": 1,
    "heading": "Un message peut avoir l’air parfaitement normal",
    "intro": "Un e-mail peut reprendre un logo, une signature et une mise en page professionnelle. Un SMS peut apparaître au milieu d’autres notifications. L’apparence seule n’est donc jamais un certificat de confiance.",
    "detail": "Les fautes sont parfois un indice, mais leur absence ne prouve rien. Regardez surtout ce que le message vous demande : saisir un secret, télécharger un fichier, payer des frais inattendus ou déplacer la conversation.",
    "steps": [
      "Affichez l’adresse complète de l’expéditeur et examinez le contexte.",
      "Ne répondez pas avec un code, un mot de passe ou une photo de document.",
      "Retrouvez l’organisme dans votre application habituelle ou depuis ses coordonnées officielles."
    ],
    "scenario": "Un « agent de recrutement » vous annonce une sélection et demande des frais de dossier aujourd’hui.",
    "prompt": "Que vérifier avant tout paiement ?",
    "reveal": "Retrouvez l’offre et les coordonnées de l’organisation sur son site officiel. Confirmez la demande sans utiliser le numéro ou le lien fourni dans le message. Une sélection annoncée ne justifie pas de payer sous pression.",
    "takeaway": "Vérifiez la demande, même quand la présentation inspire confiance.",
    "keyMessages": [
      [
        "L’apparence rassure ; elle ne garantit rien.",
        "Un logo, une signature et un texte sans faute peuvent être copiés. Vérifiez surtout l’action demandée."
      ],
      [
        "Le faux message peut fournir un faux support.",
        "N’utilisez pas ses propres coordonnées pour vérifier son authenticité. Retrouvez un contact officiel indépendamment."
      ],
      [
        "Un code secret n’est jamais une formalité.",
        "Un gain, un remboursement ou une livraison ne justifient pas de partager votre code PIN ou votre mot de passe."
      ]
    ],
    "practice": {
      "options": [
        "Je paie pour conserver ma place.",
        "Je vérifie l’offre et la demande auprès de l’organisation."
      ],
      "correct": 1
    }
  },
  {
    "title": "Liens & faux sites",
    "desc": "Lire une adresse et éviter les fausses connexions.",
    "time": 7,
    "body": [
      "Le texte d’un lien peut différer de sa destination. Sur ordinateur, survolez-le ; sur téléphone, utilisez l’aperçu par appui long si disponible, sans l’ouvrir. Si vous hésitez, passez directement par le service officiel.",
      "Lisez le véritable nom de domaine. Dans banque.example.connexion.example.net, le domaine est example.net, pas banque.example. Les mots rassurants ajoutés au début ne prouvent rien. Les exemples de ce cours sont fictifs.",
      "Le cadenas et HTTPS protègent la connexion ; ils ne garantissent pas l’honnêteté du site. Un lien raccourci masque sa destination. Ne le testez pas en y saisissant vos identifiants."
    ],
    "example": "Un site ressemble parfaitement à votre banque ? Vérifiez son adresse, puis préférez votre application habituelle.",
    "q": [
      [
        "Un cadenas HTTPS suffit-il à prouver qu’un site est honnête ?",
        [
          "Oui.",
          "Non, un faux site peut aussi utiliser HTTPS."
        ],
        1,
        "HTTPS chiffre la connexion, sans certifier la bonne intention du site."
      ],
      [
        "Une alerte de compte comporte un lien raccourci.",
        [
          "J’ouvre moi-même le service officiel.",
          "Je me connecte via ce lien pour tester."
        ],
        0,
        "Rejoindre le service par un chemin connu évite le lien suspect."
      ],
      [
        "Dans example.net/banque, le mot « banque » prouve-t-il l’identité du site ?",
        [
          "Non, il est dans le chemin de la page.",
          "Oui, c’est une page officielle."
        ],
        0,
        "Le chemin peut contenir n’importe quel mot."
      ]
    ],
    "id": 2,
    "heading": "Le vrai site se cache dans l’adresse",
    "intro": "Sur une page frauduleuse, le logo, les couleurs et même les boutons peuvent être copiés. L’adresse est un meilleur indice, mais elle mérite d’être lue attentivement. Ne vous fiez pas au premier mot de l’URL.",
    "detail": "Dans https://banque.example.net/connexion, le domaine est example.net. Dans https://example.net/banque-officielle, les mots après la barre oblique sont un chemin. Ces mots ne prouvent aucun lien avec une banque. Les domaines de ce cours sont des exemples réservés.",
    "steps": [
      "Pour une opération sensible, ouvrez votre application habituelle.",
      "Si vous examinez un lien, regardez sa destination complète avant de l’ouvrir.",
      "Ne saisissez aucun identifiant pour « tester » un site douteux."
    ],
    "scenario": "La page affiche « Connexion sécurisée » et un cadenas, mais son adresse est inconnue.",
    "prompt": "Le cadenas protège-t-il contre l’arnaque ?",
    "reveal": "Le cadenas indique que la connexion est chiffrée. Il n’indique pas que le propriétaire du site est honnête. Un faux formulaire peut donc lui aussi utiliser HTTPS.",
    "takeaway": "Un beau site ne remplace pas une adresse vérifiée.",
    "keyMessages": [
      [
        "Le cadenas protège le trajet, pas l’intention.",
        "HTTPS chiffre votre connexion. Un site malhonnête peut lui aussi afficher un cadenas."
      ],
      [
        "Lisez le domaine avant le décor.",
        "Un mot rassurant dans le chemin ou au début d’une adresse ne prouve pas l’identité du site."
      ],
      [
        "Le chemin le plus sûr est souvent celui que vous connaissez.",
        "Pour une opération sensible, ouvrez votre application habituelle au lieu de suivre le lien du message."
      ]
    ],
    "practice": {
      "options": [
        "Je me connecte puisque le cadenas est affiché.",
        "J’ouvre l’application officielle sans utiliser cette page."
      ],
      "correct": 1
    }
  },
  {
    "title": "QR codes",
    "desc": "Comprendre ce que vous autorisez en scannant.",
    "time": 6,
    "body": [
      "Un QR code peut contenir un lien ou une demande liée à une application. Il n’est pas une preuve d’authenticité. Un autocollant peut même remplacer un QR code légitime.",
      "Avant de poursuivre, regardez l’adresse et l’action proposée. Un concours ou cadeau peut vous pousser à associer un appareil à une messagerie : ce geste peut donner accès à votre compte.",
      "Scanner ne signifie pas automatiquement être piraté. Le risque dépend de la destination, des actions autorisées et, plus rarement, de vulnérabilités logicielles. Gardez votre téléphone à jour."
    ],
    "example": "« Scanne pour voter pour moi. » Si l’écran demande d’associer un appareil WhatsApp, arrêtez : cette autorisation ne correspond pas à un vote.",
    "q": [
      [
        "Un QR pour un vote demande d’associer un appareil.",
        [
          "J’accepte, c’est une étape normale.",
          "J’arrête et vérifie la demande."
        ],
        1,
        "L’association d’appareil peut ouvrir une session sur votre compte."
      ],
      [
        "Après un scan, quel élément vérifier ?",
        [
          "La destination et l’action demandée.",
          "Seulement le dessin du QR code."
        ],
        0,
        "Le dessin ne permet pas de connaître la fiabilité du contenu."
      ],
      [
        "Un QR code est collé par-dessus celui d’une borne.",
        [
          "Je scanne sans vérifier.",
          "Je vérifie auprès du service ou utilise son application officielle."
        ],
        1,
        "Un autocollant peut rediriger vers un autre bénéficiaire ou un faux site."
      ]
    ],
    "id": 3,
    "heading": "Un carré imprimé peut ouvrir une porte numérique",
    "intro": "Un QR code évite de saisir une adresse. C’est pratique, mais cela rend parfois la destination moins visible. On peut en trouver sur une affiche, un reçu, un écran ou dans une conversation. Il peut aussi être recouvert par un autocollant frauduleux.",
    "detail": "Le bon repère est la cohérence : est-ce que l’action affichée correspond à ce que vous vouliez faire ? Voter ne nécessite pas de connecter votre messagerie à un nouvel appareil. Consulter un menu ne nécessite pas de saisir votre mot de passe bancaire.",
    "steps": [
      "Regardez l’aperçu de la destination avant de poursuivre.",
      "Lisez l’écran d’autorisation : connexion, appareil associé, paiement ou installation ?",
      "En cas de doute, utilisez l’application ou l’adresse officielle du service."
    ],
    "scenario": "Un contact vous demande de voter à un concours. Après le scan, WhatsApp vous propose d’associer un appareil.",
    "prompt": "Pourquoi faut-il s’arrêter ici ?",
    "reveal": "L’action demandée ne correspond pas au vote. Associer un appareil peut créer une session donnant accès à votre messagerie. N’autorisez pas l’association ; si vous l’avez déjà faite, retirez l’appareil inconnu dans les réglages.",
    "takeaway": "Lisez ce que vous autorisez, pas seulement ce qu’on vous promet.",
    "keyMessages": [
      [
        "Un QR code est un raccourci, pas une garantie.",
        "Il peut mener à un site ou déclencher une demande d’autorisation. Vérifiez ce qui apparaît à l’écran."
      ],
      [
        "Un vote ne doit pas ouvrir votre messagerie.",
        "Si l’on vous demande d’associer un appareil pour participer à un concours, l’action ne correspond pas à la promesse."
      ],
      [
        "Avant d’accepter, nommez l’action.",
        "S’agit-il d’un paiement, d’une connexion, d’une installation ou d’une association d’appareil ? Si ce n’est pas ce que vous vouliez, arrêtez."
      ]
    ],
    "practice": {
      "options": [
        "J’accepte l’association d’appareil pour terminer le vote.",
        "J’arrête : un vote ne demande pas cette autorisation."
      ],
      "correct": 1
    }
  },
  {
    "title": "Images & fichiers",
    "desc": "Distinguer une image, un lien et un téléchargement.",
    "time": 6,
    "body": [
      "Une image peut contenir une fausse annonce, un numéro à contacter ou un QR code. Dans un e-mail ou une page, elle peut aussi être cliquable. Son apparence ne rend pas son contenu fiable.",
      "Recevoir ou afficher une image ne signifie pas automatiquement que votre compte est piraté. Des failles existent cependant : mettez à jour le système et les applications. Le piège vise souvent l’action qui suit.",
      "Méfiez-vous des fichiers inattendus et des applications envoyées en dehors des boutiques officielles. N’activez pas les macros d’un document pour voir son contenu. Une extension ou une icône peut être trompeuse."
    ],
    "example": "Une affiche promet un recrutement et demande d’installer une application reçue par message : vérifiez l’offre sur le site officiel avant tout téléchargement.",
    "q": [
      [
        "Une image annonce un gain et demande votre mot de passe.",
        [
          "Je vérifie ailleurs et ne fournis pas mon secret.",
          "Une image est forcément sûre."
        ],
        0,
        "Une image peut porter un message d’hameçonnage."
      ],
      [
        "Un document exige d’activer les macros.",
        [
          "J’active tout pour lire.",
          "Je ferme et vérifie sa provenance."
        ],
        1,
        "Des macros peuvent exécuter des actions dangereuses."
      ],
      [
        "Un fichier a une icône de photo : est-ce suffisant ?",
        [
          "Oui, son icône garantit son type.",
          "Non, l’icône et le nom peuvent tromper."
        ],
        1,
        "Vérifiez le contexte et la provenance avant d’ouvrir."
      ]
    ],
    "id": 4,
    "heading": "L’image attire l’œil ; la demande mérite votre attention",
    "intro": "Une image peut annoncer un recrutement, une aide financière ou un cadeau. Elle peut contenir un QR code ou un numéro à contacter. Dans une page ou un e-mail, elle peut aussi servir de bouton vers un autre site.",
    "detail": "Il faut distinguer l’affichage d’une image et l’action suivante. Recevoir une photo ne prouve pas que votre compte est piraté. Mais installer un fichier envoyé avec cette photo, saisir un code ou accorder une autorisation peut vous exposer. Les mises à jour réduisent aussi le risque lié aux failles des logiciels.",
    "steps": [
      "Vérifiez une annonce directement auprès de l’organisme cité.",
      "Ne vous fiez pas uniquement à l’icône ou au nom du fichier.",
      "N’installez pas une application reçue par message pour accéder à un cadeau ou à une offre."
    ],
    "scenario": "Une affiche vous promet un emploi. Le contact envoie ensuite « candidature.apk » pour déposer votre dossier.",
    "prompt": "Pourquoi cette suite est-elle risquée ?",
    "reveal": "Un fichier APK installe une application Android. Une candidature ne justifie pas d’installer une application inconnue. Recherchez l’offre officielle et un canal de candidature fiable.",
    "takeaway": "Une image rassurante peut être le début d’un parcours trompeur.",
    "keyMessages": [
      [
        "L’image attire votre regard ; regardez aussi la demande.",
        "Une affiche peut contenir un faux numéro, un QR code ou un lien vers un formulaire frauduleux."
      ],
      [
        "Voir une image et installer un fichier sont deux actions différentes.",
        "Le risque dépend notamment de ce que vous ouvrez, téléchargez ou autorisez ensuite. Gardez vos applications à jour."
      ],
      [
        "Une offre ne justifie pas une installation inconnue.",
        "Vérifiez le recrutement ou le cadeau auprès de l’organisme cité avant d’ouvrir ou d’installer un fichier reçu par message."
      ]
    ],
    "practice": {
      "options": [
        "J’installe le fichier pour déposer ma candidature.",
        "Je recherche l’offre et le canal de candidature officiels."
      ],
      "correct": 1
    }
  },
  {
    "title": "WhatsApp & réseaux",
    "desc": "Garder le contrôle de ses conversations.",
    "time": 6,
    "body": [
      "Ne transmettez jamais le code d’inscription ou de connexion reçu par SMS. Un fraudeur peut prétendre vous l’avoir envoyé par erreur ou se faire passer pour un proche.",
      "Dans les réglages de votre messagerie, examinez les appareils ou sessions connectés et retirez ceux que vous ne reconnaissez pas. Les noms de menus peuvent varier selon l’application.",
      "Activez la vérification en deux étapes lorsqu’elle est proposée. Vérifiez les demandes d’argent en appelant le proche. Un vocal ou une vidéo peuvent aussi être imités : ne fondez pas une décision sensible sur ce seul élément."
    ],
    "example": "« Envoie-moi le code à 6 chiffres que tu viens de recevoir. » → Ne le transmettez pas, même si le message vient d’un proche.",
    "q": [
      [
        "Un ami réclame votre code reçu par SMS.",
        [
          "Je le lui envoie car je le connais.",
          "Je garde le code et l’appelle pour vérifier."
        ],
        1,
        "Le code peut servir à prendre le contrôle de votre compte."
      ],
      [
        "Vous voyez un appareil inconnu connecté.",
        [
          "Je le déconnecte et sécurise mon compte.",
          "Je le laisse, tant que mes messages sont visibles."
        ],
        0,
        "Une session inconnue doit être retirée et la sécurité du compte vérifiée."
      ],
      [
        "Un vocal suffit-il pour confirmer un transfert inhabituel ?",
        [
          "Oui, une voix ne peut pas être imitée.",
          "Non, je vérifie avec un échange indépendant."
        ],
        1,
        "Une voix peut être imitée ou un ancien vocal réutilisé."
      ]
    ],
    "id": 5,
    "heading": "Un compte connu peut raconter une fausse histoire",
    "intro": "Quand un fraudeur prend le contrôle d’un compte, il profite des relations déjà établies. Le message peut apparaître dans une ancienne conversation et sembler naturel. Les demandes d’argent, de codes et de votes doivent donc être vérifiées même dans ce contexte.",
    "detail": "Un code reçu par SMS peut servir à inscrire ou connecter votre compte sur un autre appareil. Un QR code peut servir à associer une session. Les deux peuvent être présentés comme une simple vérification ou un service à rendre.",
    "steps": [
      "Gardez les codes de connexion et le PIN de vérification en deux étapes pour vous.",
      "Consultez régulièrement les appareils associés et les sessions actives.",
      "Appelez vos proches avant un transfert et prévenez-les si votre compte est compromis."
    ],
    "scenario": "« Je t’ai envoyé un code par erreur, renvoie-le-moi vite. » Le message arrive depuis le compte de votre cousin.",
    "prompt": "Quel est le bon réflexe ?",
    "reveal": "Ne transférez pas le code. Appelez votre cousin par un canal connu. S’il ne reconnaît pas la demande, son compte est peut-être utilisé par quelqu’un d’autre.",
    "takeaway": "Votre code est une clé, même quand un proche le demande.",
    "keyMessages": [
      [
        "Votre code de connexion est une clé.",
        "Le partager peut permettre à quelqu’un de se connecter à votre place, même si la demande semble venir d’un proche."
      ],
      [
        "La confiance dans une personne ne garantit pas son compte.",
        "Un fraudeur peut écrire depuis une conversation connue. Vérifiez les demandes sensibles par un autre canal."
      ],
      [
        "Une session inconnue mérite une action immédiate.",
        "Retirez l’appareil que vous ne reconnaissez pas, puis vérifiez les protections et les moyens de récupération du compte."
      ]
    ],
    "practice": {
      "options": [
        "Je renvoie le code puisque c’est mon cousin.",
        "Je garde le code et j’appelle mon cousin."
      ],
      "correct": 1
    }
  },
  {
    "title": "Sécuriser ses comptes",
    "desc": "Mots de passe, double protection et mises à jour.",
    "time": 7,
    "body": [
      "Utilisez un mot de passe long et unique pour chaque compte. Un gestionnaire de mots de passe fiable aide à les créer et les conserver. Protégez particulièrement votre adresse e-mail principale, souvent utilisée pour récupérer les autres comptes.",
      "Activez la double authentification. Quand elles sont proposées, les clés de sécurité et les clés d’accès (passkeys) offrent une protection contre de nombreuses formes de phishing. Ne validez pas une demande de connexion que vous n’avez pas initiée.",
      "Conservez les codes de secours à l’abri, mettez vos appareils à jour et verrouillez-les. Vérifiez les informations de récupération de vos comptes. Sauvegardez vos données importantes."
    ],
    "example": "Un mot de passe réutilisé et dérobé sur un service peut être essayé sur vos autres comptes. Un mot de passe unique limite cette propagation.",
    "q": [
      [
        "Quelle pratique réduit le risque sur plusieurs comptes ?",
        [
          "Le même mot de passe compliqué partout.",
          "Un mot de passe long et unique par compte."
        ],
        1,
        "L’unicité évite qu’un secret compromis ouvre plusieurs comptes."
      ],
      [
        "Une notification vous demande de valider une connexion inconnue.",
        [
          "Je refuse et vérifie l’activité de mon compte.",
          "J’accepte pour arrêter les notifications."
        ],
        0,
        "Une validation inattendue peut autoriser un accès frauduleux."
      ],
      [
        "Quel compte sécuriser en priorité pour protéger la récupération des autres ?",
        [
          "L’adresse e-mail principale.",
          "Un ancien compte inutilisé au hasard."
        ],
        0,
        "L’e-mail principal sert souvent de clé de récupération."
      ]
    ],
    "id": 6,
    "heading": "Protéger d’abord les comptes qui ouvrent les autres",
    "intro": "Votre e-mail principal sert souvent à réinitialiser vos mots de passe. Si quelqu’un le contrôle, il peut tenter de récupérer d’autres comptes. Commencez donc par lui, puis sécurisez vos comptes financiers et vos messageries.",
    "detail": "Un mot de passe long reste vulnérable s’il est réutilisé partout ou saisi dans un faux formulaire. La double authentification ajoute une protection, sans rendre toutes les attaques impossibles. Les clés d’accès et clés de sécurité réduisent de nombreux risques de phishing quand le service les propose.",
    "steps": [
      "Choisissez un mot de passe unique pour votre e-mail principal.",
      "Activez la double authentification et conservez les codes de secours à l’abri.",
      "Mettez vos appareils à jour et vérifiez les moyens de récupération."
    ],
    "scenario": "Vous recevez plusieurs demandes de validation de connexion alors que vous ne vous connectez pas.",
    "prompt": "Faut-il accepter pour faire cesser les notifications ?",
    "reveal": "Non. Refusez les demandes et ouvrez le service vous-même pour vérifier les connexions récentes. Changez le mot de passe si vous soupçonnez qu’il a été compromis.",
    "takeaway": "Une protection supplémentaire fonctionne si vous ne la validez pas pour un inconnu.",
    "keyMessages": [
      [
        "Votre e-mail principal protège aussi vos autres comptes.",
        "Il sert souvent à réinitialiser leurs mots de passe. Commencez par sécuriser cette porte d’entrée."
      ],
      [
        "La double authentification se valide seulement quand c’est vous.",
        "Refusez une demande inattendue. Ne l’acceptez pas simplement pour faire cesser les notifications."
      ],
      [
        "Un secret unique limite les dégâts.",
        "Un mot de passe différent par compte évite qu’un seul secret dérobé ouvre plusieurs accès."
      ]
    ],
    "practice": {
      "options": [
        "Je refuse et je vérifie les connexions depuis le vrai service.",
        "J’accepte pour faire cesser les notifications."
      ],
      "correct": 0
    }
  },
  {
    "title": "Réagir sans paniquer",
    "desc": "Les premières actions après un incident.",
    "time": 6,
    "body": [
      "Si vous avez seulement ouvert un lien, fermez la page et vérifiez ce qui a été téléchargé ou autorisé. Cliquer ne signifie pas automatiquement perdre son compte. Adaptez la réponse à ce que vous avez fait.",
      "Si vous avez fourni un mot de passe, changez-le depuis le service officiel et sur les comptes où il était réutilisé. Retirez les sessions inconnues, vérifiez les options de récupération et activez la double authentification.",
      "Si de l’argent est concerné, contactez vite la banque ou l’opérateur via son canal officiel. Gardez les preuves, prévenez vos contacts et utilisez les dispositifs de signalement appropriés à votre pays. Méfiez-vous des personnes qui promettent de récupérer votre compte contre paiement."
    ],
    "example": "Vous avez partagé un code puis perdu l’accès à votre messagerie : utilisez sa récupération officielle, sécurisez l’e-mail associé et prévenez vos contacts par un autre moyen.",
    "q": [
      [
        "Vous avez saisi votre mot de passe sur un faux site.",
        [
          "Je le change depuis le vrai service et ferme les sessions inconnues.",
          "Je supprime seulement le message."
        ],
        0,
        "Supprimer le message ne révoque pas un accès déjà obtenu."
      ],
      [
        "Un transfert frauduleux vient d’avoir lieu.",
        [
          "J’attends pour voir si l’argent revient.",
          "Je contacte immédiatement l’opérateur ou la banque par un canal officiel."
        ],
        1,
        "Une réaction rapide aide à limiter les conséquences, sans garantir le remboursement."
      ],
      [
        "Que garder avant de bloquer un fraudeur ?",
        [
          "Les captures, messages et références utiles.",
          "Rien, tout supprimer immédiatement."
        ],
        0,
        "Les preuves peuvent aider le service concerné et un signalement."
      ]
    ],
    "id": 7,
    "heading": "Le plus utile après un incident : agir dans le bon ordre",
    "intro": "La honte et la panique font perdre du temps. Une arnaque peut toucher n’importe qui. Commencez par identifier ce qui s’est passé : lien ouvert, secret saisi, appareil associé, fichier installé ou argent transféré.",
    "detail": "La réponse dépend de cette action. Supprimer un message ne suffit pas à retirer une session déjà ouverte. Changer un mot de passe n’annule pas automatiquement un transfert. Contactez rapidement le service concerné, puis traitez les autres conséquences.",
    "steps": [
      "Arrêtez l’échange et conservez les preuves avant de bloquer le contact.",
      "Sécurisez le compte depuis un appareil fiable et retirez les accès inconnus.",
      "Contactez l’opérateur ou la banque si de l’argent est concerné, puis prévenez vos contacts."
    ],
    "scenario": "Une personne vous promet de récupérer votre compte contre un paiement et demande un nouveau code.",
    "prompt": "Peut-on lui confier la récupération ?",
    "reveal": "Ne donnez ni code ni paiement à un prétendu récupérateur. Utilisez l’assistance officielle du service. Les victimes peuvent être ciblées une seconde fois avec de fausses offres d’aide.",
    "takeaway": "Demander de l’aide rapidement est un bon réflexe, pas un aveu de faiblesse.",
    "keyMessages": [
      [
        "La bonne réaction dépend de ce qui a été fait.",
        "Ouvrir un lien, saisir un secret, associer un appareil ou transférer de l’argent appellent des actions différentes."
      ],
      [
        "Supprimer le message n’efface pas ses conséquences.",
        "Une session peut rester ouverte et un paiement reste à traiter. Sécurisez le compte ou contactez le service concerné."
      ],
      [
        "Une aide fiable ne réclame pas vos codes.",
        "Utilisez les procédures officielles de récupération. Méfiez-vous des promesses de récupération contre paiement."
      ]
    ],
    "practice": {
      "options": [
        "Je fournis le nouveau code à cette personne.",
        "J’utilise uniquement la récupération officielle du service."
      ],
      "correct": 1
    }
  }
];
