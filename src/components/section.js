import * as React from "react"
import styled from "styled-components"
import Wave from "./wave"

const SectionGroup = styled.div`
    position: relative;
    background: url(${props => props.image});
    background-size: cover;
    height: 900px;
    display: grid;
    grid-template-rows: 300px auto;
    grid-gap: 20px;

    @media (max-width: 640px) {
        height: 860px;
    }
`
const SectionLogo = styled.img`
    align-self: end;
    width: 128px;
    margin: 0 auto;

`
const SectionTitleGroup = styled.div`
    display: grid;
    grid-template-columns: 300px auto;
    grid-template-rows: auto 100%;
    margin: 0 40px;
    grid: 20px;

    @media (max-width: 720px) {
        grid-template-columns: 1fr;
    }

`
const SectionTitle = styled.h3`
    color: #FFFFFF;
    font-size: 60px;
    margin: 0;
    lineheight: 1.2;

    @media (max-width: 720px) {
        font-size: 40px;
    }

`
const SectionText = styled.p`
    color: #FFFFFF;

`

const WaveTop = styled.div`
    position: absolute;
    width: 100%;
    top: -6px;
    transform: rotate(180deg)
`

const WaveBottom = styled.div`
    position: absolute;
    width: 100%;
    bottom: -6px;
`

const Section = props => (
    <SectionGroup image={props.image}>
        <WaveTop><Wave /></WaveTop>
        <WaveBottom><Wave /></WaveBottom>
        <SectionLogo src={props.logo} />
        <SectionTitleGroup>
            <SectionTitle>{props.title}</SectionTitle>
            <SectionText>{props.text}</SectionText>
        </SectionTitleGroup>
    </SectionGroup>
)
export default Section

