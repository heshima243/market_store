import React, { useState } from "react";

import {
  Card,
  CardContent,
  Typography,
  Link,
  Button,
  Box,
} from "@mui/material";
import { AspectRatio, CardActions, CardOverflow, Chip } from "@mui/joy";

// import for dialog modal
import Modal from "@mui/joy/Modal";
import ModalAdd from "./ModalAdd";

export default function CardProduct({ post }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Card
        style={{
          height: "100%",
          display: "flex",
          flexDirection: "column"
        }}
      >
        <CardOverflow>
          <AspectRatio sx={{ width: "100%", height: 0, paddingBottom: "60%" }}>
            <img
              style={{
                maxWidth: "100%",
                height: "100%",
                objectFit: "cover",
              }}
              src={post.image}
              srcSet={post.image}
              loading="lazy"
              alt={post.title}
            />
          </AspectRatio>
        </CardOverflow>
        <CardContent style={{ flexGrow: 1 }}>
          <Typography variant="body2">{post.title}</Typography>
          <Link href={post.link} fontWeight="bold" color="text.primary" overlay>
            {post.category}
          </Link>
          <Typography level="title-lg" sx={{ mt: 1, fontWeight: "bold" }}>
            {post.price} THB
            <Chip variant="soft" color="success">
              Lowest price
            </Chip>
          </Typography>

          <Typography level="body-sm">
            (Only <b>10</b> min. order)
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            onClick={() => setOpen(true)}
            variant="contained"
            color="warning"
            size="large"
          >
            Add to cart
          </Button>
        </CardActions>
      </Card>

      <Modal open={open} onClose={() => setOpen(false)}>
        <ModalAdd setOpen={setOpen}/>
      </Modal>
    </>
  );
}
