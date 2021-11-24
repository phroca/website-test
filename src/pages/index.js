import * as React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Card from "../components/card"
import Section from "../components/section"
import Wave from "../components/wave"
import Cell from "../components/cell"

import wallpaper from "../images/wallpaper.jpg"
import wallpaper2 from "../images/wallpaper2.jpg"
import wallpaper3 from "../images/wallpaper3.jpg"
import wallpaper4 from "../images/wallpaper4.jpg"
import logoreact from "../images/logo-react.png"

import staticdata from "../../staticdata.json"

const SectionCaption = styled.p`
  font-weight: 600;
  font-size: 18px;
  text-transform: uppercase;
  color: #94A4BA;
  text-align: center;
`

const SectionCellGroup = styled.div`
  max-width: 800px;
  margin: 0 auto 100px;
  padding: 0 20px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 20px;

  @media (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

const IndexPage = () => (
  <Layout>
    <Seo title="home" />
    <div className="hero">
      <div className="hero-group">
        <h1>Discover The <br /> Fable of Etheria</h1>
        <p>Choose your side between the Fundation & The Alliance.</p>
        <p>Upgrace your status and be the main character of your own story.</p> 
        <a href="">Watch the video</a>
        <Wave/>
      </div>
    </div>
    <div className="cards">
      <h2>The stories of Etheria</h2>
      <div className="card-group">
        <Card 
        title="The story of Etheria" 
        text="let the story begins"
        image={wallpaper}
        />
        <Card 
        title="Central : the place where all begins" 
        text="more on Central"
        image={wallpaper2}
        />
        <Card 
        title="The Factions" 
        text="more about the factions"
        image={wallpaper3}
        />
        <Card 
        title="The war" 
        text="more about the war"
        image={wallpaper4}
        />
      </div>
    </div>

    <Section 
      image={wallpaper4}
      logo={logoreact}
      title="The capital"
      text="it is said here that our destiny is played out at birth. The people of the upper town known as the upside have the sole purpose of integrating and serving the interests of the foundation to climb the ranks and gain access to the technology and powers that go with it. In the lower town that we call downtown everything is only toxic fumes and dust here we fight every day for its survival but for some time a rumor has been running about an alliance ready to do anything to overthrow the established power and make its voice heard. of renewal."
    />


    <SectionCaption>12 sections - 6 hours</SectionCaption>
    <SectionCellGroup>
      {staticdata.cells.map(cell => (
        <Cell title={cell.title} image={cell.image} />
      ))}
    </SectionCellGroup>
  </Layout>
)

export default IndexPage
