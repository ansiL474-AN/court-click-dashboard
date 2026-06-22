"use client";

import { Modal } from "antd";

interface Props {
  open: boolean;
  setOpen: (value: boolean) => void;
}

export default function ViewModal({
  open,
  setOpen,
}: Props) {
  return (
    <Modal
      title="Order Details"
      open={open}
      onCancel={() => setOpen(false)}
      footer={null}
    >
      <p>
        <strong>Applicant:</strong> John Doe
      </p>

      <p>
        <strong>Court:</strong> High Court
      </p>

      <p>
        <strong>Product:</strong> Subscription
      </p>

      <p>
        <strong>Date:</strong> 22 Jun 2026
      </p>
    </Modal>
  );
}