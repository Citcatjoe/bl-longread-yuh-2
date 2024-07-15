(function($){

    data = [
        {
            indexDesktop: 1,
            indexMobile: 1,
            class: 'relative elem bg-white rounded-xl md:rounded-3xl overflow-hidden aspect-square',
            hasImg: 'full',
            img: 'age.png',
            bgColor : 'rgb(106, 197, 193)',
            label1: '3',
            label2: 'Comme l’âge de Yuh',
            label2FontSize: 'text-2xl md:text-4xl xl:text-4xl',
            content: '<span class="lettrine mb-6">Le 11 mai 2021, la ville vaudoise de Gland est devenue l’épicentre d’une véritable révolution qui allait bientôt changer la face du mobile banking en Suisse : Yuh, application ultra simple et intuitive permettant à la fois de payer avec un smartphone, de mettre des sous de côté pour les petits</span> <span>et grand projets mais aussi de s’essayer à l’investissement financier même lorsque l’on n’a pas le portefeuille d’un trader du CAC 40, débarquait sur les deux principaux stores d’applications mobiles. A star is born !</span>'
        },
        {
            indexDesktop: 2,
            indexMobile: 3,
            class: 'relative elem bg-white rounded-xl md:rounded-3xl overflow-hidden col-span-2  h-40 sm:h-64 md:h-80 lg:h-auto w-full',
            hasImg: null,
            label1: '5073',
            label2: 'Comme le montant moyen en CHF qu’un utilisateur Yuh a investi dans son compte Yuh 3a',
            label2FontSize: 'text-xl md:text-4xl lg:text-2xl xl:text-4xl',
            content: '<span class="lettrine mb-8">Dans sa célèbre fable, Jean de La Fontaine oppose le sort de la fourmi travailleuse et prévoyante à celui de la cigale insouciante et hédoniste ayant préféré chanter tout l’été. La saison froide arrivée, si la première peut compter sur le fruit de son travail et de ses sacrifices, la seconde se retrouve alors sans ressources et doit en plus endurer le sarcasme de sa collègue qui lui rétorque, lorsqu’elle lui demande de l’aide : «Eh bien ! Dansez maintenant ». Et vous ? Êtes-vous plutôt team cigale ou fourni ? Êtes-vous en passe de réaliser votre rêve de partir à la retraite à 40 ans ou êtes-vous pour le moment plus adeptes d’un état d’esprit « yolo » ?</span><span>Lancé en août 2023, le pilier 3a made in Yuh permet aux « Yuhsers » de tous âges de se constituer une prévoyance facultative en complément de l’AVS et de la prévoyance professionnelle – les deux premiers piliers obligatoires du système suisse – mais aussi de pouvoir bénéficier d’avantages fiscaux en déduisant leurs cotisations (pensez-y lors de votre prochaine déclaration d’impôts !). Pour coller au mieux aux préférences et à la situation de vie de chaque utilisateur, Yuh propose de choisir entre cinq stratégies d’investissement, de la plus sécure à la plus audacieuse, avec un pourcentage d’investissement dans des actions correspondant au profil choisi. De quoi préparer son avenir sans prise de tête comme une vraie fourmi, le tout directement depuis votre smartphone.</span>'
        },
        {
            indexDesktop: 3,
            indexMobile: 2,
            class: 'relative elem bg-white rounded-xl md:rounded-3xl overflow-hidden aspect-square',
            hasImg: null,
            label1: '2',
            label2: 'Comme les deux «mamans» de Yuh ',
            label2FontSize: 'text-xl md:text-4xl lg:text-3xl',
            content: '<span class="lettrine mb-6">C’est LA question que tous les enfants posent un jour à leurs parents plus ou moins paniqués: « Comment naissent les bébés ? ». Dans le cas de Yuh, et après une enquête rigoureuse, je suis en mesure de vous indiquer qu’il n’est point ici question de choux, de roses ou de cigognes mais plutôt d’un mariage réussi entre deux rockstars, les Johnny Cash et June Parker de la finance suisse, j’ai nommé Swissquote et PostFinance.</span><span>Bien loin d’être un « Nepo baby » (terme tendance et péjoratif désignant le fils ou la fille d’une célébrité, ndlr.), Yuh peut cependant compter sur le soutien de ses deux mamans dans son quotidien. Ainsi, alors que Swissquote s’occupe des infrastructures et de la licence bancaire (ne devient pas une banque qui veut et la FINMA veille au grain !), PostFinance, quant à elle, prend en charge les aspects liés aux études de marché ainsi que les activités de sponsoring. </span>'
        },
        {
            indexDesktop: 4,
            indexMobile: 6,
            class: 'relative elem bg-white rounded-xl md:rounded-3xl overflow-hidden col-span-2  h-40 sm:h-64 md:h-80 lg:h-auto',
            hasImg: 'right',
            img: 'gaming.png',
            bgColor : 'rgb(251, 238, 174)',
            label1: '425',
            label2: 'Comme le nombre de courses Mario Kart disputées au cours des 12 derniers mois ',
            label2FontSize: 'text-lg md:text-3xl lg:text-2xl xl:text-4xl',
            content: '<span class="lettrine mb-6">Le Champidrome, la Descente Givrée ou encore la redoutable Route Arc-en-ciel, les fans de jeux vidéo auront bien sûr reconnu le mythique jeu de courses motorisées. Chez Yuh la pause gaming du midi est devenue un incontournable pour décompresser, se changer les idées et surtout partager un moment de fun avec ses collègues.</span><span>Parfois injustement relégué au monde de l’enfance, jouer à tout âge posséderait selon plusieurs études de nombreux bienfaits: amélioration du bien-être émotionnel, réduction du stress, meilleur esprit d’équipe et même augmentation de la satisfaction professionnelle. Console, cartes, jeux de plateau, partie de foot improvisée, ou quand ne pas trop se prendre au sérieux fait du bien à notre santé mentale.</span>'
        },
        {
            indexDesktop: 5,
            indexMobile: 5,
            class: 'relative elem bg-white rounded-xl md:rounded-3xl overflow-hidden aspect-square',
            hasImg: null,
            label1: '333 ',
            label2: 'Comme le nombre moyen de mises à jour mensuelles du code de l’app Yuh',
            label2FontSize: 'text-md md:text-2xl lg:text-xl xl:text-2xl',
            content: '<span class="lettrine mb-6">Parmi les compétences les plus recherchées dans le monde du travail actuel, on retrouve en bonne place la programmation informatique, aussi appelé coding par les initiés. Mais qu’est-ce que ça veut dire au juste, coder ? Afin d’y voir un peu plus clair, Blick est allé rendre visite à Swissquote, qui, rappelez-vous, met à disposition son infrastructure technique pour Yuh. Technical Project Manager au sein de la banque installée elle aussi à Gland, Baptiste Mondehard compare la programmation informatique à un travail de traduction où l’humain explique à un système (une app dans le cas de Yuh) comment effectuer une action donnée dans un langage que celui-ci comprend.</span><span>Ainsi, chaque action, même la plus petite, est régie par ce que l’on appelle des lignes de codes venant donner des instructions à la machine. Constant « work-in-progress » le code nécessite des mises à jour fréquentes, appelées « commits », afin de continuer à faire fonctionner le système correctement, d’assurer une cohérence technique sur le long terme… mais aussi de challenger l’esprit et la créativité des développeurs !</span>'
        },
        {
            indexDesktop: 6,
            indexMobile: 4,
            class: 'relative elem bg-white rounded-xl md:rounded-3xl overflow-hidden aspect-square',
            hasImg: 'top',
            img: 'papier2.png',
            bgColor : 'rgb(126, 190, 255)',
            label1: '4,6',
            label2: 'Comme le nombre de millions de feuilles de papier économisées en comparaison avec une banque classique',
            label2FontSize: 'text-sm md:text-2xl lg:text-lg xl:text-xl',
            content: '<span class="lettrine mb-6">«Assurance maladie », « voiture » « appartement », « banque », « impôts »… combien de classeurs fédéraux remplis à ras-bord de documents et classés avec plus ou moins de diligence encombrent vos étagères et autres solutions de rangement ? A la différence des banques classiques, Yuh n’envoie pas de courriers papier à ses clients qui retrouvent dans l’application tous les documents dont ils ont besoin.</span><span>Contrat d’ouverture de compte, relevés, avis d’intérêts ou encore performances du portefeuille, les « Yuhmains » estiment à plus de quatre millions et demi le nombre de feuilles de papier ainsi économisées depuis la création de Yuh. De quoi faire de la place dans sa bibliothèque, réduire le gaspillage mais aussi alléger son esprit lorsqu’on fait partie de la grande famille des phobiques du classement. </span>'
        },
        {
            indexDesktop: 7,
            indexMobile: 7,
            class: 'relative elem bg-white rounded-xl md:rounded-3xl overflow-hidden aspect-square',
            hasImg: 'full',
            img: 'chiens.png',
            bgColor : 'rgb(126, 190, 255)',
            label1: '2',
            label2: 'Comme le nombre de chiens qui accompagnent ou ont accompagné leurs humains au travail',
            label2FontSize: 'text-md md:text-2xl lg:text-lg lg:text-md xl:text-2xl',
            content: '<span class="lettrine">Saviez-vous que selon <a href="https://www.purina.ch/sites/default/files/2023-02/NSU_Survey_FR.pdf" target="_blank" class="underline decoration-2 font-semibold">une étude parue en 2017</a>, plus de huit Suisses sur dix souhaiteraient avoir la possibilité d’emmener leur fidèle compagnon au travail ? Un message reçu cinq sur cinq par Yuh qui affiche fièrement son statut d’entreprise « dog friendly ». A ce jour, la néo-banque a accueilli deux de ces collègues d’un genre particulier.</span><div class="grid lg:grid-cols-2 gap-10 md:w-10/12 mx-auto pt-8 mb-10"><div><img class="w-24 md:w-36 mb-6" src="img/this/nugget.png"><span class="block"><b class="underline decoration-2">Nom :</b> Nugget</span><span class="block"><b class="underline decoration-2">Âge :</b> 3 ans</span><span class="block"><b class="underline decoration-2">Race :</b> Caniche moyen</span><span class="block"><b class="underline decoration-2">Département :</b> Marketing</span><span class="block"><b class="underline decoration-2">Job :</b> Spécialiste du sponsoring, des partenariats et des événements</span><span class="block"><b class="underline decoration-2">Aime :</b> Ses balles de jeu, gambader dans les bureaux et les morceaux de fromage</span><span class="block"><b class="underline decoration-2">N’aime pas :</b> Le bruit de la douche, les longs trajets en voiture et les promenades sous la pluie</span><span class="block"><b class="underline decoration-2">Signe distinctif :</b> Vole les chaussettes pour les cacher</span></div><div><img class="w-24 md:w-36 mb-6" src="img/this/punky.png"><span class="block"><b class="underline decoration-2">Nom :</b> Punky</span><span class="block"><b class="underline decoration-2">Âge :</b> 10 ans</span><span class="block"><b class="underline decoration-2">Race :</b> Golden retriever</span><span class="block"><b class="underline decoration-2">Département :</b> Marketing</span><span class="block"><b class="underline decoration-2">Job :</b> Développement des campagnes publicitaires</span><span class="block"><b class="underline decoration-2">Aime :</b> Les câlins, manger, dormir, nager et se rouler dans la boue</span><span class="block"><b class="underline decoration-2">N’aime pas :</b> Les orages, les feux d’artifices, les ascenseurs et les escalators</span><span class="block"><b class="underline decoration-2">Signe distinctif :</b> Adoucit le stress de ses collègues</span></div></div><span class="italic mb-6 bg-emerald-50 border-l-8 border-emerald-300 text-emerald-600 p-4">Malheureusement, Punky est décédé à la fin du mois de juin 2024 après avoir apporté de nombreuses années de joie et d’amour à ses humains.</span><span><b>Bon à savoir :</b> depuis une dizaine d’années, un nombre croissant études met en avant le fait que la présence de chiens dans les entreprises permettrait d’induire une baisse du niveau de stress des travailleurs ainsi qu’une augmentation de la productivité, de la satisfaction et de l’engagement de ces derniers. Avis à tous les dog lovers et autres dog parents : vous savez à présent quels arguments faire valoir auprès de votre boss réticent à voir Mirza vous accompagner au travail.</span>'
        },
        {
            indexDesktop: 8,
            indexMobile: 9,
            class: 'relative elem bg-white rounded-xl md:rounded-3xl overflow-hidden col-span-2  h-40 sm:h-64 md:h-80 lg:h-auto',
            hasImg: null,
            label1: '106’200*',
            label2: 'Comme le prix en CHF de l’action la plus chère disponible sur Yuh ',
            label2FontSize: 'text-xl md:text-4xl lg:text-2xl xl:text-4xl',
            content: '<span class="lettrine mb-6">Ah, la Suisse… ses montagnes, ses prairies et bien sûr…son chocolat ! Plus grand consommateurs au monde, les Helvètes sont également les plus importants producteurs de cette douceur irrésistible obtenue à partir des fèves de cacao. Blanc, au lait, noir ou même ruby, notre or brun est apprécié partout dans le monde et donne le sourire aux chocolatiers (et pas uniquement en raison des effets antidépresseurs que certaines études prêtent au cacao, si vous voyez ce que je veux dire).</span><span class="mb-6">A ce stade, et rusés comme vous êtes, il est possible que vous envisagiez de mettre la main sur quelques actions d’entreprises renommées dans le domaine. C’est alors que vous découvrez que Yuh propose justement des actions du maître chocolatier Lindt. Problème : lorsque que vos yeux s’attardent sur le prix, vous constatez avec effroi que pour être propriétaire d’une seule action, il vous faudrait débourser pas moins de 106’200 francs !</span><span>Alors, à la poubelle, vos rêves d’investissement ? Pas si vite. Afin de démocratiser le trading même lorsque l’on ne s’appelle pas Warren Buffet, Yuh a mis en place un système de fractional trading permettant d’acquérir un petit bout de cette action dès 25 chf. Vous reprendrez bien un petit carré de chocolat ?</span>'
        },
        {
            indexDesktop: 9,
            indexMobile: 8,
            class: 'relative elem bg-white rounded-xl md:rounded-3xl overflow-hidden aspect-square',
            hasImg: null,
            label1: '31',
            label2: 'Comme le pourcentage de femmes parmi les Yuhsers',
            label2FontSize: 'text-xl md:text-3xl lg:text-2xl xl:text-3xl',
            content: '<span class="lettrine mb-6">Dans un article paru dans la revue 2023 de la Commission fédérale pour les questions féminines (CFQF), l’économiste et mathématicienne Monika Bütler explique que les femmes possèdent en général moins de connaissances financières de base que les hommes.</span><span class="mb-6">Depuis quelques années, la question de l’éducation financière au féminin intéresse en effet de plus en plus les chercheurs mais également la société civile à l’origine de l’arrivée de plateformes d’un nouveau genre destinées aux femmes souhaitant parler d’argent. Parmi elles, on peut citer <a href="https://plancash.fr/newsletter" target="_blank" class="underline decoration-2 font-semibold">la newsletter Plan Cash</a>, des ouvrages comme <a href="https://majustevaleur.com/livre" target="_blank" class="underline decoration-2 font-semibold">Aux thunes citoyennes</a> ou encore l’excellent podcast <a href="https://girlsthatinvest.com/pages/podcast" target="_blank" class="underline decoration-2 font-semibold">Girls That Invest</a>.</span><span>Chez Yuh, on observe que les femmes ont décidemment pris la main sur leurs finances personnelles puisqu’elles représentent en 2024 65% des « Yuhsers » actifs. Mieux : elles sont à présent 40% à investir régulièrement sur l’app. </span>'
        },
        {
            indexDesktop: 10,
            indexMobile: 12,
            class: 'relative elem bg-white rounded-xl md:rounded-3xl overflow-hidden col-span-2  h-40 sm:h-64 md:h-80 lg:h-auto',
            hasImg: 'right',
            img: 'people.png',
            bgColor : 'rgb(247, 203, 164)',
            label1: '230’000+',
            label2: 'Comme le nombre d’inscrits actifs sur l’app Yuh',
            label2FontSize: 'text-2xl md:text-4xl lg:text-3xl xl:text-4xl',
            content: '<span class="lettrine mb-6">Le 11 mai 2021 et l’issu d’un évènement de lancement virtuel, Covid-19 oblige, les Suisses ont vu débarquer dans leurs stores une application dont l’ambition consistait – tout simplement – à révolutionner la gestion financière mobile. Et une fois sur orbite, plus rien ne semblait pouvoir arrêter la fusée Yuh qui franchit alors la barre des 10’000 inscrits en l’espace de trois semaines.</span><span>En février 2022, le bébé de Swissquote et PostFinance, alors âgé de neuf mois, avait multiplié ce chiffre par cinq. Trois ans après son lancement, Yuh compte désormais plus de 230’000 « Yuhsers » actifs.</span>'
        },
        {
            indexDesktop: 11,
            indexMobile: 11,
            class: 'relative elem bg-white rounded-xl md:rounded-3xl overflow-hidden aspect-square',
            hasImg: null,
            label1: '83',
            label2: 'Comme le nombre de personnes employées chez Yuh',
            label2FontSize: 'text-md md:text-3xl lg:text-xl xl:text-3xl',
            content: '<span class="lettrine mb-6">En trois ans d’existence, la jeune pousse de la finance suisse a su s’entourer d’une équipe talents animés par une soif d’innovation et de créativité. Issus tous horizons, ces «Yuhmains» sont répartis entre les deux bureaux de Yuh à Gland et à Zurich et s’occupent entre autres :</span><ul class="list-disc w-3/4 mx-auto"><li><b>Du marketing :</b> ceux qui s’attellent chaque jour à faire rayonner Yuh </li><li><b>Du développement de nouvelles fonctionnalités :</b> les cerveaux derrière toutes les nouveautés de Yuh : l’intégration de Twint, les investissements récurrents ou encore la carte virtuel, c’est eux !</li><li><b>Du costumer care :</b> lorsque vous avez égaré votre carte, que vous avez oublié vos identifiants ou encore que vous paniquez car vous ne trouvez pas trace d’un paiement, ce sont eux que vous avez au téléphone.</li></ul>'
        },
        {
            indexDesktop: 12,
            indexMobile: 10,
            class: 'relative elem bg-white rounded-xl md:rounded-3xl overflow-hidden aspect-square',
            hasImg: 'top',
            img: 'granny.png',
            bgColor : 'rgb(251, 207, 207)', 
            label1: '100',
            label2: 'Comme l’âge de la doyenne des Yuhsers',
            label2FontSize: 'text-xl md:text-3xl lg:text-2xl xl:text-3xl',
            content: '<span class="lettrine">Qui a dit que le mobile banking était réservé à celles et ceux ayant grandi avec un smartphone dans une main et une tablette dans l’autre? Si l’âge de 40% des utilisateurs de Yuh se situe entre 20 et 40 ans, certains « Yuhsers » ont cependant largement l’âge d’être grands-parents, voire même arrières grands-parents. De quoi mettre du plomb dans l’aile aux clichés âgistes !</span>'
        },
        {
            indexDesktop: 13,
            indexMobile: 13,
            class: 'relative elem bg-white rounded-xl md:rounded-3xl overflow-hidden aspect-square',
            hasImg: 'full',
            img: 'night.png',
            bgColor : 'rgb(2, 23, 48)',
            label1: '500',
            label2: 'Comme le nombre moyen de personnes connectées sur Yuh en pleine nuit',
            label2FontSize: 'text-md md:text-2xl lg:text-lg xl:text-2xl',
            content: '<span class="lettrine mb-6">Alors que les pics d’activité sur Yuh se situent entre 9h et midi puis à nouveau à partir de 17h, on trouve tout de même en moyenne un demi-millier de Yuhsers connectés sur l’app aux alentours de 3h du matin ! Mais que peuvent-ils bien y faire alors même les marchés, eux, dorment à poings fermés ?</span><span>Si on peut penser que ces oiseaux de nuit sont en réalités des fans de cryptomonnaies (qui peuvent être tradées 24h sur 24 et 7 jours sur 7) ou encore des fêtards désireux de connaitre leur solde de carte après une soirée clubbing, on profite tout de même de l’occasion pour attirer leur attention sur l’importance de dormir suffisamment, de préférence entre 7 et 9 heures par nuit.</span>'
        },
        {
            indexDesktop: 14,
            indexMobile: 15,
            class: 'relative elem bg-white rounded-xl md:rounded-3xl overflow-hidden col-span-2  h-40 sm:h-64 md:h-80 lg:h-auto',
            hasImg: null,
            label1: '38',
            label2: 'Comme le nombre de jours séparant en moyenne deux nouveautés chez Yuh entre 2021 et 2022',
            label2FontSize: 'text-lg md:text-4xl lg:text-2xl xl:text-4xl',
            content: '<span class="lettrine">En décembre 2022, les « Yuhmains » ont calculé qu’en moyenne, Yuh avait lancé une nouvelle fonctionnalité tous les 38 jours. Ordres permanents, factures eBill, solutions de paiement mobile, fractional trading, ou quand une néo-banque prend des allures de ruche.</span>'
        },
        {
            indexDesktop: 15,
            indexMobile: 14,
            class: 'relative elem bg-white rounded-xl md:rounded-3xl overflow-hidden aspect-square',
            hasImg: null,
            label1: '53',
            label2: 'Comme le nombre d’ETF disponibles sur Yuh',
            label2FontSize: 'text-lg md:text-3xl lg:text-2xl xl:text-3xl',
            content: '<span class="lettrine mb-6">Pour les fêtes de fin d’année, les anniversaires ou simplement pour le plaisir de (se) faire plaisir, rien de tel qu’un imposant panier garni rempli à ras-bord de confitures, chutneys, grissinis, fromages et autres merveilles gastronomiques.</span><span>Version « finance » du bien-aimé panier en osier, les ETF (Exchange Traded Funds) ou fonds indiciels en bon français permettent d’investir dans une grande variété d’actifs (la sacrosainte diversification vers laquelle tout apprenti trader devrait chercher à tendre !) de manière transparente et souvent plus économiques que les fonds traditionnels. Et comme il existe des paniers pour tous les goûts et pour toutes les occasions, Yuh a sélectionné pour ses « Yuhsers » plus de quarante ETF de premier ordre : matières premières comme l’or ou l’argent, actions suisses à dividendes élevés, entreprises scandinaves, japonaises ou africaines, tech américaine ou encore immobilier suisse, le plus difficile, c’est encore de choisir.</span>'
        },
        {
            indexDesktop: 16,
            indexMobile: 18,
            class: 'relative elem bg-white rounded-xl md:rounded-3xl overflow-hidden col-span-2  h-40 sm:h-64 md:h-80 lg:h-auto',
            hasImg: 'right',
            img: 'coins.png',
            bgColor : 'rgb(251, 238, 174)',
            label1: '13',
            label2: 'Comme le nombre de devises étrangères disponibles dans l’app',
            label2FontSize: 'text-xl md:text-4xl lg:text-3xl xl:text-4xl',
            content: '<span class="lettrine mb-6">Do you speak english ?  هل تتحدث العربية؟ Pratar du svenska? あなたは日本語を話せますか?</span><span>Pour payer facilement ses achats en voyage ou pour le shopping en ligne, Yuh permet de changer ses Francs suisses en Dirhams des Émirats, en Yens japonais, en Dollars de Hong Hong ou encore en Couronnes suédoises.</span>'
        },
        {
            indexDesktop: 17,
            indexMobile: 17,
            class: 'relative elem bg-white rounded-xl md:rounded-3xl overflow-hidden aspect-square',
            hasImg: null,
            label1: '46',
            label2: 'Comme le pourcentage de Suisses ayant déjà entendu parler de Yuh',
            label2FontSize: 'text-lg md:text-3xl lg:text-xl xl:text-3xl',
            content: '<span class="lettrine mb-6">«Started from the bottom, now we’re here », chantait le rappeur canadien Drake en 2013. Un hymne à celles et ceux qui atteignent la réussite en partant de zéro et qui résume également bien la progression de la popularité de Yuh.</span><span>Selon une étude de marché réalisée par la société Intervista AG, en 2021, seuls 14% des Suisses avaient déjà entendu parler de la toute jeune néo-banque créée en mai de la même année. Un an plus tard, ce chiffre avait grimpé à 28% pour enfin arriver à 46% en 2023.</span>'
        },
        {
            indexDesktop: 18,
            indexMobile: 16,
            class: 'relative elem bg-white rounded-xl md:rounded-3xl overflow-hidden aspect-square',
            hasImg: 'top',
            img: '2025.png',
            bgColor : 'rgb(0, 61, 135)',
            label1: '2025',
            label2: 'Comme l’année où Yuh prévoit de devenir rentable ',
            label2FontSize: 'text-lg md:text-2xl lg:text-xl xl:text-2xl',
            content: '<span class="lettrine">En trois ans d’existence, Yuh s’est taillé une place de choix dans l’univers des néo-banques et détient désormais presque 2 milliards de francs suisses en actifs en dépôt. La prochaine étape de cette épopée ? Devenir une entreprise rentable pour ses deux « mamans », Swissquote et PostFinance, d’ici l’année prochaine.</span>'
        }
        
    ];

    //next : faire le 3eme bg et s'assurer de pouvoir pimper les fonts au cas par cas

    Handlebars.registerHelper('switch', function(value, options) {
        this.switch_value = value;
        return options.fn(this);
    });
    
    Handlebars.registerHelper('case', function(value, options) {
    if (value == this.switch_value) {
        return options.fn(this);
    }
    });

    Handlebars.registerHelper('lightenColor', function(color, options) {
        // Extract the RGB values from the input color
        const rgb = color.match(/\d+/g);
        
        if (!rgb || rgb.length !== 3) {
            throw new Error("Invalid RGB color format. Expected format: rgb(x,x,x)");
        }

        // Function to lighten a single color component
        const lightenComponent = (component) => {
            return Math.min(255, Math.floor(component + (255 - component) * 0.8));
        };

        // Lighten each component
        const r = lightenComponent(parseInt(rgb[0], 10));
        const g = lightenComponent(parseInt(rgb[1], 10));
        const b = lightenComponent(parseInt(rgb[2], 10));

        // Return the new lightened color as rgb(x,x,x)
        return `rgb(${r},${g},${b})`;
    });

    buildCards(data);
    function buildCards(data){
        // Sort the data array based on the appropriate key
        if (window.innerWidth > 1014) {
            data.sort((a, b) => a.indexDesktop - b.indexDesktop);
        } else {
            data.sort((a, b) => a.indexMobile - b.indexMobile);
        }
        
        var source   = $("#card-template").html();
        var template = Handlebars.compile(source);
        var html = template({'card':data});
        $(".card-container").prepend(html); 
    }


    var elemTxt = false;



    $('.elem').on('click', function() {
        clickedElem = $(this);
        // Si l'élément txt est défini comme absent
        if (!elemTxt)
        {
            // On scroll, déploie le texte et on créé les éléments de fermeture
            scrollToE($(this));
            openTxt($(this));
            createClosingE($(this));
            
            
        }
        // Si l'élément txt est défini comme présent
        else
        { 
            // A-t-on cliqué sur l'élément déjà ouvert ?
            if ($(this).hasClass('is-highlighted'))
            {
                // On scroll, ferme le texte
                scrollToE($(this));

                // setTimeout(function() {
                //     scrollToE($(this));
                // }, 500);
                clostTxt();
                
                
            }
            // Le clic est sur un autre éléments que celui ouvert
            else
            {
                //vérification si mobile ou non. Si mobile, on ne fait rien.
                if (window.innerWidth > 1024) {

                    clostTxt();
                

                    setTimeout(function() {
                        //alert('lol');
                        //scrollToE($(this));
                        // openTxt($(this));
                        // createClosingE($(this));
                        clickedElem.trigger('click');
                    }, 600);
          
                } 
                
            }
            
           
                
                
            // }
            
        }
        
        function openTxt(e){
            e.addClass('is-highlighted');
            e.siblings().removeClass('bg-white').addClass('is-faded bg-slate-100');

            
            var clickedId = parseInt(e.attr('id').match(/\d+$/)[0]) + 1;
            if (window.innerWidth > 1024) {

                var roundedId = Math.ceil(clickedId / 3);
                var targetE = roundedId * 3;
      
            } else {
                var clickedIsInt = Number.isInteger(clickedId / 3);
                if (clickedIsInt) {
                    var targetE = clickedId;
                } else {
                    var roundedId = Math.ceil(clickedId / 3);
                    var targetE = (roundedId * 3) - 1;
                }
            }

            // Sort the data array based on the appropriate key
            if (window.innerWidth > 1024) {
                var matchingElement = data.find(function(element) {
                    return element.indexDesktop === clickedId;
                });
            } else {
                var matchingElement = data.find(function(element) {
                    return element.indexMobile === clickedId;
                });
            }

           

            $('.grid .elem:eq(' + (targetE-1) + ')').after('<div class="elem-txt is-collapsed antialiased rounded-xl md:rounded-3xl col-span-2 lg:col-span-4 relative md:pr-12"><div class="elem-txt-wrapper"><div class="elem-txt-wrapper-inner grid grid-cols-1 text-base md:text-lg xl:text-xl"><button class="elem-txt-close rounded-full p-2 md:p-4 absolute cursor-pointer top-2 md:top-5 right-2 md:right-5"><img src="img/this/close-black.svg" class="w-4 md:w-6"></button>' + matchingElement.content + '<button class="elem-txt-close text-base md:text-xl font-medium bg-emerald-300 rounded-full p-2 mt-6 md:p-4 cursor-pointer mx-auto w-full md:w-auto">Fermer</button></div></div></div>');

            
            
            setTimeout(function() {
                $('.elem-txt-wrapper').addClass('is-open');
                setTimeout(function() {
                    $('.elem-txt-wrapper-inner').addClass('is-visible');
                    elemTxt = true; 
                }, 250);
            }, 10);
        }

        function createClosingE(e){
            $('.elem-txt-close').on('click', function() {
                scrollToE($('.is-highlighted'));
                clostTxt();
                
                
            });          
        }

        function scrollToE(e){
            setTimeout(function() {
                $('html, body').animate({
                    scrollTop: e.offset().top - 50
                }, 0);
            }, 300);
            


        }

        function clostTxt(){
            $('.is-highlighted').removeClass('is-highlighted');
            $('.is-faded').removeClass('is-faded bg-slate-100').addClass('bg-white');

            $('.elem-txt-wrapper-inner').removeClass('is-visible');
            setTimeout(function() {
                $('.elem-txt-wrapper').removeClass('is-open');
                setTimeout(function() {
                    $('.elem-txt').remove();
                    elemTxt = false; 
                }, 250);
            }, 250);
        }




    });



    window.scrollTo(0, 0);

    
    setTimeout(function() {
        bodyTl.play();
    }, 1000);
    
    var controller = new ScrollMagic.Controller();
    var $body = $('body');
    var bodyTl = new TimelineMax({ paused: true })
        .to($body, 0.15, { autoAlpha: 1, ease: Power4.easeInOut });
       
    hideBody();
    function hideBody(){
        var hideBodyTl = new TimelineMax();
        hideBodyTl
            .set($body, { autoAlpha: 0 });
        return hideBodyTl;
    }




  
	

  
})(jQuery);