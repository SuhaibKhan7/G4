"use client";
import React from 'react'
import { Carousel } from "flowbite-react";
import { Banner, Button, Label, TextInput } from "flowbite-react";
import { HiX } from "react-icons/hi";
export function TopSection() {
    return (
        <div class="grid grid-cols-2 gap-4">
            <div>
                <Banner>
                    <h1 className='text-6xl '>Order It</h1>
                    <p className='text-justify'>I’m really impressed at the quality of content that CopySmiths produces. My niche is boring, but CopySmiths is very creative and consistently comes up with unique angles to address the topic.</p>
                    <p className='text-justify'>This is a curious title because it’s so specific that you can’t help but click. Precise and detailed information like this inspires authenticity and trust that helps readers overcome any initial hesitation.

                        You can do the same using article titles that contain concrete facts, hard statistics, and precise language. You’ll find that such titles tend to be longer than usual, but that’s okay. Just focus on making them exceptional and intriguing.

                        Expert Tip: Be careful with overly sensational and emotional titles. People today are on guard against anything that sounds exaggerated or overly hyped. Many magic words, such as superlatives (best and greatest) have also become cliched through overuse.</p>
                    <div className="flex w-full items-center justify-between border-b border-gray-200 bg-gray-50 p-4 dark:border-gray-600 dark:bg-gray-700">
                        <div className="mx-auto flex w-full shrink-0 items-center sm:w-auto">
                        
                        <p></p>
                            <form action="#" className="flex w-full flex-col items-center md:flex-row md:gap-x-3">
                                <Label
                                    htmlFor="email"
                                    className="mb-2 mr-auto shrink-0 text-sm font-medium text-gray-500 dark:text-gray-400 md:m-0 md:mb-0"
                                >
                                    Sign up for our newsletter
                                </Label>
                                <TextInput id="email" placeholder="Enter your email" required type="email" />
                                <Button type="submit">Subscribe</Button>
                            </form>
                        </div>
                        <Banner.CollapseButton color="gray" className="border-0 bg-transparent text-gray-500 dark:text-gray-400">
                            <HiX className="h-4 w-4" />
                        </Banner.CollapseButton>
                    </div>
                </Banner>
    


            </div>

            <div>

                <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 m-3">
                    <Carousel>
                        <img src="https://flowbite.com/docs/images/carousel/carousel-1.svg" alt="..." />
                        <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" alt="..." />
                        <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="..." />
                        <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="..." />
                        <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="..." />
                    </Carousel>
                </div>



            </div>
            <br />
        </div>
    )
}
