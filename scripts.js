// Select increment and decrement buttons
const incrementCount = document.getElementById("quantity");
const decrementCount = document.getElementById("quantity");
const incrementCountbanana = document.getElementById("quantitybanana");
const decrementCountbanana = document.getElementById("quantitybanana");
// Select total count
//const totalCount = document.getElementById("total-count");

// Variable to track count
var count = 0;
var countbanana = 0;
var countlemon = 0;
var counttomato = 0;
var countbeef = 0;
var countthighs = 0;
var countbreasts = 0;
var countthighs = 0;
var countfish = 0;
// Display initial count value
//totalCount.innerHTML = count;

// Function to increment count
function increment(){
  count++;
  document.getElementById('cost').innerHTML = parseFloat(count*1.65).toFixed(3);
  document.getElementById("quantity").value = count;
  
};

function incrementbanana(){
  countbanana = countbanana + 0.05;
  var displayqtybanana = parseFloat(countbanana).toFixed(2);
  document.getElementById('costbanana').innerHTML = parseFloat(displayqtybanana*1.96).toFixed(3);
  document.getElementById("quantitybanana").value = displayqtybanana + "kg";
  
};

function incrementlemon(){
  countlemon = countlemon + 1;
  document.getElementById('costlemon').innerHTML = parseFloat(countlemon*1.25).toFixed(3);
  document.getElementById("quantitylemon").value = countlemon;
  
};

function incrementtomato(){
  counttomato = counttomato + 0.05;
  var displayqtytomato = parseFloat(counttomato).toFixed(2);
  document.getElementById('costtomato').innerHTML = parseFloat(displayqtytomato*6.59).toFixed(3);
  document.getElementById("quantitytomato").value = displayqtytomato + "kg";
  
};

function incrementbeef(){
  countbeef++;
  document.getElementById('costbeef').innerHTML = parseFloat(countbeef*1.65).toFixed(3);
  document.getElementById("quantitybeef").value = countbeef;
  
};

function incrementthighs(){
  countthighs = countthighs + 0.05;
  var displayqtythighs = parseFloat(countthighs).toFixed(2);
  document.getElementById('costthighs').innerHTML = parseFloat(displayqtythighs*1.96).toFixed(3);
  document.getElementById("quantitythighs").value = displayqtythighs + "kg";
  
};

function incrementbreasts(){
  countbreasts++;
  document.getElementById('costbreasts').innerHTML = parseFloat(countbreasts*1.25).toFixed(3);
  document.getElementById("quantitybreasts").value = countbreasts;
  
};

function incrementfish(){
  countfish = countfish + 0.05;
  var displayqtyfish = parseFloat(countfish).toFixed(2);
  document.getElementById('costfish').innerHTML = parseFloat(displayqtyfish*6.59).toFixed(3);
  document.getElementById("quantityfish").value = displayqtyfish + "kg";
  
};

// Function to decrement count
function decrement(){
  count--;
  document.getElementById('cost').innerHTML = parseFloat(count*1.65).toFixed(3);
  document.getElementById("quantity").value = count;
};

// Function to decrement banana count
function decrementbanana(){
  countbanana = countbanana - 0.05;
  var displayqtybanana = parseFloat(countbanana).toFixed(2);
  document.getElementById('costbanana').innerHTML = parseFloat(displayqtybanana*1.96).toFixed(3);
  document.getElementById("quantitybanana").value = displayqtybanana + "kg";
};

// Function to decrement lemon count
function decrementlemon(){
  countlemon = countlemon - 1;
  document.getElementById('costlemon').innerHTML = parseFloat(countlemon*1.25).toFixed(3);
  document.getElementById("quantitylemon").value = countlemon;
};

function decrementtomato(){
  counttomato = counttomato - 0.05;
  var displayqtytomato = parseFloat(counttomato).toFixed(2);
  document.getElementById('costtomato').innerHTML = parseFloat(displayqtytomato*6.59).toFixed(3);
  document.getElementById("quantitytomato").value = displayqtytomato + "kg";
};

function decrementbeef(){
  countbeef--;
  document.getElementById('costbeef').innerHTML = parseFloat(countbeef*1.65).toFixed(3);
  document.getElementById("quantitybeef").value = countbeef;
  
};

function decrementthighs(){
  countthighs = countthighs + 0.05;
  var displayqtythighs = parseFloat(countthighs).toFixed(2);
  document.getElementById('costthighs').innerHTML = parseFloat(displayqtythighs*1.96).toFixed(3);
  document.getElementById("quantitythighs").value = displayqtythighs + "kg";
  
};

function decrementbreasts(){
  countbreasts--;
  document.getElementById('costbreasts').innerHTML = parseFloat(countbreasts*1.25).toFixed(3);
  document.getElementById("quantitybreasts").value = countbreasts;
  
};

function decrementfish(){
  countfish = countfish - 0.05;
  var displayqtyfish = parseFloat(countfish).toFixed(2);
  document.getElementById('costfish').innerHTML = parseFloat(displayqtyfish*6.59).toFixed(3);
  document.getElementById("quantityfish").value = displayqtyfish + "kg";
  
};