import { Button, Grid } from '@material-ui/core';
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { register } from 'actions/services/UserActions';
import { useEffect } from 'react';
export default function RegisterPage(props) {

    const dispatch = useDispatch();

    const [fullName, setFullName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [dateOfBirth, setDateOfBirth] = useState("")

    useEffect(() => {

        document.title = "Đăng ký tài khoản"

        let isAuth = localStorage.getItem('token')
        if (isAuth && isAuth !== 'undefined') {
            props.history.push('/')
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            fullName, phone, email, username, password, dateOfBirth
        }
        dispatch(register(data, props.history));
        // console.log(data);
    }

    return (
        <>
            <div className="row sm-gutter section__content">
                <div className="col l-12 m-12 c-12">
                    <div className="home-product">
                        <div className="row sm-gutter section__item">
                            <div className="col l-6 m-4 c-4">
                                <div className="content-left">
                                    <h2>Quên mật khẩu</h2>
                                    <p>Lấy lại tài khoản để đặng nhập mua hàng trên trang web. </p>
                                    <img src="https://pipe.tikicdn.com/media/upload/2018/10/12/2a3acb91a35d45e1b4b7c96912a0c84a.png" alt="" />
                                </div>
                            </div>
                            <div className="col l-6 m-8 c-8">
                                <ValidatorForm onSubmit={handleSubmit}>
                                    <Grid className="" container spacing={2}>
                                        <Grid item sm={12} xs={12}>
                                            <TextValidator
                                                className="input-text"
                                                type="text"
                                                name="fullName"
                                                value={fullName}
                                                onChange={(e) => setFullName(e.target.value)}
                                                label={
                                                    <span>
                                                        <span style={{ color: "red" }}>*</span>
                                                        Email
                                                    </span>
                                                }
                                                validators={["required"]}
                                                errorMessages={["Trường này không được để trống"]}
                                            />
                                        </Grid>
                                        
                                        <Grid item sm={12} xs={12}>
                                            <Button
                                                variant="outlined" color="secondary"
                                                style={{ margin: '10px 0', width: '100%' }}
                                                className="btn btn--e-transparent-brand-b-2"
                                                type="submit"
                                            >Gửi</Button>
                                        </Grid>
                                    </Grid>
                                </ValidatorForm>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
