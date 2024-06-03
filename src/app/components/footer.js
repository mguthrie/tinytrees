'use client'
import Link from 'next/link';
import React from 'react'
import Image from 'next/image';

import * as Unicons from '@iconscout/react-unicons';

export default function Footer() {

    return (
        <>
            <footer className="footer bg-slate-950 relative text-gray-200 dark:text-gray-200">
                <div className="container">
                    <div className="grid grid-cols-12">
                        <div className="col-span-12">
                            <div className="py-[60px] px-0">
                                <div className="grid grid-cols-1">
                                    <div className="text-center">
                                        <Image src="/images/logo-icon-64.png" className="block mx-auto" alt="" width={64} height={64} />
                                        <p className="max-w-xl mx-auto text-slate-400 mt-8">Partner with us for all your security and compliance needs. (HIPPA, ISO, NERC, NIST)
                                        </p>
                                    </div>

                                    <ul className="list-none footer-list text-center mt-8">
                                        <li className="inline px-2"> <Link href="/services"
                                            className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out">Services</Link>
                                        </li>
                                        <li className="inline px-2 mt-[10px]"> <Link href="/aboutus"
                                            className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out ms-2">About
                                            Us</Link></li>
                                        <li className="inline px-2 mt-[10px]"> <Link href="/blogs"
                                            className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out ms-2">Blogs</Link>
                                        </li>
                                        <li className="inline px-2 mt-[10px]"> <Link href="/team"
                                            className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out ms-2">Team</Link>
                                        </li>
                                        <li className="inline px-2 mt-[10px]"> <Link href="/pricing"
                                            className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out ms-2">Pricing</Link>
                                        </li>
                                        <li className="inline px-2 mt-[10px]"> <Link href="/contactus"
                                            className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out ms-2">Contact
                                            Us</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="py-[30px] px-0 border-t border-slate-800">
                    <div className="container text-center">
                        <div className="grid md:grid-cols-12 items-center">
                            <div className="md:col-span-6">
                                <div className="md:text-start text-center">
                                    <p className="text-gray-400">©
                                        {new Date().getFullYear()} Tiny Trees LLC.
                                    </p>
                                </div>
                            </div>

                            <div className="md:col-span-6 md:mt-0 mt-8">
                                <ul className="list-none md:text-end text-center">
                                    <li className="inline"> <Link href="https://1.envato.market/ovaxo-next" target="_blank" className="h-8 w-8 inline-flex items-center text-center justify-center text-base font-normal tracking-wide align-middle transition duration-500 ease-in-out border border-gray-800 rounded-md hover:border-violet-600 dark:hover:border-violet-600 hover:bg-violet-600 dark:hover:bg-violet-600"><Unicons.UilShoppingCart width={16}/></Link></li>
                                    <li className="inline ms-1"> <Link href="https://dribbble.com/shreethemes" target="_blank" className="h-8 w-8 inline-flex items-center text-center justify-center text-base font-normal tracking-wide align-middle transition duration-500 ease-in-out border border-gray-800 rounded-md hover:border-violet-600 dark:hover:border-violet-600 hover:bg-violet-600 dark:hover:bg-violet-600"><Unicons.UilDribbble width={16}/></Link></li>
                                    <li className="inline ms-1"> <Link href="https://www.behance.net/shreethemes" target="_blank"className="h-8 w-8 inline-flex items-center text-center justify-center text-base font-normal tracking-wide align-middle transition duration-500 ease-in-out border border-gray-800 rounded-md hover:border-violet-600 dark:hover:border-violet-600 hover:bg-violet-600 dark:hover:bg-violet-600"><Unicons.UilBehance width={16}/></Link></li>
                                    <li className="inline ms-1"> <Link href="http://linkedin.com/company/shreethemes" target="_blank"  className="h-8 w-8 inline-flex items-center text-center justify-center text-base font-normal tracking-wide align-middle transition duration-500 ease-in-out border border-gray-800 rounded-md hover:border-violet-600 dark:hover:border-violet-600 hover:bg-violet-600 dark:hover:bg-violet-600"><Unicons.UilLinkedin width={16}/></Link></li>
                                    <li className="inline ms-1"> <Link href="https://www.facebook.com/shreethemes" target="_blank" className="h-8 w-8 inline-flex items-center text-center justify-center text-base font-normal tracking-wide align-middle transition duration-500 ease-in-out border border-gray-800 rounded-md hover:border-violet-600 dark:hover:border-violet-600 hover:bg-violet-600 dark:hover:bg-violet-600"><Unicons.UilFacebookF width={16}/></Link></li>
                                    <li className="inline ms-1"> <Link href="https://www.instagram.com/shreethemes/" target="_blank" className="h-8 w-8 inline-flex items-center text-center justify-center text-base font-normal tracking-wide align-middle transition duration-500 ease-in-out border border-gray-800 rounded-md hover:border-violet-600 dark:hover:border-violet-600 hover:bg-violet-600 dark:hover:bg-violet-600"><Unicons.UilInstagram  width={16}/></Link></li>
                                    <li className="inline ms-1"> <Link href="https://twitter.com/shreethemes" target="_blank"  className="h-8 w-8 inline-flex items-center text-center justify-center text-base font-normal tracking-wide align-middle transition duration-500 ease-in-out border border-gray-800 rounded-md hover:border-violet-600 dark:hover:border-violet-600 hover:bg-violet-600 dark:hover:bg-violet-600"><Unicons.UilTwitter  width={16}/></Link></li>
                                    <li className="inline ms-1"> <Link href="mailto:support@shreethemes.in"  className="h-8 w-8 inline-flex items-center text-center justify-center text-base font-normal tracking-wide align-middle transition duration-500 ease-in-out border border-gray-800 rounded-md hover:border-violet-600 dark:hover:border-violet-600 hover:bg-violet-600 dark:hover:bg-violet-600"><Unicons.UilEnvelope  width={16}/></Link></li>
                                    <li className="inline ms-1"> <Link href="https://forms.gle/QkTueCikDGqJnbky9" target="_blank"  className="h-8 w-8 inline-flex items-center text-center justify-center text-base font-normal tracking-wide align-middle transition duration-500 ease-in-out border border-gray-800 rounded-md hover:border-violet-600 dark:hover:border-violet-600 hover:bg-violet-600 dark:hover:bg-violet-600"><Unicons.UilFile  width={16}/></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
