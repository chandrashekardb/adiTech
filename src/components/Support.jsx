import React from 'react'
import {MdOutlineComputer, MdOutlineSupportAgent, MdPerson} from 'react-icons/md'
import GreenBtn from './GreenBtn'

const Support = () => {
    const supportLinks=[
        {
            id:1,
            title:"Technical",
            subtitle:`A pioneer in independent work practices, adiTech has been uniquely positioned to deliver technology services, keeping essential businesses and public services`,
            icon:<MdOutlineComputer size={25} />,            
        },
        {
            id:2,
            title:"Sales",
            subtitle:`Our experts are available for your assistance 24x7 (Monday - Sunday). For recharge plans, data balance,simcard, TV, AC and many more...
            Interested in adiTech? Talk to us`,
            icon:<MdOutlineSupportAgent size={25} />,            
        },
        {
            id:3,
            title:"General",
            subtitle:`General Support are mobile services, sim services, postpaid, prepaid, and other necessary services`,
            icon:<MdPerson size={25} />,            
        },
    ]
    return (
      <div name="support" className="w-full h-fit bg-slate-300">
        <div className="flex flex-col items-center justify-center max-w-screen-xl mx-auto h-full px-3 py-12">
          <div className="px-4 py-12">
            <h2 className="text-5xl font-bold text-center">Support</h2>
            <p className="text-xl py-8  text-gray-600 text-center">
            We aim to resolve all complaints at the first point of contact. In case you don't get satisfactory resolution of your query / complaint at the customer service.
            </p>
          </div>
  
          {/* support cards */}
          <div className="grid lg:grid-cols-3 gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black">
            {supportLinks.map(({ id, title, subtitle, icon }) => (
              <div
                key={id}
                className="bg-gray-900 text-white rounded-xl shadow-lg shadow-lightColor"
              >
                <div className="p-8">
                  <div className="flex items-center justify-center w-16 h-16 p-4 bg-lightColor text-darkColor rounded-full mt-[-4rem]">
                    {icon}
                  </div>
                  <h3 className="font-bold text-2xl my-6">{title}</h3>
                  <p className="text-gray-300 text-base pb-12">{subtitle}</p>
                </div>
              </div>
            ))}
          </div>
  
          <div className="flex w-full items-center justify-center">
            <GreenBtn
              title="contact us"
              className="capitalize py-3 px-6 w-1/2 my-12"
            />
          </div>
        </div>
      </div>
    );
  };

export default Support