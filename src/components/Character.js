// Write your Character component here
import React from 'react';
import styled from 'styled-components';

const StyledCharacter = styled.div`
    color: white;
    background: black;
    opacity: 0.65;
    padding: 10px;
    width: 40%;
    margin: 2px auto;
    border-radius: 7px;
    &:hover{
        background: red;
    }
    font-size: 1.5em;
`

export default function Character({characters}){

    return(  
        <StyledCharacter>
           {characters.name}
        </StyledCharacter> 
    );
};