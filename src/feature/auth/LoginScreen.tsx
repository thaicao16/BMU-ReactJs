import React from 'react';
import {
    Checkbox,
    Grid,
    TextField,
    FormControlLabel,
    Paper,
    Box
} from '@material-ui/core';

import CustomInput from '../../components/CustomInput/CustomInput'
import Button from '../../components/CustomButtons/Button'
// import Button from "@material-ui/core/Button";
import useViewModel from './LoginViewModel';
import { NetWorkAction } from '../../api/NetWorkReducer';
import GridContainer from '../../components/Grid/GridContainer';
import GridItem from '../../components/Grid/GridItem';

const LoginPage = () => {
    const [checked, setChecked] = React.useState(true);

    const {
        userName,
        password,
        verifyAuth,
        errors,
        verifyAuthDispatch,
        setUserName,
        setPassword,
        verifyLogin,
    } = useViewModel();

    const onLoginButtonClick = () => {
        verifyLogin();
    };

    const handleChange = (event: any) => {
        // setChecked(event.target.checked);
        console.log(event.target.value);

    };

    const userNameHandleChange = (event: any) => {
        setUserName(event.target.value);
    }

    return (
        // <div style={{ padding: 30 }}>
        <div>
            {/* <GridContainer>
                <GridItem xs={12} sm={12} md={8}> */}
                    <Paper>
                        <Grid
                            container
                            spacing={3}
                            direction={'column'}
                            justify={'center'}
                            alignItems={'center'}
                        >
                            <Grid item xs={12}>
                                <CustomInput
                                    labelText="Email"
                                    id="email"
                                    inputProps={{
                                        type: 'text',
                                        value: '',
                                        onChange: { userNameHandleChange }
                                    }}
                                    formControlProps={{
                                        fullWidth: true
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <CustomInput
                                    labelText="Password"
                                    id="password"
                                    inputProps={{
                                        type: 'password',
                                        value: '',
                                        onChange: { handleChange }
                                    }}
                                    formControlProps={{
                                        fullWidth: true
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={checked}
                                            onChange={handleChange}
                                            //   label={'Keep me logged in'}
                                            inputProps={{ 'aria-label': 'primary checkbox' }}
                                        />
                                    }
                                    label="Keep me logged in"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                {/* <a onClick={() => {onLoginButtonClick()}}><Button color= 'primary' size = 'sm' className={'success'}  >Update Profile</Button></a> */}
                                <Button onClickButton={() => { onLoginButtonClick() }} color='primary' size='sm' className={'success'}  >Update Profile</Button>
                            </Grid>
                        </Grid>
                    </Paper>
                {/* </GridItem>
            </GridContainer> */}
        </div>
    );
};

export default LoginPage;
