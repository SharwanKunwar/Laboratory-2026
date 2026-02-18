import React, { useState } from 'react';
import { DatePicker, Select, Button, Modal, Input, Form } from 'antd';
import { FiPlus, FiTrash2 } from "react-icons/fi";
import useTaskStore from '../data/taskStore';

function Navbar({ onPriorityChange, onDateChange }) {
  const [form] = Form.useForm();
  const [date, setDate] = useState(null); // selected date
  const [open, setOpen] = useState(false);
  const [priority, setPriority] = useState(null); // selected priority

  const addTask = useTaskStore((state) => state.addTask);
  const deleteAllTasks = useTaskStore((state) => state.deleteAllTasks);

  const priorityOptions = [
    { value: "high", label: "🔴 Highest Priority", color: "red", name: "Highest" },
    { value: "medium", label: "🟡 Medium Priority", color: "orange", name: "Medium" },
    { value: "low", label: "🟢 Lower Priority", color: "green", name: "Lower" },
  ];


  

  return (
    <div className=' bg-white/40 h-18 border-b w-full border-white/50 backdrop-blur-2xl flex gap-1 z-50 rounded-tr-md'>
      
      {/* Priority selector */}
      <div className='w-[30%] h-full px-5 flex justify-start items-center'>
        <div className='w-50 h-[60%]'>
          <Select
            placeholder="Choose Priority"
            size="large"
            className="w-full h-full rounded!"
            value={priority?.value || null}
            onChange={(value) => {
              const selected = priorityOptions.find(p => p.value === value);
              setPriority(selected);
              onPriorityChange(selected); // send object to TaskPage
            }}
            options={priorityOptions.map(p => ({ value: p.value, label: p.label }))}
          />
        </div>  
      </div>

      {/* Other buttons: DatePicker, Add Task, Delete All, Profile */}
      <div className='w-[70%] h-full px-5 flex justify-end items-center gap-5'>
        
        <DatePicker
          size="large"
          className="w-34 rounded-xl shadow!"
          value={date}
          onChange={(value) => {
            setDate(value);
            onDateChange(value ? value.format("YYYY-MM-DD") : null); // send selected date
          }}
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
          onClick={() => {
            if (window.confirm("Do you want to delete all your existing tasks?")) {
              deleteAllTasks();
            }
          }}
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
            addTask(values);
            setOpen(false);
            form.resetFields();
          }}
        >
          <Form.Item label="Title" name="title" rules={[{ required: true }]}>
            <Input placeholder="Enter Title" />
          </Form.Item>

          <Form.Item label="Description" name="description" rules={[{ required: true }]}>
            <Input.TextArea rows={4} placeholder="Enter Description" />
          </Form.Item>

          <Form.Item label="Priority" name="priority" rules={[{ required: true }]}>
            <Select
              placeholder="Choose Priority"
              options={priorityOptions.map(p => ({ value: p.value, label: p.label }))}
            />
          </Form.Item>

          <div className="flex justify-end gap-2">
            <Button onClick={() => setOpen(false)}>Cancel</Button>
            <Button type="primary" htmlType="submit">Save Task</Button>
          </div>
        </Form>
      </Modal>
    </div>
  );
}

export default Navbar;
