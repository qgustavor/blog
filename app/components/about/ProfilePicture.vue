<script setup lang="ts">
const { profile } = useAppConfig()
</script>

<template>
  <div class="flex justify-center">
    <SpotlightCard
      mode="after"
      from="rgba(255,255,255,0.1)"
      :size="400"
      class="group hidden w-64 rounded-2xl border border-white/10 bg-white/5 p-2 pb-4 sm:flex"
    >
      <div class="relative">
        <NuxtImg
          width="256"
          :src="profile.picture"
          class="absolute inset-0 size-64 scale-110 rounded-xl object-cover blur-xl saturate-200 transition-all duration-300 group-hover:blur-[32px]"
          alt="Profile Picture"
          aria-label="Profile Picture"
        />
        <NuxtImg
          width="256"
          :src="profile.picture"
          class="relative size-64 rounded-xl object-cover transition-all duration-300"
          alt="Profile Picture"
          aria-label="Profile Picture"
        />
      </div>
    </SpotlightCard>
    <SpotlightCard
      mode="after"
      from="rgba(255,255,255,0.1)"
      :size="400"
      class="group w-64 rounded-2xl border border-white/10 bg-white/5 p-2 pb-4 sm:hidden"
    >
      <NuxtImg
        width="256"
        :src="profile.picture"
        class="size-64 rounded-xl object-cover transition-all duration-300"
        alt="Profile Picture"
        aria-label="Profile Picture"
      />
    </SpotlightCard>
  </div>
</template>
