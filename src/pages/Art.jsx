import ImageGallery from "../components/ImageGallery"

import "./Art.css"

import art1 from "../assets/images/art/oddish-card-art.png"
import art2 from "../assets/images/art/chansey-pick-icon.png"
import art3 from "../assets/images/art/ptcg-card-template.png"
import art4 from "../assets/images/art/meowstro-logo.png"
import art5 from "../assets/images/art/meowstro-soloist.png"
import art6 from "../assets/images/art/meowstro-performers.png"
import art7 from "../assets/images/art/mini-goku.png"
import art8 from "../assets/images/art/digivice.gif"
import art9 from "../assets/images/art/gameboy.gif"
import art10 from "../assets/images/art/moon-ball.gif"
import art11 from "../assets/images/art/primitive-spongebob.gif"
import art12 from "../assets/images/art/delete-this-meme.png"
import art13 from "../assets/images/art/armadillo-flag-logo.png"
import art14 from "../assets/images/art/cat-adventurer-doodle.png"
import art15 from "../assets/images/art/terriermon.png"


export default function Art() {

    const images = [
        {
            src: art1,
            alt: "Pixel art drawing of an Oddish Pokemon card"
        },
        {
            src: art2,
            alt: "Pixel art of the Chansey Pick icon from PTCGP"
        },
        {
            src: art3,
            alt: "Pixel art Oddish card plus template options for more cards"
        },
        {
            src: art4,
            alt: "Pixel art logo for Meowstro, a cat choir app"
        },
        {
            src: art5,
            alt: "Pixel art sprite sheet for a Meowstro soloist"
        },
        {
            src: art6,
            alt: "Pixel art sprite sheet for a standard Meowstro performer"
        },
        {
            src: art7,
            alt: "Pixel art rendering of Goku but small"
        },
        {
            src: art8,
            alt: "3D model of a classic green Digivice"
        },
        {
            src: art9,
            alt: "3D model of a classic yellow Gameboy"
        },
        {
            src: art10,
            alt: "3D model of a Moon Ball from Pokemon"
        },
        {
            src: art11,
            alt: "Pixel art of a drooling primitve Spongebob"
        },
        {
            src: art12,
            alt: "Pixel art of a small Chris with a speech bubble that says \"Delete this\""
        },
        {
            src: art13,
            alt: "Pixel art armadillo logo from the show Enter the Badlands"
        },
        {
            src: art14,
            alt: "Pixel art of a doodle of a cat adventurer"
        },
        {
            src: art15,
            alt: "Pixel art of Terriermon from Digimon"
        },
    ]

    return (
        <div className="art-page">
            <section className="art-header">
                <h1>Personal Artwork</h1>
                <p>
                    A collection of my personal artwork. I enjoy creating art as another way to explore 
                    ideas, design, and creativity outside of software development.
                </p>
            </section>

            <section className="art-gallery">
                <ImageGallery images={images} />
            </section>
        </div>
    )
}