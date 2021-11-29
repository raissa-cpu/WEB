<template>
  <!-- App.vue -->

  <v-app>
    <v-system-bar window yellow app>
      <v-icon>mdi-message</v-icon>
      <span>23 unread messages</span>
      <v-spacer></v-spacer>
      <v-icon>mdi-minus</v-icon>
      <v-icon>mdi-checkbox-blank-outline</v-icon>
      <v-icon>mdi-close</v-icon>
    </v-system-bar>

    <v-app-bar app color="deep-purple accent-4" dense dark>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>LIFE</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-account</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-camera-image</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-file-document</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-camera-outline</v-icon>
      </v-btn>

      <v-menu left bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item v-for="n in 5" :key="n" @click="() => {}">
            <v-list-item-title>Option {{ n }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

    <div class="ma-12 pa-12">
      <v-card>
        <v-navigation-drawer app permanent expand-on-hover>
          <v-list>
            <v-list-item class="px-2">
              <v-list-item-avatar>
                <v-img
                  src="data:image/jpeg;base64,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"
                ></v-img>
              </v-list-item-avatar>
            </v-list-item>

            <v-list-item link>
              <v-list-item-content>
                <v-list-item-title class="text-h6">
                  Raissa Miranda 
                </v-list-item-title>
                <v-list-item-subtitle
                  >raissaliramiranda@hotmail.com</v-list-item-subtitle
                >
              </v-list-item-content>
            </v-list-item>
          </v-list>

          <v-divider></v-divider>

          <v-list nav dense>
            <v-list-item link>
              <v-list-item-icon>
                <v-icon>mdi-folder</v-icon>
              </v-list-item-icon>
              <v-list-item-title>My Files</v-list-item-title>
            </v-list-item>
            <v-list-item link>
              <v-list-item-icon>
                <v-icon>mdi-account-multiple</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Shared with me</v-list-item-title>
            </v-list-item>
            <v-list-item link>
              <v-list-item-icon>
                <v-icon>mdi-star</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Starred</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-navigation-drawer>
      </v-card>
    </div>

    <!-- Sizes your content based upon application components -->
    <v-main>
      <!-- Provides the application the proper gutter -->
      <v-container app fluid>
        <v-parallax
          height="600"
          src="https://media-cdn.tripadvisor.com/media/photo-s/01/4f/2d/ac/bonita-springs.jpg"
        ></v-parallax>
      </v-container>
    </v-main>

    <v-footer app dark padless>
      <v-card class="flex" flat tile>
        <v-card-title class="teal">
          <strong class="subheading"
            >Para mais informações @raii_mira</strong
          >

          <v-spacer></v-spacer>

          <v-btn v-for="icon in icons" :key="icon" class="mx-4" dark icon>
            <v-icon size="24px">
              {{ icon }}
            </v-icon>
          </v-btn>
        </v-card-title>

        <v-card-text class="py-2 white--text text-center">
          {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
        </v-card-text>
      </v-card>
    </v-footer>

    <v-bottom-navigation app v-model="value" :background-color="color" dark shift>
      <v-btn>
        <span>Video</span>

        <v-icon>mdi-television-play</v-icon>
      </v-btn>

      <v-btn>
        <span>Music</span>

        <v-icon>mdi-music-note</v-icon>
      </v-btn>

      <v-btn>
        <span>Book</span>

        <v-icon>mdi-book</v-icon>
      </v-btn>

      <v-btn>
        <span>Image</span>

        <v-icon>mdi-image</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},

  data: () => ({
    value: 1,
    icons: ["mdi-facebook", "mdi-linkedin", "mdi-instagram"],
    collapseOnScroll: true,
    items: [
      ["mdi-email", "Inbox"],
      ["mdi-account-supervisor-circle", "Supervisors"],
      ["mdi-clock-start", "Clock-in"],
    ],
  }),

  computed: {
    color() {
      switch (this.value) {
        case 0:
          return "pink";
        case 1:
          return "pink";
        case 2:
          return "pink";
        case 3:
          return "pink";
        default:
          return "pink";
      }
    },
  },
};
</script>
