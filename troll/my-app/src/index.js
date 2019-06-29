import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { reset, themes, List, ListItem, Divider, Window, WindowContent, WindowHeader, Button, Toolbar } from "react95";


import './index.css';
const ResetStyles = createGlobalStyle`
  ${reset}
`;

class Show extends React.Component {
    render() {
        return (
            <div className="window-d">
                <ThemeProvider theme={themes.default}>
                    <Window style={{ width: 400 }}>
                        <WindowHeader
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                            }}
                        >
                            <span>react95.exe</span>
                            <Button style={{ marginRight: '-6px', marginTop: '1px' }} size={'sm'} square>
                                <span style={{ fontWeight: 'bold', transform: 'translateY(-1px)' }}>x</span>
                            </Button>
                        </WindowHeader>
                        <Toolbar>
                            <Button variant="menu" size="sm">
                                File
        </Button>
                            <Button variant="menu" size="sm">
                                Edit
        </Button>
                            <Button variant="menu" size="sm" disabled>
                                Save
        </Button>
                        </Toolbar>
                        <WindowContent>
                            <ul>
                                <li>something here</li>
                                <li>something here</li>
                                <li>something here</li>
                                <li>something here</li>
                            </ul>
                        </WindowContent>
                    </Window>
                </ThemeProvider>


            </div>
        );
    }
}






ReactDOM.render(
    <Show />,
    document.getElementById('root')
);