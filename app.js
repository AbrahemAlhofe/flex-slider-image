new Vue({
  el : '#slider',
  data : {
    indexActive : 0,
    ImageCount: 6
  },
  mounted () {
    var self = this
    setInterval(function () {
      self.indexActive += 1
      if (self.ImageCount == self.indexActive) {
        self.indexActive = 0
      }
    }, 8000)
  },
  computed : {
    images : function () {
      var array = []
      for (let i = 1; i <= this.ImageCount; i += 1) {
        var obj = {
          url: `image (${i}).jpg`,
          article : "    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }
        array.push(obj)
      }
      return array
    }
  }
})
