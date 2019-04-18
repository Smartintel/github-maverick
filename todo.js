var lis = document.querySelectorAll("li");

for(var i =0 ; i < lis.length ; i++){
	lis[i].addEventListener("mouseover", function(){
		// this.style.color="red";
		this.classList.add("selected");

         // this above line is a good practice using class
         // rather than using many lines...
		// this inside of an event listerner refers to the item
		// or the element the event was triggered on
	});

	lis[i].addEventListener("mouseout", function(){
		// this.style.color="black";
		this.classList.remove("selected");
 });

	lis[i].addEventListener("click",function(){
		this.classList.toggle("done");

	});
}
