const express = require('express')
const mongoose = require('mongoose')
const articleRouter = require('./routes/articles')
const app = express()

mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true, useUnifiedTopology: true})


app.set('view engine', 'ejs')


app.use(express.urlencoded({extended: false}))

app.get('/', (req, res) => {
    const articles = [{
        title: 'test',
        createdAt: new Date(),
        desctiption: 'test description'
    },
    {
        title: 'test 1',
        createdAt: new Date(),
        desctiption: 'test description 1'
    }]
    res.render('articles/index', { articles: articles })
})

app.listen(8080)
console.log(`listening on port: ${8080}`)

app.use('/articles', articleRouter)