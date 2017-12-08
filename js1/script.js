
function check(event){
	var x= event.which || event.keyCode;
	var y;
	if(x==13){
	y= document.getElementById("input").value;
	document.getElementById("input").value = " " ;
	var a=document.createElement("tr");
	var b=document.createElement("td");
	var att = document.createAttribute("onclick");       
	att.value = "strikethrough(this)";                           
	b.setAttributeNode(att); 
	var c=document.createTextNode(y);
	b.appendChild(c);
	a.appendChild(b);
	var time= Date();
	var d=document.createElement("td");
	var e= document.createTextNode(time.substr(0,21));
	d.appendChild(e);
	a.appendChild(d);
	document.getElementById("output").appendChild(a);
	}
}

function strikethrough(obj){
	if(obj.style.textDecorationLine=="none"){
	obj.style.textDecorationLine="line-through";}
	else{
		obj.style.textDecorationLine="none";
	}
}