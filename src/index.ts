import {Observable, Observer, Subject} from 'rxjs'
import {repeat} from 'rxjs/operator/repeat'

type Color = 'red' | 'green' | 'purple'

let observer: Observer<Color>
let observable: Observable<Color>

observable = Observable.create(_ => {})
let subject = new Subject()
observable.subscribe(subject)

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

var buttons = document.getElementsByClassName('laser-button')
for (let i = 0; i < buttons.length; i++) {
    buttons.item(i).addEventListener('click', e => {
        subject.next((<any>e.target).dataset.color)
    })
}

subject
    .debounceTime(100)
    .subscribe(fireLaser)

subject
    .groupBy(x => x)
    .flatMap(x => x.scan((acc: [Color, number], _) => [x.key, acc[1] + 1], [x.key, 0]))
    .subscribe(updateLaserCounter)