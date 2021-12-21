import './style.css'
import { SVG } from '@svgdotjs/svg.js'
import { generateRandomPoints } from './geo.js'

var draw = SVG().addTo('body').viewbox(0, 0, 100, 100)

var randomGeoPoints = generateRandomPoints({'lat':50, 'lng':50}, 5000000, 5);
var polylinePoints = [];
var pattern = draw.pattern(1, 1, function(add) {
  add.circle(.2,.2).fill('#f06')
}).transform({
  rotate: 45
})

randomGeoPoints.forEach( function(point){
  let style1 = [
    { fill: '#000' },
    { fill: 'none', stroke: '#000', 'stroke-width': .1 }
  ]
  let pickStyle1 = style1[Math.floor(Math.random() * style1.length)]
  draw.circle( Math.floor(Math.random() * 5) + 1 ).attr( pickStyle1 ).center(point.lat, point.lng)
  draw.circle( Math.floor(Math.random() * 10) + 1 ).attr({ fill: 'none', stroke: '#000', 'stroke-width': Math.random()/10 }).center(point.lat, point.lng)
  polylinePoints += `${point.lat},${point.lng} `
})

draw.polyline(polylinePoints).attr({ fill: pattern, stroke: '#000', 'stroke-width': .1 })