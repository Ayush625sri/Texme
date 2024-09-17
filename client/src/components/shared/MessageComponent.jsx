import { Box, Typography } from "@mui/material";
import React, { memo } from "react";
import { lightblue } from "../../constants/color";
import moment from "moment";
import { fileFormat } from "../../lib/Features";
import RenderAttachment from "./RenderAttachment";
import { motion } from "framer-motion";

const MessageComponent = ({ message, user }) => {
  const { sender, content, attatchments = [], createdAt } = message;
  const sameSender = sender?._id === user?._id;

  const timeAgo = moment(createdAt).fromNow();
  return (
    <motion.div
      style={{
        alignSelf: sameSender ? "flex-end" : "flex-start",
        backgroundColor: "white",
        color: "black",
        borderRadius: "5px",
        padding: "0.5rem",
        width: "fit-content",
      }}
    >
      {!sameSender && (
        <Typography color={lightblue} fontWeight={"600"} variant="caption">
          {sender.name}
        </Typography>
      )}
      {content && <Typography>{content}</Typography>}

      {attatchments.length > 0 &&
        attatchments.map((attatchment, index) => {
          const url = attatchment.url;
          const file = fileFormat(url);
          return (
            <Box key={index}>
              <a href={url} target="_blank" download style={{ color: "black" }}>
                {RenderAttachment(file, url)}
              </a>
            </Box>
          );
        })}

      <Typography variant="caption" color={"text.secondary"}>
        {" "}
        {timeAgo}
      </Typography>
    </motion.div>
  );
};

export default memo(MessageComponent);
