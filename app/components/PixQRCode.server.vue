<template>
  <div
    class="w-48 h-48 mx-auto qrcode"
    v-html="qrCodeSvg"
  ></div>
</template>

<script setup lang="ts">
interface Props {
  merchantName: string
  merchantCity: string
  pixKey: string
  transactionAmount?: number
}

const props = defineProps<Props>()

const generatePixQR = async () => {
  const { createStaticPix } = await import('pix-utils')

  const pixData: any = {
    merchantName: props.merchantName,
    merchantCity: props.merchantCity,
    pixKey: props.pixKey,
  }

  if (props.transactionAmount && props.transactionAmount > 0) {
    pixData.transactionAmount = props.transactionAmount
  }

  const pix = createStaticPix(pixData)
  const brCode = pix.toBRCode()

  const QRCode = await import('qrcode')
  const qrData = QRCode.create(brCode, { 
    errorCorrectionLevel: 'M',
    margin: 1,
    width: 192
  })
  
  const cellSize = 10
  const size = qrData.modules.size
  const width = size * cellSize
  
  let svgContent = `<svg width="192" height="192" viewBox="0 0 ${width} ${width}" xmlns="http://www.w3.org/2000/svg">`
  svgContent += `<rect width="${width}" height="${width}" fill="white"/>`
  
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      if (qrData.modules.get(x, y)) {
        const rectX = x * cellSize
        const rectY = y * cellSize
        svgContent += `<rect
          class="qr-module"
          x="${rectX}"
          y="${rectY}"
          width="11"
          height="11"
          fill="black"
          style="animation-duration: ${(Math.random() * 3 + 0.5).toFixed(2)}s;animation-delay: -${(Math.random() + 0.5).toFixed(2)}s"
        />`
      }
    }
  }
  
  svgContent += '</svg>'
  return svgContent
}

const qrCodeSvg = await generatePixQR()
</script>

<style>
@keyframes qr-build {
  0%, 90% {
    opacity: 0;
    transform: scale(2);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.qrcode {
  width: 192px;
  height: 192px;
}

.qr-module {
  animation: qr-build 0.1s ease-out forwards 2;
  transform-origin: center;
}
</style>
