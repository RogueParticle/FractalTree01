function clear(ctx){
	//kalido.fillStyle = "black";
	ctx.fillStyle = 'rgba(0,0,0,0.5);
	ctx.clearRect(0,0,ctx.width,ctx.height);
}


var treeCtx = document.getElementById('treCanvas').getContext('2d');
clear(treeCtx);
