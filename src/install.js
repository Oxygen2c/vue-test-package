import HelloWorld from "./components/HelloWorld.vue";

// const HelloWorldSimple = {
//   install(Vue) {
//     // Let's register our component globally
//     // https://vuejs.org/v2/guide/components-registration.html
//     console.log("installed", Vue, HelloWorld);
//     Vue.component("hello-world", HelloWorld);
//   },
// };

// // Automatic installation if Vue has been added to the global scope.
// if (typeof window !== "undefined" && window.Vue) {
//   console.log(111111);
//   window.Vue.use(HelloWorldSimple);
// }

export { HelloWorld };
