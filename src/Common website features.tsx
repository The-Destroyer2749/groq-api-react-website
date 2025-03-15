import {website_name, website_motto, } from './variables';

function website_name_h1() {
    return (
        <h1>{website_name}</h1>
    )
}

function website_motto_h4() {
    return (
        <h4>{website_motto}</h4>
    )
}

export {website_name_h1, website_motto_h4};