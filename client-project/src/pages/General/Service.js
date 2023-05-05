import React from "react";
import { Table, Button, Tooltip, Space } from "antd";

export const Service = () => {
  const dataSource = [
    {
      key: "1",
      id: "1193055118",
      products: "pasta terminca",
      Count: "1",
      State: "Activo",
    },
    {
      key: "2",
      id: "1000544887",
      products: "audifonos",
      Count: "10",
      State: "Activo",
    },
    {
      key: "3",
      id: "125455688",
      products: "ram",
      Count: "10",
      State: "Activo",
    },
    {
      key: "4",
      id: "1125684544",
      products: "computador",
      Count: "2",
      State: "Activo",
    },
    {
      key: "5",
      id: "12246488",
      products: "computador",
      Count: "2",
      State: "Activo",
    },
    {
      key: "6",
      id: "111935588",
      products: "computador",
      Count: "2",
      State: "Activo",
    },
    {
      key: "6",
      id: "100112548",
      products: "computador",
      Count: "2",
      State: "Activo",
    },
 
  ];

  const columns = [
    {
      title: "id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "products",
      dataIndex: "products",
      key: "products",
    },
    {
      title: "Count",
      dataIndex: "Count",
      key: "count",
    },
    {
      title: "State",
      dataIndex: "State",
      key: "state",
    },
    
    {
      title: "Actions",
      key: "actions",
      render: (text, record) => (
        <Tooltip title="Search">
          <Space wrap>
            <Button type="primary">Editar</Button>
            <Button>Eliminar</Button>
            <Button type="dashed">Actualizar</Button>
            <Button type="dashed">Buscar</Button>
          </Space>
        </Tooltip>
      ),
    },

  ];
  
  const pagination = {
    pageSize: 5,
    /*total: data.length*/
  }


  return (
    <div>
      <h1>Lista de servicios</h1>
      <Button>NUEVO</Button>
      <Table dataSource={dataSource} columns={columns} pagination={pagination} />
    </div>
  );
};
