import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { reset, themes, List, ListItem, Divider, Window, WindowContent, WindowHeader, Button, Toolbar } from "react95";
import { withInfo,storiesOf,action } from "react95";
import styled, { ThemeProvider } from 'styled-components';


import './index.css';
const ResetStyles = createGlobalStyle`
  ${reset}
`;