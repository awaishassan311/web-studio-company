import React from 'react'
import { apple, bill, google } from '../assets'
import styles, { layout } from '../style'

const Billing = () => {
  // return (
  //   <section id='product' classNameName={layout.sectionReverse}>
  //     <div classNameName={layout.sectionImgReverse}>
  //       <img
  //         src={bill}
  //         alt='billing'
  //         classNameName='w-[100%] h-[100%] relative z-[5]'
  //       />
  //       <div classNameName='absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient'/>
  //       <div classNameName='absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient'/>
  //     </div>
  //     <div classNameName={layout.sectionInfo}>
  //       <h2 classNameName={styles.heading2}>Easily control your <br classNameName='sm:block hidden'/> billing & invoicing.</h2>
  //       <p classNameName={`${styles.paragraph} max-w-[470px] mt-5`}>
  //         Elit enim sed massa etiam.
  //         Mauris eu adipiscing ultrices ametodio aenean neque.
  //         Fusce ipsum orci rhoncus aliporttitor integer platea placerat.
  //       </p>
  //       <div classNameName='flex flex-row flex-wrap sm:mt-10 mt-6'>
  //         <img
  //           src={apple}
  //           alt='app-store'
  //           classNameName='w-[128px] h-[42px] object-contain mr-5 cursor-pointer'
  //         />
  //         <img
  //           src={google}
  //           alt='google-play'
  //           classNameName='w-[128px] h-[42px] object-contain cursor-pointer'
  //         />
  //       </div>
  //     </div>  
  //   </section>
  // )

  return(
  <section className="py-20 relative z-50 flex justify-center">
  <div className="container ">
    <div className="mx-auto max-w-2xl sm:text-center">
        <span className="font-medium text-white tracking-widest">our price</span>
        <h2 className="md:text-5xl text-3xl font-medium text-white tracking-tight mt-7">Price Plans</h2>
        <div className="w-10 mx-auto mt-5 bg-gradient-to-r from-cyan-500 to-blue-500 h-[2px]"></div>
        <p className="mt-6 text-xl/8 text-white">Choose the plan that suits your needs best and enjoy the creative process of brainstorming the new project of yours.</p>
    </div>

    <div className="grid lg:grid-cols-3 grid-cols-1 gap-10 2xl:px-28 mt-20">

        <div className="flex flex-col border border-purple-500 rounded-xl overflow-hidden dark:border-gray-700">
            <div className="text-center pt-10 text-white">
                <h5 className="text-xl font-semibold">Basic</h5>
                <h2 className="text-5xl mt-8 mb-3 items-center align-middle">
                    <sup className="text-2xl align-middle">$</sup>49
                </h2>
                <span>per user, per month</span>
            </div>

            <div className="p-10">
                <ul className="mb-10 text-center">
                    <li className="my-4">
                        <h5 className="font-medium text-white">10k Visitors/mo</h5>
                    </li>
                    <li>
                        <h5 className="font-medium text-white">10 Funnels, 50 Pages</h5>
                    </li>
                    <li className="my-4">
                        <h5 className="font-medium text-white">Unlimited Transactions</h5>
                    </li>
                    <li>
                        <h5 className="font-medium text-white">Analytics</h5>
                    </li>
                    <li className="my-4">
                        <h5 className="font-medium text-white">lnstegrations</h5>
                    </li>
                    <li className="my-4">
                        <h5 className="font-medium  line-through text-white">Audience Date</h5>
                    </li>
                    <li className="my-4">
                        <h5 className="font-mediumtext-gray-500 line-through text-white">Premium templates</h5>
                    </li>
                    <li className="my-4">
                        <h5 className="font-medium line-through text-white">White Labelling</h5>
                    </li>
                </ul>
                <div className="flex justify-center">
                    <a href="#" className="py-3 px-6 font-medium border rounded-md border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white transition-all duration-500">Get Basic</a>
                </div>
            </div>
        </div>

        <div className="relative z-20">
            <div className="absolute top-0 inset-x-0">
                <div className="flex justify-center">
                    <span className="text-xs font-medium uppercase border border-gray-700 text-white bg-purple-500 px-2 py-1 rounded-md -mt-3">most popular</span>
                </div>
            </div>
            <div className="group">
                <div className="border rounded-xl border-purple-500 bg-white dark:bg-neutral-900">
                    <div className="text-center">
                        <div className="flex flex-col">
                            <div className="text-center pt-10">
                                <h5 className="text-xl font-semibold">Professional</h5>
                                <h2 className="text-5xl mt-8 mb-3 items-center align-middle">
                                    <sup className="text-2xl align-middle">$</sup>69
                                </h2>
                                <span>per user, per month</span>
                            </div>

                            <div className="p-10">
                                <ul className="mb-10 text-center">
                                    <li className="my-4">
                                        <h5 className="font-medium text-black">10k Visitors/mo</h5>
                                    </li>
                                    <li>
                                        <h5 className="font-medium text-black">10 Funnels, 50 Pages</h5>
                                    </li>
                                    <li className="my-4">
                                        <h5 className="font-medium text-black">Unlimited Transactions</h5>
                                    </li>
                                    <li>
                                        <h5 className="font-medium text-black">Analytics</h5>
                                    </li>
                                    <li className="my-4">
                                        <h5 className="font-medium text-black">lnstegrations</h5>
                                    </li>
                                    <li className="my-4">
                                        <h5 className="font-medium text-black">Audience Date</h5>
                                    </li>
                                    <li className="my-4">
                                        <h5 className="font-medium text-black">Premium templates</h5>
                                    </li>
                                    <li className="my-4">
                                        <h5 className="font-medium  line-through text-black">White Labelling</h5>
                                    </li>
                                </ul>
                                <div className="flex justify-center">
                                    <a href="#" className="py-3 px-6 font-medium border rounded-md border-purple-500 bg-purple-500 text-white hover:bg-purple-500-800">Get Pro</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            
            </div>
        </div>

        <div className="flex flex-col border border-purple-500 rounded-xl overflow-hidden">
            <div className="text-center text-white pt-10">
                <h5 className="text-xl font-semibold">Ultimate</h5>
                <h2 className="text-5xl mt-8 mb-3 items-center align-middle">
                    <sup className="text-2xl align-middle">$</sup>89
                </h2>
                <span>per user, per month</span>
            </div>

            <div className="p-10">
                <ul className="mb-10 text-center">
                    <li className="my-4">
                        <h5 className="font-medium text-white">10k Visitors/mo</h5>
                    </li>
                    <li>
                        <h5 className="font-medium text-white">10 Funnels, 50 Pages</h5>
                    </li>
                    <li className="my-4">
                        <h5 className="font-medium text-white">Unlimited Transactions</h5>
                    </li>
                    <li>
                        <h5 className="font-medium text-white">Analytics</h5>
                    </li>
                    <li className="my-4">
                        <h5 className="font-medium text-white">lnstegrations</h5>
                    </li>
                    <li className="my-4">
                        <h5 className="font-medium text-white">Audience Date</h5>
                    </li>
                    <li className="my-4">
                        <h5 className="font-medium text-white">Premium templates</h5>
                    </li>
                    <li className="my-4">
                        <h5 className="font-medium text-white">White Labelling</h5>
                    </li>
                </ul>
                <div className="flex justify-center">
                    <a href="#" className="py-3 px-6 font-medium border rounded-md border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white transition-all duration-500">Get Ultimate</a>
                </div>
            </div>
        </div>
    </div>
    <h5 className="text-center font-medium mt-14 text-white">lnterested in a custom plan? <a href="#" className="text-purple-500">Get in touch</a></h5>
</div>
</section>)
}

export default Billing
