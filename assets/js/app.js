
var cl=console.log;



let cardsData = [
  {
     "albumId": 1,
    "id": 1,
    "title": "accusamus beatae ad facilis cum similique qui sunt",
    "url": "https://images.unsplash.com/photo-1650039575921-b31c3fbc8de5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
   
  },
  {
     "albumId": 1,
    "id": 2,
    "title": "reprehenderit est deserunt velit ipsam",
    "url": "https://images.unsplash.com/photo-1633840646429-ccf507814ac9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80",
    
  },
  {
     "albumId": 1,
    "id": 3,
    "title": "officia porro iure quia iusto qui ipsa ut modi",
    "url": "https://images.unsplash.com/photo-1650965082260-bcda7448309e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    
  },
  {
     "albumId": 1,
    "id": 4,
    "title": "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
     "url":"https://images.unsplash.com/photo-1649859394614-dc4f7290b7f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
  {
     "albumId": 1,
    "id": 5,
    "title": "natus nisi omnis corporis facere molestiae rerum in",
    "url": "https://images.unsplash.com/photo-1651127696352-47f264d433f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=878&q=80",
    
  },
  {
     "albumId": 1,
    "id": 6,
    "title": "natus nisi omnis corporis facere molestiae rerum in",
    "url": "https://images.unsplash.com/photo-1650464232600-68f45ea392ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    
  },
]
  // var cards=document.getElementsByTagName("span");
   // cards.style.fontSize="30px";
 // "linear-gradient(${135}deg,${#14ffe9},${#ffeb3b},${#ff00e0})";
// "linear-gradient(${135deg},${#14ffe9},${#ffeb3b},${#ff00e0})";
 // var cardData=Array.from(cardsData);
  var card=document.getElementById("card");
  // style="width:100%
  var result="";
  cardsData.forEach(function(cardsData,i){
	
	 result+=`<div class="col-sm-4 mb-4 float-left"><div class="card"> <div class="card-body"> <figure class="myCard">
	<img src= ${cardsData.url} class="img-fluid"> <figcaption><p class="title"><span> ${cardsData.title} </span></p> <span class="id"> id:${cardsData.id} </span> 
	<span class="albumId">albumId: ${cardsData.albumId}</span> </figcaption></figure> </div> 
									</div> </div>`;	 
	 
	 
	 
	 
	 
	 // card.innerHTML=result;
    
	// cl(result)
	 
	
	
	
})
 card.innerHTML=result;
    
	 cl(result)
	