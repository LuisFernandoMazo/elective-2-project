import React from "react";
import { Layout, Form, Input, Button, Checkbox } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import axios from "axios";
import "./LoginLayout.scss";
import { useState, useEffect } from "react";
import { Alert, Space } from 'antd';



const { Content } = Layout;

export const LoginLayout = () => {
  const [LoginSuccess, setLoginSuccess] = useState(false);
  const [LoginError, setLoginError] = useState(false);
  

  const onFinish = (values) => {
    axios
      .post("http://localhost:3200/api/v1/auth/login", values)
      .then((response) => {
        console.log("Success:", response.data);
        setLoginSuccess(true);
        window.location.href = "http://localhost:3002/services/list";
        // Aquí puedes realizar las acciones necesarias después de un inicio de sesión exitoso, como guardar el token de acceso en el almacenamiento local o redirigir al usuario a otra página.
      })
      .catch((error) => {
        console.error("Error:", error.response.data);
        setLoginError(true);
        // Aquí puedes manejar el error, como mostrar un mensaje de error al usuario o restablecer el formulario.
      });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Layout>
      <Content>
        <div className="login-form">
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input your email!",
                },
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="email"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your Password!",
                },
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>
            <Form.Item>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Recordarme </Checkbox>
              </Form.Item>

              <a className="login-form-forgot" href="">
                Recuperar contraseña
              </a>
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                iniciar sesion
              </Button>
              <a href="http://localhost:3002/admin/Registration">Registrarse ahora</a>
              
            </Form.Item>
            {LoginSuccess && (
              <Alert
                message="Inicio de sesión exitoso"
                description=" "
                type="success"
                showIcon
              />
              
            )}
            {LoginError && (
              <Alert
                message="Inicio de sesión fallido"
                description="Verifica tu correo o contraseña "
                type="error"
                showIcon
              />
              
            )}
          </Form>
          
        </div>
      </Content>
    </Layout>
  );
};
