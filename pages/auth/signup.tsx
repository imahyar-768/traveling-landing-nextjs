import {LockClosedIcon} from '@heroicons/react/solid'
import Image from "next/image";
import TravelInImage from "../../public/images/travelin.png";
import React from "react";

const SignUpPage = () => {
    return (
        <>
            <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-8 border rounded-lg shadow-lg p-8">
                    <div>
                        <div className='flex flex-col justify-center items-center'>
                            <Image src={TravelInImage} alt="TravelIn" width={45} height={45} />
                            <div className="flex flex-shrink-0 items-center ">
                                <h1 className="cursor-pointer text-xl font-semibold ">
                                    Travel<span className="text-violet-500">in</span>
                                </h1>
                            </div>
                        </div>
                        <h2 className="mt-6 text-center text-3xl tracking-tight font-bold text-gray-900">
                            Sign up to your account
                        </h2>
                        <p className="mt-2 text-center text-sm text-gray-600">
                            Don't have an account?{' '}
                            <a href="/auth/login" className="font-medium text-violet-600 hover:text-violet-500">
                                Login
                            </a>
                        </p>
                    </div>
                    <form className="mt-8 space-y-6" action="#" method="POST">
                        <input type="hidden" name="remember" defaultValue="true"/>
                        <div className="rounded-md space-y-2">
                            <div>
                                <label htmlFor="username" className="sr-only">
                                    Email address
                                </label>
                                <input
                                    id="username"
                                    name="username"
                                    type="text"
                                    required
                                    className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-violet-500 focus:border-violet-500 focus:z-10 sm:text-sm"
                                    placeholder="User name"
                                />
                            </div>
                            <div>
                                <label htmlFor="email-address" className="sr-only">
                                    Email address
                                </label>
                                <input
                                    id="email-address"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-violet-500 focus:border-violet-500 focus:z-10 sm:text-sm"
                                    placeholder="Email address"
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="sr-only">
                                    Password
                                </label>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-violet-500 focus:border-violet-500 focus:z-10 sm:text-sm"
                                    placeholder="Password"
                                />
                            </div>
                            <div>
                                <label htmlFor="confirm-password" className="sr-only">
                                    Password
                                </label>
                                <input
                                    id="confirm-password"
                                    name="confirm-password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-violet-500 focus:border-violet-500 focus:z-10 sm:text-sm"
                                    placeholder="Confirm Password"
                                />
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input
                                    id="remember-me"
                                    name="remember-me"
                                    type="checkbox"
                                    className="h-4 w-4 text-violet-600 focus:ring-violet-500 border-gray-300 rounded"
                                />
                                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                                    Remember me
                                </label>
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-violet-600 hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500"
                            >
                                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                  <LockClosedIcon className="h-5 w-5 text-violet-500 group-hover:text-violet-400" aria-hidden="true"/>
                                </span>
                                Sign up
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default SignUpPage;
