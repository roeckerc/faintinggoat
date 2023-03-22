import React from 'react'
import { Link } from 'react-router-dom'
import bgone from '../../../assets/images/background/bg-16.png'
import bgtwo from '../../../assets/images/background/bg-17.png'
import bgthree from '../../../assets/images/background/bg-18.png'
import menuone from '../../../assets/images/resource/menus-1.jpg'
import menutwo from '../../../assets/images/resource/menus-2.jpg'



function Startermenu() {
    return (

        <>
            <section className="menu-one">
                <div className="right-bg"><img src={bgone} alt="" title="" /></div>
                <div className="auto-container">
                    <div className="title-box centered">
                        <div className="subtitle"><span>STARTER MENU</span></div>

                        <div className="pattern-image">
                            <img src={require('../../../assets/images/icons/separator.svg').default} alt='mySvgImage' />
                        </div>

                        <h2>Baskets</h2>
                    </div>

                    <div className="row clearfix">
                        <div className="image-col col-lg-7 col-md-12 col-sm-12">
                            <div className="inner">
                                <div className="image"><img src={menuone} alt="" /></div>
                            </div>
                        </div>
                        <div className="menu-col col-lg-5 col-md-12 col-sm-12">
                            <div className="inner">

                                <div className="dish-block">
                                    <div className="inner-box">
                                        <div className="title clearfix"><div className="ttl clearfix"><h5><Link to="#">Fries or Tots </Link></h5></div><div className="price"><span>$7.00</span></div></div>
                                        <div className="text desc"><Link to="#">description if wanted</Link></div>
                                    </div>
                                </div>

                                <div className="dish-block">
                                    <div className="inner-box">
                                        <div className="title clearfix"><div className="ttl clearfix"><h5><Link to="#">Onion Rings <span className="s-info">SEASONAL</span></Link></h5></div><div className="price"><span>$10.00</span></div></div>
                                        <div className="text desc"><Link to="#">description if wanted</Link></div>
                                    </div>
                                </div>

                                <div className="dish-block">
                                    <div className="inner-box">
                                        <div className="title clearfix"><div className="ttl clearfix"><h5><Link to="#">Fried Pickles</Link></h5></div><div className="price"><span>$10.00</span></div></div>
                                        <div className="text desc"><Link to="#">description if wanted</Link></div>
                                    </div>
                                </div>

                                <div className="dish-block">
                                    <div className="inner-box">
                                        <div className="title clearfix"><div className="ttl clearfix"><h5><Link to="#">Fried Mozzarella Sticks <span className="s-info">NEW</span></Link></h5></div><div className="price"><span>$10.00</span></div></div>
                                        <div className="text desc"><Link to="#">description if wanted</Link></div>
                                    </div>
                                </div>

                                <div className="dish-block">
                                    <div className="inner-box">
                                        <div className="title clearfix"><div className="ttl clearfix"><h5><Link to="#">Chicken Tenders with Fries or Tots<span className="s-info">NEW</span></Link></h5></div><div className="price"><span>$10.00</span></div></div>
                                        <div className="text desc"><Link to="#">description if wanted</Link></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="menu-one alternate">
                <div className="left-bg"><img src={bgtwo} alt="" title="" /></div>
                <div className="right-bg-2"><img src={bgthree} alt="" title="" /></div>
                <div className="auto-container">
                    <div className="title-box centered">
                        <div className="subtitle"><span>Delicious</span></div>

                        <div className="pattern-image">
                            <img src={require('../../../assets/images/icons/separator.svg').default} alt='mySvgImage' />
                        </div>

                        <h2>Sandwhichess</h2>

                    </div>

                    <div className="row clearfix">
                        <div className="image-col col-lg-7 col-md-12 col-sm-12">
                            <div className="inner">
                                <div className="image"><img src={menutwo} alt="" /></div>
                            </div>
                        </div>
                        <div className="menu-col col-lg-5 col-md-12 col-sm-12">
                            <div className="inner">

                                <div className="dish-block">
                                    <div className="inner-box">
                                        <div className="title clearfix"><div className="ttl clearfix"><h5><Link to="#">Reuben</Link></h5></div><div className="price"><span>$10.00</span></div></div>
                                        <div className="text desc"><Link to="#">Seared corned beef, 1000 island dressing, sauerkraut, Swiss cheese on toasted rye bread. Add Chicken $5</Link></div>
                                    </div>
                                </div>

                                <div className="dish-block">
                                    <div className="inner-box">
                                        <div className="title clearfix"><div className="ttl clearfix"><h5><Link to="#">Philly <span className="s-info">SEASONAL</span></Link></h5></div><div className="price"><span>$12.00</span></div></div>
                                        <div className="text desc"><Link to="#">Thinly sliced top round steak, sauteed onion and peppers, covered in cheese wiz served on a toasted Amoroso’s roll</Link></div>
                                    </div>
                                </div>

                                <div className="dish-block">
                                    <div className="inner-box">
                                        <div className="title clearfix"><div className="ttl clearfix"><h5><Link to="#">French Dip</Link></h5></div><div className="price"><span>$12.00</span></div></div>
                                        <div className="text desc"><Link to="#">Top Roast beef and provolone cheese served on a served on a toasted Amoroso’s roll.</Link></div>
                                    </div>
                                </div>

                                <div className="dish-block">
                                    <div className="inner-box">
                                        <div className="title clearfix"><div className="ttl clearfix"><h5><Link to="#">Chicken <span className="s-info">NEW</span></Link></h5></div><div className="price"><span>$12.00</span></div></div>
                                        <div className="text desc"><Link to="#">Grilled marinated chicken, grilled red onion and peppers, covered in pepperjack served on a toasted Amoroso’s roll.</Link></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>

    )
}

export default Startermenu