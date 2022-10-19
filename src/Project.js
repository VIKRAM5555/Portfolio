import { Grid, Box } from "@mui/material/";
import { Button } from "@mui/material/";
import { motion } from "framer-motion";
import AppsIcon from "@mui/icons-material/Apps";
import { useNavigate } from "react-router-dom";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
export function Project() {
  const navigate = useNavigate();
  return (
    <div className="Project">
      <Box className="MainDiv">
        <motion.p
          initial={{ y: -1600 }}
          animate={{ y: -2 }}
          transition={{ duration: 2 }}
        >
          <Grid className="LetterMotion" gap={"5px 5px"} container spacing={2}>
            <Grid item md={12} xs={12}>
              <Button startIcon={<AppsIcon />} class="button-75" role="button">
                <span class="text">Project Done</span>
              </Button>
            </Grid>

            <Grid
              className="GridItem"
              sx={{
                backgroundImage:
                  "url(https://images.pexels.com/photos/3933020/pexels-photo-3933020.jpeg?auto=compress&cs=tinysrgb&w=600)",
                backgroundSize: "contain",
              }}
              item
              xs={12}
              md={2.9}
            >
              <Button
                startIcon={<AppsIcon />}
                class="button-75"
                role="button"
                href="https://magenta-bubblegum-8bcbc0.netlify.app"
              >
                <span class="text">Hall Booking App</span>
              </Button>
            </Grid>
            <Grid
              container
              gap={"5px 5px"}
              spacing={2}
              sx={{
                marginBottom: "20px",
                height: "60%",
                width: "20px",
                justifyContent: "space-around",
                alignSelf: "flex-end",
              }}
              item
              xs={12}
              md={5.9}
            >
              <Grid
                className="GridItem"
                margin={"10px"}
                item
                md={11}
                sx={{
                  backgroundImage:
                    "url(https://images.pexels.com/photos/2769274/pexels-photo-2769274.jpeg?auto=compress&cs=tinysrgb&w=600)",
                  backgroundSize: "contain",
                }}
              >
                {" "}
                <Button
                  startIcon={<AppsIcon />}
                  class="button-75"
                  role="button"
                  href="https://warm-tapioca-6caa21.netlify.app"
                >
                  <span class="text">Music App</span>
                </Button>
              </Grid>
              <Grid
                className="GridItem"
                margin={"4px"}
                item
                xs={2}
                md={4.4}
                sx={{
                  backgroundImage:
                    "url(https://images.pexels.com/photos/9316996/pexels-photo-9316996.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
                  backgroundSize: "contain",
                }}
              >
                {" "}
                <Button
                  startIcon={<AppsIcon />}
                  class="button-75"
                  role="button"
                  href="https://happy-tereshkova-713cf3.netlify.app"
                >
                  <span class="text">Image List</span>
                </Button>
              </Grid>
              <Grid
                className="GridItem"
                margin={"10px"}
                item
                md={7}
                sx={{
                  backgroundImage:
                    "url(https://images.pexels.com/photos/269140/pexels-photo-269140.jpeg?auto=compress&cs=tinysrgb&w=600)",
                  backgroundSize: "contain",
                }}
              >
                {" "}
                <Button
                  startIcon={<AppsIcon />}
                  class="button-75"
                  role="button"
                  href="https://preeminent-pasca-2e77b8.netlify.app"
                >
                  Ticket Booking App
                </Button>
              </Grid>
            </Grid>

            <Grid
              className="GridItem"
              item
              xs={12}
              md={2.9}
              sx={{
                backgroundImage:
                  "url(https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=600)",
                backgroundSize: "contain",
              }}
            >
              <Button
                startIcon={<AppsIcon />}
                class="button-75"
                role="button"
                href="https://relaxed-pike-0d96e0.netlify.app"
              >
                <span class="text">Add Recipes</span>
              </Button>
            </Grid>
            <Button
              onClick={() => navigate(-1)}
              startIcon={<ArrowCircleLeftIcon />}
              role="button"
              class="button-back"
            >
              <span class="text">Back</span>
            </Button>
          </Grid>
        </motion.p>
      </Box>
    </div>
  );
}
