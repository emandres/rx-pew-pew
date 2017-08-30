import {Observable, Observer, Subject} from 'rxjs'

type Color = 'red' | 'green' | 'purple'

const fireLaser = (color) => {
    let space = document.getElementById('space')
    let laser = document.createElement('div')
    laser.classList.add('laser')
    laser.classList.add(color)
    laser.addEventListener('animationend', e => (<Element>e.target).remove())
    space.appendChild(laser)
}

const updateLaserCounter = ([color, count]) => {
    let counters = document.getElementsByClassName(`laser-counter ${color}`)
    for (let i = 0; i < counters.length; i++) {
        counters.item(i).innerHTML = `${count}`
    }
}

setInterval(() => fireLaser('green'), 1000)