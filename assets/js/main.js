// scroll navbar
$(window).scroll(function () {
	var scroll = $(window).scrollTop();
	if (scroll > 90) {
		$("#navbar-fixed-top").css("background", "#FFEEEF");
		$("#navbar-fixed-top").css("box-shadow", "rgb(0 0 0 / 46%) 8px 8px 33px")
	}
	else {
		$("#navbar-fixed-top").css("background", "none");
		$("#navbar-fixed-top").css("box-shadow", "none")

	}
})
// MOBILE SCREEN SIDE NAV
var sidebarBox = document.querySelector('#box');
var sidebarBtn = document.querySelector('#btn');
var pageWrapper = document.querySelector('#main-content');

sidebarBtn.addEventListener('click', function (event) {

	if (this.classList.contains('active')) {
		this.classList.remove('active');
		sidebarBox.classList.remove('active');
	} else {
		this.classList.add('active');
		sidebarBox.classList.add('active');
	}
});

pageWrapper.addEventListener('click', function (event) {

	if (sidebarBox.classList.contains('active')) {
		sidebarBtn.classList.remove('active');
		sidebarBox.classList.remove('active');
	}
});
window.addEventListener('keydown', function (event) {

	if (sidebarBox.classList.contains('active') && event.keyCode === 27) {
		sidebarBtn.classList.remove('active');
		sidebarBox.classList.remove('active');
	}
});


function displayDiv(target){
	
	let display = document.getElementById(target).style.display;
	if( display==='block'){
		document.getElementById(target).style.display ='none';
	}else{
		document.getElementById(target).style.display ='block';
		document.getElementById(target).style.display ='transform-active';
	}
	console.log(display);

}
// Payment Button
function openDiv(){
	let display = document.getElementById('showBtn').style.display;
	if( display==='block'){
		document.getElementById('showBtn').style.display ='none';
	}else{
		document.getElementById('showBtn').style.display ='block';
		
	}
	console.log(display);
}
// 
// MOBILE SCREEN SIDE NAV
var sidebarBox1 = document.querySelector('#box1');
var sidebarBtn1 = document.querySelector('#btn1');
var pageWrapper1 = document.querySelector('#main-content1');

sidebarBtn1.addEventListener('click', function (event) {

	if (this.classList.contains('active1')) {
		this.classList.remove('active1');
		sidebarBox1.classList.remove('active1');
	} else {
		this.classList.add('active1');
		sidebarBox1.classList.add('active1');
	}
});

pageWrapper1.addEventListener('click', function (event) {

	if (sidebarBox1.classList.contains('active1')) {
		sidebarBtn1.classList.remove('active1');
		sidebarBox1.classList.remove('active1');
	}
});
window.addEventListener('keydown', function (event) {

	if (sidebarBox1.classList.contains('active1') && event.keyCode === 27) {
		sidebarBtn1.classList.remove('active1');
		sidebarBox1.classList.remove('active1');
	}
});



