import './Header.scss';
import React, { SyntheticEvent, useState } from 'react';
import 'assets/styles/Colors.scss';
import Tab from '@mui/material/Tab';
import { Box } from '@mui/material';
import Tabs from '@mui/material/Tabs';
import { useNavigate } from 'react-router-dom';
import { MENU_ITEMS } from 'constants/Index';
import { a11yProps } from 'utils/Functions';
import LOGO from '../../assets/images/logo.png';
import { createTheme, ThemeProvider, createStyles } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#ffffff',
        },
    },
});



const menuItemStyle = createStyles({
    color: '#f2b07e',
    textTransform: 'capitalize'
})


export default function Header() {

    const [value, setValue] = useState(0);
    const navigate = useNavigate();

    const handleChange = (event: SyntheticEvent, newValue: number) => {
        console.log(newValue)
        setValue(newValue);
    };

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ width: '100%' }}>
                <div className='header'>
                    <img
                        src={LOGO}
                        alt="LOGO"
                        className='logo'
                        loading="lazy" />

                    <Box sx={{ borderBottom: 1, borderColor: 'divider', flexDirection: 'row', display: 'flex', height: 45, alignItems: 'center', justifyContent: 'center' }}>

                        <Tabs value={value} centered onChange={handleChange} aria-label="home tabs" >
                            {
                                MENU_ITEMS.map(item => <Tab onClick={() => navigate(item.route)} sx={menuItemStyle} label={item.name} {...a11yProps(item.id)} key={item.id} />)
                            }
                        </Tabs>
                    </Box>
                </div>
            </Box>
        </ThemeProvider>
    );
}

