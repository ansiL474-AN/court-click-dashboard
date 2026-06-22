"use client";

import { useState } from "react";
import { orders } from "./data/orders";
import { Order } from "./types/order";
import OrdersTable from "./components/OrdersTable";
import ViewModal from "./components/ViewModal";
import {
  Layout,
  Input,
  Button,
  Table,
  Avatar,
  Space,
  Tag,
  Card,
  Row,
  Col,
  Modal,
   Select,
    Checkbox,
} from "antd";

import {
  SearchOutlined,
  FilterOutlined,
  UserOutlined,
} from "@ant-design/icons";

const { Header, Sider, Content } = Layout;

export default function Home() {
  const [open, setOpen] = useState(false);
  const [filterOpen, setFilterOpen] = useState(false);
  const [assignOpen, setAssignOpen] = useState(false);
const [tagOpen, setTagOpen] = useState(false);
const [searchText, setSearchText] = useState("");
const [loading] = useState(false);
 

  const allData: Order[] = orders;
const data = allData.filter((item) =>
  item.user.toLowerCase().includes(searchText.toLowerCase()) ||
  item.court.toLowerCase().includes(searchText.toLowerCase())
);
  return (
    <Layout style={{ overflow: "auto" }}>
      <Sider width={70} theme="dark">
        <div
          style={{
            padding: 20,
            textAlign: "center",
          }}
        >
          <Avatar
            size={40}
            icon={<UserOutlined />}
          />
        </div>
      </Sider>

      <Layout>
      <Header
  style={{
    background: "#fff",
    padding: "10px 20px",
    height: "auto",
    lineHeight: "normal",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "10px",
  }}
>
        <div>
  <h2 style={{ margin: 0 }}>
    Court Click Dashboard
  </h2>

  <p style={{ margin: 0, color: "gray" }}>
    Manage orders and court requests
  </p>
</div>

          <Space wrap>
           <Input
  placeholder="Search user..."
  prefix={<SearchOutlined />}
  value={searchText}
  onChange={(e) => setSearchText(e.target.value)}
  style={{ width: 250 }}
/>
<Button
  icon={<FilterOutlined />}
  onClick={() => setFilterOpen(true)}
>
  Filter
</Button>
          </Space>
        </Header>

        <Content style={{ padding: 20 }}>
          <Row gutter={16} style={{ marginBottom: 20 }}>
           <Col xs={24} sm={12} md={6}>
            <Card>
  <h3>Orders</h3>
  <h1>120</h1>
</Card>
            </Col>

            <Col xs={24} sm={12} md={6}>
          <Card>
      <h3>Clerks</h3>
      <h1>48</h1>
    </Card>
            </Col>

            <Col xs={24} sm={12} md={6}>
      <Card>
      <h3>Courts</h3>
      <h1>32</h1>
    </Card>

            </Col>

            <Col xs={24} sm={12} md={6}>
     <Card>
      <h3>Districts</h3>
      <h1>14</h1>
    </Card>
            </Col>
          </Row>

         <OrdersTable
  data={data}
  loading={loading}
  setOpen={setOpen}
  setAssignOpen={setAssignOpen}
  setTagOpen={setTagOpen}
/>


<div
  style={{
    textAlign: "center",
    marginTop: 20,
    color: "gray",
  }}
>
  Court Click Dashboard © 2026
</div>

<ViewModal
  open={open}
  setOpen={setOpen}
/>
       <ViewModal
  open={open}
  setOpen={setOpen}
/>   
          <Modal
  title="Filter Users"
  open={filterOpen}
  onCancel={() => setFilterOpen(false)}
  footer={null}
>
  <Space
    direction="vertical"
    style={{ width: "100%" }}
  >
    <Select
      placeholder="District"
      options={[
        { value: "Thrissur", label: "Thrissur" },
        { value: "Ernakulam", label: "Ernakulam" },
      ]}
    />

    <Select
      placeholder="Court"
      options={[
        { value: "District Court", label: "District Court" },
        { value: "High Court", label: "High Court" },
      ]}
    />

    <Select
      placeholder="Product"
      options={[
        { value: "Subscription", label: "Subscription" },
        { value: "Case Filing", label: "Case Filing" },
      ]}
    />

    <Button type="primary">
      Apply Filter
    </Button>
  </Space>
</Modal> 
<Modal
  title="Assign Clerk"
  open={assignOpen}
  onCancel={() => setAssignOpen(false)}
  footer={null}
>
  <Space
    direction="vertical"
    style={{ width: "100%" }}
  >
    <Select
      placeholder="Select Clerk"
      options={[
        {
          value: "John",
          label: "John",
        },
        {
          value: "David",
          label: "David",
        },
        {
          value: "Rahul",
          label: "Rahul",
        },
      ]}
    />

    <Button type="primary">
      Assign
    </Button>
  </Space>
</Modal>
<Modal
  title="Assign Tags"
  open={tagOpen}
  onCancel={() => setTagOpen(false)}
  footer={null}
>
  <Space wrap>
  <Tag color="orange">Subscription Pending</Tag>
  <Tag color="blue">Quick Process</Tag>
  <Tag color="green">Follow Up</Tag>
  <Tag color="red">Priority</Tag>
</Space>
</Modal>
        </Content>
      </Layout>
    </Layout>
  );
}