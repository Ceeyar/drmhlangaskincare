import * as React from 'react';
import Tab from '@mui/material/Tab';
import { Box } from '@mui/material';
import Tabs from '@mui/material/Tabs';
import LOGO from '../../assets/images/logo.png';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider, createStyles } from '@mui/material/styles';
import './Header.scss';
import 'assets/styles/Colors.scss';

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

const theme = createTheme({
    palette: {
        primary: {
            main: '#ffffff',
        },
    },
});

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`home-tabpanel-${index}`}
            aria-labelledby={`home-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `home-tab-${index}`,
        'aria-controls': `home-tabpanel-${index}`,
    };
}

const menuItemStyle = createStyles({
    color: '#f2b07e',
    textTransform: 'capitalize'
})

const menuItems = [

    {
        id: 0,
        name: "About Us"
    },
    {
        id: 1,
        name: "Treatment"
    },
    {
        id: 2,
        name: "Contact"
    },
    {
        id: 3,
        name: "Appointment"
    },
]
export default function Header() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
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
                                menuItems.map(item => <Tab sx={menuItemStyle} label={item.name} {...a11yProps(item.id)} key={item.id} />)
                            }
                        </Tabs>
                    </Box>
                </div>
                {
                    menuItems.map(item => <TabPanel value={value} index={item.id} key={item.id}>
                        {item.name}
                    </TabPanel>)
                }
            </Box>
        </ThemeProvider>
    );
}
