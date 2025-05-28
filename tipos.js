let esvisible = false;
function mostrarmenu () {
    if (esvisible==false) {
    document.getElementById("menu-principal").style.display="block";
    esvisible=true
} else   {
document.getElementById("menu-principal").style.display="none";
document.getElementById("menu-contactos").style.display="none"
esvisibleCon = false;
esvisible = false;
}
}

let esvisibleCon = false;
function mostrarcontacto () {
    if (esvisibleCon==false) {
    document.getElementById("menu-contactos").style.display="flex";
    esvisibleCon=true
} else   {
document.getElementById("menu-contactos").style.display="none"
esvisibleCon = false;
}
}

const recetas = [
    {
        titulo: "Galletita sin tacc",
        imagen: "",
        ingredientes: ["100gr de manteca","1 huevo","100gr de azucar","4gr de polvo para hornear","escencia de vainilla a gusto","300gr de premezcla"],
        tipo: "desayuno/merienda",
        dieta:"sin tacc",
        ModoDePreparacion: ['Paso 1: mezclar ingredientes Para preparar estas galletitas sin TACC lo primero que debes hacer es batir la manteca con el azúcar hasta incorporar bien estos ingredientes.',
"¿Cómo sabrás cuando esté todo bien integrado? Fácil. Cuando veas que la manteca y el azúcar se han unido y toman una consistencia cremosa, entonces habrás interado bien ambos ingredientes.",
"A continuación debes colocar el huevo y la esencia de vainilla y seguir batiendo hasta interar todo",
"Cuando hayas integrado bien todos los ingredientes, es momento de armar la masa. Para eso vas a agregar la premezcla sin gluten y el polvo para hornear",
'O Harinas sin gluten","Te sugiero mezclar previamente la premezcla con el polvo para hornear y tamizar estos ingredientes","Paso 2: amasar y cortar las galletas',
"Vas a integrar los ingredientes secos con la preparación anterior (huevo, esencia de vainilla, azúcar, manteca)",
"Debes agregar de a poco los secos mientras mezclas primero con un utensilio y luego con las manos",
"Vas a amasar hasta lograr una masa suave que no se pegue en los dedos. Entonces, cuando tengas la masa a punto, es momento de estirar y cortar",
"Generalmente estiro la masa de unos 5 mm de espesor. Pero es a usto personal, como también lo es el tamaño y la forma. Nosotros generalmente las hacemos con forma de estrellitas o corazones",
"Cuando tengas las galletas cortadas, vas a colocarlas en una fuente o bandeja para hornearlas","Paso 3: hornear galletas 15min a 180grados"]
    },


   { titulo: "🧁 Muffins de banana y avena sin TAC",
    imagen:"",
    ingredientes:["2 bananas maduras","2 huevos","1 taza de avena sin gluten","1 cdita de polvo de hornear sin TACC","1 cdita de esencia de vainilla","1 cda de miel (opcional)"]
    tipo: "desayuno/merienda",
    dieta:"sin tacc",
    ModoDePreparacion: ["Precalentá el horno a 180 °C","Pisá las bananas y mezclalas con los huevos, la esencia de vainilla y la miel","Agregá la avena y el polvo de hornear","Colocá la mezcla en moldes para muffins previamente engrasados","Horneá por 20–25 minutos o hasta que estén dorados"],
   },
   

   { titulo: "🍪 Galletitas de coco y zanahoria",
    imagen:"",
    ingredientes:["1 taza de coco rallado","1 taza de zanahoria rallada fina","1 huevo","3 cdas de azúcar (puede ser mascabo)","1 cdita de canela (opcional) "  ],
    tipo:"desayuno/merienda",
    dieta:"sin tacc",
     ModoDePreparacion: ["Mezclá todos los ingredientes hasta lograr una masa","Formá bolitas y aplastalas sobre una placa con papel manteca","Horneá a 180 °C por 15–20 minutos o hasta que estén doraditas."],
 },
   

     {titulo:"🍓  Yogur con granola sin TACC y frutas",
    imagen:"",
    ingrediente: [ "1 pote de yogur natural (asegurate que sea sin TACC)","1/2 taza de granola sin gluten (puede ser casera)","Frutas a gusto (banana, frutilla, arándanos)"],
    tipo:"desayuno/merienda",
    dieta:"sin tacc",
    ModoDePreparacion:  ["En un vaso o bowl, colocá el yogur","Agregá la granola encima","Sumá las frutas frescas cortadas","Podés decorar con un chorrito de miel"],
    },
   

   
     {titulo:"🍫  Brownies sin TACC",
    imagen:"",
    ingredientes:  ["2 huevos","100 g de azúcar","100 g de chocolate sin TACC","50 g de manteca","1/2 taza de harina de arroz o premezcla sin gluten"],
    tipo:"desayuno/merienda",
    dieta:"sin tacc",
    ModoDePreparacion:  ["Derretí el chocolate con la manteca a baño maría o en microondas","Batí los huevos con el azúcar y agregá el chocolate derretido","Sumá la harina y mezclá bien","Verté en una fuente enmantecada","Horneá a 180 °C por 20–25 minutos. Dejá enfriar antes de cortar"],
 },
   

       {titulo:"🥗  Ensalada tibia de arroz y vegetales",
        imagen:"",
        ingredientes: ["1 taza de arroz integral o blanco cocido","1 zanahoria","1 zucchini","1/2 morrón rojo","1 cebolla","Aceite de oliva, sal y pimienta","Jugo de 1/2 limón"],
        tipo:"almuerzo/cena",
        dieta:"sin tacc",
        ModoDePreparacion: [ "Cociná el arroz como de costumbre","Cortá los vegetales en cubos y saltealos en una sartén con aceite hasta que estén tiernos","Mezclá el arroz con los vegetales salteados","Condimentá con sal, pimienta, aceite de oliva y limón","Serví tibia o fría"],
       },
   
   
    {titulo:"🍳  Tortilla de papa y espinaca",
    imagen:"",
    ingredientes: ["2 papas medianas","1 taza de espinaca cocida y escurrida","3 huevos","Sal, pimienta y aceite"],
    tipo:"almuerzo/cena",
    dieta: "sin tacc",
    ModoDePreparacion:["Pelá y cortá las papas en cubitos. Freílas o cocinalas al horno hasta que estén tiernas","Batí los huevos y agregá la espinaca picada y las papas cocidas","Salpimentá","Cociná la mezcla en una sartén con un poco de aceite a fuego medio, hasta que esté dorada de ambos lados","Podés servir con ensalada."],
      },
   

     {titulo:"🍛  Pollo al curry con leche de coco y arroz",
    imagen:"",
    ingredientes:["1 pechuga de pollo","1/2 cebolla","1/2 lata de leche de coco","1 cdita de curry (sin TACC)","1 cdita de cúrcuma (opcional)","1 taza de arroz","Sal, pimienta y aceite"],
    tipo:"almuerzo/cena",
    dieta:"sin tacc",
    ModoDePreparacion: ["Cociná el arroz y reservá","Cortá el pollo en cubos y saltealo con la cebolla picada en una sartén con aceite","Agregá el curry y la cúrcuma. Salpimentá.","Sumá la leche de coco y cociná a fuego bajo 10 minutos","Serví el pollo con su salsa sobre el arroz"],
     },
   

     {titulo:" 🥙 Tacos con masa de maíz y relleno de lentejas",
        imagen:"",
        ingredientes:["1 taza de harina de maíz precocida (tipo PAN, sin TACC)","1 taza de agua tibia","Sal","1 taza de lentejas cocidas","1/2 cebolla picada","1/2 tomate","1 cdita de pimentón o comino","Aceite"],
        tipo:"almuerzo/cena",
        dieta: "sin tacc",
        ModoDePreparacion: ["Mezclá la harina con agua y sal hasta formar una masa suave. Formá tortillas finas","Cocinalas en una sartén caliente, 2–3 min por lado","Salteá la cebolla y el tomate, agregá las lentejas y condimentos","Rellená los tacos con la mezcla y serví con palta o salsa"],
        },
   


  {titulo:"🥣  Porridge de avena con frutas"
    imagen:""
    ingredientes:["1/2 taza de avena (certificada sin TACC si es necesario)","1 taza de bebida vegetal (almendra, avena, soja, etc.)","1 cdita de canela","Frutas a gusto (banana, manzana, frutilla, etc.)","Semillas (chia, lino, girasol) opcional"]
    tipo:"desayuno/merienda"
    dieta: "vegano"
    ModoDePreparacion:["Colocá la avena y la bebida vegetal en una ollita","Cociná a fuego bajo, revolviendo, hasta que espese (5–7 min)","Agregá la canela y mezclá","Serví en un bowl y decorá con frutas frescas y semillas"]
     },
   

  {titulo:" 🍞  Tostadas con palta y tomate"
    imagen:""
    ingredientes: ["2 rebanadas de pan vegano (sin TACC si es necesario)","1 palta madura","1 tomate","Sal, pimienta y limón"]
    tipo:"desayuno/merienda"
    dieta:"vegano"
    ModoDePreparacion: ["Tostá el pan","Pisá la palta con sal, pimienta y unas gotas de jugo de limón","Untá el pan con la palta y agregá rodajas de tomate por encima","Opcional: espolvoreá con semillas o levadura nutricional." ]
 },
   

     {titulo:"🥤  Smoothie bowl"
    imagen:""
    ingredientes:["1 banana congelada","1/2 taza de frutos rojos congelados","1/2 taza de bebida vegetal","1 cda de mantequilla de maní o semillas","Frutas frescas","Granola sin TACC","Coco rallado"]
    tipo:"desayuno/merienda"
    dieta:"vegano"
    ModoDePreparacion: ["Licuá la banana, los frutos rojos y la bebida vegetal hasta obtener una mezcla espesa","Serví en un bowl","Decorá con frutas, granola y coco."]
},
   

     {titulo:"🧇 Panqueques veganos de banana"
    imagen:""
    ingrdientes: ["1 banana madura","1 taza de harina (puede ser de arroz o premezcla sin TACC)","1 taza de bebida vegetal","1 cdita de polvo de hornear","1 cdita de esencia de vainilla (opcional)"]
    tipo:"desayuno/merienda"
    dieta:"vegano"
    ModoDePreparacion:[" Pisá la banana y mezclala con la bebida vegetal y la esencia","Agregá la harina y el polvo de hornear hasta lograr una mezcla sin grumos","En una sartén antiadherente, cociná los panqueques vuelta y vuelta","Servilos con frutas, miel de caña, sirope de arce o mermelada"]
    },
   

 {titulo:"🥦  Salteado de tofu con vegetales"
    imagen:""
    ingredientes: ["200 g de tofu firme","1 zanahoria","1/2 brócoli","1/2 morrón rojo","1 cda de salsa de soja (sin TACC si es necesario)","Aceite de oliva o girasol","Semillas de sésamo (opcional)"]
    tipo:"almuerzo/cena"
    dieta:"vegano"
    ModoDePreparacion: ["Cortá el tofu en cubos y doralo en una sartén con un chorrito de aceite","Retirá y reservá","En la misma sartén, salteá los vegetales cortados en tiras finas","Sumá el tofu dorado y agregá salsa de soja","Cociná todo junto por 3–5 minutos y espolvoreá con semillas de sésamo" ]
    },
   

     {titulo:"Hamburguesas de lentejas"
    imagen:""
    ingredientes: ["1 taza de lentejas cocidas","1/2 cebolla picada","1 diente de ajo picado","1/4 taza de avena (sin gluten si es necesario)","Sal, pimienta, comino y pimentón"]
    tipo:"almuerzo/cena"
    dieta:"vegano"
    ModoDePreparacion: ["Procesá las lentejas hasta formar una pasta","Agregá la cebolla, ajo, avena y condimentos. Mezclá bien","Formá hamburguesas con las manos","Cocinalas en sartén con un poco de aceite, 4 minutos por lado","Servilas con ensalada o en pan vegano con verduras."]
    },
   

   {titulo:"🍚  Arroz con garbanzos y espinaca"
    imagen:""
    ingredientes:  ["1 taza de arroz cocido","1/2 taza de garbanzos cocidos","1 taza de espinaca fresca","1/2 cebolla","1 cda de aceite","Sal, pimienta, cúrcuma o curry (opcional)"]
    tipo:"almuerzo/cena"
    dieta:"vegano"
    ModoDePreparacion: ["En una sartén, salteá la cebolla picada con aceite","Agregá los garbanzos y cociná 3 minutos","Sumá la espinaca y dejá que se reduzca","Añadí el arroz y condimentá","Mezclá todo y serví caliente."]
    },
   

  {titulo:"🥟 Empanadas veganas de verduras"
    imagen:""
    ingredientes: ["1 paquete de tapas de empanadas veganas (sin TACC si es necesario)","1/2 calabaza cocida","1 cebolla","1/2 morrón","Aceite, sal y pimienta" ]
    tipo:"almuerzo/cena"
    dieta:"vegano"
    ModoDePreparacion: ["Cociná la cebolla y el morrón picados hasta que estén blandos","Mezclá con la calabaza pisada y condimentá","Rellená las tapas y cerralas con un repulgue","Horneá a 180 °C por 20 minutos o hasta que estén doradas","Servilas con una ensalada fresca"]
    },
   

  {titulo:"🥓  Huevos revueltos con palta y tomate"
    imagen:""
    ingredientes: ["2 huevos","1/2 palta","1 tomate en rodajas","1 cda de aceite de oliva o manteca","Sal y pimienta"]
    tipo:"desayuno/merienda"
    dieta:"keto"
    ModoDePreparacion: ["Batí los huevos con sal y pimienta","En una sartén, derretí la manteca o colocá el aceite y cociná los huevos revueltos a fuego medio","Servilos con palta en rodajas y tomate fresco al costado","Podés espolvorear con semillas de chía o lino"]
},
   

     {titulo:"🥞  Panqueques KETO de harina de almendras"
    imagen:""
    ingredientes: ["2 huevos","2 cdas de harina de almendras","1 cda de queso crema o crema de coco","1/2 cdita de polvo de hornear","Esencia de vainilla y canela (opcional)"]
    tipo:"desayuno/merienda"
    dieta:"keto"
    ModoDePreparacion: ["Mezclá todos los ingredientes hasta obtener una masa homogénea","Calentá una sartén antiadherente con un poco de aceite de coco","Verté la mezcla formando panqueques pequeños","Cociná 2 minutos por lado. Servilos con un poco de crema y frutos rojos (en poca cantidad)"]
},
   

     {titulo:"🍳  Omelette de espinaca y champiñones"
     imagen:""
    ingredientes: ["2 huevos","1/2 taza de espinaca fresca","3–4 champiñones laminados","1 cda de aceite de coco o manteca","Sal, pimienta, ajo en polvo"]
tipo:"desayuno/merienda"
    dieta:"keto"
    ModoDePreparacion: ["Salteá los champiñones y la espinaca en la sartén con un poco de aceite","Batí los huevos con sal y ajo en polvo y vertelos en la sartén","Cociná el omelette a fuego medio hasta que esté firme y dorado","Doblá por la mitad y serví"]
},
   

    {titulo:"🧈 Café KETO (bulletproof coffee)"
    imagen:""
    ingredientes: ["1 taza de café caliente","1 cda de aceite de coco o MCT oil","1 cda de manteca sin sal (opcional)","Endulzante apto (eritritol, stevia)"]
    tipo:"desayuno/merienda"
    dieta:"keto"
    ModoDePreparacion: ["Colocá todos los ingredientes en una licuadora o usá un mixer de mano","Batí hasta que se forme una bebida espumosa","Serví caliente. Podés acompañarlo con un puñado de nueces o almendras"]
},
   

  {titulo:" 🥗  Ensalada keto de pollo con mayonesa caser"
    imagen:""
    ingredientes: ["1 pechuga de pollo cocida y desmenuzada","2 huevos duros","1/2 palta","2 cdas de mayonesa (mejor si es casera y sin azúcar)","Hojas verdes (rúcula, espinaca, lechuga)","Sal, pimienta y limón"]
tipo:"almuerzo/cena"
    dieta:"keto"
    ModoDePreparacion: ["Mezclá el pollo desmenuzado, los huevos picados y la palta en cubos","Añadí la mayonesa y condimentá","Serví sobre una base de hojas verdes, con un chorrito de limón"]
},
   

  {titulo:"🍳  Zucchini relleno con carne y queso"
    imagen:""
    ingredientes: ["2 zucchinis grandes","200 g de carne picada","1/2 cebolla picada","1/2 taza de queso rallado (tipo mozzarella)","1 cda de aceite de oliva","Sal, pimienta, orégano"]
tipo:"almuerzo/cena"
    dieta:"keto"
    ModoDePreparacion: ["Cortá los zucchinis a lo largo y vaciá el centro","Salteá la cebolla y la carne en una sartén con aceite","Condimentá y rellená los zucchinis con la mezcla","Espolvoreá con queso y horneá a 200 °C por 20–25 min" ]
},
   

     {titulo:"🍤  Salteado de langostinos con ajo y manteca"
    imagen:""
    ingredientes: ["200 g de langostinos pelados","2 dientes de ajo picados","2 cdas de manteca","Jugo de 1/2 limón","Sal, pimienta, perejil"]
tipo:"almuerzo/cena"
    dieta:"keto"
    ModoDePreparacion: ["Derretí la manteca en una sartén y agregá el ajo","Incorporá los langostinos y cociná por 2–3 minutos de cada lado","Agregá el jugo de limón, salpimentá y espolvoreá con perejil","Acompañá con una ensalada o coliflor al vapor."]
},
   

    {titulo:"🍕 Pizza con base de coliflor"
    imagen:""
    ingredientes: ["1 taza de coliflor rallada o procesada","1 huevo","1/2 taza de queso rallado (mozzarella o parmesano)","Sal y orégano","Salsa de tomate sin azúcar","Más queso","Aceitunas, tomate, champiñones, etc.""]
 tipo:"almuerzo/cena"
    dieta:"keto"
    ModoDePreparacion: ["Mezclá la coliflor con el huevo, el queso y los condimentos","Extendé la masa sobre papel manteca y horneá 15 min a 200 °C","Retirá, agregá la salsa y los toppings","Volvé a hornear 10 minutos más hasta que el queso se derrita"]
},
   

     {titulo:"🥣  Yogur con granola y frutas"
imagen:""
    ingredientes: ["1 taza de yogur natural o griego","1/2 taza de granola (sin miel si querés ovo-lacto vegetariano estricto)","Frutas a gusto (banana, manzana, frutillas, arándanos)","Semillas de chía o lino (opcional)" ]
tipo:"desayuno/merienda"
    dieta:"vegetariana"
    ModoDePreparacion: ["Serví el yogur en un bowl","Agregá granola y las frutas cortadas en cubitos o rodajas","Podés espolvorear con semillas y un chorrito de miel o sirope." ]
},
   

     {titulo:"🍳  Tostadas con huevo y palta"
    imagen:""
    ingredientes: ["2 rebanadas de pan integral","2 huevos","1 palta","Sal, pimienta y limón"]
    tipo:"desayuno/merienda"
    dieta:"vegetariana"
    ModoDePreparacion: ["Tostá el pan","Pisá la palta con sal, pimienta y unas gotas de limón","Cociná los huevos (a la plancha, revueltos o duros, como prefieras)","Untá el pan con palta y colocá el huevo encima"]
},
   

    {titulo:"🥞  Panqueques integrales con frutas"
    imagen:""
    ingredientes: ["1 taza de harina integral","1 taza de leche (puede ser vegetal)","1 huevo","1 cdita de polvo de hornea","rEsencia de vainilla y canela (opcional)" ]
tipo:"desayuno/merienda"
    dieta:"vegetariana"
    ModoDePreparacion: ["Mezclá todos los ingredientes hasta formar una masa lisa","Cociná en una sartén antiadherente con un poco de aceite o manteca, 2 min por lado","Serví con frutas frescas y un poco de miel o yogur."]
},
   

    {titulo:"🍳  Omelette de vegetales"
    imagen:""
    ingredientes: ["2 huevos","1/4 cebolla picada","1/4 morrón picado","spinaca o acelga (un puñado)","1 cda de aceite de oliva","Sal, pimienta, orégano"]
tipo:"desayuno/merienda"
    dieta:"vegetariana"
    ModoDePreparacion: ["En una sartén, salteá los vegetales con un poco de aceite","Batí los huevos con sal y pimienta y volcá sobre los vegetales","Cociná hasta que esté firme. Doblá el omelette por la mitad y serví."]
},
   

 {titulo:"🥗  Ensalada de quinoa con vegetales"
    imagen:""
    ingredientes: ["1 taza de quinoa cocida","1 tomate","1/2 pepino","1/2 morrón rojo","Jugo de 1 limón","Aceite de oliva, sal y pimienta","Hojas de perejil o menta (opcional)"]
tipo:"almuerzo/cena"
    dieta:"vegetariana"
    ModoDePreparacion: ["Lavá bien la quinoa y cocinala (1 parte de quinoa por 2 de agua, 15 min)","Picá los vegetales en cubos pequeños","Mezclá todo en un bowl, agregá el limón, aceite y condimentos","Serví fría o a temperatura ambiente"]
},
   

    {titulo:"🍝  Fideos integrales con salsa de tomate y champiñones"
    imagen:""
    ingredientes: ["200 g de fideos integrales (o sin gluten si querés)","1 taza de champiñones frescos","1 taza de puré de tomate natural","1 diente de ajo","1 cda de aceite de oliva","Sal, pimienta, orégano"]
tipo:"almuerzo/cena"
    dieta:"vegetariana"
    ModoDePreparacion: ["Herví la pasta según las instrucciones","En una sartén, salteá el ajo y los champiñones","2Agregá el tomate y los condimentos, cociná 10 minutos","Mezclá con la pasta y serví caliente. Podés agregar queso rallado" ]
},
   

    {titulo:"🍳 Tarta de espinaca y ricota"
    imagen:""
    ingredientes: ["1 masa para tarta (puede ser casera o comprada, sin TACC si se requiere)","1 taza de espinaca cocida y escurrida","1 taza de ricota","2 huevos","1 cdita de nuez moscada","Sal y pimienta"]
tipo:"almuerzo/cena"
    dieta:"vegetariana"
    ModoDePreparacion: ["Mezclá la espinaca con la ricota, los huevos y los condimentos","Forrá un molde con la masa y verté el relleno","Horneá a 180 °C por 35–40 minutos o hasta que cuaje y dore","Serví tibia o fría con ensalada"]
},
   


  {titulo:"🧆  Croquetas de lentejas y arroz"
    imagen:""
    ingredientes: ["1 taza de lentejas cocidas","1 taza de arroz integral cocido","1 huevo","1/4 cebolla picada","1/4 taza de pan rallado (sin TACC si necesitás)","Sal, pimienta, ajo en polvo"]
tipo:"almuerzo/cena"
    dieta:"vegetariana"
    ModoDePreparacion: ["Pisá las lentejas y mezclalas con el arroz, el huevo, la cebolla y condimentos","Formá bolitas o croquetas y pasalas por pan rallado","Cocinalas al horno (200 °C, 20 min) o en sartén con un poco de aceite","Acompañá con ensalada o puré de calabaza"]
},
   ]