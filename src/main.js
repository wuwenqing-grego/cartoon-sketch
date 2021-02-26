import str from './style.js'
const html = document.querySelector('#main')
const css = document.querySelector('#style')
let index
let paused

const player = {
    init: () => {
        paused = 0
        index = 0
        html.innerHTML = str[index]
        css.innerHTML = ''
    },

    events: {
        '#play': 'play',
        '#pause': 'pause',
        '#replay': 'replay'
    },

    bindEvents: () => {
        for (let selector in player.events) {
            if (player.events.hasOwnProperty(selector)) {
                document.querySelector(selector).onclick = player[player.events[selector]]
            }
        }
    },

    step: () => {
        if (paused || index === str.length - 1) {return}
        setTimeout(() => {
            index++
            if (str[index] === '\n') {
                html.innerHTML += '<br>'
            } else if (str[index] === ' ') {
                html.innerHTML += '&nbsp;'
            } else {
                html.innerHTML += str[index]
            }
            css.innerHTML += str[index]
            html.scrollTop = html.scrollHeight
            player.step()
        }, 15)
    },

    play: () => {
        paused = 0
        player.step()
    },

    pause: () => {
        paused = 1
    },

    replay: () => {
        player.init()
        player.step()
    }
}

player.init()
player.bindEvents()