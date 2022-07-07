import React from 'react'
import PriceCard from './PriceCard'


const Pricing = () => {
  return (
    <div name="pricing" className="w-full h-fit text-white bg-gray-900">
        <div className="flex flex-col items-center justify-center max-w-screen-xl mx-auto h-full px-3 py-12">
            <div className="px-4 py-12 text-center">
                <h2 className="text-5xl font-bold">Pricing</h2>
                <p className="text-xl py-8 text-gray-500">
                Set any song as hellotune for free Also enjoy Wynk Music for free. Order your Postpaid / Prepaid SIM Today and get your SIM Delivered at your Doorstep. Same Day Sim Delivery. Unlimited Calling Plans. High Speed Data Plans. Doorstep KYC. Best Offers for You. Quick Activation.
                </p>
            </div>

        <div className="grid md:grid-cols-2">
            {/* pricing card  */}
            <PriceCard priceCategory="postpaid" dollar="399" features={[
                {
                    id:1,
                    title:"Postpaid at ₹399",
                },
                {
                    id:2,
                    title:"Postpaid Family Plans",
                },
                {
                    id:3,
                    title:"Wide Range of Plans",
                },
                {
                    id:4,
                    title:"Get Number of Your Choice",
                },
                {
                    id:5,
                    title:"500 GB Data Benefit & 100/Day SMS",
                },

            ]}/>

            <PriceCard priceCategory="prepaid" dollar="106" features={[
                {
                    id:1,
                    title:"Prepaid at ₹106",
                },
                {
                    id:2,
                    title:"Unlimited Calls & Data",
                },
                {
                    id:3,
                    title:"Get 4G sim at your home",
                },
                {
                    id:4,
                    title:"Doorstep Delivery",
                },
                {
                    id:5,
                    title:"Netflix, Amezone Prime & many more..",
                },

            ]}/>

            {/* Pricing card end  */}
        </div>
        </div>
    </div>
  )
}

export default Pricing