import React, { useEffect } from 'react'
import Button from '../components/Button/Button'
import ButtonOutline from '../components/Button/ButtonOutline'
import cryptoiriaLogo from '../assets/img/custom/cryptoiriaLogo.png'
import { Link } from 'react-router-dom'
import cryptoiriaHeaderBanner from '../assets/img/custom/cryptoiriaheaderbanner.png'

import reddit from '../assets/img/custom/reddit.svg'
import facebook from '../assets/img/custom/facebook.svg'
import instagram from '../assets/img/custom/instagram.png'
import telegram from '../assets/img/custom/telegram.png'
import twitter from '../assets/img/custom/dotFooterTwitterIcon.svg'
import discord from '../assets/img/custom/discord.svg'

const DogeMoon = () => {

    useEffect(() => {
        document.body.style.backgroundColor = "#0f244b";
    }, [])

    return (
        <>
            <header className="header-cryptoiria">
                <nav className="nav-dot-world navbar navbar-cryptoiria-dark navbar-expand-sm">
                    <div className="container-fluid computer-space">
                        <Link to="/DogeMoon" className="navbar-brand">
                            <img width="120" src={cryptoiriaLogo} />
                        </Link>

                        <div className="d-flex">
                            <span className="d-lg-none-sm-block">
                                <ButtonOutline text="Buy the coins" />
                            </span>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                        </div>

                        <div id="navbarCollapse" className="collapse navbar-collapse">
                            <ul className="navbar-nav ml-auto d-flex justify-content-end text-white w-100">
                                <li className="nav-item pr-5">
                                    <Link to="/DogeMoon" className="text-white">
                                        Movie
                                    </Link>
                                </li>
                                <li className="nav-item pr-5">
                                    <Link to="/DogeMoon" className="text-white">
                                        Digital comic
                                    </Link>
                                </li>
                                <li className="nav-item pr-5">
                                    <Link to="/DogeMoon" className="text-white">
                                        NFT
                                    </Link>
                                </li>
                                <li className="nav-item pr-5">
                                    <Link to="/DogeMoon" className="text-white">
                                        Animation
                                    </Link>
                                </li>
                                <li className="nav-item pr-5">
                                    <Link to="/DogeMoon" className="text-white">
                                        Game
                                    </Link>
                                </li>
                            </ul>

                            <ul className="navbar-nav ml-auto d-flex">
                                <li className="nav-item d-sm-none d-lg-block">
                                    <ButtonOutline text="Cryptoloria.World" />
                                </li>
                                <li className="nav-item ml-3 d-sm-none d-lg-block">
                                    <ButtonOutline text="Buy the coins" />
                                </li>
                            </ul>

                        </div>
                    </div>
                </nav>


                <section className="container-fluid mobile-absolute-menu position-relative pr-0">
                    <div className="row computer-space m-0 pr-0">
                        <div className="col-sm-12 col-lg-6">
                            <div className="dogemon-header-start-before"></div>
                            <h1 className="mb-4 text-mobile-center" style={{ fontSize: "50px" }}>
                                Neque porro quisquam est <br /> qui dolorem ipsum
                            </h1>

                            <p className="mb-2 text-mobile-center">
                                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                            </p>

                            <div className="cryptoiria-header-button">
                                <Link to="/DogeMoon">
                                    <Button text="Watch the trailer" />
                                </Link>
                                <Link to="/DogeMoon">
                                    <Button text="Buy comic NFT" />
                                </Link>
                                <Link to="/DogeMoon">
                                    <Button text="Read the comic" />
                                </Link>
                            </div>


                            <div className="d-sm-none d-lg-block mt-5">
                                <h5 className="mb-4">Join the community</h5>
                                <span className="mr-4">
                                    <img src={reddit} width="44" />
                                </span>
                                <span className="mr-4">
                                    <img src={facebook} width="44" />
                                </span>
                                <span className="mr-4">
                                    <img src={instagram} width="44" />
                                </span>
                                <span className="mr-4">
                                    <img src={telegram} width="44" />
                                </span>
                                <span className="mr-4">
                                    <img src={twitter} width="44" />
                                </span>
                                <span className="mr-4">
                                    <img src={discord} width="44" />
                                </span>
                            </div>
                        </div>


                        <div className="col-sm-12 col-lg-6 position-relative">
                            <div className="headerBannerBg">
                                <img src={cryptoiriaHeaderBanner} />
                            </div>
                        </div>
                        <div className="dogemon-header-start-after"></div>
                    </div>
                </section>
            </header>





            <main>
                <article className="container-fluid">
                    <div className="row computer-space m-0 pr-0">
                        <div className="col-sm-12 col-lg-4">
                            <h1 className="mb-4 text-mobile-center">
                                Anime trailer
                            </h1>

                            <h4 className="mt-5">
                                Neque porro quisquam est qui dolorem ipsum quia dolor sit ame
                            </h4>

                            <p className="mt-4 mb-5">
                                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour,
                            </p>

                            <Link to="/DogeMoon">
                                <Button text="Watch the trailer" />
                            </Link>

                            <p className="mt-5">
                                <i>
                                    "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."
                                </i>
                            </p>
                        </div>

                        <div className="col-sm-12 col-lg-8"></div>
                    </div>
                </article>
            </main>






            <footer>

            </footer>
        </>
    )
}

export default DogeMoon
