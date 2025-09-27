<template>
  <div class="flex items-center justify-center p-6 pt-12">
    <div class="max-w-md w-full">
      <h1 class="text-xl text-center text-gray-100">Mande um Pix!</h1>
      <div class="bg-gray-800 rounded-2xl p-8 shadow-2xl border border-gray-700">
        <div class="relative mb-6">
          <div class="bg-white rounded-xl p-6 mx-auto w-fit relative overflow-hidden">
            <PixQRCode 
              :merchantName="merchantName"
              :merchantCity="merchantCity"
              :pixKey="pixKey"
              :transactionAmount="transactionAmount"
            />
          </div>
        </div>

        <div class="space-y-4 text-center">
          <div class="bg-gray-700 rounded-lg p-4 border border-gray-600 cursor-pointer hover:bg-gray-600" @click="copyPixKey">
            <p class="text-gray-300 text-sm mb-1">{{ pixKeyStatus }}</p>
            <p class="text-white font-semibold">{{ pixKey }}</p>
          </div>

          <div class="bg-gray-700 rounded-lg p-4 border border-gray-600">
            <p class="text-gray-300 text-sm mb-1">Titular</p>
            <p class="text-white font-semibold">{{ merchantName }}</p>
          </div>

          <div
            v-if="transactionAmount && transactionAmount > 0"
            class="bg-gray-700 rounded-lg p-4 border border-gray-500"
          >
            <p class="text-gray-300 text-sm mb-1">Valor</p>
            <p class="text-gray-100 font-bold text-2xl">
              {{ formatCurrency(transactionAmount) }}
            </p>
          </div>
        </div>

        <div class="mt-6 text-center">
          <button
            @click="copyToClipboard(brCode)"
            class="bg-gray-600 hover:bg-gray-500 text-white px-6 py-3 rounded-lg flex items-center gap-2 mx-auto border border-gray-500 hover:border-gray-400 font-medium shadow-lg hover:shadow-xl cursor-pointer"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
            </svg>
            <span :class="isBrCodeCopied ? 'text-gray-200' : ''">
              {{ copyButtonText }}
            </span>
          </button>
        </div>
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

const copyButtonText = ref('Copiar código Pix')
const pixKeyStatus = ref('Chave Pix')
const isPixKeyCopied = ref(false)
const isBrCodeCopied = ref(false)

const generateBRCode = async () => {
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
  return pix.toBRCode()
}

const brCode = await generateBRCode()

const copyPixKey = async () => {
  try {
    await navigator.clipboard.writeText(props.pixKey)
    
    isPixKeyCopied.value = true
    pixKeyStatus.value = 'Chave Pix copiada!'
    
    setTimeout(() => {
      isPixKeyCopied.value = false
      pixKeyStatus.value = 'Chave Pix'
    }, 2000)
  } catch (error) {
    console.error('Error copying to clipboard:', error)
    
    isPixKeyCopied.value = true
    pixKeyStatus.value = 'Erro ao copiar'
    
    setTimeout(() => {
      isPixKeyCopied.value = false
      pixKeyStatus.value = 'Chave Pix'
    }, 2000)
  }
}

const copyToClipboard = async (text: string) => {
  try {
    await navigator.clipboard.writeText(text)
    
    isBrCodeCopied.value = true
    copyButtonText.value = 'Código Pix copiado!'
    
    setTimeout(() => {
      isBrCodeCopied.value = false
      copyButtonText.value = 'Copiar código Pix'
    }, 2000)
  } catch (error) {
    console.error('Error copying to clipboard:', error)
    
    isBrCodeCopied.value = true
    copyButtonText.value = 'Erro ao copiar'
    
    setTimeout(() => {
      isBrCodeCopied.value = false
      copyButtonText.value = 'Copiar código Pix'
    }, 2000)
  }
}

const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(amount)
}

useHead({
  title: `Pix para ${props.merchantName}`,
  meta: [
    { name: 'description', content: `Endereço PIX de ${props.merchantName}` }
  ]
})
</script>
