import { FC, Fragment } from "react";
import { Tooltip as MUITooltip, Typography } from "@mui/material";

interface TooltipTypographyProps {
    institution: String;
    position: String;
    addtionalText: String;
}

const TooltipTypography: FC<TooltipTypographyProps> = ({
    institution,
    position,
    addtionalText,
}) => {
    const additionalTextLines = addtionalText.split(`;`);

    return (
        <>
            <MUITooltip
                title={
                    <Fragment>
                        {additionalTextLines.map((line: String) => (
                            <Typography>{line}</Typography>
                        ))}
                    </Fragment>
                }
                componentsProps={{
                    tooltip: {
                        sx: {
                            maxWidth: "650px",
                            fontSize: "1em",
                        },
                    },
                }}
            >
                <Typography variant="h6" component="span">
                    {institution}
                </Typography>
            </MUITooltip>
            <Typography>{position}</Typography>
        </>
    );
};

export default TooltipTypography;
