import React from 'react';
import './Home.scss';
import { createStyles } from '@mui/material';
import { ProudMember, Typography, Testimonies } from 'components/Index';

export default function Home() {

    const welcome = createStyles({
        fontWeight: 'lighter',
        padding: '10px'
    })
    const highlight = createStyles({
        fontWeight: 'bolder',
        padding: '0 10px',
        fontFamily: 'monospace',
        fontSize: '60px'
    })
    return (

        <div className='container'>
            <div className='background-image-container'>
                <div className='text-parent'>
                    <Typography variant="h6" style={welcome} copy={"WELCOME TO DR MHLANGA SKINCARE"} />
                    <Typography variant="h3" style={highlight} copy={"Your Healthy"} />
                    <Typography variant="h3" style={highlight} copy={"Skin Journey"} />
                    <Typography variant="h3" color={"white"} style={highlight} copy={"Begins Here"} />
                </div>
            </div>
            <ProudMember />
            <Testimonies />

        </div>

    )

}