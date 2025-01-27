import React from 'react'

import Layout from '../components2/Layout/Layout'
import { Link } from 'react-router-dom'
import "./../styles/HomeStyles.css"
import Banner from "../Images/banner.jpeg";

const Home = () => {
  return (

    <Layout>

      <div className="home" style = {{backgroundImage : `url(${Banner})` }}  >
        <div className="headerContainer">
          <h1>Food Websites</h1>
          <h1>Best Food In India</h1>
          <Link to = "/menu">
            <button>Order now </button>
          </Link>
        </div>
      </div>

    </Layout>
  )
}

export default Home
