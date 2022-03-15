import React from 'react'

import {
    Grid,
    Typography
} from "@mui/material";

const Success = ({ Backbtn }) => {
    return (
        <>

            <div className="form_body">
                <Grid container className="mt">
                    <Grid item xs={12} md={12} sm={12}>
                        <Typography className="mb" variant="h6">
                            Image Upload and Preview Component
                        </Typography>
                        <div className="form_back">
                            <div className="form_overlay">
                                <div className="final_success_card">
                                    <div className="success_message">Thank you! </div>
                                    <div>Your Information has been received. </div>
                                </div>
                                <Grid
                                    item
                                    xs={12}
                                    md={12}
                                    sm={12}
                                    className="d-flex mt"
                                >
                                    <button
                                        className="btn SubmitBtn"
                                        onClick={Backbtn}
                                    >
                                        Upload another ID proof
                                    </button>

                                </Grid>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </>
    )
}

export default Success
