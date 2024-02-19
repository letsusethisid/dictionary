import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
:root {
  &, &.light-mode {
    --color-primary: #FFFFFF;
    --color-secondary: #F4F4F4;
    --color-teritary: #E9E9E9;
    --color-grey: #757575;
  }
  
  &.dark-mode {
    --color-primary: #050505;
    --color-secondary: #1F1F1F;
    --color-teritary: #2D2D2D;
    --color-grey: #3A3A3A;
  }
  
  --color-brand-purple: #A445ED;
  --color-brand-red: #FF5252;
}

@font-face {
    font-family: 'inconsolata':
    src: local('inconsolata'),
         url('../fonts/inconsolata/Inconsolata-VariableFont_wdth,wght.ttf') format('ttf'),
}
@font-face {
    font-family: 'inter':
    src: local('inter'),
         url('../fonts/inter/Inter-VariableFont_slnt,wght.ttf') format('ttf'),
}

@font-face {
    font-family: 'lora':
    src: local('lora'),
         url('../fonts/lora/Lora-VariableFont_wght.ttf') format('ttf'),
}

*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  transition: background-color 0.3s, border 0.3s;
}

html {
  font-size: 62.5%;
}

body {
  font-family: "inconsolata", sans-serif;
  color: var(--color-primary);
  transition: color 0.3s, background-color 0.3s;
  min-height: 100vh;
  line-height: 1.5;
  font-size: 1.6rem;
}`;
