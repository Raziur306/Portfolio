import { Home, Contact, Projects, About, Error } from "./pages";
import './style.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Grid, IconButton, Stack } from "@mui/material";

import './app.css'
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Grid container
        spacing={0}
        alignItems="center"
        justifyContent="center">
        <Grid item xs={1} justifyContent={'center'}>
          <div className="media_header">
            <span className="media_header_line"></span>
            <Stack direction={'column'}>
              <IconButton disableRipple style={{ background: 'none' }} color='inherit' target={"_blank"} href="https://www.github.com/Raziur306"><GitHubIcon /></IconButton>
              <IconButton disableRipple style={{ background: 'none' }} color='inherit' target={"_blank"} href="https://www.linkedin.com/in/raziur-rahaman"><LinkedInIcon /></IconButton>
              <IconButton disableRipple style={{ background: 'none' }} color='inherit' target={"_blank"} href="https://twitter.com/Raziur306"><TwitterIcon /></IconButton>
              <IconButton disableRipple style={{ background: 'none' }} color='inherit' target={"_blank"} href="https://www.facebook.com/raziur.rahman01"><FacebookIcon /></IconButton>
            </Stack>
          </div>

        </Grid>

        <Grid item xs={9} justifyContent='center'>
          <BrowserRouter justifyContent='center'>
            <NavBar />
            <div style={{ marginTop: "45px" }}>
              <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<Error />} />
              </Routes>
            </div>
          </BrowserRouter>
        </Grid>
      </Grid >
      <Footer />
    </>
  );
}
export default App;
