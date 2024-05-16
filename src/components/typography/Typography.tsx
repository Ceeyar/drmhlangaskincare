
import { Color, Typography as MUITypography } from '@mui/material';
import { Variant } from '@mui/material/styles/createTypography';
import React, { CSSProperties, FC } from 'react'

interface TypographyProps {
    copy: String,
    varient: Variant,
    color?: any,
    style?: CSSProperties
}

const Typography: FC<TypographyProps> = ({ copy, color, varient, style }) => {
    return (
        <MUITypography color={color} variant={varient} style={style}>
            {copy}
        </MUITypography>
    )
}

export default Typography;
