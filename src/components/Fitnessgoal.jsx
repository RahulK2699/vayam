import * as React from "react";
import PropTypes from "prop-types";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";

function CircularProgressWithLabel(props) {
  return (
    <div className=" bg-bggray bg-opacity-50 flex flex-col gap-2 w-36 items-center py-4 rounded-2xl">
      <div>
        {" "}
        <Box
          sx={{
            position: "relative",
            display: "inline-flex",
          }}
        >
          <CircularProgress sx={{}} variant="determinate" {...props} />
          <Box
            sx={{
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              position: "absolute",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              variant="caption"
              component="div"
              color="text.secondary"
              className=" "
            >
              <div>
                {" "}
                <LocalFireDepartmentIcon />
              </div>
            </Typography>
          </Box>
        </Box>
      </div>
      <p className=" text-2xl text-white font-thin">
        5<span className=" text-opacity-30 text-white">/6</span>
      </p>
      <p className=" text-sm text-textwhite text-opacity-20 ">
        Glasses Of{" "}
        <span className=" text-textwhite text-opacity-60">Water</span>
      </p>
    </div>
  );
}

CircularProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate variant.
   * Value between 0 and 100.
   * @default 0
   */
  value: PropTypes.number.isRequired,
};

export default function Fitnessgoal() {
  const [progress, setProgress] = React.useState(90);

  return (
    <CircularProgressWithLabel
      style={{ width: "70px", height: "70px" }}
      value={progress}
    />
  );
}
