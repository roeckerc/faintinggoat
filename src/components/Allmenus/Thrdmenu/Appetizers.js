import React from 'react'
import { Link } from 'react-router-dom';
import bg19 from '../../../assets/images/background/bg-19.png'
import bg20 from '../../../assets/images/background/bg-20.png'

import menuimg5 from '../../../assets/images/resource/menu-image-5.png'
import menuimg6 from '../../../assets/images/resource/menu-image-6.png'
import menuimg7 from '../../../assets/images/resource/menu-image-7.png'
import menuimg8 from '../../../assets/images/resource/menu-image-8.png'
import menuimg9 from '../../../assets/images/resource/menu-image-9.png'
import menuimg10 from '../../../assets/images/resource/menu-image-10.png'



function Appetizers() {
    return (
        <>
            <section className="menu-two">

                <div className="right-bg"><img src={bg19} alt="" title="" /></div>
                <div className="auto-container">
                    <div className="title-box centered">
                        <div className="subtitle"><span>STARTER MENU</span></div>

                        <div className="pattern-image">
                            <img src={require('../../../assets/images/icons/separator.svg').default} alt='mySvgImage' />
                        </div>

                        <h2>Baskets</h2>
                    </div>
                    <div className="row clearfix">
                        <div className="menu-col col-lg-6 col-md-12 col-sm-12">
                            <div className="inner">

                                <div className="dish-block">
                                    <div className="inner-box">
                                        <div className="dish-image"><Link href="#"><img src={menuimg5} alt="" /></Link></div>
                                        <div className="title clearfix"><div className="ttl clearfix"><h5><Link href="#">Fries or Tots</Link></h5></div><div className="price"><span>$7.00</span></div></div>
                                        <div className="text desc"><Link href="#">Add green chili or queso for $7.00 </Link></div>
                                    </div>
                                </div>

                                <div className="dish-block">
                                    <div className="inner-box">
                                        <div className="dish-image"><Link href="#"><img src={menuimg6} alt="" /></Link></div>
                                        <div className="title clearfix"><div className="ttl clearfix"><h5><Link href="#">Onion Rings<span className="s-info">SEASONAL</span></Link></h5></div><div className="price"><span>$10.00</span></div></div>
                                        <div className="text desc"><Link href="#">Description may go here</Link></div>
                                    </div>
                                </div>

                                <div className="dish-block">
                                    <div className="inner-box">
                                        <div className="dish-image"><Link href="#"><img src={menuimg7} alt="" /></Link></div>
                                        <div className="title clearfix"><div className="ttl clearfix"><h5><Link href="#">Fried Pickles</Link></h5></div><div className="price"><span>$10.00</span></div></div>
                                        <div className="text desc"><Link href="#">Description may go here</Link></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="menu-col col-lg-6 col-md-12 col-sm-12">
                            <div className="inner">

                                <div className="dish-block">
                                    <div className="inner-box">
                                        <div className="dish-image"><Link href="#"><img src={menuimg8} alt="" /></Link></div>
                                        <div className="title clearfix"><div className="ttl clearfix"><h5><Link href="#">Fried Mozzarella Sticks <span className="s-info">NEW</span></Link></h5></div><div className="price"><span>$10.00</span></div></div>
                                        <div className="text desc"><Link href="#">Description may go here</Link></div>
                                    </div>
                                </div>

                                <div className="dish-block">
                                    <div className="inner-box">
                                        <div className="dish-image"><Link href="#"><img src={menuimg9} alt="" /></Link></div>
                                        <div className="title clearfix"><div className="ttl clearfix"><h5><Link href="#">Chicken Tenders with Fries or Tots</Link></h5></div><div className="price"><span>$15.00</span></div></div>
                                        <div className="text desc"><Link href="#">Description may go here</Link></div>
                                    </div>
                                </div>

                                {/* <div className="dish-block">
                                    <div className="inner-box">
                                        <div className="dish-image"><Link href="#"><img src={menuimg10} alt="" /></Link></div>
                                        <div className="title clearfix"><div className="ttl clearfix"><h5><Link href="#">Opu Fish</Link></h5></div><div className="price"><span>$49.00</span></div></div>
                                        <div className="text desc"><Link href="#">Description may go here</Link></div>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>

            </section>


            <section className="menu-two">

                <div className="left-bg"><img src={bg20} alt="" title="" /></div>
                <div className="auto-container">
                    <div className="title-box centered">
                        <div className="subtitle"><span>Slap a tortilla on it</span></div>

                        <div className="pattern-image">

                            <img src={require('../../../assets/images/icons/separator.svg').default} alt='mySvgImage' />

                        </div>

                        <h2>Wraps</h2>
                    </div>
                    <div className="row clearfix">
                        <div className="menu-col col-lg-6 col-md-12 col-sm-12">
                            <div className="inner">

                                <div className="dish-block">
                                    <div className="inner-box">
                                        <div className="dish-image"><Link href="#"><img src={menuimg5} alt="" /></Link></div>
                                        <div className="title clearfix"><div className="ttl clearfix"><h5><Link href="#">Buffalo Chicken</Link></h5></div><div className="price"><span>$12.00</span></div></div>
                                        <div className="text desc"><Link href="#">Crispy tenders tossed in buffalo sauce, tomatoes, Onion, lettuce, and blue cheese crumbles.</Link></div>
                                    </div>
                                </div>

                                <div className="dish-block">
                                    <div className="inner-box">
                                        <div className="dish-image"><Link href="#"><img src={menuimg6} alt="" /></Link></div>
                                        <div className="title clearfix"><div className="ttl clearfix"><h5><Link href="#">Chicken Caesar <span className="s-info">SEASONAL</span></Link></h5></div><div className="price"><span>$12.00</span></div></div>
                                        <div className="text desc"><Link href="#">Grilled marinated chicken, romaine lettuce, parmesan, tossed in Caesar dressing</Link></div>
                                    </div>
                                </div>

                                {/* <div className="dish-block">
                                    <div className="inner-box">
                                        <div className="dish-image"><Link href="#"><img src={menuimg7} alt="" /></Link></div>
                                        <div className="title clearfix"><div className="ttl clearfix"><h5><Link href="#">Avocado</Link></h5></div><div className="price"><span>$10.00</span></div></div>
                                        <div className="text desc"><Link href="#">Typesetting industry lorem Lorem Ipsum is simply dummy text of the priand.</Link></div>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                        <div className="menu-col col-lg-6 col-md-12 col-sm-12">
                            <div className="inner">

                                <div className="dish-block">
                                    <div className="inner-box">
                                        <div className="dish-image"><Link href="#"><img src={menuimg8} alt="" /></Link></div>
                                        <div className="title clearfix"><div className="ttl clearfix"><h5><Link href="#">Avocado Chicken <span className="s-info">NEW</span></Link></h5></div><div className="price"><span>$12.00</span></div></div>
                                        <div className="text desc"><Link href="#">Grilled marinated chicken, fresh avocado, onion, romaine lettuce, cheddar, tomato, and ranch.</Link></div>
                                    </div>
                                </div>

                                <div className="dish-block">
                                    <div className="inner-box">
                                        <div className="dish-image"><Link href="#"><img src={menuimg9} alt="" /></Link></div>
                                        <div className="title clearfix"><div className="ttl clearfix"><h5><Link href="#">Chicken Bacon</Link></h5></div><div className="price"><span>$12.00</span></div></div>
                                        <div className="text desc"><Link href="#">Grilled marinated chicken, bacon, avocado, romaine lettuce, onion, tomato, and pepper jack cheese.</Link></div>
                                    </div>
                                </div>
{/* 
                                <div className="dish-block">
                                    <div className="inner-box">
                                        <div className="dish-image"><Link href="#"><img src={menuimg10} alt="" /></Link></div>
                                        <div className="title clearfix"><div className="ttl clearfix"><h5><Link href="#">Opu Fish</Link></h5></div><div className="price"><span>$49.00</span></div></div>
                                        <div className="text desc"><Link href="#">Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices</Link></div>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Appetizers