var date_string;
function formatAMPM() {
    var der = new Date();
    var DD = ("0" + der.getDate()).slice(-2);
    var MM = ("0" + (der.getMonth() + 1)).slice(-2);
    var YYYY = der.getFullYear();
    var hh = ("0" + der.getHours()).slice(-2);
    var mm = ("0" + der.getMinutes()).slice(-2);
    var ss = ("0" + der.getSeconds()).slice(-2);
    date_string = YYYY + "-" + MM + "-" + DD + " " + hh + ":" + mm + ":" + ss;
    document.getElementById("timing").innerHTML = date_string;
    setTimeout('formatAMPM()',1000);
    // timeMe();
}

function timeMe() {
localStorage.date += JSON.stringify(date_string)+ '<br />';
	// timeSetting();
}

formatAMPM();
  $(function(){
		   $('#menu1').hide();
			$('#menu').on('click', function(){
				$('#sidebar').css('width','230px');
				$('#sidebar').css('display','block');
				$('#menu').hide();
				$('#menu1').show();
        })
			$('#menu1').on('click', function(){
				$('#sidebar').hide();
				$('#sidebar').css('width','0')
				$('#menu').show();
				$('#menu1').hide();
    })
}())
function start(){
$('#welcomePage').fadeOut(2000)
document.getElementById('welcomePage').style.display = "none";
setTimeout('logIn()',1000)
}
setTimeout('start()',1000);
function logIn (){
    $('#mainPage').fadeIn(2000)
document.getElementById('mainPage').style.display = "";
document.getElementById('add').style.display = "";
document.getElementById('menuBar').style.display = ""
}
document.querySelector("#page-top > header > div.container.text-center.my-auto > h1");

// calculate page starts here ....

$(function(){
	$('#calculateButton').on('click',function(){
		$('#calculatePage').fadeIn(1000);
		$('#mainPage,#aboutPage,#add,#sidebar').css('display','none');
		$('#calculatePage').css('display','block');
		})
})
// calculate page ends here ....

// about page begins ....
$(function(){
	$('#aboutButton').on('click',function(){
		$('#aboutPage').fadeIn(1000);
		$('#mainPage,#calculatePage,#add,#sidebar').css('display','none');
		$('#aboutPage').css('display','block');
	})
})
// about page ends ....

// exit page starts from here.....

$(function(){
	$('#exitbutton').on('click',function(){
		$('#add,#mainPage,#welcomePage,#menuBar,#aboutPage,#calculatePage,#sidebar').css('display','none');
		$('#exitPage').fadeIn(1000);
		localStorage.Edate += JSON.stringify(date_string) + '<br />';
	})
})

$(function(){
	$('#exit').on('click', function(){
		$('exitPage').fadeOut(1000);
		$('exitPage').css('display','none');
		$('#add,#mainPage,#welcomePage,#menuBar,#aboutPage,#calculatePage,#sidebar,#exampleModal').css('display','none');
		setTimeout('goodBye()', 2000);
			})
})
goodBye = () =>{
	close();
}
// exit page ends here.....

$(function(){
	$('#allContainer').on('click',function(){
	$('#sidebar').css('display','none')
	})
})
backToMainPage = () =>{
	$('#mainPage').fadeIn(1000);
	document.getElementById('mainPage').style.display = "";
	document.getElementById('calculatePage').style.display = "none";
	document.getElementById('add').style.display = "";
	$('#aboutPage').css('display','none');	
}
	function countMe(evt){
		inlineCheckbox1.value++;
	}
// grab the element
var el = document.getElementById('countNums');

// listen for the long-press event
el.addEventListener('long-press', function(evt) {
   inlineCheckbox1.value--;
   console.log(evt.target);
});
function clickTocount(evt){
		inlineCheckbox2.value++;
	}
// grab the element
var elt = document.getElementById('countNume');

// listen for the long-press event
elt.addEventListener('long-press', function(evt) {
   inlineCheckbox2.value--;
  console.log(evt.target);
});
 function addItem(){
     all = [];
	 var c = Math.random();
    var s = Math.floor(c*1000);
    var v = 'ann'+ s;
    var ar = document.getElementsByClassName('allcounters');
    for(var i = 0; i < ar.length;i++){
        all.push(ar[i].value);
    }
   var  e = itemList.value;
    vehicleDiv.innerHTML += `<p><div class="input-group mb-3 rounded mt-5" id=`+v+s+`><div class="input-group-prepend"><span class="input-group-text fa fa-biking p-3 fa-1x text-white longpressCls" onmouseup="generalCount(event,`+s+`)" data-long-press-delay="2000" style="background: #0F0096 !important"> `+e+`</span></div><input type="number" class="form-control p-3 text-white allcounters" id=`+v+` value="0" readonly onmouseup="generalCount(event,`+s+`)"  data-long-press-delay="2000" style="height:73px; text-align:center; font-size:40px;background:#0F0096 !important"><div class="input-group-append" id=`+v+`><span class="input-group-text fa fa-trash-alt p-3 fa-1x text-white" style="background:#0F0096 !important"></span></div></div></p>`;
    document.getElementById('vehicleDiv').style.display= "block";
    
         for(var i = 0; i < ar.length;i++){
            ar[i].value = all[i];
		}   
		// document.getElementById('myModal').style.display='none';  
		// document.getElementById('vehicleDiv').style.display= "";
		$(function(){
			$('.myModal').css('display','none');
		})

	}  
function generalCount(evt,a){
   var me = 'ann' + a;
   console.log(me);
   document.getElementById(me).value = Number(document.getElementById(me).value)+1;

   var tt = 'ann' + evt;
	addEventListener('long-press', function(evt){
	document.getElementById(tt).value = Number(document.getElementById(tt).value)-1;
			console.log(tt);
	})
	
}
calculate=()=>{
	var all = 0;
	var allinput = document.getElementsByClassName('allcounters');
for (var i = 0; i < allinput.length; i++) {
 all += Number(allinput[i].value);
}
 cal.value = all;

}

$('document').ready( function () {
	$('#History').on('click', function(){
		$('#sidebar').css('display','none')
	})
})

