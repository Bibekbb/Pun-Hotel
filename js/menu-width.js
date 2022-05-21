var menulist = document.getElementById("menulist");
		menulist.style.maxHeight = "0px";
		function togglemenu() {
			if(menulist.style.maxHeight == "0px")
			{
				menulist.style.maxHeight = "145px";
				menulist.style.maxWidth = "160px";
			}
			else
			{
				menulist.style.maxHeight = "0px";
				menulist.style.maxWidth = "0px";
			}
		}