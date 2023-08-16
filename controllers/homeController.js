const getHomePage = (req, res) => {
  res.render('home', { title: 'Resume' })
}

module.exports = {
  getHomePage
}
