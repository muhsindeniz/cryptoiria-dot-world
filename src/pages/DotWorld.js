import React from 'react'
import Button from '../components/Button/Button'
import dotWorlLogo from '../assets/img/custom/dotWorldLogo.png';
import ButtonOutline from '../components/Button/ButtonOutline';
import dowWorldDefi from '../assets/img/banner/dotWorldDefiBanner.png'
import cryptoiriaLogo from '../assets/img/custom/cryptoiriaLogo.png'
import msdogebigsection from '../assets/img/custom/msdogebigsection.png'
import msdogeicon from '../assets/img/custom/msdogeicon.png'
import cryptoiria3dLogo from '../assets/img/custom/3dlogo.png'
import dotFooterTwitterIcon from '../assets/img/custom/dotFooterTwitterIcon.svg'

const DotWorld = () => {
    return (
        <>
            <header className="header-dot-world">
                <nav className="nav-dot-world navbar navbar-dark navbar-expand-sm">
                    <div className="container">
                        <a href="/" className="navbar-brand">
                            <img width="60" src={dotWorlLogo} />
                        </a>

                        <div className="d-flex">
                            <span className="d-lg-none-sm-block">
                                <ButtonOutline text="Buy the coins" />
                            </span>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                        </div>

                        <div id="navbarCollapse" className="collapse navbar-collapse">
                            <ul className="navbar-nav ml-auto d-sm-none d-lg-block">
                                <li className="nav-item">
                                    <ButtonOutline text="Buy the coins" />
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>


                <section className="container">
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="col-sm-12 col-lg-8 text-center d-flex flex-column justify-content-center align-items-center">
                            <h1 className="mb-4">
                                Stake, Win or Play -  enjoy <br /> DeFi in new world
                            </h1>

                            <p className="mb-2">
                                It is a long established fact that a reader will be distracted by the <br /> readable content of a page when looking at its layout.
                            </p>

                            <div className="dot-world-header-button">
                                <Button text="Watch the trailer" />
                                <Button text="Buy comic NFT" />
                                <Button text="Read the comic" />
                            </div>
                        </div>
                    </div>
                </section>

            </header>



            <main>
                <article className="container">
                    <div className="row">
                        <div className="col-sm-12 col-lg-6 order-lg-1 order-sm-2 text-white">
                            <div className="dow-world-cryptoiriaLogo-defi">
                                <img src={cryptoiriaLogo} />
                            </div>

                            <div className="mt-3">
                                <h2>Stake, Win or Play - <br /> enjoy DeFi in new world</h2>
                            </div>

                            <div>
                                <p className="mt-4 mb-4">
                                    Follow this fun loving average family of 7 mixblood siblings who are sent by misfortune on a task to save the galaxy after their Father dies.
                                </p>

                                <p className="mt-4 mb-4">
                                    What starts off as an investigate journey, turns into one of revenge, a discovery of identity and finally responsibility for the universe
                                </p>
                            </div>

                            <div>
                                <Button text="Visit the website" />
                            </div>
                        </div>

                        <div className="col-sm-12 col-lg-6 order-lg-2 order-sm-1 mobile-center-banner">
                            <img src={dowWorldDefi} width="100%" />
                        </div>
                    </div>
                </article>



                <article className="container">
                    <div className="row">
                        <div className="col-sm-12 col-lg-6 text-white mobile-center-banner">
                            <img src={msdogebigsection} width="100%" />
                        </div>

                        <div className="col-sm-12 col-lg-6">
                            <div className="dow-world-cryptoiriaLogo-win-play d-flex align-items-center">
                                <img src={msdogeicon} />
                                <div className="text-gold ml-3">
                                    <h3>MsDoge</h3>
                                </div>
                            </div>

                            <div className="mt-3">
                                <h2>Stake, Win or Play - <br /> enjoy DeFi in new world</h2>
                            </div>

                            <div>
                                <p className="mt-4 mb-4">
                                    Our Community has always requested equailiy and was born out of MsDoge that. Join in the fun with DeFi Staking rewards, Charitable initiatives and Fun
                                </p>

                                <p className="mt-4 mb-4">
                                    Staking andd rewards is at the heart our community, you’ll be rewarded with MsDoge and Cryptoloria. Both tokens are deflationary and have long term goals
                                </p>
                            </div>

                            <div>
                                <Button text="Button here" />
                            </div>
                        </div>
                    </div>
                </article>


                <article className="container">
                    <div className="row">
                        <div className="col-sm-12 col-lg-6 order-lg-1 order-sm-2 text-white">
                            <div className="dow-world-3dLogo">
                                <h1>3d logo</h1>
                            </div>

                            <div className="mt-3">
                                <h2>Stake, Win or Play - <br /> enjoy DeFi in new world</h2>
                            </div>

                            <div>
                                <p className="mt-4 mb-4">
                                    Follow this fun loving average family of 7 mixblood siblings who are sent by misfortune on a task to save the galaxy after their Father dies.
                                </p>

                                <p className="mt-4 mb-4">
                                    What starts off as an investigate journey, turns into one of revenge, a discovery of identity and finally responsibility for the universe
                                </p>
                            </div>

                            <div>
                                <Button text="Visit the website" />
                            </div>
                        </div>

                        <div className="col-sm-12 col-lg-6 order-lg-2 order-sm-1 mobile-center-banner">
                            <img src={cryptoiria3dLogo} width="100%" />
                        </div>
                    </div>
                </article>


            </main>



            <footer className="dot-world-footer">
                <img src={dotFooterTwitterIcon} width="60" />
                <h4 className="text-white mt-3">Dr. Nole Cryptoloria</h4>
            </footer>
        </>
    )
}

export default DotWorld
