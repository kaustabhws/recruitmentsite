import React from 'react'
import { Link } from 'react-router-dom'
import './Pricing.css'

export default function Pricing() {
    return (
        <div className="pricingTable">
            <h2 className="pricingTable-title">Find a plan that's right for you.</h2>
            <h3 className="pricingTable-subtitle">
                Every plan comes with a 30-day free trial.
            </h3>
            <ul className="pricingTable-firstTable">
                <li className="pricingTable-firstTable_table">
                    <h1 className="pricingTable-firstTable_table__header">Bronze Packege</h1>
                    <p className="pricingTable-firstTable_table__pricing">
                        <span>$</span>
                        <span>10</span>
                        <span>Month</span>
                    </p>
                    <ul className="pricingTable-firstTable_table__options">
                        <li>Unlimited Listing</li>
                        <li>Edit Your Listing</li>
                        <li>Approve Reviews</li>
                    </ul>
                    <Link to='/signup'><button className="pricingTable-firstTable_table__getstart">
                        Get Started Now
                    </button> </Link>
                </li>
                <li className="pricingTable-firstTable_table">
                    <h1 className="pricingTable-firstTable_table__header">Gold Packege</h1>
                    <p className="pricingTable-firstTable_table__pricing">
                        <span>$</span>
                        <span>19</span>
                        <span>Month</span>
                    </p>
                    <ul className="pricingTable-firstTable_table__options">
                        <li>Unlimited Listing</li>
                        <li>Edit Your Listing</li>
                        <li>Approve Reviews</li>
                        <li>Take Booking Online</li>
                        <li>24/7 Support Service</li>
                    </ul>
                    <Link to='/signup'><button className="pricingTable-firstTable_table__getstart">
                        Get Started Now
                    </button></Link>
                </li>
                <li className="pricingTable-firstTable_table">
                    <h1 className="pricingTable-firstTable_table__header">
                        Platinum Packege
                    </h1>
                    <p className="pricingTable-firstTable_table__pricing">
                        <span>$</span>
                        <span>49</span>
                        <span>Month</span>
                    </p>
                    <ul className="pricingTable-firstTable_table__options">
                        <li>Unlimited Listing</li>
                        <li>Edit Your Listing</li>
                        <li>Approve Reviews</li>
                    </ul>
                    <Link to='/signup'><button className="pricingTable-firstTable_table__getstart">
                        Get Started Now
                    </button></Link>
                </li>
            </ul>
        </div>

    )
}
