import * as React from 'react';
import { ImageList as MUIImageList, ImageListItem } from '@mui/material';
import diagnosticLabCerti24 from 'assets/images/diagnostic-lab-certi-24.png';
import diagnosticLabCerti23 from 'assets/images/diagnostic-lab-certi-23-1.png';
import diagnosticLabCerti21 from 'assets/images/diagnostic-lab-certi-2-1.png';

function srcset(image: string, size: number, rows = 1, cols = 2) {
    return {
        src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
        srcSet: `${image}?w=${size * cols}&h=${size * rows
            }&fit=crop&auto=format&dpr=2 2x`,
    };
}

export default function ImageList() {
    return (
        <MUIImageList
            sx={{ display: 'flex', flexDirection: 'row', marginTop: 0, }}
            variant="quilted"
            rowHeight={121}
        >
            {itemData.map((item) => (
                <ImageListItem key={item.title} cols={1} rows={1}>
                    <img
                        style={{ backgroundSize: "contain", backgroundPosition: "center", transform: "scale(0.85)" }}
                        {...srcset(item.img, 100)}
                        alt={item.title}
                        loading="lazy"
                    />
                </ImageListItem>
            ))}
        </MUIImageList>
    );
}

const itemData = [
    {
        img: diagnosticLabCerti24,
        title: 'Diagnostic Lab Certi 24',
    },
    {
        img: diagnosticLabCerti23,
        title: 'Burger',
    },
    {
        img: diagnosticLabCerti21,
        title: 'Camera',
    },
];
