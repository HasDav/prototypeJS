
  function  KingdomAnimals(name,structure,reproduction,breath,food,motility){
    this.name=name,
    this.structure= "Animals are eukaryotic and multicellular",
    this.reproduction= "Nearly all animals make use of some form of sexual reproduction",
    this.breath= "animals breathe oxygen", 
    this.food="Living organisms that are heterotrophic include all animals and fungi, some bacteria  and protists",  
    this.motility="All animals are motile" 
 };
   
  function MammalAnimals(name) {
    this.descriation ="Around 6,400 extant species of mammals have been described and divided into 29 orders.",
    this.continent= "They are found on every continentTerrestrial species walk, run, jump, climb, hop, swing, dig, and burrow. Aquatic ones swim, shuffle, and dive. A few even fly.",
    this. anatomy=["Biological systems","Sexual dimorphism","Sound production","thermoregulation"],
    this.__proto__ =new KingdomAnimals(name)
  };


   let blueWhale= new MammalAnimals("blueWhale");
    blueWhale.size="Is the largest marine mammal  that has ever lived",
    blueWhale.weight=199,
    blueWhale.lenght=30;

    let africanElephant= new MammalAnimals("africanElephant");
         africanElephant.size="It is the largest living terrestrial animal, with bulls reaching a shoulder height of up to 3.96 m",
         africanElephant.weight=12,
         africanElephant.temperatuReregulation="African bush elephants sustain the intense savanna heat by performing heterothermy";
      
    let largeFlyingFox= new MammalAnimals("largeFlyingFox");
         largeFlyingFox.size="he large flying fox is among the largest species of bat",
          largeFlyingFox.weight="1.1kg",
          largeFlyingFox.lenght="32cm";

   console.log(blueWhale,africanElephant,largeFlyingFox);