import {
    Box,
    Button,
    FormControl,
    FormHelperText,
    TextField,
    createStyles,
} from "@mui/material";
import { Banner, Typography } from "components/Index";
import "./Contact.scss";
import SendIcon from '@mui/icons-material/Send';

export default function Contact() {
    const highlight = createStyles({
        fontWeight: "bolder",
        padding: "0 20px",
        fontFamily: "monospace",
        fontSize: "60px",
    });
    const subTitle = createStyles({
        fontWeight: "bolder",
        fontSize: 15,
        fontFamily: "monospace",
    });
    const subTitleStyle = createStyles({
        fontWeight: "bolder",
        padding: "0 24px",
        fontSize: 15,
        fontFamily: "monospace",
    });

    return (
        <div className="container">
            <Banner
                parentClass={"background-image-contact-container"}
                textContainerClass={"text-parent"}
                textCopy={"Your journey to skin wellness begins with us."}
                titleColor={"white"}
                titleCopy={"Get In Touch"}
                titleVarient={"h3"}
                titleStyle={highlight}
                textColor={"white"}
                textStyle={subTitleStyle}
                textVarient={"h6"}
            />
            <Box className="grid-center" p={2}>
                <Typography
                    variant="caption"
                    style={subTitle}
                    copy={"Connect With Us"}
                />
                <Box width={540} mt={2}>
                    <FormControl fullWidth>
                        <Box><TextField required id="Name" label="Name" variant="outlined" fullWidth /></Box>
                        <Box mt={3} ><TextField required id="email-dress" label="Email address" variant="outlined" fullWidth /></Box>
                        <FormHelperText sx={{ textAlign: 'right' }} id="email-dress">
                            We'll never share your email.
                        </FormHelperText>
                        <Box mt={1} ><TextField id="contact" label="Phone Number" variant="outlined" fullWidth /></Box>
                        <FormHelperText sx={{ textAlign: 'right' }} id="contact">
                            Optional
                        </FormHelperText>
                        <Box mt={1}><TextField required id="message" label="Message" variant="outlined" fullWidth /></Box>
                        <Box mt={2} component={"div"} className="flex-end">
                            <Button endIcon={<SendIcon fontSize={"medium"} />} sx={{ width: "25%", fontSize: 18, alignItems: 'center', justifyContent: 'space-between', display: 'flex', backgroundColor: "#f2b07e" }} variant="contained">Send</Button>
                        </Box>
                    </FormControl>
                </Box>
            </Box>
        </div>
    );
}
