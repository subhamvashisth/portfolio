
var rv = document.getElementsByClassName('rgt-vid')[0];

rv.addEventListener('mouseover', () => {

    rv.play();

});

rv.addEventListener('mouseout', () => {

    rv.pause();

});

var lv = document.getElementsByClassName('lft-vid')[0];

lv.addEventListener('mouseover', () =>{

    lv.play();

});

lv.addEventListener('mouseout', () =>{

    lv.pause();

});

