import Slider from 'react-slick';
import 'assets/styles/Styles.scss';
import { Card, CardContent, Paper, createStyles } from '@mui/material';
import { Typography } from 'components/Index';
import { TESTMONIES } from 'constants/Index';

const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        centerMode: true,
        adaptiveHeight: true,
        variableWidth: true,
        arrows: true,
        className: 'slider-container',
        autoplay: true,
        autoplaySpeed: 4000,
        slidesToShow: 3,
        slidesToScroll: 1,
    };
    const title = createStyles({
        fontFamily: "monospace",
        marginBottom: "4px",
        fontWeight: "bold"
    })
    return (

        <>
            <Typography variant='h3' copy={"From our patients"} />
            <Slider {...settings}>
                {TESTMONIES.map((testimony) => (
                    <Paper key={testimony.id} sx={{ minWidth: 275, maxWidth: 400, margin: '0 10px' }} >
                        <Card elevation={0}>
                            <CardContent component={"div"} className='testimony'>
                                <Typography style={title} variant="h5" copy={testimony.name} />
                                <Typography align="left" variant="body2" copy={testimony.testimony} />
                            </CardContent>
                        </Card>
                    </Paper>
                ))}
            </Slider>
        </>
    );
};

export default Carousel;