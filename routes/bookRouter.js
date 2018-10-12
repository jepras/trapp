var express = require('express')
var Book = require('../models/bookModel')

const bookRouter = express.Router();

bookRouter.route('/')
    .get((req, res) => {
        Book.find({}, (err, books) => {
            res.json(books)
        })  
    })
    .post((req, res) => {
        let book = new Book(req.body);
        book.save();
        res.status(201).send(book);
        console.log(req.body)
    })
    .put((req,res) => {
        Book.findById(req.params.bookId, (err, book) => {
            book.title = req.body.title;
            book.author = req.body.author;
            book.save()
            res.json(book)
        }) 
    })
    .patch((req,res)=>{
        Book.findById(req.params.bookId, (err, book) => {
            if(req.body._id){
                delete req.body._id;
            }
            for( let b in req.body ){
                book[b] = req.body[b];
            }
            book.save();
            res.json(book);
        })
    })
    .delete((req,res)=>{
        Book.findById(req.params.bookId, (err, book) => {
            book.remove(err => {
                if(err){
                    res.status(500).send(err)
                }
                else{
                    res.status(204).send('removed')
                }
            })
        })
    })

    bookRouter.route('/:bookId')
    .get((req, res) => {
        res.json(req.book)
    }) // end get Books/:bookId 
    .put((req,res) => {
        req.book.title = req.body.title;
        req.book.author = req.body.author;
        req.book.save()
        res.json(req.book)
    })
    .patch((req,res)=>{
        if(req.body._id){
            delete req.body._id;
        }
        for( let p in req.body ){
            req.book[p] = req.body[p]
        }
        req.book.save()
        res.json(req.book)
    })//patch
    .delete((req,res)=>{
        req.book.remove(err => {
            if(err){
                res.status(500).send(err)
            }
            else{
                res.status(204).send('removed')
            }
        })
    })//delete

module.exports = bookRouter;
