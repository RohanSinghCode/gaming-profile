import Vue from 'vue'
import Vuetify from 'vuetify'
import { VCol, VRow, VApp } from 'vuetify/lib'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify, {
    components: {
        VApp,
        VCol,
        VRow
    }
})

const opts = {}

export default new Vuetify(opts)