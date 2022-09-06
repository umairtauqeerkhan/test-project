// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.


require.context('../images', true)
import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"
import "bootstrap"
import 'css/site.scss'
import 'css/bootstrap.min.scss'
import 'css/owl.carousel.min.scss'
import 'css/select2.min.scss'
import 'packs/app.min.js'
import 'packs/bootstrap.min.js'
import 'packs/jquery.steller.js'
import 'packs/owl.carousel.min.js'
import 'packs/popper.min.js'
import 'packs/select2.min.js'
document.addEventListener("turbolinks:load", () => {
    $('[data-toggle="tooltip"]').tooltip();
    $('[data-toggle="popover"]').popover()
})
Rails.start()
Turbolinks.start()
ActiveStorage.start()



