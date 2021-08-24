import React from 'react'

import Button from 'elements/Button'

import Banner from '../images/banner.png'
import iconCities from '../images/icon/icon-cities.svg'
import iconTraveler from '../images/icon/icon-traveler.svg'
import iconTreasure from '../images/icon/icon-treasure.svg'

export default function Hero(props) {

    const showMostPicked = () => {
        window.scrollTo({
            top: props.refMostPicked.current.offsetTop - 30,
            behavior: "smooth"
        })
    }

    return (
        <section className="container pt-4">
            <div className="row align-items-center">
                <div className="col-auto pr-5" style={{width: 500}}>
                    <h1 className="h2 lh-2 mb-3 fw-bold fs-1 mt-5">
                        Forget the Work, <br />
                        Start the Vacation
                    </h1>
                    <p className="mb-4 fw-light text-gray-500 w-75 mt-3">
                        We provide what you need to enjoy your holiday with family. Time to make another memorable moment
                    </p>
                    <Button className="btn px-5 py-3" hasShadow isPrimary onClick={showMostPicked}>
                        Show Me Now!
                    </Button>

                    <div className="row mt-4">
                        <div className="col-auto">
                            <img src={iconTraveler} alt={`${props.data.travelers} Travelers`} style={{width: 40}} />
                            <h6 className="mt-2 fw-bold">
                                {props.data.travelers} <span className="fw-light text-gray-500">Travelers</span>
                            </h6>
                        </div>
                        <div className="col-auto">
                            <img src={iconCities} alt={`${props.data.cities} Cities`} style={{width: 40}} />
                            <h6 className="mt-2 fw-bold">
                                {props.data.cities} <span className="fw-light text-gray-500">Cities</span>
                            </h6>
                        </div>
                        <div className="col-auto">
                            <img src={iconTreasure} alt={`${props.data.treasures} Treasures`} style={{width: 40}} />
                            <h6 className="mt-2 fw-bold">
                                {props.data.treasures} <span className="fw-light text-gray-500">Treasures</span>
                            </h6>
                        </div>
                    </div>
                </div>
                <div className="col-auto pr-5">
                    <img src={Banner} alt="Banner" stlye={{width: 200}} id="banner"/>
                </div>
            </div>
        </section>
    )
}
