var pTITelement = document.getElementById('json-title')
var pTIMelement = document.getElementById('json-timeframes')
var jsondata = null;

async function getJson() {
  let response = await fetch('../data.json');
  let data = await response.json()
  return data;
}

async function main() {
  jsondata = await getJson()
  console.log(jsondata)

  pTITelement.innerHTML = ''
  pTIMelement.innerHTML = ''

  for (var i = 0; i < jsondata.length; i++) {
    pTITelement.innerHTML += jsondata[i].title + ', '
    pTIMelement.innerHTML += jsondata[i].title + ', '
  }
}

main();

var DateElements = document.getElementsByClassName('DateButton')

for (let i = 0; i < DateElements.length; i++) {
  DateElements[i].addEventListener("click", updateData);
}


// Button function
function updateData(e) {

  e = e || window.event;
  var targ = e.target || e.srcElement || e;
  if (targ.nodeType == 3) targ = targ.parentNode;
  
  e = e.path[0]
  var timeframVar = e.innerHTML.toLowerCase()

  for (var i = 0; i < jsondata.length; i++) {
    console.log(jsondata[i].timeframes[timeframVar])
  }
}