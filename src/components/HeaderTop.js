import React from 'react'
import {BsFacebook, BsTwitterX, BsLinkedin, BsInstagram} from "react-icons/bs"

const HeaderTop = () => {
  return (
    <div className="border-b border-gray-200 hidden sm:block">
        <div className="container py-4">
            <div className="flex justify-between items-center">
                <div className="hidden lg:flex gap-1">
                    <div className="header_top__icon_wrapper">
                        <BsFacebook/>
                    </div>
                    <div className="header_top__icon_wrapper">
                        <BsTwitterX/>
                    </div>
                    <div className="header_top__icon_wrapper">
                        <BsLinkedin/>
                    </div>
                    <div className="header_top__icon_wrapper">
                        <BsInstagram/>
                    </div>
                </div>
                <div className ="text-gray-500 text[12px]" >
                    <strong>FREE DELIVERY  </strong>
                    IF YOUR ORDER EXCEEDS $100
                </div>
                <div className ="flex gap-4">
                    <select name="currency" id="currency" className="text-gray-500 text-[12px] w-[70px]">
                        <option value="USD $">USD $</option>
                        <option value="EURO €">EURO €</option>
                        <option value="UGX">UGX</option>
                    </select>
                    <select name="language" id= "language" className="text-gray-500 text-[12px] w-[70px]">
                        <option value="English">English</option>
                        <option value="Dutch">Dutch</option>

                    </select>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HeaderTop