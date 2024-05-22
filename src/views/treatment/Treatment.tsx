import { Banner, Media, Typography } from 'components/Index';
import './Treatment.scss';
import { Box, Grid, createStyles } from '@mui/material';
import { TREAMENT_AND_SERVICES } from 'constants/Index';

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
            <Box>
                <Grid container spacing={4}>
                    {TREAMENT_AND_SERVICES.map((item, index) => (
                        <Grid
                            item
                            xs={12}
                            sm={6}
                            key={item.id}
                            sx={{
                                display: 'flex',
                                justifyContent: index % 2 === 1 ? 'flex-start' : 'flex-end',
                            }}
                        >
                            <Box sx={{ maxWidth: '95%' }}>
                                <Media item={item} />
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </div>
    )
}
