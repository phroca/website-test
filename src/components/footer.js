import * as React from "react"
import styled from "styled-components"

const FooterGroup = styled.div`
    background: #F1F3F5;
    padding: 50px 0;
    display: grid;
    grid-gap: 20px;
`

const FooterTitle = styled.h2`
    font-size: 24px;
    font-weight: 600;
    max-width: 550px;
    margin: 0 auto;
`

const Button = styled.button`
    border: none;
    outline: none;
    align-items: center;
    color: #FFFFFF;
    font-size: 24px;
    background: linear-gradient(93.96deg, #9B51E0 0%, #3436E7 100%);
    box-shadow: 0px 10px 20px rgba(101, 41, 255, 0.15);
    border-radius: 30px;
    padding: 16px 60px;
    font-weight: 600;
    justify-self: center;
    transition: 0.8s;
    &:hover{
        box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.15);
        transform: translateY(-3px);
    }
`

const LinkGroup = styled.div`
    width: 500px;
    margin: 50px auto;
    display: grid;
    grid-template-columns: repeat(2,1fr);
    grid-gap: 10px;

    a {
        transition: 0.8s;
    }
    a:hover{
        color: #000000;
    }
`

const Copyright = styled.div`
color: #486791;
font-size: 16px;
text-align: center;
width: 550px:

`

const Footer = ({data,  children}) => (
    <FooterGroup>
        <FooterTitle>Feel free to subscribe to all our Social Networks</FooterTitle>
            <Button>Tweet</Button>
            <LinkGroup>{data.map(edge => (
          <a key={edge.node.id} href={edge.node.url}>{edge.node.title}</a>
        ))}</LinkGroup>
        <Copyright>{children}</Copyright>
    </FooterGroup>
)

export default Footer