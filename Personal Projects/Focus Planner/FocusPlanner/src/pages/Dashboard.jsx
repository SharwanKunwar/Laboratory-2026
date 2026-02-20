import React, { useState } from "react";
import { SparklesPreview } from "../components/ui/SparklesPreview";
import { Card, Button, Modal } from "antd";
import { motion } from "framer-motion";
import { useFavStore } from "../data/useFavStore";
import { FaSitemap } from "react-icons/fa";
import { Input, Form } from "antd";

// 🔹 Memoized Favorite Item
const FavoriteItem = React.memo(({ site, removeFavorite }) => (
  <div className="bg-gray-50 shadow-sm  w-full py-2 h-[60px] rounded-md flex justify-between items-center px-2 gap-3 ">
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

function Dashboard() {
  const [isFavModalOpen, setIsFavModalOpen] = useState(false);
  const [siteName, setSiteName] = useState("");
  const [siteUrl, setSiteUrl] = useState("");
  const { favorites, addFavorite, removeFavorite } = useFavStore();



  

  return (
    <div className="w-full h-full p-5 flex flex-col gap-5">
      {/* Welcome message */}
      <div className="h-[250px]">
        <SparklesPreview />
      </div>

      <div className="h-full flex flex-col gap-5">
        {/* Top cards */}
        <div className="w-full h-[80%] grid grid-cols-3 gap-5">
          <Card className="bg-gray-50 h-full rounded shadow-sm" />
          <Card className="bg-gray-50 h-full rounded shadow-sm" />
          <Card className="bg-gray-50 h-full rounded shadow-sm" />
        </div>

        {/* Bottom div */}
        <motion.div
          layout
          className="bg-gray-50 shadow-sm h-[20%] flex items-center gap-5 rounded px-5"
        >
          {/* Add Favorite Button */}
          <Button size="large" type="primary" onClick={() => setIsFavModalOpen(true)}>
            <FaSitemap />
          </Button>
        </motion.div>
      </div>

      {/* Add Favorite Site Modal */}
      

<Modal
  title="Add Favorite Site"
  open={isFavModalOpen}
  destroyOnClose={false} // keeps modal mounted for smooth open
  onCancel={() => setIsFavModalOpen(false)}
  onOk={() => {
    // Validation
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
      url: siteUrl.replace(/^https?:\/\//, ""), // remove https:// for favicon
      addedAt: new Date().toLocaleString(),
    });

    setSiteName("");
    setSiteUrl("");
  }}
  okText="Add"
>
  {/* 🔹 Display added favorite sites */}
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

  {/* 🔹 Inputs to add new site */}
  <Form layout="vertical">
    <Form.Item
      label="Site Name"
      required
      rules={[{ required: true, message: "Please input the site name!" }]}
    >
      <Input
        placeholder="Site Name"
        value={siteName}
        onChange={(e) => setSiteName(e.target.value)}
      />
    </Form.Item>

    <Form.Item
      label="Site URL"
      required
      rules={[
        { required: true, message: "Please input the site URL!" },
        {
          pattern: /^https:\/\/.+/,
          message: "URL must start with https://",
        },
      ]}
    >
      <Input
        placeholder="Site URL (https://example.com)"
        value={siteUrl}
        onChange={(e) => setSiteUrl(e.target.value)}
      />
    </Form.Item>
  </Form>
</Modal>
    </div>
  );
}

export default Dashboard;