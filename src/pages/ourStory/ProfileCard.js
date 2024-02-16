import * as React from "react";
import { styled } from "@mui/material/styles";
import {
  Card,
  Box,
  List,
  ListItem,
  CardContent,
  CardHeader,
  CardMedia,
  CardActions,
  Collapse,
  Container,
  IconButton,
  Typography,
  Grid,
  useMediaQuery,
} from "@mui/material";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

// import AmalContent from "../../inputs/Amal.json";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const styles = {
  cardcontent: {
    padding: 0,
    "&:last-child": {
      paddingBottom: 0,
    },
  },
};

export default function ProfileCard(props) {
  const { persona } = props.persona;
  const { image } = props.persona.image;
  const isSmallScreen = useMediaQuery("(max-width: 600px)");
  // console.log(props);
  // console.log(persona);
  // // console.log(image);
  // console.log(persona.workExperience);
  // console.log(persona.workExperience[0][2]);
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Container>
      <Card
        id="full-card"
        elevation={3}
        sx={{
          width: "90%",
          margin: "0 auto",
          marginBottom: "2%",
          // padding: "5%",
          minWidth: 150,
          maxWidth: 1500,
          // maxHeight: expanded ? "none" : "150px",
          paddingBottom: "0px",
          backgroundColor: "#fcfcfc",
        }}
      >
        <Grid
          container
          id="main-content-container"
          style={{ marginTop: "10px" }}
        >
          <Grid item xs={12} sm={3} id="image-grid">
            <CardMedia
              id="image-card"
              component="img"
              style={{
                width: "auto",
                height: "200px",
                objectFit: "cover",
                objectPosition: "top",
              }}
              image={image}
              alt="Profile Picture"
            />
          </Grid>
          <Grid item xs={12} sm={9} id="top-body-grid">
            <CardContent id="top-body-card">
              <CardHeader
                id="top-body-card-header"
                title={
                  <Typography variant="h6" sx={{ fontSize: "30px" }}>
                    {persona.name}
                  </Typography>
                }
                // subheader={persona.role}
                sx={{ color: "#2aa45e" }}
              />
              <Typography
                variant="body1"
                // color="text.secondary"
                id="top-body-main-text"
                style={{ fontSize: "18px" }}
              >
                {persona.descriptionHeader}
              </Typography>
            </CardContent>
          </Grid>
        </Grid>
        <Grid
          container
          justifyContent="center"
          id="dropdown-button-grid-container"
          maxHeight={"30px"}
        >
          <Grid item id="dropdown-button-grid-item">
            <CardContent
              id="dropdown-button-card"
              style={{ paddingTop: "0px", paddingBottom: "0px" }}
            >
              <CardActions
                disableSpacing
                id="dropdown-button-actions"
                style={{ paddingTop: "0px", paddingBottom: "0px" }}
              >
                <ExpandMore
                  id="dropdown-button-styled"
                  objectPosition="center"
                  expand={expanded}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                  style={{ paddingTop: "0px", paddingBottom: "0px" }}
                >
                  <ExpandMoreIcon id="dropdown-button-icon" />
                </ExpandMore>
              </CardActions>
            </CardContent>
          </Grid>
        </Grid>

        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent
            id="expanded-card-content"
            style={{ width: "90%", textAlign: "center" }}
          >
            <Grid
              id="expanded-grid-container-profile"
              container
              justifyContent="center"
            >
              {/* <Grid id="expanded-grid-work-experience" item xs={12} sm={12}> */}
              {persona.profileFullText.map((key, index) => (
                <Grid id="expanded-grid-profile" item xs={12} sm={12} lg={4}>
                  {console.log(index)}
                  <Typography
                    variant="body1"
                    key={index}
                    style={{ display: "inline-block", marginRight: "10px" }}
                  >
                    <Typography
                      // fontWeight="200"
                      key={index}
                      style={{
                        // color: index % 2 === 0 ? "#3b3026" : "#2c3a2c",
                        fontSize: "1.2rem",
                        display: "inline-block",
                        marginRight: "5px",
                        marginLeft: "5px",
                        textAlign: isSmallScreen ? "left" : "center",
                      }}
                    >
                      {<br />}
                      {key}
                      {/* <br /> */}
                    </Typography>
                  </Typography>
                </Grid>
              ))}
              {/* </Grid> */}
            </Grid>
            <Grid
              id="expanded-grid-container-secondary"
              container
              justifyContent="center"
            >
              <Grid id="expanded-grid-skills" item xs={12} sm={8}>
                <Typography
                  variant="h6"
                  color="#2aa45e"
                  paddingTop={"1%"}
                  sx={{ fontSize: "25px", marginLeft: "2%" }}
                >
                  Skills
                </Typography>
                <List>
                  {persona.skills.map((key, index) => (
                    <ListItem>
                      <Typography
                        variant="body"
                        key={index}
                        style={{
                          fontSize: "1.2rem",
                          textAlign: "left",
                          marginLeft: isSmallScreen ? "0" : "10%",
                        }}
                      >
                        {/* {index > 0 && <br />} */}- {key}
                      </Typography>
                    </ListItem>
                  ))}
                </List>
              </Grid>

              <Grid id="expanded-grid-work-contact" item xs={12} sm={4}>
                <Typography
                  variant="h6"
                  color="#2aa45e"
                  paddingTop={"1%"}
                  sx={{ fontSize: "25px" }}
                >
                  Contact Info
                </Typography>
                <Typography variant="body" style={{ fontSize: "1.2rem" }}>
                  <a href={`mailto:${persona.contactInfo.email}`}>
                    {persona.contactInfo.email}
                  </a>
                </Typography>
                <br />
                <br />
                <Typography variant="body">
                  <a
                    href={`${persona.contactInfo.linkedIn}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LinkedInIcon></LinkedInIcon>
                  </a>
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Collapse>
      </Card>
    </Container>
  );
}
