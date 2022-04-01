const packages = [
  {heavy: true, priority: false, fragile: false, to: 'Harrington', trackingNumber: '1324kjs'}, 
  {heavy: false, priority: true, fragile: true, to: 'Mark', trackingNumber: '1325sdk'}, 
  {heavy: true, priority: false, fragile: true, to: 'Mick', trackingNumber: 'jffd147'}, 
  {heavy: false, priority: false, fragile: false, to: 'Jake', trackingNumber: 'acdc145'}, 
  {heavy: true, priority: true, fragile: true, to: 'Brittany'}, 
  {heavy: false, priority: true, fragile: false, to: 'Zach', trackingNumber: '8081baz'}, 
  {heavy: true, priority: false, fragile: true, to: 'Jeremy', trackingNumber: 'suz2367'}
]

let renderedPackages = []
let choice = {}

function load(){
  renderedPackages = JSON.parse(JSON.stringify(packages)) 
  const randInt = Math.floor(Math.random() * (renderedPackages.length))
  choice = renderedPackages[randInt]
  drawPackages()
  console.log(choice)
  return choice
}


  // draw function
function drawPackages(){
  let template = ''
  renderedPackages.forEach(p => {
    template += `
    <div class="col pack-box">
      <table>
        <tr class=>
          <th>To:</th>
          <th>Tracking #:</th>
          <th>Priority:</th>
          <th>Fragile:</th>
          <th>Heavy:</th>
        </tr>
        <tr class=>
          <td>${p.to}</td>
          <td>${p.trackingNumber}</td>
          <td>${p.priority}</td>
          <td>${p.fragile}</td>
          <td>${p.heavy}</td>
        </tr>
      </table>
    </div>`
  });
  let drawElem = document.getElementById('packages')
  drawElem.innerHTML = template
}


function getter(attribute){
  // let choice = renderedVillains.find(v => v.trackingNumber)
  // console.log(choice[attribute])
  renderedPackages = renderedPackages.filter(package => package[attribute] === choice[attribute])
  drawPackages()
}

function resetter(){
  load()
}

load()

  //choose a random package function


  