<template>
  <div class="row justify-center window-width q-pa-xl">
    <div class="col-3">
      <q-list bordered padding class="rounded-borders text-primary">
      	<div v-for="item in items" :key="item.name">
          <q-item
          clickable
          v-ripple
          :active="link === 'inbox'"
          @click="link = 'inbox'"
          active-class="my-menu-link"
          >
          <q-item-section avatar>
            <q-icon name="inbox" />
          </q-item-section>

          <q-item-section> {{item.name}} </q-item-section>
        </q-item>
        </div>
    </q-list>
    </div>
    <div class="col content-municipio"></div>
  </div>
</template>
<style type="scss">
  .content-municipio{
    width: 100%;
    border: solid 0.09px;
    border-color: #2DAAE1;
  }
</style>
<script>
export default{
  data () {
    return {
      items: [
        {
          name: 'Tigre'
        },
        {
          name: 'Santiago'
        },
        {
          name: 'Cordoba'
        },
      ]
    }
  }
}
</script>