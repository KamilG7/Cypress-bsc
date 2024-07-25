const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://ultimateqa.com/",
    experimentalOriginDependencies: true,
    env: {
      coursesUrl: "https://courses.ultimateqa.com/collections"
    }
  },
})
