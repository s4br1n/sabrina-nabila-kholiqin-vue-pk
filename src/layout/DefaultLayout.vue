<template>
  <div>
    <v-app-bar app color="black" dark>
      <div class="d-flex align-center">
        <v-img
          class="shrink mr-2"
          contain
          src="../assets/icon.svg"
          transition="scale-transition"
          width="80"
        />
      </div>

      <v-spacer></v-spacer>

      <!-- Tampilkan v-btn hanya jika ukuran layar desktop -->
      <v-btn v-if="!isMobile" href="/" text>
        <v-icon>mdi-home-outline</v-icon>
        <span class="ml-2">Home</span>
      </v-btn>
      <v-btn v-if="!isMobile" href="/character" text>
        <v-icon>mdi-flash</v-icon>
        <span class="ml-2">Character</span>
      </v-btn>
      
      <!-- Tampilkan v-menu saat tombol tiga garis di klik -->
      <v-menu v-if="isMobile" offset-y>
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>
        
        <v-list>
          <v-list-item to="/" @click="closeDrawer">
            <v-icon>mdi-home-outline</v-icon>
            <v-list-item-title class="ml-2">Home</v-list-item-title>
          </v-list-item>

          <v-list-item to="/character" @click="closeDrawer">
            <v-icon>mdi-flash</v-icon>
            <v-list-item-title class="ml-2">Character</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "DefaultLayout",
  data() {
    return {
      drawer: false,
      group: null,
      windowWidth: window.innerWidth,
    };
  },
  computed: {
    isMobile() {
      return this.windowWidth <= 960; // Atur ukuran sesuai kebutuhan
    },
  },
  created() {
    window.addEventListener("resize", this.handleResize);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    handleResize() {
      this.windowWidth = window.innerWidth;
    },
    closeDrawer() {
      this.drawer = false;
    },
  },
};
</script>
