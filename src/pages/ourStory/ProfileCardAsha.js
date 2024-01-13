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
import AshaMaria from "../../assets/Asha Maria Nathan profile pic.jpg";

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

export default function ProfileCard() {
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
            image={AshaMaria}
            alt="AshaMaria"
          />
        </Grid>
        <Grid item xs={12} sm={9} id="top-body-grid">
          <CardContent id="top-body-card">
            <CardHeader
              id="top-body-card-header"
              title="Asha Maria Nathan"
              subheader="ESG/CSR Director"
              sx={{ color: "#2a4e72" }}
            />
            <Typography
              variant="body2"
              color="text.secondary"
              id="top-body-main-text"
            >
              My current position as Director CSR for the last 8 years has
              shaped me into the person most aligned with my value system. The
              need for initiatives of Social impact is at an all time high.
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
          <Grid id="expanded-grid-container" container justifyContent="center">
            <Grid id="expanded-grid-work-experience" item xs={12} sm={4}>
              <Typography paddingBottom={"0.5%"} variant="h5" color="#2a4e72">
                Work Experience
              </Typography>
              <Typography variant="h6" color="#5d95ac">
                Nathan and Nathan - Human Resources{" "}
                <Typography
                  variant="inherit"
                  // component="span"
                  style={{ fontSize: "0.9rem" }}
                >
                  Present
                </Typography>
              </Typography>
              <Typography variant="body">
                Coordination, planning, and implementation of CSR activities
                across multiple organizations
                <br />
                Create policies and functional application documents.
              </Typography>
              <Typography variant="h6" color="#5d95ac" paddingTop={"0.5%"}>
                Operations Director - Dynamic Services{" "}
                <Typography
                  variant="inherit"
                  component="span"
                  style={{ fontSize: "0.9rem" }}
                >
                  September 2019 - Present
                </Typography>
              </Typography>
              <Typography variant="body">
                Managing complex projects from start to finish
                <br />
                Built capability within Teams
                <br />
                Formation of policies and structure of the company
              </Typography>
            </Grid>
            <Grid id="expanded-grid-work-education" item xs={12} sm={4}>
              <Typography variant="h5" color="#2a4e72" paddingTop={"1%"}>
                Educational History
              </Typography>
              <Typography variant="h6" color="#5d95ac">
                Graduate in Economics{" "}
                <Typography
                  variant="inherit"
                  component="span"
                  style={{ fontSize: "0.9rem" }}
                >
                  1986
                </Typography>
              </Typography>
              <Typography variant="body">
                Certified CSR Practioner CSE
                <br />
                Certifed Psychometric Test Administrator SHL
                <br />
                Certifed Student Counsellor ISN
                <br />
                Certified ESG Consultant
              </Typography>
            </Grid>
            <Grid id="expanded-grid-work-hobbies" item xs={12} sm={4}>
              <Typography variant="h5" color="#2a4e72" paddingTop={"1%"}>
                Hobbies and Interests
              </Typography>
              <Typography variant="body">
                Boating
                <br />
                Driving
                <br />
                Gardening
                <br />
                Creativity
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Collapse>
    </Card>
  );
}
