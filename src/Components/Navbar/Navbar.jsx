// /* eslint-disable no-unused-vars */
// import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import CssBaseline from '@mui/material/CssBaseline';
// import useScrollTrigger from '@mui/material/useScrollTrigger';
// import logo_dark from "../../assets/images/logo_dark.png";
// import { Fab, IconButton, Tooltip, Badge } from '@mui/material';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import { useNavigate } from 'react-router-dom';
// import { cartContext, userContext } from '../../App';
// import { useState } from 'react';
// import { localStorageHandler } from '../../assets/FakeData/FakeData';
// // import { IncrementCounter } from './OrderMeal/OrderMeal.jsx';

// // This function Applies a visual effect to the navbar
// // when scrolling.
// function ElevationScroll(props) {
//     const { children, window } = props;

//     const trigger = useScrollTrigger({
//         disableHysteresis: true,
//         threshold: 0,
//         target: window ? window() : undefined,
//     });

//     return React.cloneElement(children, {
//         elevation: trigger ? 4 : 0,
//     });
// }

// const Navbar = (props) => {
//     // Scrolling Bug Fixed
//     window.scroll({ top: 0 });

//     // Get States From Context
//     const [cart, setCart] = React.useContext(cartContext);
//     const userInfo = localStorageHandler('get', 'userInfo')
//     const { isUserLoggedInState } = React.useContext(userContext);
//     const [isUserLoggedIn, setIsUserLoggedIn] = isUserLoggedInState;
//     // const [cartCounter, setCartCounter] = useState(0)

//     const navigate = useNavigate();
// const cartCounter =0
//     // Logout Handler
//     const handleLogOut = () => {
//         setIsUserLoggedIn(!isUserLoggedIn)
//         localStorageHandler('remove', 'userInfo')
//     }

//     return (
//         <React.Fragment>
//             <CssBaseline />
//             <ElevationScroll {...props}>
//                 <AppBar sx={{ height: '3.7rem', backgroundColor: 'white' }}>
//                     <div className='flex my-auto sm:px-9 px-4 justify-between'>

//                         {/* Brand Icon*/}
//                         <img onClick={() => navigate('/home')}
//                             className='h-8 my-auto cursor-pointer'
//                             src={logo_dark}
//                             onLoad={React.lazy}
//                             alt="red_onion" />


//                         {/* Buttons Goes here*/}
//                         <div className='sm:space-x-4 space-x-2'>
//                             Cart button
//                             <Tooltip
//                                 placement='left'
//                                 title='Cart'>
//                                 <span>
//                                     <IconButton
//                                         onClick={() => navigate('/cart')}
//                                         // disabled={cart.length < 1}
//                                         aria-label="Cart">
//                                         <Badge badgeContent={cart.length} color="error">
//                                             <ShoppingCartIcon fontSize='inherit' />
//                                         </Badge>
//                                     </IconButton>
//                                 </span>
//                             </Tooltip>
//                             <>
//                                 {!isUserLoggedIn ?
//                                     // Login
//                                     <Fab
//                                         onClick={() => navigate('/login')}
//                                         sx={{ px: 2, textTransform: 'capitalize' }}
//                                         variant="extended"
//                                         size="small"
//                                         color='error'>
//                                         Login

//                                     </Fab>

//                                     // LogOut
//                                     : <Fab
//                                         onClick={handleLogOut}
//                                         sx={{ px: 2, textTransform: 'capitalize' }}
//                                         variant="extended"
//                                         size="small"
//                                         color='error'>
//                                         Logout
//                                     </Fab>
//                                 }
//                             </>

//                         </div>
//                     </div>
//                 </AppBar>
//             </ElevationScroll>
//             <Toolbar />
//         </React.Fragment>
//     )
// };

// export default Navbar;


/* eslint-disable no-unused-vars */
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import logo_dark from "../../assets/images/logo_dark.png";
import { Fab, IconButton, Tooltip, Badge } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate } from 'react-router-dom';
import { cartContext, userContext } from '../../App';
import { useState } from 'react';
import { localStorageHandler } from '../../assets/FakeData/FakeData';
// import { resetForm } from '../DeliveryDetailsForm/DeliveryDetailsForm'; // Import resetForm from DeliveryDetailsForm

function ElevationScroll(props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window ? window() : undefined,
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}

const Navbar = (props) => {
    window.scroll({ top: 0 });

    const [cart, setCart] = React.useContext(cartContext);
    const userInfo = localStorageHandler('get', 'userInfo')
    const { isUserLoggedInState } = React.useContext(userContext);
    const [isUserLoggedIn, setIsUserLoggedIn] = isUserLoggedInState;

    const navigate = useNavigate();
    const cartCounter = cart.length;

    const handleLogOut = () => {
        setIsUserLoggedIn(!isUserLoggedIn);
        localStorageHandler('remove', 'userInfo');
        // resetForm(); // Call the resetForm function
    };

    return (
        <React.Fragment>
            <CssBaseline />
            <ElevationScroll {...props}>
                <AppBar sx={{ height: '3.7rem', backgroundColor: 'white' }}>
                    <div className='flex my-auto sm:px-9 px-4 justify-between'>
                        <img onClick={() => navigate('/home')} className='h-8 my-auto cursor-pointer' src={logo_dark} onLoad={React.lazy} alt="red_onion" />
                        <div className='sm:space-x-4 space-x-2'>
                            Cart button
                            <Tooltip placement='left' title='Cart'>
                                <span>
                                    <IconButton onClick={() => navigate('/cart')} aria-label="Cart">
                                        <Badge badgeContent={cartCounter} color="error">
                                            <ShoppingCartIcon fontSize='inherit' />
                                        </Badge>
                                    </IconButton>
                                </span>
                            </Tooltip>
                            <>
                                {!isUserLoggedIn ? (
                                    <Fab onClick={() => navigate('/login')} sx={{ px: 2, textTransform: 'capitalize' }} variant="extended" size="small" color='error'>
                                        Login
                                    </Fab>
                                ) : (
                                    <Fab onClick={handleLogOut} sx={{ px: 2, textTransform: 'capitalize' }} variant="extended" size="small" color='error'>
                                        Logout
                                    </Fab>
                                )}
                            </>
                        </div>
                    </div>
                </AppBar>
            </ElevationScroll>
            <Toolbar />
        </React.Fragment>
    )
};

export default Navbar;
