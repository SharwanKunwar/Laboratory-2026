import React, { useState } from 'react';
import { DatePicker, Select, Button, Modal, Input, Form } from 'antd';
import { FiPlus, FiTrash2 } from "react-icons/fi";
import useTaskStore from '../data/taskStore';

function Navbar() {
  const [form] = Form.useForm();
  const [date, setDate] = useState(null);
  const [open, setOpen] = useState(false);

  // Zustand store
  const addTask = useTaskStore((state) => state.addTask);
  const deleteAllTasks = useTaskStore((state) => state.deleteAllTasks);

  return (
    <div className='absolute bg-white/30 h-18 border-b top-0 left-0 w-full border-white/50 backdrop-blur-2xl flex gap-1'>
      
      {/* Priority option selector (outside modal) */}
      <div className='w-[30%] h-full px-5 flex justify-start items-center'>
        <div className='w-50 h-[60%]'>
          <Select
            placeholder="Choose Priority"
            size="large"
            className="w-full h-full rounded!"
            options={[
              { value: "high", label: "🔴 Highest Priority" },
              { value: "medium", label: "🟡 Medium Priority" },
              { value: "low", label: "🟢 Lower Priority" },
            ]}
          />
        </div>  
      </div>

      {/* Other buttons: datepicker, add, delete, profile */}
      <div className='w-[70%] h-full px-5 flex justify-end items-center gap-5'>
        
        <DatePicker
          size="large"
          className="w-34 rounded-xl shadow!"
          value={date}
          onChange={(value) => setDate(value)}
          format="YYYY-MM-DD"
        />

        <Button
          type='primary'
          onClick={() => setOpen(true)}
          size="large"
          className="px-5! flex items-center gap-2 shadow!"
        >
          <FiPlus /> Add Task
        </Button>

        <Button
          size="large"
          className="px-5! flex items-center gap-2 shadow!"
          onClick={deleteAllTasks}
        >
          <FiTrash2 /> Delete All
        </Button>

        <div className='bg-linear-to-br from-indigo-400 to-pink-400 via-orange shadow p-1 rounded-full w-[50px] h-[50px]'>
          <img
            src="profile.jpg"
            alt="profile"
            className='w-full h-full object-cover rounded-full shadow'
          />
        </div>
      </div>

      {/* Modal for Add Task */}
      <Modal
        title="Add New Task"
        open={open}
        onCancel={() => setOpen(false)}
        footer={null}
      >
        <Form
          form={form}
          layout="vertical"
          onFinish={(values) => {
            const taskWithTimestamp = {
              ...values,
              createdAt: new Date(), // automatically add timestamp
            };

            addTask(taskWithTimestamp); // add task to Zustand store
            setOpen(false);
            form.resetFields();
          }}
        >
          {/* Title */}
          <Form.Item
            label="Title"
            name="title"
            rules={[{ required: true, message: "Please enter task title!" }]}
          >
            <Input placeholder="Enter Title" />
          </Form.Item>

          {/* Description */}
          <Form.Item
            label="Description"
            name="description"
            rules={[{ required: true, message: "Please enter task description!" }]}
          >
            <Input.TextArea rows={4} placeholder="Enter Description" />
          </Form.Item>

          {/* Priority */}
          <Form.Item
            label="Priority"
            name="priority"
            rules={[{ required: true, message: "Please select priority!" }]}
          >
            <Select
              placeholder="Choose Priority"
              options={[
                { value: "high", label: "🔴 Highest Priority" },
                { value: "medium", label: "🟡 Medium Priority" },
                { value: "low", label: "🟢 Lower Priority" },
              ]}
            />
          </Form.Item>

          <div className="flex justify-end gap-2">
            <Button onClick={() => setOpen(false)}>Cancel</Button>
            <Button type="primary" htmlType="submit">
              Save Task
            </Button>
          </div>
        </Form>
      </Modal>
    </div>
  );
}

export default Navbar;
