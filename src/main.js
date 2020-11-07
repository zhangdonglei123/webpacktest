const s = require("./aaa.js")
console.log("main");
const sa = require("./bbb.js")
import Vue from "vue"
import comp1 from './vue/comp1.vue'
// const app = new Vue({
//     el: "#app",
//     // template: '<div>{{message}}阿道夫</div>',
//     // data: {
//     //     "message": "hello"
//     // }
//     template: '<comp1/>',
//     components: {
//         comp1
//     }
// })
/*5 */
const app = new Vue({
    el: "#app",
    // template: '<div>{{message}}阿道夫</div>',
    // data: {
    //     "message": "hello"
    // }
    template: '<comp1/>',
    components: {
        comp1
    }
})