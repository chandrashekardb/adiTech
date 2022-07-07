import React from 'react'
import { FaChevronCircleRight } from "react-icons/fa";

const Services = () => {
    const services=[
        {
            id:1, 
            title:"Jio digital",
            subtitle:`Shop From Range Of Lifestyle Products At Best Deals With No Cost Shipping. Latest Deals & No Cost EMI on Clothing & Beauty from Top Brands. Brand Warranty. Brand Authorized Products. Best Deals. Wide Range of Top Brands. Manufacturer Warranty.`,
        },
        {
            id:2, 
            title:"Postpaid",
            subtitle:`Switch to Postpaid & enjoy your favourite shows on Prime videos with Platinum Plan. Order your Postpaid SIM Today and get Free and Safe Doorstep Delivery. Buy Now!. 200 GB Data Rollover. 100 SMS/day.`,
        },
        {
            id:3, 
            title:"Prepaid",
            subtitle:`Enjoy Superior Network Coverage in every Corner of your Home. Switch to Prepaid. Get Office Like Internet at Home. Superfast Internet. Order Sim Now. Unlimited Calling Plans. High Speed Data Plans. Best Offers for You. Doorstep KYC. Quick Activation..`,
        },
        {
            id:4, 
            title:"Sim",
            subtitle:`Schedule free doorstep KYC pickup & SIM delivery. Now generate your Unique Porting Code (UPC) by sending an SMS to 1900. Just type PORT along with your 10 digit mobile number and send it to 1900. You will receive your unique code via SMS from 1901 within the next 5 minutes..`,
        },
    ]

    return (
      <div name="services" className="w-full h-fit md:h-screen bg-slate-300">
        <div className="flex flex-col items-center justify-center max-w-screen-xl mx-auto h-full px-3 py-12">
          <h2 className="text-5xl font-bold text-center">Services</h2>
  
          <p className="text-xl py-8 text-gray-600 text-center">
          Power Up your Home Office with Upto 1 Gbps Superfast Speed. Get Xstream Fiber Now. With Broadband, Stream 4K Movies, Tv Shows & Play Games With Zero Lag. Book Now. Free Dual Band Router. Free Installation. OTT Apps @ No Extra Cost.
          </p>
  
          <div className="grid sm:grid-cols-2 gap-4 pt-4">
            {services.map(({ id, title, subtitle }) => (
              <div
                key={id}
                className="flex items-start p-4 bg-gray-900 text-white rounded-md"
              >
                <div>
                  <FaChevronCircleRight
                    size={20}
                    className="mt-3 mr-4 text-lightColor"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-lightColor pt-2 pb-4 capitalize">
                    {title}
                  </h3>
                  <p className="text-lg">{subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

export default Services