import { Variant } from '@mui/material/styles/createTypography';
import Typography from 'components/typography/Typography';
import React, { CSSProperties } from 'react';

interface BannerProps {
    parentClass: string,
    textContainerClass: string,
    titleColor: string,
    titleCopy: string,
    titleVarient: Variant,
    titleStyle?: CSSProperties,
    textColor: string,
    textVarient: Variant,
    textCopy: string,
    textStyle?: CSSProperties,
}

const Banner: React.FC<BannerProps> = ({
    parentClass,
    textContainerClass,
    titleColor,
    titleCopy,
    titleVarient,
    titleStyle,
    textColor,
    textVarient,
    textCopy,
    textStyle
}) => {
    const textLines = textCopy.split(';');
    return (
        <div className={parentClass}>
            <div className={textContainerClass}>
                <Typography color={titleColor} variant={titleVarient} style={titleStyle} copy={titleCopy} />
                {
                    textLines.map((line, index) => (
                        <Typography
                            key={index}
                            color={textColor}
                            variant={textVarient}
                            style={textStyle}
                            copy={line.trim()}
                        />
                    ))
                }
            </div>
        </div>
    );
}

export default Banner;
