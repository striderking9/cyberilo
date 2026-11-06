'use strict';
window.CYBER_TRAININGS=[{
  "id": "proteger-ses-comptes",
  "title": {
    "fr": "Protéger ses comptes au quotidien",
    "en": "Protect your everyday accounts"
  },
  "description": {
    "fr": "Six ateliers pour sécuriser sa messagerie, WhatsApp et ses réseaux sociaux, puis savoir réagir en cas d’incident.",
    "en": "Six workshops to secure email, WhatsApp and social accounts, and respond when something goes wrong."
  },
  "category": {
    "fr": "Protection des comptes",
    "en": "Account protection"
  },
  "level": {
    "fr": "Pratique · Tous publics",
    "en": "Practical · Everyone"
  },
  "access": "free",
  "status": "published",
  "fr": [
    {
      "title": "Sécuriser sa boîte mail",
      "desc": "Faire de sa messagerie un point de récupération fiable.",
      "heading": "Votre adresse e-mail ouvre d’autres portes.",
      "intro": "Une boîte mail sert souvent à réinitialiser les mots de passe de nombreux services. Sa protection mérite donc de passer en premier.",
      "detail": "Ouvrez les paramètres de sécurité depuis votre messagerie habituelle. Vérifiez les moyens de récupération, les appareils et les règles de transfert : un transfert inconnu peut continuer à exposer vos messages.",
      "body": [
        "La récupération permet de retrouver un accès perdu. Elle doit utiliser une adresse ou un numéro que vous contrôlez encore.",
        "Une alerte de connexion est un signal à vérifier dans le service lui-même. Une localisation approximative ne suffit pas, à elle seule, à prouver un piratage.",
        "Supprimez les règles de transfert et les accès d’applications que vous ne reconnaissez pas, après avoir vérifié leur usage."
      ],
      "steps": [
        "Vérifier ses coordonnées de récupération depuis les paramètres officiels.",
        "Activer une protection supplémentaire et conserver les moyens de secours à part.",
        "Examiner les sessions, transferts et applications autorisées."
      ],
      "scenario": "Vous sécurisez votre messagerie et découvrez un transfert automatique vers une adresse inconnue.",
      "prompt": "Quel point faut-il examiner en plus du mot de passe ?",
      "practice": {
        "options": [
          "Changer le mot de passe et ne rien vérifier d’autre.",
          "Examiner aussi les transferts, les sessions et les moyens de récupération."
        ],
        "correct": 1
      },
      "reveal": "Un nouveau mot de passe ne remplace pas la vérification des sessions, des transferts et des autorisations.",
      "example": "Un ancien numéro figure encore dans la récupération : remplacez-le par un moyen que vous contrôlez, puis vérifiez la mise à jour.",
      "q": [
        [
          "Pourquoi protéger sa messagerie en priorité ?",
          [
            "Elle sert souvent à récupérer les autres comptes.",
            "Elle n’a aucun lien avec les autres comptes."
          ],
          0,
          "Un message de réinitialisation peut donner accès à un autre service."
        ],
        [
          "Une ville inconnue apparaît dans une session. Que faire ?",
          [
            "Conclure immédiatement à un piratage.",
            "Vérifier aussi l’appareil, la date et l’activité."
          ],
          1,
          "Les localisations de connexion peuvent être approximatives."
        ],
        [
          "Que vérifier après un incident ?",
          [
            "Uniquement la photo du profil.",
            "Les transferts et les applications autorisées aussi."
          ],
          1,
          "Certains accès peuvent persister après un changement de mot de passe."
        ]
      ],
      "lab": [
        "Tableau de sécurité fictif",
        "Une revue de votre messagerie.",
        [
          "Transfert vers une adresse que vous ne connaissez pas.",
          "Adresse de récupération que vous avez perdue.",
          "Votre téléphone actuel, utilisé ce matin."
        ],
        [
          0,
          1
        ],
        [
          "Un transfert inconnu peut divulguer des messages.",
          "Un moyen perdu ne permet plus de récupérer le compte.",
          "Cette session correspond à votre usage : ne la retirez pas sans raison."
        ],
        "Commencez par vérifier les accès inconnus et les moyens de récupération."
      ],
      "id": 0,
      "time": 5,
      "keyMessages": [
        [
          "La messagerie est prioritaire.",
          "Elle peut permettre de réinitialiser vos autres comptes."
        ],
        [
          "Vérifier avant de retirer.",
          "Un appareil peut porter un nom ou une localisation inhabituels sans être malveillant."
        ],
        [
          "Chercher les accès persistants.",
          "Un transfert automatique ou une application autorisée peut garder un accès."
        ]
      ],
      "takeaway": "Un nouveau mot de passe ne remplace pas la vérification des sessions, des transferts et des autorisations."
    },
    {
      "title": "Des accès solides et distincts",
      "desc": "Choisir un secret unique ou une clé d’accès pour chaque compte.",
      "heading": "Éviter qu’un seul secret ouvre tout.",
      "intro": "Un mot de passe réutilisé relie vos comptes : une fuite sur un service peut mettre les autres en danger.",
      "detail": "Un gestionnaire de mots de passe aide à créer et conserver des secrets différents. Protégez son accès principal et prévoyez sa récupération. Une clé d’accès, ou passkey, est une autre méthode proposée par certains services.",
      "body": [
        "Un secret long et unique est préférable à une variante prévisible réutilisée partout. Ne copiez pas les exemples d’une formation comme mot de passe.",
        "Une clé d’accès utilise un mécanisme cryptographique ; le verrouillage de votre appareil autorise son usage. Sa récupération dépend de votre appareil ou de votre fournisseur.",
        "Avant de remplacer votre téléphone ou de supprimer un ancien accès, assurez-vous de disposer d’un autre moyen de connexion fonctionnel."
      ],
      "steps": [
        "Remplacer d’abord les mots de passe réutilisés des comptes prioritaires.",
        "Utiliser un gestionnaire et protéger son accès principal.",
        "Si une clé d’accès est proposée, vérifier comment la retrouver après une perte d’appareil."
      ],
      "scenario": "Votre messagerie et un ancien site utilisent le même mot de passe. Ce site annonce une fuite.",
      "prompt": "Quel changement limite les conséquences ?",
      "practice": {
        "options": [
          "Garder le même secret avec un chiffre de plus.",
          "Créer des secrets uniques pour les comptes concernés."
        ],
        "correct": 1
      },
      "reveal": "Changer de façon prévisible ne suffit pas : utilisez des secrets réellement distincts.",
      "example": "Votre gestionnaire propose un secret aléatoire pour un compte : conservez-le dans le gestionnaire, sans le réutiliser ailleurs.",
      "q": [
        [
          "Une fuite touche un mot de passe réutilisé. Que faire ?",
          [
            "Changer ce secret sur tous les comptes concernés.",
            "Attendre uniquement une alerte bancaire."
          ],
          0,
          "La réutilisation peut exposer plusieurs services."
        ],
        [
          "Avant de retirer une ancienne clé d’accès ?",
          [
            "Effacer d’abord tous ses accès.",
            "Tester un autre accès et la récupération."
          ],
          1,
          "Évitez de vous enfermer hors de votre propre compte."
        ],
        [
          "Où saisir votre vrai mot de passe pendant cette formation ?",
          [
            "Dans le feedback privé.",
            "Nulle part sur Cyberilo."
          ],
          1,
          "La formation ne demande aucun secret de vos autres comptes."
        ]
      ],
      "lab": [
        "Note de préparation fictive",
        "Vous remplacez votre téléphone.",
        [
          "Supprimer tous les accès avant de tester le nouveau.",
          "Réutiliser le même mot de passe pour aller vite.",
          "Vérifier les moyens de récupération avant le changement."
        ],
        [
          0,
          1
        ],
        [
          "Vous risquez de perdre votre seul accès.",
          "La réutilisation relie les risques entre comptes.",
          "C’est une bonne précaution, pas un signal de fraude."
        ],
        "Testez vos accès et conservez une solution de récupération sûre."
      ],
      "id": 1,
      "time": 5,
      "keyMessages": [
        [
          "Un compte, un secret.",
          "Une fuite ne doit pas ouvrir tous vos services."
        ],
        [
          "Prévoir la récupération.",
          "Une protection utile doit aussi permettre de retrouver un accès légitime."
        ],
        [
          "Pas de secret dans Cyberilo.",
          "N’inscrivez aucun vrai mot de passe dans les exercices ou feedbacks."
        ]
      ],
      "takeaway": "Changer de façon prévisible ne suffit pas : utilisez des secrets réellement distincts."
    },
    {
      "title": "Double protection et codes de secours",
      "desc": "Activer une seconde vérification sans perdre son accès.",
      "heading": "Ajouter une protection et préparer le secours.",
      "intro": "La double authentification demande une preuve supplémentaire lors de certaines connexions. Elle réduit le risque si votre mot de passe est découvert, mais ne rend pas toute fraude impossible.",
      "detail": "Les options varient : application d’authentification, clé de sécurité, SMS ou autre méthode. Choisissez une méthode disponible et adaptée, puis conservez les codes de secours dans un endroit protégé, séparé de l’appareil principal.",
      "body": [
        "Une demande de validation inattendue doit être refusée. Vérifiez ensuite l’activité depuis le service habituel.",
        "Les codes temporaires et de secours sont des secrets de connexion. Ne les dictez pas à une personne qui prétend vous aider.",
        "Avant de changer de téléphone, transférez ou réactivez votre méthode selon la procédure officielle et testez-la."
      ],
      "steps": [
        "Activer la protection proposée depuis les paramètres du compte.",
        "Ranger les codes de secours dans un emplacement protégé et accessible en cas de perte.",
        "Tester la récupération avant de supprimer l’ancienne méthode."
      ],
      "scenario": "Un prétendu conseiller vous demande d’accepter une notification de connexion pour « bloquer un pirate ».",
      "prompt": "Faut-il accepter cette notification ?",
      "practice": {
        "options": [
          "Oui, puisqu’il dit vouloir sécuriser le compte.",
          "Non, je n’ai pas lancé cette connexion."
        ],
        "correct": 1
      },
      "reveal": "Refusez la validation inattendue et vérifiez le compte depuis votre application habituelle.",
      "example": "Vous avez imprimé vos codes de secours : rangez-les dans un endroit protégé, pas sur le téléphone qui contient l’application d’authentification.",
      "q": [
        [
          "Une validation arrive sans action de votre part. Que faire ?",
          [
            "Refuser et vérifier l’activité du compte.",
            "Accepter pour faire disparaître l’alerte."
          ],
          0,
          "Ne validez que les connexions que vous avez initiées."
        ],
        [
          "À qui confier ses codes de secours ?",
          [
            "À un dépanneur sur une messagerie.",
            "À personne ; les conserver en sécurité."
          ],
          1,
          "Ils peuvent permettre de contourner la perte du second facteur."
        ],
        [
          "Avant un changement de téléphone ?",
          [
            "Tester le transfert et la récupération.",
            "Désinstaller immédiatement l’application d’authentification."
          ],
          0,
          "Gardez un accès fonctionnel pendant la transition."
        ]
      ],
      "lab": [
        "Prétendu conseiller",
        "Une demande urgente.",
        [
          "Acceptez la notification que nous venons de déclencher.",
          "Envoyez une photo de vos codes de secours.",
          "Ouvrez vous-même les paramètres de sécurité pour vérifier."
        ],
        [
          0,
          1
        ],
        [
          "Cette demande peut autoriser la connexion d’un tiers.",
          "Une photo expose des secrets de récupération.",
          "Vérifier soi-même dans le service habituel est le bon réflexe."
        ],
        "Refusez les demandes inattendues et gardez vos codes privés."
      ],
      "id": 2,
      "time": 5,
      "keyMessages": [
        [
          "Valider seulement ses demandes.",
          "Une notification inattendue n’est pas une simple formalité."
        ],
        [
          "Garder les secours privés.",
          "Un code de secours peut permettre de se connecter."
        ],
        [
          "Préparer le changement.",
          "Changer de téléphone ne doit pas supprimer votre seule seconde preuve."
        ]
      ],
      "takeaway": "Refusez la validation inattendue et vérifiez le compte depuis votre application habituelle."
    },
    {
      "title": "Garder le contrôle de WhatsApp",
      "desc": "Vérifier les appareils associés et les protections du compte.",
      "heading": "Un appareil associé est un accès à surveiller.",
      "intro": "WhatsApp peut fonctionner sur plusieurs appareils associés. Une association autorisée à tort peut donner à un tiers accès à une session de votre compte.",
      "detail": "Dans les paramètres de WhatsApp, cherchez les appareils connectés ou associés. Les intitulés varient selon la version. Examinez les appareils et déconnectez ceux que vous ne reconnaissez pas après vérification.",
      "body": [
        "Un QR code utilisé pour associer un appareil n’est pas un vote ni une inscription à un concours. Lisez l’autorisation demandée.",
        "Protégez le verrouillage du téléphone et activez les protections du compte proposées dans votre application. Vérifiez aussi les moyens de récupération associés.",
        "Ne communiquez jamais votre code d’enregistrement à un interlocuteur. Un proche dont le compte est compromis peut vous le demander."
      ],
      "steps": [
        "Examiner la liste des appareils associés dans WhatsApp.",
        "Retirer les appareils inconnus après vérification et activer les protections disponibles.",
        "Garder les codes privés et prévenir ses proches en cas de détournement."
      ],
      "scenario": "Après un concours, vous voyez un ordinateur inconnu dans les appareils associés de WhatsApp.",
      "prompt": "Quel geste reprendre en priorité ?",
      "practice": {
        "options": [
          "Le garder puisqu’aucun message ne semble manquer.",
          "Vérifier puis déconnecter cet appareil s’il n’est pas le mien."
        ],
        "correct": 1
      },
      "reveal": "L’absence de message manquant ne prouve pas l’absence d’accès. Contrôlez les sessions associées.",
      "example": "Vous voulez voter, mais l’application affiche « Associer un appareil » : annulez, cette autorisation ne correspond pas à votre objectif.",
      "q": [
        [
          "À quoi sert l’association d’un appareil ?",
          [
            "À ouvrir une session sur cet appareil.",
            "Uniquement à voter dans un concours."
          ],
          0,
          "Ce n’est pas une simple lecture d’image."
        ],
        [
          "Un proche demande un code reçu par SMS. Que faire ?",
          [
            "Le transférer pour lui rendre service.",
            "Le garder privé et vérifier la demande autrement."
          ],
          1,
          "Le compte du proche peut être détourné."
        ],
        [
          "Un appareil associé inconnu apparaît. Que faire ?",
          [
            "Vérifier et retirer l’accès s’il n’est pas autorisé.",
            "Attendre qu’un contact se plaigne."
          ],
          0,
          "Reprenez le contrôle sans attendre un dommage visible."
        ]
      ],
      "lab": [
        "Page de concours fictive",
        "Un vote vous est proposé.",
        [
          "Ouvrez Appareils associés dans WhatsApp.",
          "Autorisez cet ordinateur pour confirmer votre vote.",
          "Lisez ce que l’application vous demande d’autoriser."
        ],
        [
          0,
          1
        ],
        [
          "Le parcours quitte un vote pour aller vers une association.",
          "Cette autorisation donnerait une session à un appareil.",
          "Lire l’autorisation permet de repérer le décalage."
        ],
        "Annulez toute association que vous ne souhaitez pas réellement."
      ],
      "id": 3,
      "time": 5,
      "keyMessages": [
        [
          "Lire l’action autorisée.",
          "Le danger vient de l’association acceptée, pas de l’image du QR code seule."
        ],
        [
          "Contrôler les appareils.",
          "Une session associée doit correspondre à votre usage."
        ],
        [
          "Ne pas transmettre les codes.",
          "Un code reçu peut servir à enregistrer votre propre compte."
        ]
      ],
      "takeaway": "L’absence de message manquant ne prouve pas l’absence d’accès. Contrôlez les sessions associées."
    },
    {
      "title": "Faire le tri dans ses accès",
      "desc": "Revoir les sessions et les applications liées aux réseaux sociaux.",
      "heading": "Un compte peut avoir plusieurs portes d’entrée.",
      "intro": "Votre compte ne se limite pas à un mot de passe. Des sessions ouvertes et des applications autorisées peuvent conserver des accès.",
      "detail": "Dans les paramètres de sécurité du réseau social, examinez les connexions récentes, les appareils et les applications ou sites associés. Gardez uniquement les autorisations utiles et reconnues.",
      "body": [
        "Fermer un onglet ne déconnecte pas forcément le compte. Sur un appareil partagé, déconnectez le service et évitez d’enregistrer le mot de passe.",
        "Une application de quiz ou de jeu peut demander plus de permissions que nécessaire. Lisez leur portée avant de l’autoriser.",
        "Après un changement de mot de passe, utilisez aussi les options de fermeture des sessions proposées par le service. Les effets varient selon la plateforme."
      ],
      "steps": [
        "Examiner les appareils et les connexions récentes.",
        "Retirer les sessions et applications non reconnues ou devenues inutiles.",
        "Contrôler les coordonnées, alertes et options de récupération."
      ],
      "scenario": "Un jeu vous propose un résultat amusant, à condition de pouvoir publier en votre nom.",
      "prompt": "Comment décider ?",
      "practice": {
        "options": [
          "Accepter toutes les permissions pour voir le résultat.",
          "Refuser un accès qui ne correspond pas au besoin."
        ],
        "correct": 1
      },
      "reveal": "Un résultat amusant ne justifie pas nécessairement de publier à votre place.",
      "example": "Vous avez autorisé une application de quiz il y a un an : si elle n’est plus utile, retirez son autorisation depuis le réseau social.",
      "q": [
        [
          "Fermer l’onglet sur un ordinateur partagé suffit-il ?",
          [
            "Non, il faut se déconnecter du compte.",
            "Oui, toujours."
          ],
          0,
          "Une session peut rester active dans le navigateur."
        ],
        [
          "Une application demande de publier à votre place. Que faire ?",
          [
            "Vérifier le besoin et refuser l’accès excessif.",
            "Accepter puisque le jeu est populaire."
          ],
          0,
          "La popularité ne justifie pas des permissions excessives."
        ],
        [
          "Changer le mot de passe déconnecte-t-il toujours tout ?",
          [
            "Oui, sur chaque service sans exception.",
            "Non, vérifier les options de fermeture des sessions."
          ],
          1,
          "Le fonctionnement dépend du service."
        ]
      ],
      "lab": [
        "Jeu de personnalité fictif",
        "Découvrez votre profil.",
        [
          "Autorisez la publication en votre nom.",
          "Donnez votre mot de passe pour recevoir le résultat.",
          "Vous pouvez quitter sans obtenir de résultat."
        ],
        [
          0,
          1
        ],
        [
          "Cette permission dépasse le simple affichage d’un résultat.",
          "Ne donnez pas votre secret à ce jeu.",
          "Renoncer au jeu est une option sûre."
        ],
        "Refusez les accès excessifs et revoyez les applications déjà autorisées."
      ],
      "id": 4,
      "time": 5,
      "keyMessages": [
        [
          "Fermer n’est pas déconnecter.",
          "Un navigateur partagé peut conserver votre session."
        ],
        [
          "Limiter les permissions.",
          "Une application doit avoir un besoin clair de l’accès demandé."
        ],
        [
          "Revoir toutes les portes.",
          "La sécurité comprend aussi les sessions, les applications et la récupération."
        ]
      ],
      "takeaway": "Un résultat amusant ne justifie pas nécessairement de publier à votre place."
    },
    {
      "title": "Reprendre la main après un incident",
      "desc": "Ordonner les premières actions sans aggraver la situation.",
      "heading": "Récupérer, refermer les accès, prévenir.",
      "intro": "Des messages envoyés à votre insu, des coordonnées modifiées ou une connexion inhabituelle peuvent signaler un incident. Vérifiez les faits et agissez depuis un appareil de confiance.",
      "detail": "Si vous avez encore accès, sécurisez le compte et les moyens de récupération. Sinon, suivez la procédure de récupération du service depuis son application ou son adresse habituelle. Ne payez pas un inconnu promettant un déblocage garanti.",
      "body": [
        "Gardez les preuves utiles : alertes, dates et messages, sans diffuser vos secrets. Prévenez vos contacts par un canal encore fiable si des demandes frauduleuses ont été envoyées.",
        "Contrôlez le mot de passe, les moyens de récupération, les sessions, les applications liées et les règles de messagerie. Une seule action ne couvre pas tous les accès.",
        "Si de l’argent a été envoyé ou une activité professionnelle touchée, contactez rapidement le prestataire financier ou le responsable compétent. Les possibilités de blocage ou de remboursement varient."
      ],
      "steps": [
        "Utiliser un appareil fiable et le parcours officiel de récupération.",
        "Sécuriser les accès et conserver les preuves utiles.",
        "Prévenir les contacts et les services concernés selon les conséquences."
      ],
      "scenario": "Votre réseau social envoie des demandes d’argent. Un inconnu promet de le récupérer contre un acompte et vos codes.",
      "prompt": "Quelle démarche choisir ?",
      "practice": {
        "options": [
          "Payer et transmettre les codes pour gagner du temps.",
          "Passer par la récupération officielle et prévenir mes contacts autrement."
        ],
        "correct": 1
      },
      "reveal": "Le faux dépanneur peut ajouter une seconde arnaque. Utilisez un canal officiel et ne partagez aucun code.",
      "example": "Prévenez un proche par téléphone : « Mon compte envoie de faux messages. Ne verse rien et ne transmets aucun code. »",
      "q": [
        [
          "Vous n’avez plus accès au compte. Que faire ?",
          [
            "Suivre la récupération officielle depuis un appareil fiable.",
            "Payer le premier dépanneur qui promet une garantie."
          ],
          0,
          "Une promesse de récupération n’est pas une preuve de fiabilité."
        ],
        [
          "Comment prévenir vos contacts ?",
          [
            "Uniquement depuis le compte détourné.",
            "Par un autre canal encore fiable."
          ],
          1,
          "Le compte touché peut être contrôlé par un tiers."
        ],
        [
          "Un paiement frauduleux est parti. Que faire ?",
          [
            "Attendre la fin de la semaine.",
            "Contacter rapidement le service financier concerné."
          ],
          1,
          "Agir vite peut limiter les conséquences, sans garantir un remboursement."
        ]
      ],
      "lab": [
        "Prétendu récupérateur de comptes",
        "Je peux vous aider.",
        [
          "Récupération garantie si vous payez maintenant.",
          "Envoyez vos codes de secours en privé.",
          "Vous pouvez consulter l’aide dans l’application officielle."
        ],
        [
          0,
          1
        ],
        [
          "La garantie et la pression au paiement doivent vous alerter.",
          "Ces codes peuvent donner accès au compte.",
          "Le parcours officiel reste la démarche à privilégier."
        ],
        "Conservez les preuves, utilisez le parcours officiel et prévenez vos contacts par un canal fiable."
      ],
      "id": 5,
      "time": 5,
      "keyMessages": [
        [
          "Garder un canal fiable.",
          "Le compte détourné ne doit pas servir à prouver votre identité."
        ],
        [
          "Éviter la seconde arnaque.",
          "Un dépanneur inconnu ne doit recevoir ni argent ni codes de secours."
        ],
        [
          "Adapter l’alerte.",
          "Contacts, banque ou responsable : prévenez ceux qui peuvent réduire les conséquences."
        ]
      ],
      "takeaway": "Le faux dépanneur peut ajouter une seconde arnaque. Utilisez un canal officiel et ne partagez aucun code."
    }
  ],
  "en": [
    {
      "title": "Secure your email account",
      "desc": "Make email a reliable route to account recovery.",
      "heading": "Your inbox opens other doors.",
      "intro": "Email is often used to reset passwords for other services. Protecting it should come first.",
      "detail": "Open security settings from your usual email service. Review recovery details, devices and forwarding rules: an unknown rule may keep exposing messages.",
      "body": [
        "Recovery details help you regain access. Use an address or number that you still control.",
        "Check a sign-in alert inside the service itself. An approximate location alone does not prove a break-in.",
        "After checking their purpose, remove forwarding rules and app permissions you do not recognise."
      ],
      "steps": [
        "Check recovery details in the official settings.",
        "Enable extra protection and keep recovery methods separately.",
        "Review sessions, forwarding rules and connected apps."
      ],
      "scenario": "While securing email, you find automatic forwarding to an unknown address.",
      "prompt": "What should you examine besides the password?",
      "practice": {
        "options": [
          "Change the password and check nothing else.",
          "Review forwarding, sessions and recovery details too."
        ],
        "correct": 1
      },
      "reveal": "A new password does not replace reviewing sessions, forwarding and permissions.",
      "example": "An old number is still listed for recovery: replace it with one you control, then confirm the update.",
      "q": [
        [
          "Why protect email first?",
          [
            "It often helps recover other accounts.",
            "It has no connection to other accounts."
          ],
          0,
          "A password reset email may grant access to another service."
        ],
        [
          "A session shows an unfamiliar city. What next?",
          [
            "Immediately assume a break-in.",
            "Check the device, time and activity too."
          ],
          1,
          "Sign-in locations may be approximate."
        ],
        [
          "What should you review after an incident?",
          [
            "Only your profile photo.",
            "Forwarding rules and authorised apps too."
          ],
          1,
          "Some access may persist after a password change."
        ]
      ],
      "lab": [
        "Fictional security dashboard",
        "Review your email account.",
        [
          "Forwarding to an address you do not know.",
          "A recovery address you have lost access to.",
          "Your current phone, used this morning."
        ],
        [
          0,
          1
        ],
        [
          "Unknown forwarding may expose messages.",
          "A lost recovery method cannot help you regain access.",
          "This session matches your activity: do not remove it without a reason."
        ],
        "Review unknown access and recovery methods first."
      ],
      "id": 0,
      "time": 5,
      "keyMessages": [
        [
          "Start with email.",
          "It may be used to reset your other accounts."
        ],
        [
          "Check before removing.",
          "An unusual device name or location may have an innocent explanation."
        ],
        [
          "Look for lasting access.",
          "Forwarding rules or authorised apps may retain access."
        ]
      ],
      "takeaway": "A new password does not replace reviewing sessions, forwarding and permissions."
    },
    {
      "title": "Strong, separate sign-ins",
      "desc": "Choose a unique secret or passkey for each account.",
      "heading": "Do not let one secret open everything.",
      "intro": "Reusing a password connects the risks across accounts: a leak at one service can threaten others.",
      "detail": "A password manager helps create and store different secrets. Protect its main access and plan recovery. A passkey is another sign-in method offered by some services.",
      "body": [
        "A long, unique secret is better than predictable variations reused everywhere. Never use a training example as a real password.",
        "A passkey uses cryptography; your device lock authorises its use. Recovery depends on your device or provider.",
        "Before replacing your phone or removing old access, make sure another working sign-in method is available."
      ],
      "steps": [
        "Replace reused passwords on priority accounts first.",
        "Use a password manager and protect its main access.",
        "If passkeys are available, check recovery after losing a device."
      ],
      "scenario": "Your inbox and an old website share a password. The website reports a leak.",
      "prompt": "Which change limits the damage?",
      "practice": {
        "options": [
          "Keep the secret and add one digit.",
          "Create unique secrets for the affected accounts."
        ],
        "correct": 1
      },
      "reveal": "A predictable change is not enough: use truly separate secrets.",
      "example": "Your manager suggests a random password: save it there and do not reuse it elsewhere.",
      "q": [
        [
          "A leaked password was reused. What next?",
          [
            "Change it on every affected account.",
            "Wait only for a banking alert."
          ],
          0,
          "Reuse may expose several services."
        ],
        [
          "Before removing an old passkey?",
          [
            "Delete all access first.",
            "Test another sign-in method and recovery."
          ],
          1,
          "Avoid locking yourself out."
        ],
        [
          "Where should you enter your real password in this course?",
          [
            "In private feedback.",
            "Nowhere on Cyberilo."
          ],
          1,
          "The course never asks for secrets from your other accounts."
        ]
      ],
      "lab": [
        "Fictional preparation note",
        "You are replacing your phone.",
        [
          "Remove all access before testing the new phone.",
          "Reuse a password to save time.",
          "Check recovery methods before the change."
        ],
        [
          0,
          1
        ],
        [
          "You could lose your only access.",
          "Reuse connects risks across accounts.",
          "This is a useful precaution, not a sign of fraud."
        ],
        "Test sign-in and keep a safe recovery option."
      ],
      "id": 1,
      "time": 5,
      "keyMessages": [
        [
          "One account, one secret.",
          "A leak should not unlock every service."
        ],
        [
          "Plan recovery.",
          "Good protection also lets the legitimate owner regain access."
        ],
        [
          "No secrets in Cyberilo.",
          "Never enter real passwords in exercises or feedback."
        ]
      ],
      "takeaway": "A predictable change is not enough: use truly separate secrets."
    },
    {
      "title": "Extra protection and backup codes",
      "desc": "Enable a second check without losing access.",
      "heading": "Add protection and prepare a backup.",
      "intro": "Two-factor authentication asks for extra proof during some sign-ins. It reduces the risk of a stolen password, but does not make every scam impossible.",
      "detail": "Options include an authenticator app, security key, SMS or another method. Choose a suitable available method and keep backup codes in a protected place separate from your main device.",
      "body": [
        "Reject unexpected approval requests. Then check activity from your usual service.",
        "Temporary and backup codes are sign-in secrets. Do not dictate them to someone claiming to help.",
        "Before replacing a phone, transfer or reactivate your method through the official process and test it."
      ],
      "steps": [
        "Enable extra protection in account settings.",
        "Keep backup codes protected and accessible if your phone is lost.",
        "Test recovery before removing the old method."
      ],
      "scenario": "A supposed adviser asks you to approve a sign-in notification to “stop a hacker”.",
      "prompt": "Should you approve it?",
      "practice": {
        "options": [
          "Yes, they say they want to secure the account.",
          "No, I did not initiate this sign-in."
        ],
        "correct": 1
      },
      "reveal": "Reject the unexpected request and check through your usual app.",
      "example": "If you print backup codes, store them securely, away from the phone holding your authenticator app.",
      "q": [
        [
          "An approval arrives unexpectedly. What next?",
          [
            "Reject it and check account activity.",
            "Approve it to dismiss the alert."
          ],
          0,
          "Only approve sign-ins you initiated."
        ],
        [
          "Who should receive backup codes?",
          [
            "A repair adviser on a messenger.",
            "Nobody; keep them secure."
          ],
          1,
          "They can enable access if the second factor is lost."
        ],
        [
          "Before replacing a phone?",
          [
            "Test transfer and recovery.",
            "Immediately uninstall the authenticator."
          ],
          0,
          "Keep a working sign-in during the transition."
        ]
      ],
      "lab": [
        "Supposed adviser",
        "An urgent request.",
        [
          "Approve the notification we just triggered.",
          "Send a photo of your backup codes.",
          "Open security settings yourself to check."
        ],
        [
          0,
          1
        ],
        [
          "This could approve another person’s sign-in.",
          "A photo exposes recovery secrets.",
          "Checking directly in your usual service is useful."
        ],
        "Reject unexpected requests and keep your codes private."
      ],
      "id": 2,
      "time": 5,
      "keyMessages": [
        [
          "Approve only your own requests.",
          "An unexpected notification is not a harmless formality."
        ],
        [
          "Keep backups private.",
          "A backup code may enable a sign-in."
        ],
        [
          "Prepare a device change.",
          "Replacing a phone should not remove your only second factor."
        ]
      ],
      "takeaway": "Reject the unexpected request and check through your usual app."
    },
    {
      "title": "Keep control of WhatsApp",
      "desc": "Review linked devices and account protection.",
      "heading": "A linked device is access worth checking.",
      "intro": "WhatsApp can work on several linked devices. Approving the wrong link may give someone else a session on your account.",
      "detail": "Look for linked devices in WhatsApp settings. Labels vary by version. Review the list and, after checking, sign out devices you do not recognise.",
      "body": [
        "A QR code used to link a device is not a vote or competition entry. Read the permission being requested.",
        "Protect your phone lock and enable available account protections in the app. Check related recovery methods too.",
        "Never share your registration code with another person. A friend’s compromised account may ask for it."
      ],
      "steps": [
        "Review WhatsApp’s linked device list.",
        "Remove unknown devices after checking and enable available protections.",
        "Keep codes private and warn contacts if the account is hijacked."
      ],
      "scenario": "After a competition, an unfamiliar computer appears in your WhatsApp linked devices.",
      "prompt": "What should you do first?",
      "practice": {
        "options": [
          "Keep it because no messages seem to be missing.",
          "Check it and sign it out if it is not mine."
        ],
        "correct": 1
      },
      "reveal": "No missing messages does not prove nobody has access. Check linked sessions.",
      "example": "You want to vote but the app says “Link a device”: cancel; that permission does not match your goal.",
      "q": [
        [
          "What does linking a device do?",
          [
            "Opens a session on that device.",
            "Only records a competition vote."
          ],
          0,
          "It is more than viewing an image."
        ],
        [
          "A friend requests a code you received by SMS. What next?",
          [
            "Forward it to help.",
            "Keep it private and verify through another channel."
          ],
          1,
          "The friend’s account may be hijacked."
        ],
        [
          "An unfamiliar linked device appears. What next?",
          [
            "Check it and remove access if unauthorised.",
            "Wait for a contact to complain."
          ],
          0,
          "Regain control before visible harm occurs."
        ]
      ],
      "lab": [
        "Fictional competition page",
        "You are offered a vote.",
        [
          "Open Linked devices in WhatsApp.",
          "Authorise this computer to confirm your vote.",
          "Read the permission the app is requesting."
        ],
        [
          0,
          1
        ],
        [
          "The process moves from voting to linking.",
          "This would give a device a session.",
          "Reading the permission helps reveal the mismatch."
        ],
        "Cancel any device link you do not actually want."
      ],
      "id": 3,
      "time": 5,
      "keyMessages": [
        [
          "Read what you authorise.",
          "The risk comes from approving a link, not from the QR picture alone."
        ],
        [
          "Review devices.",
          "Each linked session should match your usage."
        ],
        [
          "Do not share codes.",
          "A code you receive may register your own account."
        ]
      ],
      "takeaway": "No missing messages does not prove nobody has access. Check linked sessions."
    },
    {
      "title": "Review who has access",
      "desc": "Check social media sessions and connected apps.",
      "heading": "An account may have several entry points.",
      "intro": "An account is more than a password. Open sessions and authorised apps may retain access.",
      "detail": "In the social network’s security settings, review recent sign-ins, devices and connected apps or websites. Keep only useful access that you recognise.",
      "body": [
        "Closing a tab does not always sign you out. On shared devices, sign out and avoid saving passwords.",
        "A quiz or game may request more permissions than it needs. Read their scope before approving.",
        "After changing a password, also use session sign-out options. Their effect varies by platform."
      ],
      "steps": [
        "Review devices and recent sign-ins.",
        "Remove unrecognised or unused sessions and apps.",
        "Check contact details, alerts and recovery options."
      ],
      "scenario": "A game offers a fun result if you let it post on your behalf.",
      "prompt": "How should you decide?",
      "practice": {
        "options": [
          "Accept every permission to see the result.",
          "Reject access that does not match the need."
        ],
        "correct": 1
      },
      "reveal": "A fun result does not necessarily justify permission to post as you.",
      "example": "You authorised a quiz app a year ago: if no longer useful, remove its permission in the social network.",
      "q": [
        [
          "Is closing a tab on a shared computer enough?",
          [
            "No, sign out of the account.",
            "Yes, always."
          ],
          0,
          "The browser may keep an active session."
        ],
        [
          "An app asks to post as you. What next?",
          [
            "Check the need and reject excessive access.",
            "Accept because the game is popular."
          ],
          0,
          "Popularity does not justify excessive permissions."
        ],
        [
          "Does a password change always end every session?",
          [
            "Yes, on every service without exception.",
            "No, check session sign-out options."
          ],
          1,
          "Behaviour depends on the service."
        ]
      ],
      "lab": [
        "Fictional personality game",
        "Discover your profile.",
        [
          "Allow posting on your behalf.",
          "Give your password to receive the result.",
          "You can leave without receiving a result."
        ],
        [
          0,
          1
        ],
        [
          "This goes beyond displaying a result.",
          "Do not give this game your secret.",
          "Skipping the game is a safe option."
        ],
        "Reject excessive access and review previously authorised apps."
      ],
      "id": 4,
      "time": 5,
      "keyMessages": [
        [
          "Closing is not signing out.",
          "A shared browser may retain your session."
        ],
        [
          "Limit permissions.",
          "An app should have a clear need for the requested access."
        ],
        [
          "Review every entry point.",
          "Sessions, apps and recovery are part of security too."
        ]
      ],
      "takeaway": "A fun result does not necessarily justify permission to post as you."
    },
    {
      "title": "Regain control after an incident",
      "desc": "Put first actions in order without making matters worse.",
      "heading": "Recover, close access, warn others.",
      "intro": "Messages you did not send, changed contact details or unusual sign-ins may signal an incident. Check the facts and act from a trusted device.",
      "detail": "If you still have access, secure the account and recovery methods. Otherwise use the service’s official recovery process from its usual app or address. Do not pay strangers promising guaranteed recovery.",
      "body": [
        "Keep useful evidence such as alerts, dates and messages without exposing secrets. Warn contacts through a still-trusted channel if fraudulent requests were sent.",
        "Review the password, recovery methods, sessions, linked apps and email rules. A single action does not cover every access route.",
        "If money was sent or work was affected, quickly contact the financial provider or relevant colleague. Blocking or refund options vary."
      ],
      "steps": [
        "Use a trusted device and the official recovery process.",
        "Secure access and keep useful evidence.",
        "Warn contacts and relevant services according to the impact."
      ],
      "scenario": "Your social account sends money requests. A stranger promises recovery for an advance payment and your codes.",
      "prompt": "Which approach should you choose?",
      "practice": {
        "options": [
          "Pay and send codes to save time.",
          "Use official recovery and warn contacts another way."
        ],
        "correct": 1
      },
      "reveal": "The supposed fixer may add a second scam. Use official channels and never share codes.",
      "example": "Call a friend: “My account is sending fake messages. Do not pay or share any codes.”",
      "q": [
        [
          "You can no longer access the account. What next?",
          [
            "Use official recovery from a trusted device.",
            "Pay the first fixer promising a guarantee."
          ],
          0,
          "A recovery promise is not proof of trustworthiness."
        ],
        [
          "How should you warn contacts?",
          [
            "Only through the hijacked account.",
            "Through another channel you still trust."
          ],
          1,
          "Another person may control the affected account."
        ],
        [
          "A fraudulent payment was sent. What next?",
          [
            "Wait until the end of the week.",
            "Quickly contact the financial provider involved."
          ],
          1,
          "Acting quickly may limit harm but does not guarantee a refund."
        ]
      ],
      "lab": [
        "Supposed account fixer",
        "I can help you.",
        [
          "Guaranteed recovery if you pay now.",
          "Send your backup codes privately.",
          "You can check help inside the official app."
        ],
        [
          0,
          1
        ],
        [
          "The guarantee and pressure to pay are warning signs.",
          "These codes may give account access.",
          "The official process is the preferred route."
        ],
        "Keep evidence, use official recovery and warn contacts through a trusted channel."
      ],
      "id": 5,
      "time": 5,
      "keyMessages": [
        [
          "Keep a trusted channel.",
          "A hijacked account cannot reliably prove your identity."
        ],
        [
          "Avoid a second scam.",
          "An unknown fixer should receive neither money nor backup codes."
        ],
        [
          "Warn the right people.",
          "Contacts, a bank or a responsible colleague may help limit harm."
        ]
      ],
      "takeaway": "The supposed fixer may add a second scam. Use official channels and never share codes."
    }
  ]
}];
