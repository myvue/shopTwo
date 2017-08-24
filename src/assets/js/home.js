module.exports = {
	tab(){
		var headTab = document.getElementById('head-tab')
		var headTabLeft = 0
		timer = setInterval(function(){
			headTabLeft+=7.5;
			// console.log(headTab)
			headTabLeft>15?headTabLeft=0:headTabLeft;
			headTab.style.left = -headTabLeft+'rem'
		},3000)
	}
}

