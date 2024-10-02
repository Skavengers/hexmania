"use client"
import React, { Component } from 'react'
import Image from 'next/image';

export default function Page() {

    return (
        <div className=' m-12 grid  place-items-center'>
            <div className='border-4 border-spacing-8 '>
                <p className='bg-primary rounded-2xl p-4 shadow-2xl shadow-slate-900 dark:bg-white dark:text-primary text-center '>
                    Premium Pack <br />
                    <br />
                    <span className='font-bold'>Problems</span>
                    <br />
                    asuienasui asuienasuiasuienasuiasuienasuiasuienasuiasuienasuiasuienasui<br />
                    aieauieauie <br />
                    <br />
                    <span className='font-bold'> Skin</span>
                    <br />
                    ienuaistenuiasten <br />
                    The first player to make such a connection wins the game. <br />
                    <br />
                </p>
            </div>
        </div>
    )

}
/*
function Premium (){
    return(
        <div>
            <h1>
                {props.title}
            </h1>
            <img src={props.img} alt="" />
            <p>{props.text}</p>
        </div>
    )
}*/