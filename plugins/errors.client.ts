export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.config.errorHandler = (error, context) => {
    // ...
    console.log("errorHandler", error, context)
  }
})
