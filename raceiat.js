define(['pipAPI','https://cdn.jsdelivr.net/gh/baranan/minno-tasks@0.*/IAT/iat10.js'], function(APIConstructor, iatExtension){
    let API = new APIConstructor();
    let global = API.getGlobal();

    return iatExtension({
        category1 : {
            name : "Башкирский", //Will appear in the data.
            title : {
                media : {word : "Башкирский"}, //Name of the category presented in the task.
                css : {color:'#31940F','font-size':'1.8em'}, //Style of the category title.
                height : 4 //Used to position the "Or" in the combined block.
            }, 
            stimulusMedia : [ // башкирские слова
            { word: 'Башкортостан' },
            { word: 'Сабантуй' },
            { word: 'Бешбармак' },
            { word: 'Урал-Батыр' },
            { word: 'Уфа' },
            { word: 'Агидель' },
            { word: 'Бешмет' },
            { word: 'Курай' }
        ],
            //Stimulus css (style)
            stimulusCss : {color:'#31940F','font-size':'2.3em'}
        },    
        category2 : {
            name : "Русский", //Will appear in the data.
            title : {
                media : {word : "Русский"}, //Name of the category presented in the task.
                css : {color:'#31940F','font-size':'1.8em'}, //Style of the category title.
                height : 4 //Used to position the "Or" in the combined block.
            }, 
            stimulusMedia : [ // русские слова
            { word: 'Россия' },
            { word: 'Масленица' },
            { word: 'Пельмени' },
            { word: 'Илья Муромец' },
            { word: 'Москва' },
            { word: 'Енисей' },
            { word: 'Кокошник' },
            { word: 'Балалайка' }
        ],
            //Stimulus css (style)
            stimulusCss : {color:'#31940F','font-size':'2.3em'}
        },
        
    attribute1 : { // ГОРЫ
        name : 'Горы',
        title : {
            media : { word : 'Горы' },
            css   : { color:'#0000FF', 'font-size':'1.8em' },
            height: 4
        },
   
        stimulusMedia : [
            { image: 'https://drive.google.com/uc?export=view&id=1kCgE0FDzuYbB12SF2p7LHMS-LI9TUqjU' },
            { image: 'https://drive.google.com/uc?export=view&id=1Z1v7UA9GBywXRcs5DEM27awERnZgfAqr' },
            { image: 'https://drive.google.com/uc?export=view&id=1X3TAQuDL-ZLlYPG-ev8_fsXnkIW27nLg' },
            { image: 'https://drive.google.com/uc?export=view&id=15_lszf1VhzKG4JD0SaT3zMmjTHqU63jq' },
            { image: 'https://drive.google.com/uc?export=view&id=16CZGPlhj9wgY9LH20GTpMyGx7YAQYBWv' },
            { image: 'https://drive.google.com/uc?export=view&id=1shiQ3DED2h1C_v4ZNuccd_pDe4PkPczK' },
            { image: 'https://drive.google.com/uc?export=view&id=1t6MNteFUAfRAUJCylDWEAOixNuPR8u4k' },
            { image: 'https://drive.google.com/uc?export=view&id=1UuVcMYPsUU0PCzyh36XHtSitYotUEVNk' }
        ],
        stimulusCss : { color:'#0000FF', 'font-size':'2.3em' }
    },
        attribute2 : {
            name : 'Болото',
            title : {
                media : {word : 'Болото'},
                css : {color:'#0000FF','font-size':'1.8em'},
                height : 4 //Used to position the "Or" in the combined block.
            },
            
            stimulusMedia : [
            { image: 'https://drive.google.com/uc?export=view&id=1c98HLM6ymW-XIXkhgJqIy3gCqlpFqaA-' },
            { image: 'https://drive.google.com/uc?export=view&id=1-tsdDRGHophVM_sHAHnsE6ZaqOJLlSj2' },
            { image: 'https://drive.google.com/uc?export=view&id=1pHzghJPLAop4Blt0SbsHNB1FyXEyzEMS' },
            { image: 'https://drive.google.com/uc?export=view&id=1ytjjUpX1L68wYEdUAxCFBJKLPUtEqL5l' },
            { image: 'https://drive.google.com/uc?export=view&id=1CNQ_SBxSVo-mAdXahpyphe06_rViNl-n' },
            { image: 'https://drive.google.com/uc?export=view&id=1BPLMX3hjogFt46TK7I2RjgdgNhgCkUgl' },
            { image: 'https://drive.google.com/uc?export=view&id=1HjrpwkM9NtCnTFmf7kuupIiEG_F0H891' },
            { image: 'https://drive.google.com/uc?export=view&id=1bud3Ccs08KDljxb0yvI_5a4-9iJwZFBe' }
        ],
            //Stimulus css
            stimulusCss : {color:'#0000FF','font-size':'2.3em'}
        },
        base_url : {//Where are your images at?
            image : global.baseURL
        },
        isTouch : global.$isTouch
    });
});

