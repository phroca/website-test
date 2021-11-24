import * as React from "react"
import styled from "styled-components"

const CellGroup = styled.div`
    display: grid;
    grid-template-columns: 60px auto;
    grid-gap: 25px;
    align-items: center;
    min-width: 320px;
`
const CellImage = styled.div`
    background: #212C4F;
    background-image: url(${props => props.image});
    background-size: 60px;
    width: 60px;
    height: 60px;
    border-radius: 5px;
    
`
const CellTitle = styled.div`
    font-size: 24px;
    border-bottom: 1px solid rgba(0,0,0, 0.1);
    padding: 30px 0;
`



const Cell = props => (
    <CellGroup>
        <CellImage image={props.image}></CellImage>
        <CellTitle>{props.title}</CellTitle>
    </CellGroup>
)

export default Cell