const fakeAuth = {
    isAuthenticated: false,
    authenticate(cb) {
      this.isAuthenticated = true
      setTimeout(cb, 100)
    },
    signout(cb) {
      this.isAuthenticated = false
      document.cookie = "cookiename= ; expires = Thu, 01 Jan 1970 00:00:00 GMT"
      console.log("success");
      setTimeout(cb, 100)
    }
  }


  export default fakeAuth; 