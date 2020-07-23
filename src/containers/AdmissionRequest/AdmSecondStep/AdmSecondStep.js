import React from "react";
import { TextField, Grid } from '@material-ui/core';
import { Check, Close } from '@material-ui/icons';
const AdmSecondStep = () => {
    return (
        <>
            <form>
                <Grid container>
                    <Grid item xs={12}>
                        {<Check className="validate-icon icon-success" />}
                        {<Close className="validate-icon icon-error" />}
                        <TextField />
                    </Grid>
                    <Grid item xs={12}>
                        {<Check className="validate-icon icon-success" />}
                        {<Close className="validate-icon icon-error" />}
                        <TextField  />
                    </Grid>
                    <Grid item xs={12}>
                        {<Check className="validate-icon icon-success" />}
                        {<Close className="validate-icon icon-error" />}
                        <TextField />
                    </Grid>
                </Grid>
            </form>
        </>
    )
}

export default AdmSecondStep