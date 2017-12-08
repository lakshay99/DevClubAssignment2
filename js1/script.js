
function check(event){
	var x= event.which || event.keyCode;
	var y;
	if(x==13){
	y= document.getElementById("input").value;
	document.getElementById("input").value = " " ;
	var a=document.createElement("li");
	var att = document.createAttribute("onclick");       
	att.value = "strikethrough(this)";                           
	a.setAttributeNode(att); 
	var b=document.createTextNode(y);
	a.appendChild(b);
	document.getElementById("output").appendChild(a);
	
	var time= Date();
	var c=document.createElement("li");
	var d= document.createTextNode(time.substr(0,21));
	c.appendChild(d);
	document.getElementById("date").appendChild(c);
	}
}

function strikethrough(obj){
	if(obj.style.textDecorationLine=="none"){
	obj.style.textDecorationLine="line-through";}
	else{
		obj.style.textDecorationLine="none";
	}
}