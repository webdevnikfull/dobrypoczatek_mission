/* Public configuration. Never put passwords, API keys or secret tokens here. */
window.MISSION_CONTENT={
  version:1,
  social:{facebook:'https://www.facebook.com/share/1CLkM9eBrp/',instagram:'https://www.instagram.com/dobrypoczatek_mission?vrfl=emF6dXMydDFkMG0x'},
  payments:{
    bank:{recipient:'',iban:'',bic:'',title:'Dobry Początek — wsparcie misji'},
    blik:{oneTimeUrl:'',monthlyUrl:''},
    paypal:{oneTimeUrl:'',monthlyUrl:''},
    przelewy24:{oneTimeUrl:'',monthlyUrl:''},
    payu:{oneTimeUrl:'',monthlyUrl:''},
    revolut:{oneTimeUrl:'',monthlyUrl:''},
    zrzutka:{oneTimeUrl:'',monthlyUrl:''},
    patronite:{oneTimeUrl:'',monthlyUrl:''}
  },
  gallery:[
    {id:'together',type:'photo',src:'assets/together.jpg',titleKey:'media1',demo:true,credit:'Creatopy / Unsplash'},
    {id:'bible',type:'photo',src:'assets/bible.jpg',titleKey:'media2',demo:true,credit:'Shane Hoving / Unsplash'},
    {id:'pause',type:'video',src:'assets/flower.mp4',titleKey:'media3',demo:true,credit:'MDN interactive examples / CC0'},
    {id:'hope',type:'photo',src:'assets/word.jpg',titleKey:'media4',demo:true,credit:'Jessica Mangano / Unsplash'}
  ],
  posts:[
    {id:'small-start',titleKey:'post1Title',excerptKey:'post1Desc',bodyKey:'postBody',categoryKey:'hope',image:'assets/together.jpg',demo:true,published:true},
    {id:'be-present',titleKey:'post2Title',excerptKey:'post2Desc',bodyKey:'peopleDesc',categoryKey:'community',image:'assets/bible.jpg',demo:true,published:true},
    {id:'everyday-faith',titleKey:'post3Title',excerptKey:'post3Desc',bodyKey:'faithDesc',categoryKey:'faith',image:'assets/word.jpg',demo:true,published:true}
  ]
};
