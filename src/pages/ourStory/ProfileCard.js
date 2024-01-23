import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Grid from "@mui/material/Grid";

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
    <Card
      id="full-card"
      sx={{
        width: "90%",
        margin: "0 auto",
        marginBottom: "2%",
        // padding: "5%",
        minWidth: 150,
        maxWidth: 1500,
        // maxHeight: expanded ? "none" : "150px",
        paddingBottom: "0px",
        backgroundColor: "#f0f0f0",
      }}
    >
      <Grid container id="main-content-container" style={{ marginTop: "10px" }}>
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
              title={persona.name}
              // subheader={persona.role}
              sx={{ color: "#70ad47" }}
            />
            <Typography
              variant="body2"
              color="text.secondary"
              id="top-body-main-text"
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
              <Grid id="expanded-grid-profile" item xs={12} sm={4}>
                <Typography
                  variant="h6"
                  color="#5d95ac"
                  key={index}
                  style={{ display: "inline-block", marginRight: "10px" }}
                >
                  <Typography
                    color="#000000"
                    fontWeight="200"
                    key={index}
                    style={{
                      fontSize: "0.9rem",
                      display: "inline-block",
                      marginRight: "5px",
                      marginLeft: "5px",
                    }}
                  >
                    {/* {index > 0 && <br />} */}
                    {key}
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
              <Typography variant="h5" color="#c6e0b4" paddingTop={"1%"}>
                Skills
              </Typography>
              {persona.skills.map((key, index) => (
                <Typography variant="body" key={index}>
                  {index > 0 && <br />}
                  {key}
                </Typography>
              ))}
            </Grid>

            <Grid id="expanded-grid-work-contact" item xs={12} sm={4}>
              <Typography variant="h6" color="#c6e0b4" paddingTop={"1%"}>
                Contact Info
              </Typography>
              <Typography variant="body">
                Email: {persona.contactInfo.email}
              </Typography>
              <br />
              <Typography variant="body">
                LinkedIn: {persona.contactInfo.linkedIn}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Collapse>
    </Card>
  );
}
