const cors = require('cors')
const express = require('express')
const app = express()
const port = 3000

app.use(express.json())
app.use(cors())
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

// const getNews = [
//     'Economy in the world',
//     'Soccer league',
//     'Ucraine war',
//     'Pets world'
// ]

    const getNews = [
    {
      id: 1,
      topic: 'Movies',
      category: 'meals',
      image: '~/app/assets/movies.png',
      description: `Watch movies online with Movies Anywhere. Stream movies from Disney, Fox, Sony, Universal, and Warner Bros.`,
      details: [
        {
          user: 'Juanito Gutierrez',
          comment: 'Trey Parker, Robert Lopez, and Matt Stone',
          avatar: '~/app/assets/user.png',
        },
        {
          user: 'Jhon Doe',
          comment: 'March 2011 after nearly seven years of development.',
          avatar: '~/app/assets/user.png',
        },
        {
          user: 'Marianna Garay',
          comment: 'Grossed over $500 million, making it one of the most successful musicals of all time.',
          avatar: '~/app/assets/user.png',
        },
        {
          user: 'Justin Cupe',
          comment: 'The Book of Mormon was conceived by Trey Parker, Matt Stone, and Robert Lopez. Parker and Stone grew up in Colorado and were familiar with The Church of Jesus Christ of Latter-day Saints and its members. They became friends at the University of Colorado Boulder and collaborated on a musical film, Cannibal! The Musical (1993), their first experience with movie musicals. In 1997, they created the TV series South Park for Comedy Central and in 1999, the musical film South Park: Bigger, Longer & Uncut. The two had first thought of a fictionalized Joseph Smith, religious leader and founder of the Latter Day Saint movement while working on an aborted Fox series about historical characters. Their 1997 film, Orgazmo, and a 2003 episode of South Park, "All About Mormons", both gave comic treatment to Mormonism. Smith was also included as one of South Park\'s "Super Best Friends", a Justice League parody team of religious figures like Jesus and Buddha.',
          avatar: '~/app/assets/user.png',
        },
        {
          user: 'Jhonny Cox',
          comment: `During the summer of 2003, Parker and Stone flew to New York City to discuss the script of their new film, Team America: World Police, with friend and producer Scott Rudin (who also produced South Park: Bigger, Longer & Uncut). Rudin advised the duo to see the musical Avenue Q on Broadway, finding the cast of marionettes in Team America similar to the puppets of Avenue Q. Parker and Stone went to see the production during that summer and the writer-composers of Avenue Q, Lopez, and Jeff Marx, noticed them in the audience and introduced themselves. Lopez revealed that South Park: Bigger, Longer & Uncut was highly influential in the creation of Avenue Q. The quartet went for drinks afterward and soon found that each camp wanted to write something involving Joseph Smith. The four began working out details nearly immediately, with the idea to create a modern story formulated early on. For research purposes, the quartet took a road trip to Salt Lake City where they "interviewed a bunch of missionaries—or ex-missionaries." They had to work around Parker and Stone\'s South Park schedule. In 2006, Parker and Stone flew to London where they spent three weeks with Lopez, who was working on the West End production of Avenue Q. There, the three wrote "four or five songs" and came up with the basic idea of the story. After an argument between Parker and Marx, who felt he was not getting enough creative control, Marx was separated from the project.[10] For the next few years, the remaining trio met frequently to develop what they initially called The Book of Mormon: The Musical of the Church of Jesus Christ of Latter-day Saints. "There was a lot of hopping back and forth between L.A. and New York," Parker recalled.`,
          avatar: '~/app/assets/user.png',
        }
      ]
    },
    {
      id: 2,
      topic: 'Hotels',
      category: 'meals',
      image: '~/app/assets/hotels.png',
      description: `Great savings on hotels in Cochabamba, Bolivia online. Good availability and great rates.`,
      details: [
        {
          user: 'Music and Lyrics',
          comment: 'Eddie Perfect',
          avatar: '~/app/assets/user.png',
        },
        {
          user: 'Book by',
          comment: 'Scott Brown and Anthony King',
          avatar: '~/app/assets/user.png',
        },
        {
          user: 'Based on',
          comment: 'A 1988 film of the same name.',
          avatar: '~/app/assets/user.png',
        },
        {
          user: 'First showing on Broadway',
          comment: 'April 25, 2019',
          avatar: '~/app/assets/user.png',
        },
        {
          user: 'Background',
          comment: `In 2016, a musical adaptation of the 1988 film Beetlejuice (directed by Tim Burton and starring Geena Davis as Barbara Maitland, Alec Baldwin as Adam Maitland, Winona Ryder as Lydia Deetz and Michael Keaton as Betelgeuse) was reported to be in the works, directed by Alex Timbers and produced by Warner Bros., following a reading with Christopher Fitzgerald in the title role. In March 2017, it was reported that Australian musical comedian Eddie Perfect would be writing the music and lyrics and Scott Brown and Anthony King would be writing the book of the musical and that another reading would take place in May, featuring Kris Kukul as musical director. The musical has had three readings and two laboratory workshops with Alex Brightman in the title role, Sophia Anne Caruso as Lydia Deetz, Kerry Butler and Rob McClure as Barbara and Adam Maitland.`,
          avatar: '~/app/assets/user.png',
        }
      ]
    },
    {
      id: 3,
      topic: 'Parties',
      category: 'meals',
      image: '~/app/assets/parties.png',
      description: `Great places to fulfill your own party, and enjoy with your friends.`,
      details: [
        {
          user: 'Music and Lyrics',
          comment: 'Eddie Perfect',
          avatar: '~/app/assets/user.png',
        },
        {
          user: 'Book by',
          comment: 'Scott Brown and Anthony King',
          avatar: '~/app/assets/user.png',
        },
        {
          user: 'Based on',
          comment: 'A 1988 film of the same name.',
          avatar: '~/app/assets/user.png',
        },
        {
          user: 'First showing on Broadway',
          comment: 'April 25, 2019',
          avatar: '~/app/assets/user.png',
        },
        {
          user: 'Background',
          comment: `In 2016, a musical adaptation of the 1988 film Beetlejuice (directed by Tim Burton and starring Geena Davis as Barbara Maitland, Alec Baldwin as Adam Maitland, Winona Ryder as Lydia Deetz and Michael Keaton as Betelgeuse) was reported to be in the works, directed by Alex Timbers and produced by Warner Bros., following a reading with Christopher Fitzgerald in the title role. In March 2017, it was reported that Australian musical comedian Eddie Perfect would be writing the music and lyrics and Scott Brown and Anthony King would be writing the book of the musical and that another reading would take place in May, featuring Kris Kukul as musical director. The musical has had three readings and two laboratory workshops with Alex Brightman in the title role, Sophia Anne Caruso as Lydia Deetz, Kerry Butler and Rob McClure as Barbara and Adam Maitland.`,
          avatar: '~/app/assets/user.png',
        }
      ]
    },
    {
      id: 4,
      topic: 'Food',
      category: 'meals',
      image: '~/app/assets/food.png',
      description: `Tasty food and a really cheeper price, come with your relatives to have a great time.`,
      details: [
        {
          user: 'Music and Lyrics',
          comment: 'Eddie Perfect',
          avatar: '~/app/assets/user.png',
        },
        {
          user: 'Book by',
          comment: 'Scott Brown and Anthony King',
          avatar: '~/app/assets/user.png',
        },
        {
          user: 'Based on',
          comment: 'A 1988 film of the same name.',
          avatar: '~/app/assets/user.png',
        },
        {
          user: 'First showing on Broadway',
          comment: 'April 25, 2019',
          avatar: '~/app/assets/user.png',
        },
        {
          user: 'Background',
          comment: `In 2016, a musical adaptation of the 1988 film Beetlejuice (directed by Tim Burton and starring Geena Davis as Barbara Maitland, Alec Baldwin as Adam Maitland, Winona Ryder as Lydia Deetz and Michael Keaton as Betelgeuse) was reported to be in the works, directed by Alex Timbers and produced by Warner Bros., following a reading with Christopher Fitzgerald in the title role. In March 2017, it was reported that Australian musical comedian Eddie Perfect would be writing the music and lyrics and Scott Brown and Anthony King would be writing the book of the musical and that another reading would take place in May, featuring Kris Kukul as musical director. The musical has had three readings and two laboratory workshops with Alex Brightman in the title role, Sophia Anne Caruso as Lydia Deetz, Kerry Butler and Rob McClure as Barbara and Adam Maitland.`,
          avatar: '~/app/assets/user.png',
        }
      ]
    }
  ]

app.get('/getAll', (req, res) => {
  res.json(getNews);
})

app.get('/get', (req, res) => {
  res.json(getNews.filter(c => c.topic.toLowerCase().indexOf(req.query.q.toString().toLowerCase())> -1))
})

const favorites = []

app.get('/fav', (req, res) => {
  res.json(favorites)
})
app.post('/fav', (req, res) => {
    console.log(req.body);
    favorites.push(req.body.newone)
    res.json(favorites)
})


