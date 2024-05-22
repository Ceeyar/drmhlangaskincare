import { Banner, Typography } from 'components/Index';
import './Treatment.scss';
import { Box, createStyles } from '@mui/material';

export default function Treatment() {

    const highlight = createStyles({
        fontWeight: 'bolder',
        padding: '0 20px',
        fontFamily: 'monospace',
        fontSize: '60px',
    })
    const treatment = createStyles({
        fontWeight: 'bolder',
        fontSize: 15,
        fontFamily: 'monospace',
    })

    return (
        <div className='container'>
            <Banner
                parentClass={"background-image-treatment-container"}
                textContainerClass={"text-parent"}
                textCopy={""}
                titleColor={"white"}
                titleCopy={"Our Treatment;& Services"}
                titleVarient={"h3"}
                titleStyle={highlight}
                textColor={"white"}
                textVarient={"h6"} />
            <Box py={2}>
                <Typography variant="caption" style={treatment} copy={"From routine skin exams to advanced treatments for various skin conditions, our dermatologist leverage cutting-edge technologies and evidence-based practices to deliver exceptional care. Whether you seek preventive skincare, cosmetic enhancements, or targeted medical interventions."} />
            </Box>
        </div>
    )
}
