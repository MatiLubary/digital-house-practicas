app.get ('/products', function (req, res) {
    res.send(req.query)
})

app.listen(3000)