+++
title = "Learning Rust"
description = "Useful resources for learning Rust"
date = 2022-06-11
template = "page.html"
+++

# Learning Rust

Rust is my favorite language. From the compiler to Traits, cargo to docs
that live alongside your code, it's got a lot to offer. It's also very portable.
There are compilers for Windows, Linux, Mac, Web Assembly, and ARM
chips. So from the web to microcontrollers to everything in-between, you
can create applications for it using Rust. But the thing I love the most
about Rust is it assumes I'm a bad programmer. Which I am. If I try to
access a variable across threads that is not of a thread-safe type, it
tells me. If I make a function call that could error out, it makes sure
I handle that error(with a convenient ? for rapid prototyping). Mainly
where other languages assume you know what you are doing, Rust tells you
what you don't know. And I love that. However, these capabilities come
with a learning curve. This short post is to provide links to the
material I've found the most helpful in learning Rust!

## The Rust Book 
[The Rust Book](https://doc.rust-lang.org/book/) is the best place to
start. It walks a user through Rust, what it's capable of, and how to
use it. When I walked through the book, I read it at a high level first
and then typed up each example with a Dockerfile so I knew how to use it
with Docker. That was overkill. Looking back, I think the book is great
at highlighting Rust and a good place to understand the syntax. But
after you've read through it at least once and you start to think "OK, I kind of get where they are going with this..." I would
move on to the following resources. 

## Tim McNamara's Rust in Action
[Rust in Action](https://www.manning.com/books/rust-in-action) by Tim
McNamara is a great follow up to the rust book. I had been playing
around with Rust for about 6 months before his book was released and
ended up relearning the languages and walking back some bad habits I had
developed between reading the Rust book and Tim's book. To me it was an
easy read and the coding examples were helpful and easy to follow(That
isn't to say they were simple, there was still a good deal of thought required for each example but the
code was clean and short). Tim
also points out helpful crates such as clap and serde. 

## Jon Gjengset Video's and Book(Rust for Rustaceans)
[Jon Gjengset's videos](https://www.youtube.com/c/JonGjengset/about)
have been the most helpful to me in teaching me how to think and problem
solve in Rust. [Rust for
Rustaceans](https://nostarch.com/rust-rustaceans) is a good follow up
and even companion to the video but the videos honestly have been the
most helpful. The book is still great, it's my second favorite tool for
learning Rust. I just think the videos are what suits my learning style
best. In both the videos and the book, Jon walks through topics in Rust, starting at a highly
level and ending at the bare bones of it all. This all happens in a very
clear step-wise style that I have adopted for programming my own apps.

## The Docs 
[docs.rs](https://docs.rs) contains the documents for all crates on
cargo. One of the things I have adopted from Jon's workflow is going to
the docs for a crate and just reading around. This has been the most helpful in understanding a crates functionality and API.

## Conclusion 
Hopefully this information helps anyone new to Rust! Please leave a
comment if any of this was useful to you or if you have any other helpfully
resources for learning Rust!
