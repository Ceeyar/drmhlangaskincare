import React from 'react';
import './About.scss';
import { Banner, Timeline, Typography } from 'components/Index';
import { Box, createStyles } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function About() {
    const highlight = createStyles({
        fontWeight: 'bolder',
        padding: '20px',
        fontFamily: 'monospace',
        fontSize: '60px',
    })
    const about = createStyles({
        fontWeight: 'bolder',
        padding: '0 20px',
        fontSize: 15,
        fontFamily: 'monospace',
    })
    const smallText = createStyles({
        fontFamily: 'monospace',
    })

    return (

        <div className='container'>
            <Banner
                parentClass={"background-image-about-container"}
                textContainerClass={"text-parent"}
                textCopy={"Specialist Dermatologist;FCDerm (SA) Mmed (UKZN) MBChB (UCT);Life Coach & Inspirational Speaker."}
                titleColor={"white"}
                titleCopy={"Dr. T.S Mhlanga"}
                titleVarient={"h3"}
                titleStyle={highlight}
                textColor={"white"}
                textStyle={about}
                textVarient={"h6"} />
            <Box py={2}>
                <Typography variant="caption" style={about} copy={`Dr. Sthembiso Mhlanga is a qualified Specialist dermatologist and Director of Mhlanga Skincare Inc. a dermatology clinic established in 2023.`} />
            </Box>
            <Box px={30}>
                <Typography variant="caption" style={smallText} copy={`He is also passionate about research, as evidenced by his involvement with the Matlosana-Perinatal HIV Research Unit (PHRU), located at Tshepong Hospital (Northwest), and currently with the University of KwaZulu-Natal.`} />
                <Typography variant="caption" style={smallText} copy={`He presented his ground-breaking research on common skin conditions in rural South Africa at the World Congress of Dermatology in Singapore. He has also presented at the National Congress of Dermatology.`} />
                <Typography variant="caption" style={smallText} copy={`Dr. Mhlanga is also avid about development and community building; during the internship, he established Maximum Out Put Foundation, a Non-Profit Organisation. A vehicle that he used to inspire and mentor students from high school who aspired to become medical doctors.`} />
                <Typography variant="caption" style={smallText} copy={`He is currently one of the founding members of MR (Mhlanga-Rikhotso) Foundation an NPO that mentors students from impoverished backgrounds guiding them to University and creating Job-shadowing opportunities for them.`} />
            </Box>
            <div>
                <Timeline />
            </div>
            <div className='about-content'>
                <Box>
                    <Typography variant="subtitle1" style={about} copy={`Reach Us`} />
                    <Typography variant="caption" style={about} copy={`Unit 13 Vista Fairview, 90 Main Road, Empangeni, 3880`} />
                </Box>
                <div>
                    <Typography variant="h6" style={about} copy={`Follow Us`} />
                    <FacebookIcon />
                    <InstagramIcon />
                    <LinkedInIcon />
                </div>
                <Box>
                    <Typography variant="subtitle1" style={about} copy={`Open Hours`} />
                    <Typography variant="caption" style={about} copy={`Mon-Fri 08:30 - 17:00\nSat-Sun 10:00 - 13:00`} />
                </Box>
            </div>
        </div>

    )

}