const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const add = document.getElementById("add")
const remove = document.getElementById("subtract")
const possibleColors = ["red","orange","yellow","green","blue","purple","cyan","magenta","lime","gold","hotpink","turquoise","indigo","salmon","teal"]
const minX = 10;
const maxX = canvas.width - 10;
const minY = 10;
const maxY = canvas.height - 10;
const radius = 7
const maxXSpeed = 2
const minXSpeed = -2
const maxYSpeed = 2
const minYSpeed = -2

let x = [Math.floor(Math.random() * (maxX - minX + 1)) + minX]
let y = [Math.floor(Math.random() * (maxY - minY + 1)) + minY]
let dx = [Math.floor(Math.random() * (maxXSpeed - minXSpeed + 1)) + minXSpeed]
let dy = [Math.floor(Math.random() * (maxYSpeed - minYSpeed + 1)) + minYSpeed]
let color = [possibleColors[Math.floor(Math.random() * possibleColors.length)]]

function UpdateData(i) {
    x[i] += dx[i]
    y[i] += dy[i]
    if (x[i] - radius < 0) {
        x[i] = radius
        dx[i] = 0-dx[i]
    }
    if (x[i] + radius > canvas.width) {
        x[i] = canvas.width - radius
        dx[i] = 0-dx[i]
    }
    if (y[i] - radius < 0) {
        y[i] = radius
        dy[i] = 0-dy[i]
    }
    if (y[i] + radius > canvas.height) {
        y[i] = canvas.height - radius
        dy[i] = 0-dy[i]
    }
    if (dx[i] == 0) {
        dx[i] = 1
    }
    if (dy[i] == 0) {
        dy[i] =1
    }
}

function DrawCircles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    for (i = 0; i < x.length; i += 1) {
        ctx.fillStyle = color[i]
        ctx.beginPath();
        ctx.arc(x[i], y[i], radius, 0, 2 * Math.PI);
        ctx.fill()
        UpdateData(i)
    }
    requestAnimationFrame(DrawCircles)
}

function EditCircle(addorsubtract) {
    if (addorsubtract == "remove" && x.length > 1) {
        x.pop()
        y.pop()
        dx.pop()
        dy.pop()
        color.pop()
    }
    if (addorsubtract == "add") {
        x.push(Math.floor(Math.random() * (maxX - minX + 1)) + minX)
        y.push(Math.floor(Math.random() * (maxY - minY + 1)) + minY)
        dx.push(Math.floor(Math.random() * (maxXSpeed - minXSpeed + 1)) + minXSpeed)
        dy.push(Math.floor(Math.random() * (maxYSpeed - minYSpeed + 1)) + minYSpeed)
        color.push(possibleColors[Math.floor(Math.random() * possibleColors.length)])
    }
    document.getElementById("counter").innerText = "Circles: " + x.length
}

DrawCircles()

add.addEventListener("click", () => EditCircle("add"))
remove.addEventListener("click", () => EditCircle("remove"))const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const add = document.getElementById("add")
const remove = document.getElementById("subtract")
const possibleColors = ["red","orange","yellow","green","blue","purple","cyan","magenta","lime","gold","hotpink","turquoise","indigo","salmon","teal"]
const minX = 10;
const maxX = canvas.width - 10;
const minY = 10;
const maxY = canvas.height - 10;
const radius = 7
const maxXSpeed = 2
const minXSpeed = -2
const maxYSpeed = 2
const minYSpeed = -2

let x = [Math.floor(Math.random() * (maxX - minX + 1)) + minX]
let y = [Math.floor(Math.random() * (maxY - minY + 1)) + minY]
let dx = [Math.floor(Math.random() * (maxXSpeed - minXSpeed + 1)) + minXSpeed]
let dy = [Math.floor(Math.random() * (maxYSpeed - minYSpeed + 1)) + minYSpeed]
let color = [possibleColors[Math.floor(Math.random() * possibleColors.length)]]

function UpdateData(i) {
    x[i] += dx[i]
    y[i] += dy[i]
    if (x[i] - radius < 0) {
        x[i] = radius
        dx[i] = 0-dx[i]
    }
    if (x[i] + radius > canvas.width) {
        x[i] = canvas.width - radius
        dx[i] = 0-dx[i]
    }
    if (y[i] - radius < 0) {
        y[i] = radius
        dy[i] = 0-dy[i]
    }
    if (y[i] + radius > canvas.height) {
        y[i] = canvas.height - radius
        dy[i] = 0-dy[i]
    }
    if (dx[i] == 0) {
        dx[i] = 1
    }
    if (dy[i] == 0) {
        dy[i] =1
    }
}

function DrawCircles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    for (i = 0; i < x.length; i += 1) {
        ctx.fillStyle = color[i]
        ctx.beginPath();
        ctx.arc(x[i], y[i], radius, 0, 2 * Math.PI);
        ctx.fill()
        UpdateData(i)
    }
    requestAnimationFrame(DrawCircles)
}

function EditCircle(addorsubtract) {
    if (addorsubtract == "remove" && x.length > 1) {
        x.pop()
        y.pop()
        dx.pop()
        dy.pop()
        color.pop()
    }
    if (addorsubtract == "add") {
        x.push(Math.floor(Math.random() * (maxX - minX + 1)) + minX)
        y.push(Math.floor(Math.random() * (maxY - minY + 1)) + minY)
        dx.push(Math.floor(Math.random() * (maxXSpeed - minXSpeed + 1)) + minXSpeed)
        dy.push(Math.floor(Math.random() * (maxYSpeed - minYSpeed + 1)) + minYSpeed)
        color.push(possibleColors[Math.floor(Math.random() * possibleColors.length)])
    }
    document.getElementById("counter").innerText = "Circles: " + x.length
}

DrawCircles()

add.addEventListener("click", () => EditCircle("add"))
remove.addEventListener("click", () => EditCircle("remove"))
