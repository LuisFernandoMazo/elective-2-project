import React, { useState, useEffect } from "react";
import { Layout, Form, Input, Button, Select } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import axios from "axios";
import { Alert } from 'antd';
import "./RegisterLayout.scss";

const { Option } = Select;
const { Header, Footer, Content } = Layout;

export const RegisterLayout = () => {
  const [departamentos, setDepartamentos] = useState([]);
  const [municipios, setMunicipios] = useState([]);
  const [registerSuccess, setRegisterSuccess] = useState(false);
  const [registerError, setRegisterError] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:3200/api/v1/departamentos")
      .then((response) => {
        const data = response.data;
        setDepartamentos(data);
      })
      .catch((error) => {
        console.error("Error  departamentos:", error);
      });
  }, []);

  console.log(departamentos);

  const handleDepartmentChange = (value) => {
    const selectedDepartment = departamentos.find(
      (departamento) => departamento._id === value
    );

    if (selectedDepartment) {
      setMunicipios(selectedDepartment.municipios);
    } else {
      setMunicipios([]);
    }
  };

 
  const onFinish = (values) => {
    const registerData = {
      ...values,
      departamento: values.departamento,
      municipio: values.municipio,
    };
  
    axios
      .post("http://localhost:3200/api/v1/auth/register", registerData)
      .then((response) => {
        console.log("Success:", response.data);
        setRegisterSuccess(true);
      })
      .catch((error) => {
        console.error("Error registering:", error);
        setRegisterError(true);
      });
  };
  

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Layout>
      <Header className="header">{}</Header>
      <Layout>
        <Content>
          <div className="register-form">
           <h2 className="register-title">FORMULARIO DE REGISTRO</h2>
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
                name="firstname"
                rules={[
                  {
                    required: true,
                    message: "Por favor ingrese su nombre!",
                  },
                ]}
              >
                <Input
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="First Name"
                />
              </Form.Item>
              <Form.Item
                name="lastname"
                rules={[
                  {
                    required: true,
                    message: "Por favor ingresa tu apellido!",
                  },
                ]}
              >
                <Input
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="Last Name"
                />
              </Form.Item>
              <Form.Item
                name="email"
                rules={[
                  {
                    required: true,
                    message: "Por favor ingresa tu email!",
                  },
                ]}
              >
                <Input
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="email"
                  placeholder="Email"
                />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Por favor ingresa la contraseña!",
                  },
                ]}
              >
                <Input
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="Password"
                />
              </Form.Item>
              <Form.Item
                name="departamento"
                rules={[
                  {
                    required: true,
                    message: "Por favor ingresa el departamento!",
                  },
                ]}
              >
                <Select
                  placeholder="Select department"
                  onChange={handleDepartmentChange}
                >
                  {departamentos.map((departamento) => (
                    <Option key={departamento._id} value={departamento._id}>
                      {departamento._id}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
              <Form.Item
                name="municipio"
                rules={[
                  {
                    required: true,
                    message: "Please select your municipality!",
                  },
                ]}
              >
                <Select placeholder="Select municipality">
                  {municipios.map((municipio) => (
                    <Option key={municipio} value={municipio}>
                      {municipio}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                >
                  Registrarse
                </Button>
                <a href="http://localhost:3000/admin/sign-in">iniciar sesion</a>
              </Form.Item>
            </Form>
            {registerSuccess && (
              <Alert
                message="Registro exitoso"
                description="Tu registro ha sido exitoso. ¡Bienvenido!"
                type="success"
                showIcon
              />
            )}
            {registerError && (
              <Alert
                message="Error de registro"
                description="Verifica que los datos se han correctos"
                type="error"
                showIcon
              />
              
            )}
          </div>
        </Content>
      </Layout>
      <Footer>{ }</Footer>
    </Layout>
  );
};
