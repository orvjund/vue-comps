<template>
  <div class="result-item">
    <span class="item-id">{{ id }}</span>
    <span class="item-name">{{ name }}</span>
    <span class="item-price">${{ price }}</span>
  </div>
</template>

<script>
export default {
  name: 'SearchItemProduct',
  props: {
    id: {
      type: Number,
      default: () => 0,
    },
    name: {
      type: String,
      default: () => '',
    },
    price: {
      type: Number,
      default: () => 0,
    },
  },
};
</script>

<style scoped>
.result-item {
  display: grid;
  grid-template-columns: 25px 1fr 60px;
  line-height: 25px;
  height: 25px;
  padding: 4px 6px;
  border-radius: 3px;
  margin: 3px;
  cursor: pointer;
}
.result-item:hover {
  background-color: rgba(116, 185, 255,0.4);
}
.item-id {
  text-align: center;
}
.item-name {
  text-align: left;
  font-weight: bold;
}
.item-price {
  text-align: right;
}
</style>
