import styled from "styled-components";

export default styled.a`
    display: block;
    opacity: .4;
    transition: 200ms ease-out opacity;
    width: 2rem;

    img {
        max-width: 100%;
    }

    &:hover {
        cursor: pointer;
        opacity: .8;
    }
`;
