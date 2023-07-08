import { styled } from "styled-components";

export const GoogleTranslateElement = styled.div`
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  
  > div:first-child > div {
    border-radius: 5px;
    background-color: gray;
    
    > img {
      display: none;
    }    
    
    > span > a > span {
      color: white !important;
    }
   }
`