
var teapot_counter = 0;
var casserole_counter = 0;
var gordon_counter = 0;
var ninespeed_counter = 0;
var mini_counter = 0;
var stand_counter = 0;
var blackstand_counter = 0;
var polka_counter = 0;
var paignton_counter = 0;
var kettle_counter = 0;


var add_teapot = $('.add_teapot');
var remove_teapot = $('.remove_teapot');
var tea_pot_count = $('.tea_pot_count');


add_teapot.click(function(){
  if (teapot_counter >= 0){
    tea_pot_count.text(++teapot_counter);
    console.log("TeaPot " + teapot_counter);
  }
})

remove_teapot.click(function(){
  if (teapot_counter > 1){
    tea_pot_count.text(--teapot_counter);
    console.log("TeaPot " + teapot_counter);
  }
  else{
    tea_pot_count.text('');
    alert("Please select atleast one!")
    teapot_counter = 0;

  }
})

var add_casserole = $('.add_casserole');
var remove_casserole = $('.remove_casserole');
var casserole_count = $('.casserole_count');


add_casserole.click(function(){
  if (casserole_counter >= 0){
    casserole_count.text(++casserole_counter);
    console.log("Casserole " + casserole_counter);
  }
})

remove_casserole.click(function(){
  if (casserole_counter > 1){
    casserole_count.text(--casserole_counter);
    console.log("Casserole " + casserole_counter);
  }else{
    casserole_count.text('');
    alert("Please select atleast one!")
    casserole_counter = 0;
  }
})

var add_gordon = $('.add_gordon');
var remove_gordon = $('.remove_gordon');
var gordon_count = $('.gordon_count');


add_gordon.click(function(){
  if (gordon_counter >= 0){
    gordon_count.text(++gordon_counter);
    console.log("Gordon :" + gordon_counter);
  }
})

remove_gordon.click(function(){
  if (gordon_counter > 1){
    gordon_count.text(--gordon_counter);
    console.log("Gordon " + gordon_counter);
  }else{
    gordon_count.text('');
    alert("Please select atleast one!")
    gordon_counter = 0;

  }
})

var add_ninespeed = $('.add_ninespeed');
var remove_ninespeed = $('.remove_ninespeed');
var ninespeed_count = $('.ninespeed_count');


add_ninespeed.click(function(){
  if (ninespeed_counter >= 0){
    ninespeed_count.text(++ninespeed_counter);

    console.log("ninespeed " + ninespeed_counter);
  }
})

remove_ninespeed.click(function(){
  if (ninespeed_counter > 1){
    ninespeed_count.text(--ninespeed_counter);
    console.log("ninespeed " + ninespeed_counter);
  }else{
    ninespeed_count.text('');
    alert('Select aleast one!')
    ninespeed_counter = 0;
  }
})

var add_mini = $('.add_mini');
var remove_mini = $('.remove_mini');
var mini_count = $('.mini_count');


add_mini.click(function(){
  if (mini_counter >= 0){
    mini_count.text(++mini_counter);
    console.log("Mini "+ mini_counter);
  }
})

remove_mini.click(function(){
  if (mini_counter > 1){
    mini_count.text(--mini_counter);
    console.log("Mini "+ mini_counter);
  }else{
    mini_count.text('');
    alert("Please select aleast one!")
    mini_counter = 0;
  }
})

var add_stand = $('.add_stand');
var remove_stand = $('.remove_stand');
var stand_count = $('.stand_count');



add_stand.click(function(){
  if (stand_counter >= 0){
    stand_count.text(++stand_counter);
    console.log("Stand " + stand_counter);
  }
})

remove_stand.click(function(){
  if (stand_counter > 1){
    stand_count.text(--stand_counter);
    console.log("Stand " + stand_counter);
  }else{
    stand_count.text('');
    alert("Select atleast one!");
    stand_counter = 0;
  }
})

var add_blackstand = $('.add_blackstand');
var remove_blackstand = $('.remove_blackstand');
var blackstand_count = $('.blackstand_count');


add_blackstand.click(function(){
  if (blackstand_counter >= 0){
    blackstand_count.text(++blackstand_counter);
    console.log("Black Stand " + blackstand_counter);
  }
})

remove_blackstand.click(function(){
  if (blackstand_counter > 1){
    blackstand_count.text(--blackstand_counter);
    console.log("Black Stand " + blackstand_counter);
  }else{
    blackstand_count.text('');
    alert("Please select one!")
    blackstand_counter = 0;
  }
})

var add_polka = $('.add_polka');
var remove_polka = $('.remove_polka');
var polka_count = $('.polka_count');


add_polka.click(function(){
  if (polka_counter >= 0){
    polka_count.text(++polka_counter);
    console.log("Polka " + polka_counter);
  }
})

remove_polka.click(function(){
  if (polka_counter > 1){
    polka_count.text(--polka_counter);
    console.log("Polka " + polka_counter);
  }else{
    polka_count.text('');
    alert('Please select atleast one!')
    polka_counter = 0;
  }
})

var add_paignton = $('.add_paignton');
var remove_paignton = $('.remove_paignton');
var paignton_count = $('.paignton_count');


add_paignton.click(function(){
  if (paignton_counter >= 0){
    paignton_count.text(++paignton_counter);
    console.log("Paignton "+ paignton_counter);
  }
})

remove_paignton.click(function(){
  if (paignton_counter > 1){
    paignton_count.text(--paignton_counter);
    console.log("Paignton " + paignton_counter);
  }else{
    paignton_count.text('');
    alert("Please select atleast one!")
    paignton_counter = 0;
  }
})

var add_kettle = $('.add_kettle');
var remove_kettle = $('.remove_kettle');
var kettle_count = $('.kettle_count');


add_kettle.click(function(){
  if (kettle_counter >= 0){
    kettle_count.text(++kettle_counter);
    console.log("Kettle " + kettle_counter);
  }
})

remove_kettle.click(function(){
  if (kettle_counter > 1){
    kettle_count.text(--kettle_counter);
    console.log("Kettle " + kettle_counter);
  }else{
    kettle_count.text('');
    alert("Please select atleast one!")
    kettle_counter = 0;
  }
})

var finish_list = $("#final_bttn");
var tea = $('#finaltea');
var casserole = $('#finalcasserole');
var gordon = $('#finalgordon');
var ninespeed = $('#finalninespeed');
var mini = $('#finalmini');
var stand = $('#finalstand');
var blackstand = $('#finalblackstand');
var polka = $('#finalpolka');
var paignton = $('#finalpaignton');
var kettle = $('#finalkettle');
var gift_list = $('.go_list');
gift_list.hide();


finish_list.click(function(){
  gift_list.show();
  tea.val(teapot_counter);
  casserole.val(casserole_counter);
  gordon.val(gordon_counter);
  ninespeed.val(ninespeed_counter);
  mini.val(mini_counter);
  stand.val(stand_counter);
  blackstand.val(blackstand_counter);
  polka.val(polka_counter);
  paignton.val(paignton_counter);
  kettle.val(kettle_counter);
})
