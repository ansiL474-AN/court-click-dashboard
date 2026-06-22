"use client";

import { Table, Button, Tag, Avatar, Space } from "antd";

interface Props {
  data: any[];
  setOpen: (value: boolean) => void;
  setAssignOpen: (value: boolean) => void;
  setTagOpen: (value: boolean) => void;
  loading: boolean;
}

export default function OrdersTable({
  data,
  setOpen,
  setAssignOpen,
  setTagOpen,
  loading,
}: Props) {
  const columns = [
   {
  title: "User",
render: (_: any, record: any) => (
    <Space>
      <Avatar>
        {record.user.charAt(0)}
      </Avatar>
      {record.user}
    </Space>
  ),
},
    {
      title: "Court",
      dataIndex: "court",
    },
    {
      title: "Product",
      dataIndex: "product",
    },
    {
      title: "Date",
      dataIndex: "date",
    },
    {
      title: "Status",
      render: () => (
       <Tag color="blue">
  Assigned
</Tag>
      ),
    },
    {
      title: "View",
      render: () => (
        <Button
          size="small"
          onClick={() => setOpen(true)}
        >
          View
        </Button>
      ),
    },
    {
      title: "Assign",
      render: () => (
        <Button
          type="primary"
          size="small"
          onClick={() => setAssignOpen(true)}
        >
          Assign
        </Button>
      ),
    },
    {
      title: "Tags",
      render: () => (
        <Button
          size="small"
          onClick={() => setTagOpen(true)}
        >
          Tags
        </Button>
      ),
    },
  ];

  return (
    <Table
      loading={loading}
      columns={columns}
      dataSource={data}
      pagination={{ pageSize: 5 }}
      scroll={{ x: 1000 }}
      locale={{
        emptyText: "No orders found",
      }}
    />
  );
}