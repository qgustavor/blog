window.requestAnimationFrame(function () {
  const body = document.body
  const canvas = document.createElement('canvas')
  const headerHeight = Math.floor(
    document.querySelector('.wp-block-spacer').getBoundingClientRect().bottom +
    document.documentElement.scrollTop
  )
  const width = canvas.width = body.clientWidth
  const height = canvas.height = headerHeight
  canvas.style.cssText = 'width:100%;top:0;left:0;position:absolute;z-index:-1'
  body.appendChild(canvas)
  const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches
  const ctx = canvas.getContext('2d')

  const csize = height / Math.round(height / 64)
  const rows = Math.floor(width / csize) + 4
  const lines = Math.floor(height / csize) + 4
  let cX = 1
  let cY = 1
  const getColor = isDarkMode
    ? () => `hsl(${Math.floor(Math.random() * 180 + 80)},15%,50%)`
    : () => `hsl(${Math.floor(Math.random() * 180 + 80)},25%,80%)`
  const randomize = (arr, lastValue) => {
    return () => {
      let value
      do {
        value = arr[Math.floor(Math.random() * arr.length)]
      } while (value === lastValue)
      lastValue = value
      return value
    }
  }
  const getRoomName = randomize([
    'OZU', 'AKASHI', 'OZU', 'AKASHI',
    'HIGUSHI', 'JOUGASAKI',
    'AIJIMA', 'RYOUKO', 'JOHNNY', 'KAORI'
  ])
  const getDoorSpeed = () => (1 + Math.random()) * 0.005
  const getDimensions = randomize(
    [1, 1, 2, 2, 2, 2, 3, 3, 3, 4].map(w => 
      [1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4].map(h => [w, h])
    ).flat().filter(e => e[0] !== 1 || e[1] !== 1)
  )
  const initialDimensions = getDimensions()
  let rooms = [{
    color: getColor(),
    doorY: 0,
    doorAngle: Math.PI / 2,
    doorSpeed: getDoorSpeed(),
    doorTarget: Math.PI / 3,
    name: getRoomName(),
    x: Math.round(rows * 3 / 5) - 1,
    y: Math.round(lines / 2) - 1,
    w: initialDimensions[0],
    h: initialDimensions[1],
    animated: false,
    targetY: initialDimensions[0],
    targetH: initialDimensions[1]
  }]
  const minRow = Math.floor(rows - 4 - rows / 4)
  let lastRoom = rooms[0]

  const yojouhan = [
    [1 / 3, 0, 1 / 3, 2 / 3],
    [1 / 3, 1 / 3, 1, 1 / 3],
    [0, 2 / 3, 2 / 3, 2 / 3],
    [2 / 3, 1 / 3, 2 / 3, 1]
  ]

  let frame = 0
  const renderLoop = () => {
    frame++
    // Background
    for (let x = 0; x < rows; x++) {
      for (let y = 0; y < lines; y++) {
        ctx.fillStyle = (x + y) % 2
          ? (isDarkMode ? '#18202d' : '#e8e8e8')
          : (isDarkMode ? '#101822' : '#d8d8d8')
        ctx.fillRect((x - cX) * csize, (y - cY) * csize, csize, csize)
      }
    }

    // Rooms
    ctx.lineJoin = 'bevel'
    ctx.textAlign = 'center'
    ctx.font = '15px "Helvetica Neue", Helvetica, Roboto, Arial, sans-serif'
    const doorSize = 0.6
    const doorMargin = (1 - doorSize) / 2
    for (const room of rooms) {
      const { x, y, w, h, doorY } = room
      ctx.fillStyle = room.color
      ctx.fillRect((x - cX) * csize, (y - cY) * csize, csize * w, csize * h)
      if (w === h && w > 1) {
        ctx.beginPath()
        for (const [x0, y0, x1, y1] of yojouhan) {
          ctx.moveTo(
            (x - cX) * csize + csize * w * x0,
            (y - cY) * csize + csize * h * y0
          )
          ctx.lineTo(
            (x - cX) * csize + csize * w * x1,
            (y - cY) * csize + csize * h * y1
          )
        }
        ctx.strokeStyle = '#00000040'
        ctx.lineWidth = 2
        ctx.stroke()
      } else if (w > 1) {
        ctx.fillStyle = '#222'
        ctx.textBaseline = 'bottom'
        ctx.fillText(
          room.name,
          (x - cX) * csize + csize * w * 0.5,
          (y - cY) * csize + csize * h * 0.5
        )
        ctx.textBaseline = 'top'
        ctx.fillText(
          (w * h).toFixed(2) + ' m²',
          (x - cX) * csize + csize * w * 0.5,
          (y - cY) * csize + csize * h * 0.5
        )
      }
      ctx.lineWidth = 4
      ctx.strokeStyle = '#000'
      ctx.strokeRect((x - cX) * csize, (y - cY) * csize, csize * w, csize * h)
      ctx.fillStyle = isDarkMode ? '#A0A0A0' : '#EEE'
      const doorOriginX = (x - cX + w) * csize - 1
      const doorOriginY = (y - cY + doorY + doorMargin) * csize
      ctx.fillRect(doorOriginX, doorOriginY, 2, csize * doorSize)
      ctx.beginPath()
      ctx.arc(
        doorOriginX + 3, doorOriginY, csize * doorSize,
        Math.PI / 2, Math.PI / 2 - room.doorAngle, true
      )
      ctx.lineTo(doorOriginX + 3, doorOriginY)
      ctx.strokeStyle = '#000'
      ctx.stroke()
      ctx.fill()
      room.doorAngle += room.doorSpeed
      const needsNewTarget = (room.doorSpeed > 0 && room.doorAngle > room.doorTarget) ||
        (room.doorSpeed < 0 && room.doorAngle < room.doorTarget)
      if (needsNewTarget) {
        // TODO: check if open can be opened > 90°
        room.doorAngle = room.doorTarget
        room.doorTarget = (Math.random() * 0.55) * Math.PI
        room.doorSpeed = getDoorSpeed() * Math.sign(room.doorTarget - room.doorAngle)
      }

      // Room animation
      if (room.animated) {
        if (room.targetY !== room.y) {
          const speedY = room.targetY > room.y ? 1 : -1
          room.y += speedY * 1e-3
          if (Math.abs(room.targetY - room.y) < 0.01) {
            room.y = room.targetY
            room.animated = false
          }
        } else {
          const speedH = room.targetH > room.h ? 1 : -1
          room.h += speedH * 1e-3
          if (Math.abs(room.targetH - room.h) < 0.01) {
            room.h = room.targetH
            room.animated = false
          }
        }
      } else if (room.w !== room.h && room.w > 1 && room.h > 1 && Math.random() < 0.1) {
        room.animated = true
        if (Math.random() > 0.5) {
          for (let i = 0; i < 5; i++) {
            room.targetY = Math.max(2, Math.min(lines - 3 - h,
              room.y + Math.floor(Math.random() * 3) - 1
            ))
            if (room.targetY !== room.targetH) break
          }
        } else {
          for (let i = 0; i < 5; i++) {
            room.targetH = room.h + Math.max(1, Math.min(4,
              Math.floor(Math.random() * 3) - 1
            ))
            if (room.targetY !== room.targetH) break
          }
        }
      }
    }

    // Move camera and handle wrapping
    ctx.rotate(Math.sin(cX * Math.PI) * 0.0001)
    cX += 0.005 + Math.min(0.01, frame / 1e6)
    cY = Math.sin(cX * Math.PI) * 0.1 + 1
    if (cX >= 2) {
      cX -= 2
      for (const room of rooms) {
        room.x -= 2
        if (room.x + room.w < 0) {
          room.dead = true
        }
      }
    }
    if (lastRoom.x < minRow && frame % 120 === 0) {
      const [w, h] = getDimensions()
      const y = Math.max(2, Math.min(lines - 3 - h,
        lastRoom.y + lastRoom.doorY +
        Math.floor(Math.random() * h - h + 1)
      ))
      lastRoom = {
        color: getColor(),
        x: lastRoom.x + lastRoom.w,
        doorY: Math.floor(Math.random() * h),
        doorAngle: 0,
        doorSpeed: getDoorSpeed(),
        doorTarget: Math.PI / 2,
        name: getRoomName(),
        animated: false,
        targetY: y,
        targetH: h,
        last: lastRoom,
        y,
        w,
        h
      }
      rooms.unshift(lastRoom)
    }
    rooms = rooms.filter(e => !e.dead)
    window.requestAnimationFrame(renderLoop)
  }

  renderLoop()
})
