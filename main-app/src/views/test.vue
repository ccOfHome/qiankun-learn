<template>
    <RecycleScroller
    class="scroller"
    :items="list"
    :item-size="32"
    key-field="id"
    v-slot="{ item }"
  >
    <div class="user" @click="clickItem(item)">
      {{ item.label }}
    </div>
  </RecycleScroller>
</template>

<script>
export default {
  name: 'Test',
  data() {
    return {
      list:[]
    }
  },
  mounted() {
    let arr = []
    for(let i = 0; i < 5000; i++) {
        arr.push({
            id: i,
            label: `virtual-list ${i}`
        })
        
    }
    this.list = arr
  },
  methods: {
    clickItem(item) {
      console.log(item)
    }
  }
}
</script>

<style scoped>
.scroller {
  width: 100%;
  height: 200px;
  overflow-y: scroll;
}

.user {
  height: 32px;
  padding: 0 12px;
  display: flex;
  align-items: center;
  border: 1px solid #222;
}