

import { createStyles } from '@mui/material';
import { ImageList, Typography } from 'components/Index';

export default function ProudMember() {

    const fontStyle = createStyles({
        fontFamily: "monospace"
    })
    return (

        <div className='container grid-center'>
            <Typography varient="h4" style={fontStyle} copy={"proud member of"} />
            <ImageList />
        </div>

    )

}