import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { clear, getData } from "../features/haberSlice";
import { useEffect } from "react";
import load from "../assets/loading.gif"

const News = () => {
  const dispatch = useDispatch();
const{loading,haberler,error}=useSelector((state)=>state.haberSlice)
 console.log(haberler);
 
useEffect(() => {
    dispatch(getData());
  }, [dispatch]);


if(error)
  return(<h1> URL DE HATA VAR</h1>)


  return (
    <>
      {loading ? (
        <img src={load} alt="" height="800px" />
      ) : (
        <Box
          xs={{ d: "flex" }}
          display="flex"
          alignItems="center"
          justifyContent="space-evenly"
          flexWrap="wrap"
        >
          {haberler.map((a, index) => (
            <Card sx={{ maxWidth: 345,maxHeight:600,m:5 }} key={index}>
              <CardMedia
                component="img"
                alt=""
                height="140"
                image={a.urlToImage}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {a.title}
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  {a.content}
                </Typography>
              </CardContent>
              <CardActions>
                <Button onClick={()=>dispatch(clear(a.url))}
                size="small">CLEAR</Button>
                <Button href={a.url} size="small" target="_blank">DETAIL</Button>
              </CardActions>
            </Card>
          ))}
        </Box>
      )}
    </>
  );
};

export default News;
