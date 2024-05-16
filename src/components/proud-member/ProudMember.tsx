

import { createStyles } from '@mui/material';
import { ImageList, Typography } from 'components/Index';

export default function ProudMember() {

    const fontStyle = createStyles({
        fontFamily: "monospace"
    })
    return (

        <div className='container'>
            <Typography variant="h4" style={fontStyle} copy={"proud member of"} />
            <ImageList />
        </div>

    )

}