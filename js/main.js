(function($){

    data = [
        {
            indexDesktop: 1,
            indexMobile: 1,
            class: 'relative elem bg-white rounded-xl md:rounded-3xl overflow-hidden aspect-square',
            hasImg: 'full',
            img: 'mario-kart.png',
            bgColor : 'rgb(199, 14, 14)',
            label1: '3',
            label2: 'Comme l’âge de Yuh',
            label2FontSize: 'text-2xl lg:text-3xl xl:text-4xl',
            content: '<span class="lettrine">Le 11 mai 2021, la ville vaudoise de Gland est devenue l’épicentre d’une véritable révolution qui allait bientôt changer la face du mobile banking en Suisse : Yuh, application ultra simple et intuitive permettant à la fois de payer avec un smartphone, de mettre des sous de côté pour les petits</span> <span>et grand projets mais aussi de s’essayer à l’investissement financier même lorsque l’on n’a pas le portefeuille d’un trader du CAC 40, débarquait sur les deux principaux stores d’applications mobiles. A star is born !</span>'
        },
        {
            indexDesktop: 2,
            indexMobile: 3,
            class: 'relative elem bg-white rounded-xl md:rounded-3xl overflow-hidden col-span-2  h-40 lg:h-auto',
            hasImg: null,
            label1: '6359',
            label2: 'Comme le nombre de comptes Pilier 3a ouverts sur Yuh ',
            label2FontSize: 'text-2xl lg:text-3xl xl:text-4xl',
            content: 'lorem ipsum dolor sit amet'
        },
        {
            indexDesktop: 3,
            indexMobile: 2,
            class: 'relative elem bg-white rounded-xl md:rounded-3xl overflow-hidden aspect-square',
            hasImg: null,
            label1: '2',
            label2: 'Comme les deux «mamans» de Yuh ',
            label2FontSize: 'text-xl xl:text-3xl',
            content: 'lorem ipsum dolor sit amet'
        },
        {
            indexDesktop: 4,
            indexMobile: 6,
            class: 'relative elem bg-white rounded-xl md:rounded-3xl overflow-hidden col-span-2  h-40 lg:h-auto',
            hasImg: 'right',
            img: 'mario-kart.png',
            bgColor : 'rgb(199, 14, 14)',
            label1: '425',
            label2: 'Comme le nombre de courses Mario Kart disputées au cours des 12 derniers mois ',
            label2FontSize: 'text-lg lg:text-2xl xl:text-4xl',
            content: 'lorem ipsum dolor sit amet'
        },
        {
            indexDesktop: 5,
            indexMobile: 5,
            class: 'relative elem bg-white rounded-xl md:rounded-3xl overflow-hidden aspect-square',
            hasImg: null,
            label1: '333 ',
            label2: 'Comme le nombre moyen de mises à jour mensuelles du code de l’app Yuh',
            label2FontSize: 'text-md lg:text-xl xl:text-2xl',
            content: 'lorem ipsum dolor sit amet'
        },
        {
            indexDesktop: 6,
            indexMobile: 4,
            class: 'relative elem bg-white rounded-xl md:rounded-3xl overflow-hidden aspect-square',
            hasImg: 'top',
            img: 'mario-kart.png',
            bgColor : 'rgb(199, 14, 14)',
            label1: '4,6',
            label2: 'Comme le nombre de millions de feuilles de papier économisées en comparaison avec une banque classique',
            label2FontSize: 'text-sm lg:text-md xl:text-xl',
            content: 'lorem ipsum dolor sit amet'
        },
        {
            indexDesktop: 7,
            indexMobile: 7,
            class: 'relative elem bg-white rounded-xl md:rounded-3xl overflow-hidden aspect-square',
            hasImg: 'full',
            img: 'mario-kart.png',
            bgColor : 'rgb(199, 14, 14)',
            label1: '2',
            label2: 'Comme le nombre de chiens qui accompagnent ou ont accompagné leurs humains au travail',
            label2FontSize: 'text-md lg:text-md xl:text-2xl',
            content: 'lorem ipsum dolor sit amet'
        },
        {
            indexDesktop: 8,
            indexMobile: 9,
            class: 'relative elem bg-white rounded-xl md:rounded-3xl overflow-hidden col-span-2  h-40 lg:h-auto',
            hasImg: null,
            label1: '230’000',
            label2: 'Comme le nombre d’inscrits actifs sur l’app Yuh',
            label2FontSize: 'text-2xl lg:text-3xl xl:text-4xl',
            content: 'lorem ipsum dolor sit amet'
        },
        {
            indexDesktop: 9,
            indexMobile: 8,
            class: 'relative elem bg-white rounded-xl md:rounded-3xl overflow-hidden aspect-square',
            hasImg: null,
            label1: '65%',
            label2: 'Comme le pourcentage de femmes parmi les Yuhsers',
            label2FontSize: 'text-xl lg:text-2xl xl:text-3xl',
            content: 'lorem ipsum dolor sit amet'
        },
        {
            indexDesktop: 10,
            indexMobile: 12,
            class: 'relative elem bg-white rounded-xl md:rounded-3xl overflow-hidden col-span-2  h-40 lg:h-auto',
            hasImg: 'right',
            img: 'mario-kart.png',
            bgColor : 'rgb(199, 14, 14)',
            label1: '106’200*',
            label2: 'Comme le prix en CHF de l’action la plus chère disponible sur Yuh ',
            label2FontSize: 'text-xl lg:text-2xl xl:text-4xl',
            content: 'lorem ipsum dolor sit amet'
        },
        {
            indexDesktop: 11,
            indexMobile: 11,
            class: 'relative elem bg-white rounded-xl md:rounded-3xl overflow-hidden aspect-square',
            hasImg: null,
            label1: '83',
            label2: 'Comme le nombre de personnes employées chez Yuh',
            label2FontSize: 'text-md lg:text-xl xl:text-3xl',
            content: 'lorem ipsum dolor sit amet'
        },
        {
            indexDesktop: 12,
            indexMobile: 10,
            class: 'relative elem bg-white rounded-xl md:rounded-3xl overflow-hidden aspect-square',
            hasImg: 'top',
            img: 'mario-kart.png',
            bgColor : 'rgb(199, 14, 14)',
            label1: '95',
            label2: 'Comme l’âge de la doyenne des Yuhsers',
            label2FontSize: 'text-xl lg:text-2xl xl:text-3xl',
            content: 'lorem ipsum dolor sit amet'
        },
        {
            indexDesktop: 13,
            indexMobile: 13,
            class: 'relative elem bg-white rounded-xl md:rounded-3xl overflow-hidden aspect-square',
            hasImg: 'full',
            img: 'mario-kart.png',
            bgColor : 'rgb(199, 14, 14)',
            label1: '43',
            label2: 'Comme le nombre d’ETF disponibles sur Yuh',
            label2FontSize: 'text-lg lg:text-2xl xl:text-3xl',
            content: 'lorem ipsum dolor sit amet'
        },
        {
            indexDesktop: 14,
            indexMobile: 15,
            class: 'relative elem bg-white rounded-xl md:rounded-3xl overflow-hidden col-span-2  h-40 lg:h-auto',
            hasImg: null,
            label1: '38',
            label2: 'Comme le nombre de jours séparant en moyenne deux nouveautés chez Yuh entre 2021 et 2022',
            label2FontSize: 'text-lg lg:text-2xl xl:text-4xl',
            content: 'lorem ipsum dolor sit amet'
        },
        {
            indexDesktop: 15,
            indexMobile: 14,
            class: 'relative elem bg-white rounded-xl md:rounded-3xl overflow-hidden aspect-square',
            hasImg: null,
            label1: '500',
            label2: 'Comme le nombre moyen de personnes connectées sur Yuh en pleine nuit',
            label2FontSize: 'text-md lg:text-lg xl:text-2xl',
            content: 'lorem ipsum dolor sit amet'
        },
        {
            indexDesktop: 16,
            indexMobile: 18,
            class: 'relative elem bg-white rounded-xl md:rounded-3xl overflow-hidden col-span-2  h-40 lg:h-auto',
            hasImg: 'right',
            img: 'mario-kart.png',
            bgColor : 'rgb(199, 14, 14)',
            label1: '12',
            label2: 'Comme le nombre de devises étrangères disponibles dans l’app',
            label2FontSize: 'text-xl lg:text-3xl xl:text-4xl',
            content: 'lorem ipsum dolor sit amet'
        },
        {
            indexDesktop: 17,
            indexMobile: 17,
            class: 'relative elem bg-white rounded-xl md:rounded-3xl overflow-hidden aspect-square',
            hasImg: null,
            label1: '46',
            label2: 'Comme le pourcentage de Suisses ayant déjà entendu parler de Yuh',
            label2FontSize: 'text-lg lg:text-xl xl:text-3xl',
            content: 'lorem ipsum dolor sit amet'
        },
        {
            indexDesktop: 18,
            indexMobile: 16,
            class: 'relative elem bg-white rounded-xl md:rounded-3xl overflow-hidden aspect-square',
            hasImg: 'top',
            img: 'mario-kart.png',
            bgColor : 'rgb(199, 14, 14)',
            label1: '2025',
            label2: 'Comme l’année où Yuh prévoit de devenir rentable ',
            label2FontSize: 'text-lg lg:text-xl xl:text-2xl',
            content: 'lorem ipsum dolor sit amet'
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
        if (window.innerWidth > 500) {
            data.sort((a, b) => a.indexDesktop - b.indexDesktop);
        } else {
            data.sort((a, b) => a.indexMobile - b.indexMobile);
        }
        
        var source   = $("#card-template").html();
        var template = Handlebars.compile(source);
        var html = template({'card':data});
        $(".card-container").prepend(html); 
    }


    var animating = false;
    var elemTxt = false;



    $('.elem').on('click', function() {
        if (!elemTxt)
        {
            $(this).addClass('is-highlighted');
            $(this).siblings().removeClass('bg-white').addClass('is-faded bg-slate-100');

            var clickedId = parseInt($(this).attr('id').match(/\d+$/)[0]) + 1;
            if (window.innerWidth > 1009) {

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


            var matchingElement = data.find(function(element) {
                return element.indexDesktop === clickedId;
            });
            

            $('.grid .elem:eq(' + (targetE-1) + ')').after('<div class="elem-txt is-collapsed rounded-xl md:rounded-3xl col-span-2 md:col-span-4 relative pr-12"><img src="../img/this/close-black.svg" id="elem-txt-close" class="absolute w-6 top-7 right-7"><div class="elem-txt-wrapper "><div class="elem-txt-wrapper-inner grid grid-cols-2 gap-7">' + matchingElement.content + '</div></div></div>');

            $('.elem-txt').on('click', '#elem-txt-close', function() {
                $('.is-highlighted').removeClass('is-highlighted');
                $('.is-faded').removeClass('is-faded bg-slate-100').addClass('bg-white');
                $('.elem-txt-wrapper').removeClass('is-open');
                setTimeout(function() {
                    $('.elem-txt').fadeOut();
                }, 250);
                elemTxt = false;
            });

            setTimeout(function() {
                $('.elem-txt-wrapper').addClass('is-open');
            }, 10);

            elemTxt = true; 
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