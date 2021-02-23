<template>
  <!-- <div id="app"> -->
    <v-app id="inspire">
      <v-navigation-drawer app>
        <a-menu mode="vertical">
          <a-menu-item v-for="item in ListMenu" :key="item.key" @click="ChangePage(item)">
            <v-icon>{{item.icon}}</v-icon>
            <span class="pl-5">{{item.name}}</span>
          </a-menu-item>
        </a-menu>
      </v-navigation-drawer>
        <v-main  class="div_overflow">
          <v-container grid-list-xs>
            <router-view></router-view>
          </v-container>
        </v-main>
    </v-app>
  <!-- </div> -->
</template>
<script>
export default {
  data () {
    return {
      ListMenu: [
        { name: 'หน้าหลัก', icon: 'mdi-home-outline', path: '/' },
        { name: 'จัดเตรียมข้อมูลแบบ', icon: 'mdi-clipboard-list', path: '/page2' },
        { name: 'โอนย้าย', icon: 'mdi-folder-swap-outline', path: '/page3' },
        { name: 'สำรองข้อมูล', icon: 'mdi-backup-restore', path: '/page4' },
        { name: 'ตั้งค่า', icon: 'mdi-cog-outline', path: '/page5' },
        { name: 'เเนะนำการใช้งาน', icon: 'mdi-comment-text-multiple-outline', path: '/page6' },
        { name: 'เกี่ยวกับ', icon: 'mdi-information-outline', path: '/page7' },
        { name: 'อัพเดท', icon: 'mdi-update', path: '/page8' }
      ]
    }
  },
  methods: {
    ChangePage (item) {
      this.$router.push({ path: item.path }).catch({})
    }
  }
}
</script>
<style>
.v-application ul, .v-application ol {
    padding: 0px 0px !important;
}

</style>
