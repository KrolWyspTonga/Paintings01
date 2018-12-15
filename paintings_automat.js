var Alfa = new Array(5);
var Beta = new Array(5);
var Styles1 = new Array(6);
var Styles2 = new Array(9);
var Styles3 = new Array(9);
var Titles = new Array(5);
var Names = new Array(5);
var p;
var n;
var s;
var v;
var i0;
var number;

window.onload = start;

Alfa[0] = 1;
Alfa[1] = 2;
Alfa[2] = 3;
Alfa[3] = 4;
Alfa[4] = 5;

Names[0] = "Caspar David Friedrich";
Names[1] = "Caravaggio";
Names[2] = "Bracia Gierymscy";
Names[3] = "Claude Monet";
Names[4] = "Rembrandt";

function start()
{
	for(i = 0; i < 5; i++)
	{
		Beta[i] = i + 1;
		Titles[i] = new Array(4);
	}
	Titles[0][0] = "Moonrise over the Sea";
	Titles[0][1] = "Morning on the Riesengebirge";
	Titles[0][2] = "Man and Woman Contemplating the Moon";
	Titles[0][3] = "Wanderer above the Sea of Fog";
	
	Titles[1][0] = "The Calling of Saint Matthew";
	Titles[1][1] = "The Calling of Saints Peter and Andrew";
	Titles[1][2] = "St. Jerome";
	Titles[1][3] = "Supper at Emmaus";
	
	Titles[2][0] = "Patrol powstańczy (Maksymilian Gierymski)";
	Titles[2][1] = "Pejzaż z wozami (Maksymilian Gierymski)";
	Titles[2][2] = "Święto trąbek (Aleksander Gierymski)";
	Titles[2][3] = "Ogród Saski (Aleksander Gierymski)";
	
	Titles[3][0] = "Garden at Sainte Adresse";
	Titles[3][1] = "Arrival of the Normandy Train, Gare Saint-Lazare";
	Titles[3][2] = "The pier";
	Titles[3][3] = "Boulevard des Capucines in Paris";
	
	Titles[4][0] = "Anatomy Lesson of Dr. Nicolaes Tulp";
	Titles[4][1] = "The Storm on the Sea of Galilee";
	Titles[4][2] = "The Syndics of the Drapers' Guild";
	Titles[4][3] = "The Landscape with Good Samaritan";
}

function move(p)
{
	var p0;
	var p1 = p - 1;
	var p2 = p + 2;
	var z;
	remove_welcome();
	
	for(i = 0; i < 5; i++)
	{
		if(Alfa[p1] == Beta[i])
			z = i;
	}
	switch (z)
	{
		case 0:
			move_1(p);
			hide_gallery();
			setTimeout('counter('+p+')', 1260);
			if(p > 1)
				p0 = p - 1;
			else
				p0 = 5;
			setTimeout('move_1('+p0+')', 1270);
			setTimeout('counter('+p0+')', 2270);
			setTimeout('set_onclick()', 2280);
			setTimeout('change_background('+p+')', 1500);
			setTimeout('painter_name('+p+')', 2000);
			setTimeout('set_gallery('+p+')', 2211);
			setTimeout('display_gallery()', 3311);
		break;
		case 4:
			move_1(p);
			hide_gallery();
			setTimeout('counter('+p+')', 1260);
			if(p < 5)
				p0 = p + 1;
			else
				p0 = 1;
			setTimeout('move_1('+p0+')', 1270);
			setTimeout('counter('+p0+')', 2270);
			setTimeout('set_onclick()', 2280);
			setTimeout('change_background('+p+')', 1500);
			setTimeout('painter_name('+p+')', 2000);
			setTimeout('set_gallery('+p+')', 2211);
			setTimeout('display_gallery()', 3311);
		break;
		case 1:
		case 3:
			move_1(p);
			hide_gallery();
			setTimeout('counter('+p+')', 1270);
			setTimeout('set_onclick()', 2270);
			setTimeout('change_background('+p+')', 1500);
			setTimeout('painter_name('+p+')', 2000);
			setTimeout('set_gallery('+p+')', 2211);
			setTimeout('display_gallery()', 3311);
		break;
		case 2:
			for( x = 0; x < 5; x++)
			{
				for(i = 0; i < 5; i++)
				{
					if(Alfa[x] == Beta[i])
					{
						var x1 = x + 1;
						var a;
						a = document.getElementById('A'+ x1);
						a.style.opacity = Styles1[i].opacity1;
						a.style.height = Styles1[i].height1;
						a.style.width = Styles1[i].width1;
						a.style.left = Styles1[i].left1;
						a.style.top = Styles1[i].top1;
						a.style.zIndex = Styles1[i].zIndex1;
					}
				}
			}
			setTimeout('change_background('+p+')', 1000);
			setTimeout('painter_name('+p+')', 1000);
			setTimeout('set_gallery('+p+')', 1000);
			setTimeout('display_gallery()', 1100);
		break;
		case 6:
			return;
		break;
	}
}

function move_1(n)
{
	var q;
	var i1;
	var n1 = n -1;
	var n2;
	for(i = 0; i < 5; i++)
	{
		if(Alfa[n1] == Beta[i])
			n2 = i;
	}
	if (n2 != 2)
	{
		if (n2 < 2)
			q = 0;
		else
			q = 1;
	}
	else
		return;
	for( x = 0; x < 5; x++)
	{
		for(i = 0; i < 5; i++)
		{
			if(Alfa[x] == Beta[i])
			{
				switch (q) 
				{
					case 0:
						i1 = i + 1;				
					break;
					case 1:
						i1 = i - 1;				
					break;
				}
				if(i1 > -1 && i1 < 5)
				{
					var x1 = x + 1;
					var a;
					a = document.getElementById('A'+ x1);
					a.setAttribute("onclick","6");
					a.style.opacity = Styles1[i1].opacity1;
					a.style.height = Styles1[i1].height1;
					a.style.width = Styles1[i1].width1;
					a.style.left = Styles1[i1].left1;
					a.style.top = Styles1[i1].top1;
					a.style.zIndex = Styles1[i1].zIndex1;
				}
				else
				{
					switch (i) 
					{
						case 0:
							var x2 = x + 1;
							var c;
							var d;
							c = style_hide;
							d = document.getElementById('A'+ x2);
							d.setAttribute("onclick","6");
							d.style.opacity = c.opacity1;
							d.style.height = c.height1;
							d.style.width = c.width1;
							d.style.top = c.top1;
							show_right(x2);
							setTimeout('Remove_transition('+x2+')', 1000);
							setTimeout('set_end('+x2+')', 1050);
							setTimeout('change_slider2('+x2+')', 1100);
							setTimeout('Add_transition('+x2+')', 1250);
						break;
						case 4:
							var x2 = x + 1;
							var c;
							var d;
							c = style_hide;
							d = document.getElementById('A'+ x2);
							d.setAttribute("onclick","6");
							d.style.opacity = c.opacity1;
							d.style.height = c.height1;
							d.style.width = c.width1;
							d.style.top = c.top1;
							show_left(x2);
							setTimeout('Remove_transition('+x2+')', 1000);
							setTimeout('set_start('+x2+')', 1050);
							setTimeout('change_slider1('+x2+')', 1100);
							setTimeout('Add_transition('+x2+')', 1250);
						break;
					}
				}
			}
		}
	}
}
		Styles1[0] = {
						opacity1: "0.3",
						height1: "44%",
						width1: "15%",
						left1: "0",
						top1: "28%",
						zIndex1: "100",
					 };
					 
		Styles1[1] = {
						opacity1: "0.6",
						height1: "67%",
						width1: "23%",
						left1: "13%",
						top1: "16%",
						zIndex1: "200",
					 };
			
		Styles1[2] = {
						opacity1: "1",
						height1: "100%",
						width1: "34%",
						left1: "33%",
						top1: "0",
						zIndex1: "300",
					  };
					  
		Styles1[3] = {
						opacity1: "0.6",
						height1: "67%",
						width1: "23%",
						left1: "65%",
						top1: "16%",
						zIndex1: "200",
					  };
			
		Styles1[4] = {
						opacity1: "0.3",
						height1: "44%",
						width1: "15%",
						left1: "85%",
						top1: "28%",
						zIndex1: "100",
					  };
			
	var style_hide = {
						opacity1: "0",
						height1: "0",
						width1: "0",
						top1: "28%",
					  };
	
	function show_left(number) 
	{
		var f;
		var j;
		f = document.getElementById("A0");
		f.innerHTML = '<img onclick="move('+number+')" class="image0" class="image1" height=100% width=100% src="rys'+number+'.jpg">';
		f.style.display = "block";
		f.style.position = "absolute";
		f.style.opacity = "0.3";
		f.style.height = "44%";
		f.style.width = "15%";
		f.style.top = "28%";
		f.style.left = "0";
	}
	
	function show_right(number) 
	{
		var f;
		var j;
		f = document.getElementById("A6");
		f.innerHTML = '<img onclick="move('+number+')" class="image0" class="image1" height=100% width=100% src="rys'+number+'.jpg">';
		f.style.display = "block";
		f.style.position = "absolute";
		f.style.opacity = "0.3";
		f.style.height = "44%";
		f.style.width = "15%";
		f.style.top = "28%";
		f.style.left = "85%";
	}

function Remove_transition(number)
{
	var n;
	n = document.getElementById('A'+number);
	n.classList.remove("image1");
}

function set_start(number)
{
	var j;
	var k;
	var z;
	k = document.getElementById('A'+number);
	k.style.display = "none";
	k.style.opacity = "0";
	k.style.height = "44%";
	k.style.width = "15%";
	k.style.top = "28%";
	k.style.left = "0";
}

function set_end(number)
{
	var j;
	var k;
	var z;
	k = document.getElementById('A'+number);
	k.style.display = "none";
	k.style.opacity = "0";
	k.style.height = "44%";
	k.style.width = "15%";
	k.style.top = "28%";
	k.style.left = "85%";
}

function change_slider1(number)
{
	var l;
	var m;
	var n;
	var q;
	m = document.getElementById("A0");
	n = document.getElementById('A'+number);
	m.style.display = "none";
	n.style.display = "block";
	n.style.opacity = "0.3";
}

function change_slider2(number)
{
	var l;
	var m;
	var n;
	var q;
	m = document.getElementById("A6");
	n = document.getElementById('A'+number);
	m.style.display = "none";
	n.style.display = "block";
	n.style.opacity = "0.3";
}

function Add_transition(number)
{
	var n;
	n = document.getElementById('A'+number);
	n.classList.add("image1");
}

function counter(s)
{
	var n1 = s - 1;
	var n2;
	for(i = 0; i < 5; i++)
	{
		if(Alfa[n1] == Beta[i])
			n2 = i;
	}
	var i1;
	if (n2 != 2)
	{
		if (n2 > 2)
		{
			for(i1 = 0; i1 < 5; i1++)
			{
				Beta[i1] = Beta[i1] + 1;
			}
			for(i1 = 0; i1 < 5; i1++)
			{
				if(Beta[i1] == 6)
				{
					Beta[i1] = 1;
				}
			}
		}
		else
		{
			for(i1 = 0; i1 < 5; i1++)
			{
				Beta[i1] = Beta[i1] - 1;
			}
			for(i1 = 0; i1 < 5; i1++)
			{
				if(Beta[i1] == 0)
					Beta[i1] = 5;
			}
		}
	}
	else
		return;
}

Styles2[0] = 	{
					opacity2: "1",
					left2: "20%",
					top2: "10px",
					zIndex2: "200",
				};
Styles2[1]  = 	{
					opacity2: "1",
					left2: "55%",
					top2: "10px",
					zIndex2: "200",
				};
Styles2[2]  = 	{
					opacity2: "1",
					left2: "20%",
					top2: "280px",
					zIndex2: "200",
				};
Styles2[3]  = 	{
					opacity2: "1",
					left2: "55%",
					top2: "280px",
					zIndex2: "200",
				};
				
Styles3[0] = 	{
					opacity2: "0",
					left2: "0",
					top2: "-140px",
					zIndex2: "0",
				};
Styles3[1]  = 	{
					opacity2: "0",
					left2: "986px",
					top2: "-140px",
					zIndex2: "0",
				};
Styles3[2]  = 	{
					opacity2: "0",
					left2: "0",
					top2: "430px",
					zIndex2: "0",
				};
Styles3[3]  = 	{
					opacity2: "0",
					left2: "986px",
					top2: "430px",
					zIndex2: "0",
				};
				
function hide_gallery()
{
	for(i = 0; i < 4; i++)
	{
		var x1 = i + 1;
		var a;
		a = document.getElementById('B'+ x1);
		a.style.opacity = Styles3[i].opacity2;
		a.style.left = Styles3[i].left2;
		a.style.top = Styles3[i].top2;
		a.style.zIndex2 = Styles3[i].zIndex2;
	}
}

function display_gallery()
{
	for(i = 0; i < 4; i++)
	{
		var x1 = i + 1;
		var a;
		a = document.getElementById('B'+ x1);
		a.style.opacity = Styles2[i].opacity2;
		a.style.left = Styles2[i].left2;
		a.style.top = Styles2[i].top2;
		a.style.zIndex = Styles3[i].zIndex2;
	}
}

function set_gallery(s)
{
	var x;
	var z = s - 1;
	var y;
	var i2;
	for(i = 0; i < 4; i++)
	{
		i2 = i + 1;
		x = Titles[z][i];
		y = document.getElementById('B'+i2);
		y.innerHTML = '<img height=100% width=100% src="rys'+s+''+i2+'.jpg"></br><p>'+x+'</p>';
		y.classList.add("image2");
		if((z == 3)&&(i == 1))
		{
			y.style.fontSize = "10px";
		}
		else
		{
			y.style.fontSize = "15px";
		}
	}
	hide_gallery();
}

function change_background(s)
{
	var back_image = document.getElementById('background0');
	back_image.style.backgroundImage = 'url(rys'+s+'.jpg)';
}

function set_onclick()
{
	var q;
	var i1;
	for( x = 0; x < 5; x++)
	{
		for(i = 0; i < 5; i++)
		{
			if(Alfa[x] == Beta[i])
			{
				var x1 = x + 1;
				var a;
				a = document.getElementById('A'+ x1);
				a.setAttribute("onclick",'move('+x1+')');
			}
		}
	}
}

function scale_img(v)
{
	var x;
	x = document.getElementById('B'+ v);
	x.style.width = "79%";
	x.style.height = "625px";
	x.style.left = "11%";
	x.style.top = "-150px";
	x.style.paddingLeft = "10px";
	x.style.paddingRight = "10px";
	x.style.paddingTop = "10px";
	x.style.paddingBottom = "25px";
	x.style.zIndex = "500";
}

function normal_img(v)
{
	var x;
	var v0 = v - 1;
	x = document.getElementById('B'+ v);
	x.style.width = "25%";
	x.style.height = "200px";
	x.style.left = Styles2[v0].left2
	x.style.top = Styles2[v0].top2
	x.style.paddingLeft = "3px";
	x.style.paddingRight = "3px";
	x.style.paddingTop = "3px";
	x.style.paddingBottom = "20px";
	x.style.zIndex = "200";
}

function painter_name(s)
{
	var y;
	var z = s -1;
	y = document.getElementById('end1');
	y.innerHTML = Names[z]; 
}

function remove_welcome()
{
	var x;
	x = document.getElementById('galery1');
	x.innerHTML = '<div onmousemove="scale_img(1)" onmouseout="normal_img(1)" class="image2" id="B1"></div><div onmousemove="scale_img(2)" onmouseout="normal_img(2)" class="image2" id="B2"></div><div style="clear:both;"></div><div onmousemove="scale_img(3)" onmouseout="normal_img(3)" class="image2" id="B3"></div><div onmousemove="scale_img(4)" onmouseout="normal_img(4)" class="image2" id="B4"></div><div style="clear:both;"></div>'
}