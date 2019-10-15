// If you want to load @mdi/font locally instead of using CDN in index.html, uncomment below:
// import '@mdi/font/css/materialdesignicons.css'

import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'
import '../scss/global.scss'

Vue.use(Vuetify, { iconfont: 'mdi' })
