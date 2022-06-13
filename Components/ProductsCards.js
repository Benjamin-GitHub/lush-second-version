import React from "react";

import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import ModalDetails from "./ModalDetails";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

export default function ProductCards({ products }) {
  // console.log(products.map(product => product.node.media.map((e) => e.url).findIndex((x) => /.png/.test(x) || /.jpg/.test(x))));
  const url = products.map((product) => product.node.media.map((e) => e.url));
  // const jpegPattern = /.jpeg/;
  // const pngPattern = /.png/;

  const findPrimaryImageIndex = url.findIndex(
    (x) => /.png/.test(x) || /.jpg/.test(x)
  );
  // const findSecondaryImageIndex = url.findIndex((x) => /.jpeg/.test(x));

  return (
    <Container
      sx={{
        py: 8,
      }}
      maxWidth="md"
    >
      <Grid container spacing={4}>
        {products.map((product) => {
          // console.log(
          //   JSON.parse(product.node.description).blocks.map((x) => x.data.text)
          // );
          return (
            <Grid item key={product.node.id} xs={12} sm={6} md={4}>
              <Card
                sx={{
                  display: "flex",
                  maxWidth: "auto",
                  height: "100%",
                  flexDirection: "column",
                  borderRadius: 4,
                }}
              >
                <CardHeader
                  sx={{
                    mt: 1,
                    height: 80,
                  }}
                  title={
                    product.node.seoTitle === ""
                      ? product.node.name
                      : product.node.seoTitle
                  }
                  subheader={product.node.collections[0]?.name}
                />
                <CardHeader />
                <CardMedia
                  component="img"
                  src={product.node.media[findPrimaryImageIndex]?.url}
                  alt={product.node.slug}
                  sx={{
                    height: 200,
                  }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Box
                    sx={{
                      "& > legend": { mt: 2 },
                      mt: 5,
                    }}
                  >
                    <Rating
                      name="Customer's Rate"
                      value={parseInt(product.node.rating)}
                      readOnly
                    />
                    <ModalDetails
                      product={product}
                      tags={product.node.collections.map((e) => e.name)}
                      // description={JSON.parse(product.node.description)}
                      key={product.node.id}
                    />
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}
