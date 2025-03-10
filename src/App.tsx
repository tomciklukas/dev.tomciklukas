import styled from "styled-components";

import GlobalStyle from "./GlobalStyle";
import IconLink from "./IconLink";

const githubURL = new URL("../assets/github.svg", import.meta.url);
const linkedinURL = new URL("../assets/linkedin.svg", import.meta.url);

const Links = styled.div`
    display: flex;
    flex-direction: row;
    gap: 2vmin;
    justify-content: flex-end;
    position: absolute;
    right: 3vmin;
    top: 3vmin;
`;

const MainScreen = styled.div`
    align-items: center;
    background:
        radial-gradient(ellipse 80vw 80vh at -10vw 50vh, #0001, transparent),
        radial-gradient(ellipse 80vw 80vh at 80vw -20vh, #0001, transparent),
        radial-gradient(ellipse 80vw 80vh at 100vw 100vh, #0001, transparent);
    box-sizing: border-box;
    border-radius: 1vmin;
    display: flex;
    flex-direction: column;
    height: calc(100vh - 6vmin);
    justify-content: center;
    margin: 3vmin;
    overflow: hidden;
    padding: 3vmin;
    position: relative;
    user-select: none;
`;

const Name = styled.span`
    font-family: Zain, sans-serif;
    font-weight: 600;
`;

const First = styled(Name)`
    -webkit-text-stroke: .4vmin #fff;
    color: transparent;
    font-size: 78vmin;
    left: -5vmin;
    margin-top: -50vmin;
    position: absolute;
    top: 50%;
`;

const Last = styled(Name)`
    color: #00baa9;
    font-size: 32vmin;
    letter-spacing: -1.2vmin;
    padding-right: 20vw;
    z-index: 1;
`;

export default function App() {
    return (
        <>
            <GlobalStyle />
            <MainScreen>
                <Links>
                    <IconLink href="https://linkedin.com/in/tomcik-lukas/" target="_blank" title="LinkedIn profile">
                        <img alt="LinkedIn logo" src={ linkedinURL } />
                    </IconLink>
                    <IconLink href="https://github.com/tomciklukas" target="_blank" title="GitHub profile">
                        <img alt="GitHub logo" src={ githubURL } />
                    </IconLink>
                </Links>
                <First>Lukas</First>
                <Last>Tomcik</Last>
            </MainScreen>
        </>
    );
}
