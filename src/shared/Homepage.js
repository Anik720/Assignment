import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import { Button, Link } from "@mui/material";
import { NavLink, useLocation } from "react-router-dom";
import { userAsync } from "../features/users/userSlice";
import { useDispatch } from "react-redux";
import { Carousel } from "@material-tailwind/react";
// import MenuIcon from "@mui/icons-material/Menu";
// import SearchIcon from "@mui/icons-material/Search";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function HomePage() {
  // const location = useLocation(); // React Hook
  // console.log(location.pathname);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            {/* <MenuIcon /> */}
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            <NavLink to="/">
              <Button
                variant="contained"
                // onClick={() => {
                //   dispatch(userAsync());
                // }}
              >
                Home
              </Button>
            </NavLink>
          </Typography>

          <NavLink to="/admin">
            <Button
              variant="contained"
              // onClick={() => {
              //   dispatch(userAsync());
              // }}
            >
              Uers
            </Button>
          </NavLink>
          <NavLink to="/employee">
            <Button variant="contained">Employee</Button>
          </NavLink>
        </Toolbar>
      </AppBar>
      <div
        id="carouselExampleCaptions"
        class="relative"
        data-te-carousel-init
        data-te-carousel-slide
      >
        <div
          class="absolute bottom-0 left-0 right-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0"
          data-te-carousel-indicators
        >
          <button
            type="button"
            data-te-target="#carouselExampleCaptions"
            data-te-slide-to="0"
            data-te-carousel-active
            class="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-te-target="#carouselExampleCaptions"
            data-te-slide-to="1"
            class="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-te-target="#carouselExampleCaptions"
            data-te-slide-to="2"
            class="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
            aria-label="Slide 3"
          ></button>
        </div>

        <div class="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
          <div
            class="relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
            data-te-carousel-active
            data-te-carousel-item
            style={{ backfaceVisibility: "hidden" }}
          >
            <img
              src="https://tecdn.b-cdn.net/img/Photos/Slides/img%20(15).jpg"
              class="block w-full"
              alt="..."
            />
            <div class="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
              <NavLink to="/admin">
                <Button
                  variant="contained"
                  // onClick={() => {
                  //   dispatch(userAsync());
                  // }}
                >
                  Uers
                </Button>
              </NavLink>
              <NavLink to="/employee">
                <Button variant="contained">Employee</Button>
              </NavLink>
            </div>
          </div>

          <div
            class="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
            data-te-carousel-item
            style={{ backfaceVisibility: "hidden" }}
          >
            <img
              src="https://tecdn.b-cdn.net/img/Photos/Slides/img%20(22).jpg"
              class="block w-full"
              alt="..."
            />
            <div class="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
              <NavLink to="/admin">
                <Button
                  variant="contained"
                  // onClick={() => {
                  //   dispatch(userAsync());
                  // }}
                >
                  Uers
                </Button>
              </NavLink>
              <NavLink to="/employee">
                <Button variant="contained">Employee</Button>
              </NavLink>
            </div>
          </div>

          <div
            class="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
            data-te-carousel-item
            style={{ backfaceVisibility: "hidden" }}
          >
            <img
              src="https://tecdn.b-cdn.net/img/Photos/Slides/img%20(23).jpg"
              class="block w-full"
              alt="..."
            />
            <div class="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
              <NavLink to="/admin">
                <Button
                  variant="contained"
                  // onClick={() => {
                  //   dispatch(userAsync());
                  // }}
                >
                  Uers
                </Button>
              </NavLink>
              <NavLink to="/employee">
                <Button variant="contained">Employee</Button>
              </NavLink>
            </div>
          </div>
        </div>

        <button
          class="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
          type="button"
          data-te-target="#carouselExampleCaptions"
          data-te-slide="prev"
        >
          <span class="inline-block h-8 w-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="h-6 w-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </span>
          <span class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Previous
          </span>
        </button>

        <button
          class="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
          type="button"
          data-te-target="#carouselExampleCaptions"
          data-te-slide="next"
        >
          <span class="inline-block h-8 w-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="h-6 w-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </span>
          <span class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Next
          </span>
        </button>
      </div>
    </Box>
  );
}
