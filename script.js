
(function()  {
	'use strict';
	
	
	
	angular
	    .module('app',['gm.dragDrop'])
		.run(run);
		
	function run($rootScope){
	$rootScope.categories = [
	{
		items: [
		{ name: "Learn Angular js", url: "./img/" + 1 + ".jpg",},
		{ name: "Learn Laravel", url: "./img/" + 2 + ".jpg",},
		{ name: "Learn Php", url: "./img/" + 3 + ".jpg",},
		
		
		
		]
	}, {
	  items: [
	 { name: "Learn Python", url: "./img/" + 4 + ".jpg",},
	  ]
	}, {
	  items:[
	 
    ]
	
	}	
   ];
   $rootScope.add=function(){
	   $rootScope.categories[0].items.push({'name':$rootScope.newtodo})
	   $rootScope.newtodo = ' '
	   
   }

  

  
   

   $rootScope.onHover = function(item) {
      return function(dragItem, mouseEvent) {
        if(item != dragItem)
           dragItem.order= item.order + ((mouseEvent.movementY || -1) > 0 ? 0.5 : -0.5)
	  }
   }

   

    $rootScope.reset = function reset(droppedItem) {
		droppedItem.order = droppedItem.number;
	}
	
	
	
	$rootScope.getDropHandler= function(category){
		return function (dragOb) {
			if(category.items.indexOf(dragOb.item) < 0) {
				dragOb.category.items.splice(dragOb.category.items.indexOf(dragOb.item), 1);
				category.items.push(dragOb.item);
				return true;
			}
		}
	}
	}

}) ();	
			
		
	
	
		 
	  
	   
	  
	