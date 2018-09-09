import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>My name is Suhas Mallesh and I am a Web Developer👨🏻‍💻 | Travel Freak ✈️ | Foodie 😋</p>
    <p>Vist my <a href="https://github.com/suhasm1990">Github</a> to view my projects</p>
    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

export default IndexPage
