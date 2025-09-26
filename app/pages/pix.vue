<template>
  <div class="flex items-center justify-center p-6 pt-12">
    <div class="max-w-md w-full">
      <!-- QR Code Container -->
      <div class="bg-gray-800 rounded-2xl p-8 shadow-2xl border border-gray-700">
        <!-- QR Code with Animation -->
        <div class="relative mb-6">
          <div class="bg-white rounded-xl p-6 mx-auto w-fit relative overflow-hidden">
            <!-- QR Code SVG -->
            <div
              class="w-48 h-48 mx-auto qrcode"
              v-html="qrCodeSvg"
            ></div>
          </div>
        </div>

        <!-- Pix Details -->
        <div class="space-y-4 text-center">
          <div class="bg-gray-700 rounded-lg p-4" @click="copyToClipboard(pixKey)">
            <p class="text-gray-300 text-sm mb-1">Chave PIX</p>
            <p class="text-white font-mono text-sm break-all">
              {{ pixKey }}
            </p>
          </div>

          <div class="bg-gray-700 rounded-lg p-4">
            <p class="text-gray-300 text-sm mb-1">Titular</p>
            <p class="text-white font-semibold">{{ merchantName }}</p>
          </div>

          <div
            v-if="transactionAmount && transactionAmount > 0"
            class="bg-blue-900 rounded-lg p-4 border border-blue-700"
          >
            <p class="text-blue-300 text-sm mb-1">Valor Sugerido</p>
            <p class="text-blue-400 font-bold text-2xl">
              {{ formatCurrency(transactionAmount) }}
            </p>
          </div>
        </div>

        <!-- Copy QR Code Button -->
        <div class="mt-6 text-center">
          <button
            v-if="brCode"
            @click="copyToClipboard(brCode)"
            class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors flex items-center gap-2 mx-auto"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
            </svg>
            Copiar código PIX
          </button>
        </div>
      </div>

      <!-- Copy Success Message -->
      <div
        v-if="showCopyMessage"
        class="fixed top-4 right-4 bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg transition-all duration-300"
      >
        Copiado para a área de transferência!
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  merchantName?: string
  merchantCity?: string
  pixKey?: string
  transactionAmount?: number
}

const props = withDefaults(defineProps<Props>(), {
  merchantName: 'Gustavo Rodrigues',
  merchantCity: 'Goiânia',
  pixKey: '518e45f1-2bcb-49ef-a30e-fb3095054bed',
  transactionAmount: 0
})

const qrCodeSvg = ref<string | null>(null)
const brCode = ref<string | null>(null)
const showCopyMessage = ref(false)

// Generate PIX QR Code
const generatePixQR = async () => {
  try {
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

    // Get the BR Code (the actual PIX string)
    brCode.value = pix.toBRCode()

    // Generate QR code SVG using a QR library
    const QRCode = await import('qrcode')
    const qrData = QRCode.create(brCode.value, { 
      errorCorrectionLevel: 'M',
      margin: 1,
      width: 192
    })
    
    // Build SVG manually from QR data modules
    const size = qrData.modules.size
    const cellSize = 192 / size
    
    let svgContent = `<svg width="192" height="192" viewBox="0 0 192 192" xmlns="http://www.w3.org/2000/svg">`
    svgContent += `<rect width="192" height="192" fill="white"/>`
    
    // Create individual rectangles for each module
    for (let y = 0; y < size; y++) {
      for (let x = 0; x < size; x++) {
        if (qrData.modules.get(x, y)) {
          const rectX = x * cellSize
          const rectY = y * cellSize
          svgContent += `<rect
            class="qr-module"
            x="${rectX}"
            y="${rectY}"
            width="${cellSize}"
            height="${cellSize}"
            fill="black"
            style="animation-duration: ${(Math.random() * 3 + 0.5).toFixed(2)}s;animation-delay: -${(Math.random() + 0.5).toFixed(2)}s"
          />`
        }
      }
    }
    
    svgContent += '</svg>'
    qrCodeSvg.value = svgContent

  } catch (error) {
    console.error('Error generating PIX QR code:', error)
  }
}

// Copy to clipboard function
const copyToClipboard = async (text: string) => {
  try {
    await navigator.clipboard.writeText(text)
    showCopyMessage.value = true
    setTimeout(() => {
      showCopyMessage.value = false
    }, 2000)
  } catch (error) {
    console.error('Error copying to clipboard:', error)
  }
}

// Format currency in Brazilian Real
const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(amount)
}

// Generate QR code on mount
onMounted(() => {
  generatePixQR()
})

// Set page title for Nuxt
useHead({
  title: `Pix para ${props.merchantName}`,
  meta: [
    { name: 'description', content: `Endereço PIX de ${props.merchantName}` }
  ]
})
</script>

<style>
@keyframes qr-build {
  from {
    opacity: 0;
    transform: rotate(90deg) scale(0.5);
  }
  to {
    opacity: 1;
    transform: rotate(0deg) scale(1);
  }
}

.qrcode {
  width: 192px;
  height: 192px;
}

.qr-module {
  animation: qr-build 0.1s ease-out forwards;
  transform-origin: center;
}
</style>
