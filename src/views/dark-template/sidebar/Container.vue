<template>
  <v-card
    color="grey darken-3"
    dark
  >
    <v-card-text>
      <avatar class="text-xs-center" />
      <div class="text-xs-center mb-4 mt-3">
        <h1>
          Ryan <span class="light-blue--text text--lighten-3">Cwynar</span>
        </h1>
        <h3>
          Software Engineer
        </h3>
      </div>

      <sidebar-section :options="sections.info" />
      <sidebar-section :options="sections.socials" />
    </v-card-text>
  </v-card>
</template>

<script>
import Avatar from '@/views/dark-template/sidebar/Avatar'
import SidebarSection from '@/views/dark-template/sidebar/Section'
import { abouts, titles } from '@/content/resume.json'
export default {
  name      : 'Sidebar',
  components: { SidebarSection, Avatar },
  data () {
    return {
      sections: {
        info: {
          title: titles.info,
          items: abouts.details,
        },
        socials: {
          title: titles.socials,
          items: abouts.socials,
        },
      },
    }
  },
}
</script>

<style lang="scss" scoped>
h1{
  font-size: 48px;
  letter-spacing: -0.08ch;
  text-transform: uppercase;
}
.sidebar{
    background: #2e2e2e;
}
</style>
