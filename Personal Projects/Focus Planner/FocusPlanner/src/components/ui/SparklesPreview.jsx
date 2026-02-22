import SparklesCore from "./Sparkles";
import React, { useState } from "react";
import { FaFacebookF, FaInstagram, FaGithub, FaLinkedin, FaGlobe } from "react-icons/fa";
import { motion } from "framer-motion";
import { useFavStore } from "../../data/useFavStore";
import { Input, Form, Button, Modal, Tag, Progress } from "antd";
import taskStore from "../../data/taskStore";
import { ResponsiveContainer, BarChart, XAxis, YAxis, Tooltip, Legend, Bar } from "recharts";

// 🔹 Memoized Favorite Item
const FavoriteItem = React.memo(({ site, removeFavorite }) => (
  <div className="bg-gray-50 shadow-sm w-full py-2 h-[60px] rounded-md flex justify-between items-center px-2 gap-3 ">
    {/* Favicon */}
    <img
      src={`https://www.google.com/s2/favicons?domain=${site.url}`}
      alt={site.name}
      className="bg-indigo-400 p-1 rounded-sm w-10 h-10"
      loading="lazy"
    />

    {/* Site info */}
    <section className="flex-1">
      <h1 className="text-sm font-semibold truncate">{site.name}</h1>
      <p className="text-[10px] text-gray-700">added at: {site.addedAt}</p>
    </section>

    {/* Buttons */}
    <section className="flex gap-3">
      <Button
        size="small"
        type="primary"
        onClick={() => window.open(`https://${site.url}`, "_blank")}
      >
        Open
      </Button>
      <Button size="small" type="primary" danger onClick={() => removeFavorite(site.id)}>
        Remove
      </Button>
    </section>
  </div>
));

export function SparklesPreview() {
  const [isFavModalOpen, setIsFavModalOpen] = useState(false);
  const [isAnalyticsModalOpen, setIsAnalyticsModalOpen] = useState(false);
  const [siteName, setSiteName] = useState("");
  const [siteUrl, setSiteUrl] = useState("");
  const { favorites, addFavorite, removeFavorite } = useFavStore();

  const tasks = taskStore((state) => state.tasks); // Get all tasks

  return (
    <div className="h-full w-full bg-indigo-400 flex flex-col items-center justify-center overflow-hidden rounded-md">
      <div className="w-full h-full relative">
        {/* ------------------------------------------------------------------ */}
        <div className="absolute w-full h-full" style={{ boxShadow: "inset 2px 5px 9px rgba(0,0,0,0.3)" }}>
          <div className="h-full px-5">
            {/* left div */}
            <div className="w-[50%] h-full flex flex-col justify-center gap-1">
              <h1 className="text-white font-bold text-3xl text-shadow-sm">
                Welcome back, Sharwan jung kunwar
              </h1>
              <p className="w-[60%] text-neutral-200 text-shadow-sm">
                You've completed 65% of your semester goals. You're ahead of 82% of your class!
              </p>
              <section className="mt-5 flex gap-3 ">
                <Button size="large" className="px-10! z-50" onClick={() => setIsAnalyticsModalOpen(true)}>
                  View Analytics
                </Button>
                <Button size="large" className="px-10!" onClick={() => alert("Resuming last study...")}>
                  Resume Last Study
                </Button>
              </section>
            </div>

            {/* right div */}
            <div className="absolute text-white w-[50%] h-full top-0 right-0 z-40 flex flex-col items-end justify-end">
              

              <div className="w-[90%] h-[65%] rounded-md flex justify-end items-end flex-col pb-3 pr-3">
                <motion.div layout className="shadow-sm flex items-center gap-5 rounded">
                  {/* Add Favorite Button */}
                  <Button size="large" type="primary" onClick={() => setIsFavModalOpen(true)}>
                    <FaGlobe />
                  </Button>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
        {/* ------------------------------------------------------------------ */}
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[3px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />

        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full bg-indigo-400 [mask-image:radial-gradient(1250px_350px_at_left,transparent_30%,white)]"></div>
      </div>

      {/* Favorite Site Modal */}
      <Modal
        title="Add Favorite Site"
        open={isFavModalOpen}
        destroyOnHidden={false}
        onCancel={() => setIsFavModalOpen(false)}
        onOk={() => {
          if (!siteName || !siteUrl) {
            alert("Both fields are required!");
            return;
          }
          if (!siteUrl.startsWith("https://")) {
            alert("Site URL must start with https://");
            return;
          }

          addFavorite({
            id: Date.now(),
            name: siteName,
            url: siteUrl.replace(/^https?:\/\//, ""),
            addedAt: new Date().toLocaleString(),
          });

          setSiteName("");
          setSiteUrl("");
        }}
        okText="Add"
      >
        <div className="max-h-[300px] min-h-[100px] overflow-y-scroll flex flex-col gap-3 mb-5 hide-scrollbar">
          {favorites.length === 0 && (
            <p className="text-gray-400 text-sm h-[100px] flex justify-center items-center">
              No favorite sites added yet
            </p>
          )}
          {favorites.map((site) => (
            <FavoriteItem key={site.id} site={site} removeFavorite={removeFavorite} />
          ))}
        </div>

        <Form layout="vertical">
          <Form.Item label="Site Name" required>
            <Input placeholder="Site Name" value={siteName} onChange={(e) => setSiteName(e.target.value)} />
          </Form.Item>

          <Form.Item label="Site URL" required>
            <Input placeholder="Site URL (https://example.com)" value={siteUrl} onChange={(e) => setSiteUrl(e.target.value)} />
          </Form.Item>
        </Form>
      </Modal>

      
      {/* Analytics Modal */}
        <Modal
          title="Task Analytics"
          open={isAnalyticsModalOpen}
          onCancel={() => setIsAnalyticsModalOpen(false)}
          footer={null}
          width={700}
        >
          {(() => {
            const now = new Date();
            const completed = tasks.filter((t) => t.status === "completed").length;
            const pending = tasks.filter((t) => t.status === "pending").length;
            const inProgress = tasks.filter((t) => t.status === "inprogress").length;
            const overdue = tasks.filter((t) => {
              const diffDays = (now - new Date(t.createdAt)) / (1000 * 60 * 60 * 24);
              return diffDays > 2 && t.status !== "completed";
            }).length;

            const totalTasks = tasks.length;
            const completionRate = totalTasks ? ((completed / totalTasks) * 100).toFixed(0) : 0;

            const chartData = [
              { name: "Completed", count: completed },
              { name: "Pending", count: pending },
              { name: "In Progress", count: inProgress },
              { name: "Overdue", count: overdue },
            ];

            return (
              <div className="flex flex-col gap-6 overflow-hidden">
                {/* Task Stats Tags */}
                <div className="grid grid-cols-2 gap-3">
                  <Tag color="green" className="flex justify-between items-center px-3 py-1! rounded shadow-sm">
                    Completed: {completed}
                  </Tag>
                  <Tag color="yellow" className="flex justify-between items-center px-3 py-1! rounded shadow-sm">
                    Pending: {pending}
                  </Tag>
                  <Tag color="blue" className="flex justify-between items-center px-3 py-1! rounded shadow-sm">
                    In Progress: {inProgress}
                  </Tag>
                  <Tag color="red" className="flex justify-between items-center px-3 py-1! rounded shadow-sm">
                    Overdue: {overdue}
                  </Tag>
                </div>

                {/* Completion Progress */}
                <div className="flex flex-col gap-2 w-full">
                  <p className="text-sm text-shadow-2xs font-medium">Completion Rate: {completionRate}%</p>
                  <Progress
                    percent={Number(completionRate)}
                    status="active"
                    strokeWidth={8}
                    showInfo={true}
                    className="w-full"
                  />
                </div>

                {/* Chart */}
                <div style={{ width: "100%", height: 300 }}>
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={chartData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
                      <XAxis dataKey="name" />
                      <YAxis allowDecimals={false} />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="count" fill="#1890ff" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            );
          })()}
        </Modal>
    </div>
  );
}