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

const LoginPage = () => {
    const [checked, setChecked] = React.useState(true);
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');


    const handleChange = (event: any) => {
        setChecked(event.target.checked);
    };

    return (
        <div style={{ padding: 30 }}>
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
                            formControlProps={{
                                fullWidth: true
                            }}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <CustomInput
                            labelText="Password"
                            id="password"
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
                        <Button color="primary" size={'lg'} className={''} >Update Profile</Button>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
};

export default LoginPage;
