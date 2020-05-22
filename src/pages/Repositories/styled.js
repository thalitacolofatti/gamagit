import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
    width: 100%;
    max-width: 991px;
    margin: 0 auto;
`;

export const Title = styled.h1`
    text-align: center;
    font-size:2rem;
    font-family: sans-serif;
    text-shadow: #333 1px 1px 2px;
    color: #117c6f;
`;

export const List = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    font-family: sans-serif;
`;

export const ListItem = styled.li`
    margin: .5rem 0;
    background:#117c6f;
    color: #fff;
    padding: .5rem;
`;

export const LinkHome = styled(Link)`
    display: block;
    width: 4rem;
    text-align: center;
    margin: 2rem auto;
    background-color: #117c6f;
    color: #fff;
    padding: .5rem 0;
    text-decoration: none;
    font-family: sans-serif;
`