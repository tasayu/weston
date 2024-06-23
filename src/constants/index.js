import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets/icons";
import {bigBike1, bigBike2, bigBike3, thumbnailBike1, thumbnailBike2, thumbnailBike3, customer1, customer2, bike4, bike5, bike6, bike7 } from "../assets/images";

export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about-us", label: "About Us" },
    { href: "#products", label: "Products" },
    { href: "#contact-us", label: "Contact Us" },
];

export const bikes = [
    {
        thumbnail: thumbnailBike1,
        bigBike: bigBike1,
    },
    {
        thumbnail: thumbnailBike2,
        bigBike: bigBike2,
    },
    {
        thumbnail: thumbnailBike3,
        bigBike: bigBike3,
    },
];

export const statistics = [
    { value: '1k+', label: 'Brands' },
    { value: '500+', label: 'Shops' },
    { value: '250k+', label: 'Customers' },
];

export const products = [
    {
        imgURL: bike4,
        name: "1000W Hybrid Mountain Bike",
        price: "$1200.20",
    },
    {
        imgURL: bike5,
        name: "Himo Scooter E-Bike",
        price: "$980.50",
    },
    {
        imgURL: bike6,
        name: "1500W E-Mountain Bike",
        price: "$2300.00",
    },
    {
        imgURL: bike7,
        name: "Titaone Scooter E-Bike",
        price: "$730.00",
    },
];

export const services = [
    {
        imgURL: truckFast,
        label: "Free shipping",
        subtext: "Enjoy seamless shopping with our complimentary shipping service."
    },
    {
        imgURL: shieldTick,
        label: "Secure Payment",
        subtext: "Experience worry-free transactions with our secure payment options."
    },
    {
        imgURL: support,
        label: "Love to help you",
        subtext: "Our dedicated team is here to assist you every step of the way."
    },
];

export const reviews = [
    {
        imgURL: customer1,
        customerName: 'Morich Brown',
        rating: 4.5,
        feedback: "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!"
    },
    {
        imgURL: customer2,
        customerName: 'Lota Mongeskar',
        rating: 4.5,
        feedback: "The product not only met but exceeded my expectations. I'll definitely be a returning customer!"
    }
];


export const footerLinks = [
    {
        title: "Products",
        links: [
            { name: "1000W Hybrid Mountain Bike", link: "/" },
            { name: "1500W E-Mountain Bike", link: "/" },
            { name: "Jansno E-Bike 20", link: "/" },
            { name: "Titaone 18inch Fat Tire Bike", link: "/" },
            { name: "Waffle Racer 750W", link: "/" },
            { name: "Himo Folding E-Bike", link: "/" },
        ],
    },
    {
        title: "Help",
        links: [
            { name: "About us", link: "/" },
            { name: "FAQs", link: "/" },
            { name: "How it works", link: "/" },
            { name: "Privacy policy", link: "/" },
            { name: "Payment policy", link: "/" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "customer@wetson.com", link: "wetson.com" },
            { name: "+92554862354", link: "tel:+92554862354" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];