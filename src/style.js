const str = `
.triangle {
    border: 10px solid transparent;
    border-top-color: black;
    width: 20px;
    height: 20px;
    position: absolute;
    left: 50%;
    top: 200px;
    margin-left: -10px;
}

.arc {
    background-color: black;
    width: 20px;
    height: 5px;
    position: absolute;
    left: -10px;
    top: -15px;
    border-top-left-radius: 10px 5px;
    border-top-right-radius: 10px 5px;
}

@keyframes sniff {
    0% {
        transform: rotate(0deg);
    }
    33% {
        transform: rotate(5deg);
    }
    66% {
        transform: rotate(-5deg);
    }
    100% {
        transform: rotate(0deg);
    }
}

.triangle:hover {
    /* transform-origin: 50% 100%; */
    animation: sniff 300ms infinite linear;
}

.eyes {
    border: 2px solid black;
    width: 64px;
    height: 64px;
    position: absolute;
    left: 50%;
    top: 160px;
    margin-left: -32px;
    background-color: #2e2e2e;
    border-radius: 50%;
}

.eyes::before {
    content: '';
    display: block;
    border: 2px solid black;
    width: 28px;
    height: 28px;
    background-color: white;
    border-radius: 50%;
    position: relative;
    left: 8px;
}

.eyes.left {
    transform: translateX(-100px);
}

.eyes.right {
    transform: translateX(100px);
}

.lips {
    position: absolute;
}

.lips.up {
    width: 200px;
    left: 50%;
    top: 300px;
    margin: -100px;
    height: 50px;
}

.lips.up .left, .lips.up .right {
    position: absolute;
    border: 2px solid black;
    border-top: none;
    width: 80px;
    height: 20px;
    left: 50%;
    margin-left: -40px;
    z-index: 1;
    background-color: #ffe600;
}

.lips.up .left {
    border-right: none;
    border-bottom-left-radius: 50px 20px;
    transform: rotate(-25deg) translateX(-48px) translateY(10px);
}

.lips.up .left::before {
    content: '';
    display: block;
    width: 50px;
    height: 10px;
    position: relative;
    top: -8px;
    background-color: #ffe600;
}

.lips.up .right {
    border-left: none;
    border-bottom-right-radius: 50px 20px;
    transform: rotate(25deg) translateX(48px) translateY(10px);
}

.lips.up .right::before {
    content: '';
    display: block;
    width: 60px;
    height: 10px;
    position: relative;
    top: -8px;
    background-color: #ffe600;
}

.lips.down {
    width: 200px;
    left: 50%;
    top: 332px;
    margin: -100px;
    height: 218px;
    overflow: hidden;
}

.lips.down .shadow {
    border: 2px solid black;
    position: absolute;
    width: 140px;
    height: 1000px;
    left: 50%;
    bottom: 50px;
    margin-left: -70px;
    border-bottom-left-radius: 70px 400px;
    border-bottom-right-radius: 70px 400px;
    background-color: #9b000a;
    overflow: hidden;
}

.lips.down .tongue {
    position: absolute;
    width: 200px;
    height: 300px;
    left: 50%;
    bottom: -160px;
    margin-left: -100px;
    border-top-left-radius: 200px 400px;
    border-top-right-radius: 200px 400px;
    background-color: #ff485f;
}

.cheek {
    border: 2px solid black;
    position: absolute;
    width: 80px;
    height: 80px;
    left: 50%;
    top: 266px;
    margin-left: -40px;
    border-radius: 50%;
    background-color: red
}

.cheek.left {
    transform: translateX(-140px);
}

.cheek.right {
    transform: translateX(140px);
}
`

export default str