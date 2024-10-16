import React from "react";
import { useRouter } from "next/router";
import {
  Card,
  CardContent,
  Typography,
  Box,
  Button,
  IconButton,
  Grid, // Import Grid component
} from "@mui/material";
import PushPinOutlinedIcon from "@mui/icons-material/PushPinOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import CommentOutlinedIcon from "@mui/icons-material/CommentOutlined";
import Settings from "@mui/icons-material/Settings";
import SettingsOutlined from "@mui/icons-material/SettingsOutlined";
import Avatar from "@mui/material/Avatar";
import Link from "next/link";

const MarketCard = ({
  account,
  id,
  title,
  category,
  live,
  isMine,
  handleSetInfoModalOpen,
  setTicketForSetInfo,
  marketResults,
}) => {
  const router = useRouter();
  const aTicketAddress = marketResults.resultOptionTokens[0];

  return (
    <Card
      sx={{
        width: 300,
        margin: 2,
        borderRadius: 2,
        boxShadow: 3,
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        justifyContent: "center",
        padding: "24px 24px 8px 24px",
        borderRadius: "8px",
        boxSizing: "border-box",
        background: `radial-gradient(circle at 100% 100%, #373261 0, #373261 5px, transparent 5px) 0% 0%/8px 8px no-repeat,
                     radial-gradient(circle at 0 100%, #373261 0, #373261 5px, transparent 5px) 100% 0%/8px 8px no-repeat,
                     radial-gradient(circle at 100% 0, #27244E 0, #27244E 5px, transparent 5px) 0% 100%/8px 8px no-repeat,
                     radial-gradient(circle at 0 0, #27244E 0, #27244E 5px, transparent 5px) 100% 100%/8px 8px no-repeat,
                     linear-gradient(#373261, #27244E) 50% 50%/calc(100% - 6px) calc(100% - 16px) no-repeat,
                     linear-gradient(#373261, #27244E) 50% 50%/calc(100% - 16px) calc(100% - 6px) no-repeat,
                     linear-gradient(#ff0000 0%, #e200f3 33%, #314bff 67%, #00b6d1 100%)`,
        boxShadow: `inset 0 0 15px rgba(164, 93, 187, 0.8), 
                    0 0 20px 10px rgba(164, 93, 187, 0.3)`,
        transition: "border 0.2s ease-in-out",
        "&:hover": {
          border: "1px solid darkblue",
        },
      }}
    >
      <Link
        href={{
          pathname: `/market/${aTicketAddress}`,
          query: { account: account },
        }}
        passHref
      >
        <CardContent>
          {/* Top Section: Icon and Title */}
          <Box display="flex" alignItems="center" mb={2} justifyContent="space-between">
            <Avatar alt="Presidential Seal" src="/vote_img.jpg" sx={{ width: 40, height: 40, marginRight: 2 }} />
            <Typography variant="h6" component="div">
              {title}
            </Typography>
            {isMine ? (
              <IconButton
                color="primary"
                aria-label="settings"
                size="small"
                onClick={(e) => {
                  e.stopPropagation();
                  setTicketForSetInfo(aTicketAddress);
                  handleSetInfoModalOpen();
                }}
              >
                <Settings />
              </IconButton>
            ) : (
              <IconButton aria-label="settings" size="small" disabled>
                <SettingsOutlined />
              </IconButton>
            )}
          </Box>

          {/* Middle Section: Stats */}
          <Box className="glowBox-card">
            <Box display="flex" alignItems="center">
              <PushPinOutlinedIcon sx={{ marginRight: 0.5 }} />
              <Typography variant="body2" color="text.secondary">
                {category}
              </Typography>
            </Box>
            <Box display="flex" alignItems="center">
              <PushPinOutlinedIcon sx={{ marginRight: 0.5 }} />
              <Typography variant="body2" color="text.secondary">
                {live}
              </Typography>
            </Box>
            <IconButton aria-label="comments" size="small">
              <CommentOutlinedIcon />
            </IconButton>
          </Box>
        </CardContent>
      </Link>
    </Card>
  );
};

// Main component to render MarketCards in a grid layout
const MarketCardGrid = ({ marketCards }) => {
  return (
    <Grid container spacing={2} sx={{ marginTop: "80px" }}>
      {marketCards.map((cardProps, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}> {/* Adjust sizing here */}
          <MarketCard {...cardProps} />
        </Grid>
      ))}
    </Grid>
  );
};

export default MarketCardGrid;
