import React from 'react'
import { Link } from 'react-router-dom'
import Backgroundimage from '../../../assets/images/background/image-8.jpg';
import bg19 from '../../../assets/images/background/bg-19.png'
import bg20 from '../../../assets/images/background/bg-20.png'
import menuimg11 from '../../../assets/images/resource/menu-image-11.jpg'
import menuimg12 from '../../../assets/images/resource/menu-image-12.jpg'
import menuimg13 from '../../../assets/images/resource/menu-image-13.jpg'
import menuimg14 from '../../../assets/images/resource/menu-image-14.jpg'
import menuimg15 from '../../../assets/images/resource/menu-image-15.jpg'
import menuimg16 from '../../../assets/images/resource/menu-image-16.jpg'
import menuimg17 from '../../../assets/images/resource/menu-image-17.jpg'
import menuimg18 from '../../../assets/images/resource/menu-image-18.jpg'
import img8 from '../../../assets/images/background/image-8.jpg'
import badgeone from '../../../assets/images/resource/badge-2.png'



function Specialmenu() {
    return (

        <>
            <section className="special-offer-two">

                <div className="left-bg"><img src={bg20} alt="" title="" /></div>
                <div className="right-bg"><img src={bg19} alt="" title="" /></div>
                <div className="auto-container">
                    <div className="title-box centered">
                        <div className="subtitle"><span>special offer</span></div>

                        <div className="pattern-image">
                            <img src={require('../../../assets/images/icons/separator.svg').default} alt='mySvgImage' />
                        </div>

                        <h2>Pub Favorites</h2>
                    </div>
                    <div className="row clearfix">
                        
                        <div className="offer-block-three col-xl-3 col-lg-4 col-md-6 col-sm-12">
                            <div className="inner-box wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="0ms">
                                <div className="image"><Link to="#"><img src={menuimg11} alt="" /></Link></div>
                                <h4><Link to="#">Stadium Pretzel</Link></h4>
                                <div className="text desc">Locally sourced handmade pretzels served with a side of White queso.</div>
                                <div className="price">$10.00</div>
                            </div>
                        </div>


                        <div className="offer-block-three col-xl-3 col-lg-4 col-md-6 col-sm-12">
                            <div className="inner-box wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="200ms">
                                <div className="image"><Link to="#"><img src={menuimg12} alt="" /></Link></div>
                                <h4><Link to="#">Quesadilla</Link></h4>
                                <div className="text desc">Blend of cheeses melted between flour tortillas served with Pico and sour cream. Add chicken or beef $4 </div>
                                <div className="price">$8.00</div>
                            </div>
                        </div>


                        <div className="offer-block-three col-xl-3 col-lg-4 col-md-6 col-sm-12">
                            <div className="inner-box wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="400ms">
                                <div className="image"><Link to="#"><img src={menuimg13} alt="" /></Link></div>
                                <h4><Link to="#">Pork Green Chili</Link></h4>
                                <div className="text desc">House made fire-roasted green chili served with warm tortilla.  <br/> Add cheese and sour cream for $3</div>
                                <div className="price">Cup $6 Bowl $10</div>
                            </div>
                        </div>


                        <div className="offer-block-three col-xl-3 col-lg-4 col-md-6 col-sm-12">
                            <div className="inner-box wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="600ms">
                                <div className="image"><Link to="#"><img src={menuimg14} alt="" /></Link></div>
                                <h4><Link to="#">Downtown Sliders</Link></h4>
                                <div className="text desc">Three buffalo chicken or three angus beef cheeseburger sliders on a potato bun. <br/> Add a slider for $4 each</div>
                                <div className="price">$14.00</div>
                            </div>
                        </div>


                        <div className="offer-block-three col-xl-3 col-lg-4 col-md-6 col-sm-12">
                            <div className="inner-box wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="0ms">
                                <div className="image"><Link to="#"><img src={menuimg15} alt="" /></Link></div>
                                <h4><Link to="#">Chips & Salsa</Link></h4>
                                <div className="text desc">Crispy corn tortilla chips served with house made salsa. <br/> Add a side of queso for $3</div>
                                <div className="price">$6.00</div>
                            </div>
                        </div>


                        <div className="offer-block-three col-xl-3 col-lg-4 col-md-6 col-sm-12">
                            <div className="inner-box wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="200ms">
                                <div className="image"><Link to="#"><img src={menuimg16} alt="" /></Link></div>
                                <h4><Link to="#">Meatballs</Link></h4>
                                <div className="text desc">4 House made meatballs in marinara topped with parmesan served with garlic bread .</div>
                                <div className="price">$15.00</div>
                            </div>
                        </div>


                        <div className="offer-block-three col-xl-3 col-lg-4 col-md-6 col-sm-12">
                            <div className="inner-box wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="400ms">
                                <div className="image"><Link to="#"><img src={menuimg17} alt="" /></Link></div>
                                <h4><Link to="#">Shepherd's Pie</Link></h4>
                                <div className="text desc">Seasoned beef, peas, and carrots in beef stock, topped with mashed potatoes then broiled till crispy. <br/>Add cheese for $2</div>
                                <div className="price">$15.00</div>
                            </div>
                        </div>


                        <div className="offer-block-three col-xl-3 col-lg-4 col-md-6 col-sm-12">
                            <div className="inner-box wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="600ms">
                                <div className="image"><Link to="#"><img src={menuimg18} alt="" /></Link></div>
                                <h4><Link to="#">Mac & Cheese</Link></h4>
                                <div className="text desc">Shell pasta with house-made queso and cheddar jack cheese, topped with panko bread crumb.
                                <div className="price">$12.00</div> 
                                <br/> Broccoli Mac 
                                <div className="price">$13.00</div>
                                <br/> Bacon Cheeseburger Mac 
                                <div className="price">$15.00</div>
                                <br/> Buffalo Chiecken Mac </div>
                                <div className="price">$15.00</div>
                            </div>
                        </div>

                    </div>
                </div>

            </section>
{/* sides */}
<section className="special-offer-two">

<div className="left-bg"><img src={bg20} alt="" title="" /></div>
<div className="right-bg"><img src={bg19} alt="" title="" /></div>
<div className="auto-container">
    <div className="title-box centered">
        <div className="subtitle"><span>special offer</span></div>

        <div className="pattern-image">
            <img src={require('../../../assets/images/icons/separator.svg').default} alt='mySvgImage' />
        </div>

        <h2>Sides</h2>
    </div>
    <div className="row clearfix">
        
        <div className="offer-block-three col-xl-3 col-lg-4 col-md-6 col-sm-12">
            <div className="inner-box wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="0ms">
                <h4><Link to="#">Fries</Link></h4>
                <div className="price">$10.00</div>
            </div>
        </div>
        <div className="offer-block-three col-xl-3 col-lg-4 col-md-6 col-sm-12">
            <div className="inner-box wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="0ms">
                <h4><Link to="#">Tots</Link></h4>
                <div className="price">$10.00</div>
            </div>
        </div>
        <div className="offer-block-three col-xl-3 col-lg-4 col-md-6 col-sm-12">
            <div className="inner-box wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="0ms">
                <h4><Link to="#">Onion Rings</Link></h4>
                <div className="price">$10.00</div>
            </div>
        </div>
        <div className="offer-block-three col-xl-3 col-lg-4 col-md-6 col-sm-12">
            <div className="inner-box wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="0ms">
                <h4><Link to="#">Fried Pickles</Link></h4>
                <div className="price">$10.00</div>
            </div>
        </div>
        <div className="offer-block-three col-xl-3 col-lg-4 col-md-6 col-sm-12">
            <div className="inner-box wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="0ms">
                <h4><Link to="#">Mashed Potatoes</Link></h4>
                <div className="price">$10.00</div>
            </div>
        </div>
        <div className="offer-block-three col-xl-3 col-lg-4 col-md-6 col-sm-12">
            <div className="inner-box wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="0ms">
                <h4><Link to="#">Mac & Cheese</Link></h4>
                <div className="price">$10.00</div>
            </div>
        </div>
        <div className="offer-block-three col-xl-3 col-lg-4 col-md-6 col-sm-12">
            <div className="inner-box wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="0ms">
                <h4><Link to="#">Broccoli</Link></h4>
                <div className="price">$10.00</div>
            </div>
        </div>
        <div className="offer-block-three col-xl-3 col-lg-4 col-md-6 col-sm-12">
            <div className="inner-box wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="0ms">
                <h4><Link to="#">Sour Cream</Link></h4>
                <div className="price">$10.00</div>
            </div>
        </div>
        <div className="offer-block-three col-xl-3 col-lg-4 col-md-6 col-sm-12">
            <div className="inner-box wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="0ms">
                <h4><Link to="#">Queso</Link></h4>
                <div className="price">$10.00</div>
            </div>
        </div>
        <div className="offer-block-three col-xl-3 col-lg-4 col-md-6 col-sm-12">
            <div className="inner-box wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="0ms">
                <h4><Link to="#">Marinara</Link></h4>
                <div className="price">$10.00</div>
            </div>
        </div>
        <div className="offer-block-three col-xl-3 col-lg-4 col-md-6 col-sm-12">
            <div className="inner-box wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="0ms">
                <h4><Link to="#">Salad</Link></h4>
                <div className="text desc">Shredded romaine, tomato, cucumber, choice of dressing.</div>
                <div className="price">$10.00</div>
            </div>
        </div>
    </div>
</div>

</section>


            <section className="chef-selection">

                <div className="auto-container">
                    <div className="outer-container">
                        <div className="row clearfix">

                            <div className="image-col col-xl-6 col-lg-6 col-md-12 col-sm-12">
                                <div className="inner wow fadeInLeft" data-wow-duration="1500ms" data-wow-delay="0ms">
                                    <div className="image-layer" style={{ backgroundImage: `url(${Backgroundimage})` }}>

                                    </div>
                                    <div className="image"><img src={img8} alt="" /></div>
                                </div>
                            </div>

                            <div className="content-col col-xl-6 col-lg-6 col-md-12 col-sm-12">
                                <div className="inner wow fadeInRight" data-wow-duration="1500ms" data-wow-delay="0ms">
                                    <div className="title-box">
                                        <span className="badge-icon"><img src={badgeone} alt="" title="" /></span>
                                        <div className="subtitle"><span>chef selection</span></div>

                                        <div className="pattern-image">
                                            <img src={require('../../../assets/images/icons/separator.svg').default} alt='mySvgImage' />
                                        </div>

                                        <h3>Lobster Tortellini</h3>
                                        <div className="text">Lorem Ipsum is simply dummy text of the printingand typesetting industry lorem Ipsum has been the industrys standard dummy text ever since.</div>
                                    </div>
                                    <div className="price"><span className="old">$40.00</span> <span className="new">$20.00</span></div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </section>

        </>

    )
}

export default Specialmenu