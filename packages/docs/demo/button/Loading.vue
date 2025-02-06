<template>
  <div>
    <base-button type="primary" loading>Loading</base-button>
    <base-button type="primary" loading-icon="circle-notch" loading
      >Loading</base-button
    >
    <base-button type="primary" loading>
      <template #loading>
        <er-icon style="margin-right: 6px" icon="star" spin />
      </template>
      Loading
    </base-button>
  </div>
</template>
