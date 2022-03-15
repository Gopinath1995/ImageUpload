import React, { useState } from 'react'
import {
    Grid,
    Typography,
} from "@mui/material";
import InsertPhotoIcon from '@material-ui/icons/InsertPhoto';
import './ImageUpload.css'
const ImageUpload = ({ setshowdiv2, setshowdiv1 }) => {

    const [imageFile, setimageFile] = React.useState();
    const [imageFileSize, setimageFileSize] = useState(false);
    const [imageFileTypeError, setimageFileTypeError] = useState(false);
    const [imageFileShow, setimageFileShow] = useState("");
    const [imageFileError, setimageFileError] = useState(false);

    //======On Change Functionalities======//
    const DrivingHandler = (event) => {
        setimageFileTypeError(false);
        setimageFileError(false);
        const fileTypes = [
            "image/jpg",
            "image/jpeg",
            "image/png",
            "application/pdf",
            "image/heif",
        ];
        if (
            event.target.files.length != 0 &&
            fileTypes.includes(event.target.files[0].type)
        ) {
            if (
                event.target.files.length != 0 &&
                (event.target.files[0].type === "image/jpeg" ||
                    event.target.files[0].type === "image/png" ||
                    event.target.files[0].type === "image/jpg")
            ) {
                setimageFile(event.target.files);
                setimageFileShow(
                    event.target.files.length != 0
                        ? URL.createObjectURL(event.target.files[0])
                        : ""
                );
                setimageFileError(false);
            } else if (
                event.target.files.length != 0 &&
                (event.target.files[0].type === "application/pdf" ||
                    event.target.files[0].type === "image/heif")
            ) {
                setimageFile(event.target.files);
                setimageFileShow("");
                setimageFileError(false);
            }
        } else {
            setimageFileShow("");
            setimageFile();
            setimageFileError(false);
            setimageFileTypeError(true);
        }

        const fileSize =
            event.target.files.length != 0
                ? event.target.files[0].size / 1024 / 1024
                : "";
        if (event.target.files.length != 0 && fileSize > 4) {
            setimageFileError(false);
            setimageFileTypeError(false);
            setimageFileSize(true);
        } else {
            setimageFileSize(false);
        }
    };

    const next2 = (e) => {
        if (
            imageFile === undefined ||
            imageFile === "" ||
            imageFile.length == 0
        ) {
            setimageFileError(true);
            setimageFileTypeError(false);
        } else if (imageFileSize == true) {
            return 0;
        } else {
            window.scrollTo(0, 0);
            setshowdiv2(true);
            setshowdiv1(false);
        }
    };

    const EnterKeynext = (evt) => {
        if (evt.keyCode == 13) {
            next2();
        }
    };

    return (
        <>
            <div className="form_body">
                <Grid container className="mt">
                    <Grid item xs={12} md={12} sm={12}>
                        <Typography style={{ textAlign: "center" }} className="mb" variant="h6">
                            Image Upload and Preview Component
                        </Typography>
                        <div className="form_back">
                            <div className="form_overlay">
                                <Typography className="pt mx" variant="subtitle1">
                                    Upload User Identification
                                </Typography>
                                <Typography className="mx my gray-text" variant="subtitle1">
                                    To keep your data secure and confirm your identity, please
                                    upload a picture of your driver's license or other government
                                    issued ID.
                                </Typography>
                                <Grid container spacing={3} className="px py">
                                    <Grid item xs={12} md={6} sm={12}>
                                        <div className="license-card">
                                            {imageFile ? (
                                                <div>
                                                    Click 'Next' to continue or upload a new image
                                                    <br />
                                                    <span style={{ fontSize: "14px" }}>
                                                        Please make sure your name and date of birth are
                                                        visible in the image
                                                    </span>
                                                </div>
                                            ) : (
                                                ""
                                            )}
                                        </div>
                                        <div className="d-inline-flex">
                                            <label
                                                htmlFor="file-upload"
                                                className="custom-file-upload"
                                            >
                                                {imageFile ? (
                                                    imageFile.length > 0 ? (
                                                        imageFile[0].name
                                                    ) : (
                                                        <span className="d-flex">
                                                            <InsertPhotoIcon
                                                                style={{ width: "20px", marginRight: "5px" }}
                                                            />
                                                            Upload Photo ID
                                                        </span>
                                                    )
                                                ) : (
                                                    <span className="d-flex">
                                                        <InsertPhotoIcon
                                                            style={{ width: "20px", marginRight: "5px" }}
                                                        />
                                                        Upload Photo ID
                                                    </span>
                                                )}
                                            </label>
                                            <span className="img-label">
                                                Supports png, jpeg, jpg, pdf, heif
                                            </span>
                                            <input
                                                id="file-upload"
                                                data-max-size="32154"
                                                accept=".png, .jpeg, .jpg, .pdf, .heif"
                                                type="file"
                                                name="vaccinationFile"
                                                onChange={DrivingHandler}
                                            />
                                        </div>
                                        {imageFileError ? (
                                            <div className="errorText mt">Please upload photo ID</div>
                                        ) : (
                                            <div></div>
                                        )}
                                        {imageFileSize ? (
                                            <div className="errorText mt">
                                                File size should not exceed more than 4 mb
                                            </div>
                                        ) : (
                                            <div></div>
                                        )}
                                        {imageFileTypeError ? (
                                            <div className="errorText mt">
                                                Please upload image with required type
                                            </div>
                                        ) : (
                                            <div></div>
                                        )}
                                    </Grid>
                                    <Grid item xs={12} md={6} sm={12}>
                                        {imageFile &&
                                            imageFile.length > 0 &&
                                            imageFile[0].type != "application/pdf" &&
                                            imageFile[0].type != "image/heif" &&
                                            imageFile[0].type !== "" ? (
                                            <div className="preview-img">
                                                <img
                                                    alt="Preview-license"
                                                    src={
                                                        imageFile
                                                            ? imageFile.length > 0
                                                                ? imageFileShow
                                                                : ""
                                                            : ""
                                                    }
                                                ></img>
                                            </div>
                                        ) : (
                                            ""
                                        )}
                                    </Grid>
                                </Grid>
                                <Grid container spacing={3} className="px py">
                                    <Grid item xs={12} md={12} sm={12}>
                                        <div className="d-flex">
                                            <div>
                                                <button className="btn" onClick={next2}>
                                                    Next
                                                </button>
                                            </div>
                                        </div>
                                    </Grid>
                                </Grid>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </>
    );
}

export default ImageUpload