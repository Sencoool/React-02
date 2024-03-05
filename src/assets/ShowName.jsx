import PropTypes from "prop-types";

export default function ShowName({ name, show }) {
  console.log("name:", name);
  console.log("show:", show);

  return <div>{show && <h2>Your name is: {name}</h2>}</div>; //show name using to check if 0 1 then not show if 1 1 then show
}

ShowName.propTypes = {
  name: PropTypes.string.isRequired,
  show: PropTypes.bool.isRequired,
};
