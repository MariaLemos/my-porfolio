import background from "./assets/bg2.jpg";
import { createGlobalStyle, keyframes } from "styled-components";
const pisca = keyframes`  0%,
100% {
  opacity: 1;
}
50% {
  opacity: 0;
}`;
const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: "Cabin", sans-serif;
  font-style: italic;}
  body {
    margin: 0;
    padding: 0;
    color: #fff;
    font-size: 16px;
    background-image: url(${background});
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    background-repeat: no-repeat;
  }
  a {
    text-decoration: none;
    color: #fff;
    &:hover{
      transform:scale(1.1)
    }
}
h2 {
  font-size: 1.5rem;
}
h1::after,
.subtitulo::after {
  content: "|";
  margin-left: 5px;
  opacity: 1;
  animation: ${pisca} 0.7s infinite;
}
svg {
    margin-right: 0.5rem;
  }
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  textarea:-webkit-autofill,
  textarea:-webkit-autofill:hover,
  textarea:-webkit-autofill:focus,
  select:-webkit-autofill,
  select:-webkit-autofill:hover,
  select:-webkit-autofill:focus {
    -webkit-text-fill-color: green;
    -webkit-box-shadow: 0 0 0px 1000px #000 inset;
    transition: background-color 5000s ease-in-out 0s;
  }
`;

export default GlobalStyle;
