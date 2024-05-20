
import { Typography as MUITypography } from '@mui/material';
import { Variant } from '@mui/material/styles/createTypography';
import { CSSProperties, FC } from 'react'

interface TypographyProps {
    copy: String,
    align?: "left" | "center" | "right" | "inherit" | "justify" | undefined,
    variant: Variant,
    color?: any,
    size?: number,
    style?: CSSProperties
}

const Typography: FC<TypographyProps> = ({ copy, size, align, color, variant, style }) => {
    return (
        <MUITypography
            align={align}
            color={color} variant={variant} style={style}>
            {copy}
        </MUITypography>
    )
}

export default Typography;
