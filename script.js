var HELPER_BOX_MARGIN_TOP = -20;

function render(){
	var posHelper = document.getElementById("sel-ext-helper");
	if(posHelper){
		var offsets = posHelper.getBoundingClientRect();
		var top = offsets.top;
		var left = offsets.left;
		var helper = document.getElementById("sel-ext-helpbox");
		if(!helper){
			var helper = document.createElement("div");
			helper.innerHTML = "Helper"
			helper.style.position = "absolute";
			helper.style.border = "1px solid #6c6c6c";
			helper.style.backgroundColor = "#e3e3e3";
			helper.id = "sel-ext-helpbox";
		}
		helper.style.top = top+HELPER_BOX_MARGIN_TOP+"px";
		helper.style.left = left+"px";
		document.body.appendChild(helper);
	}
}
document.body.addEventListener ("mouseup", function(){
	var selection = window.getSelection();
	if (selection.toString().length > 0){
		var range  = selection.getRangeAt(0);
		var oldHelper = document.getElementById("sel-ext-helper");
		if(oldHelper){
			oldHelper.parentNode.removeChild(oldHelper);
		}
		var newNode = document.createElement("span");
		newNode.id = "sel-ext-helper";
		range.insertNode(newNode);
		render();
	}
});