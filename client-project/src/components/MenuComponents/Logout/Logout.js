import React from "react";
import { Button, Modal } from "antd";
import { LogoutOutlined } from "@ant-design/icons";



export const Logout = () => {
    const handleLogout = () => {
        Modal.confirm({
            title: "Cerrar sesión",
            content: "Estas seguro de cerrrar sesion",
            onOk: () => {
                alert('cerrando sesion');
                window.location.href = "http://localhost:3000/admin/sign-in";
            },
        });
    };
    return (
        <Button type="link" onClick={handleLogout}>
           <LogoutOutlined/>
        </Button>
        
    );
};