import { IoLogoUsd } from "react-icons/io5";

import { FaPoundSign } from "react-icons/fa";

import { FaEuroSign } from "react-icons/fa";

import { FiInfo } from "react-icons/fi";

import './index.css' 

const PriceCard=props=>{
    const{item}=props 
    const{code,description,rate,rate_float,symbol}=item 
    console.log(rate_float)
    let icon
    let tradeButtonBackground
    let iconDivBackground
    let infoBackground
    if (code==='USD'){
        icon=<IoLogoUsd className="icons"/>
        tradeButtonBackground='tradeButton green'
        iconDivBackground='iconDiv green'
        infoBackground='InfoIcon greenColor'
    }
    else if (code==='EUR'){
        icon=<FaEuroSign className="icons" />
        tradeButtonBackground='tradeButton lightGreen'
        iconDivBackground='iconDiv lightGreen'
        infoBackground='InfoIcon lightGreenColor'
    }
    else{
        icon=<FaPoundSign className="icons"/>
        tradeButtonBackground='tradeButton blue'
        iconDivBackground='iconDiv blue'
        infoBackground='InfoIcon blueColor'
    }
    return (
        <li className='PriceListItem'>
            <div className="iconContainer">
                <div className={iconDivBackground}>
                {icon}
                </div>
                <h1 className="iconName">{code}</h1>
            </div>
            <p className="Description">{description}</p>
            <p className="priceValue">{rate}</p>
            <div className="TradeContainer">
                <FiInfo className={infoBackground}/>
                <button type='button' className={tradeButtonBackground}>Trade</button>
            </div>
        </li>
    )
}

export default PriceCard