import { makeStyles } from "@material-ui/core/styles";
export default makeStyles(() => ({
  card: { display: "flex", justifyContent: "center" },
  root: {
    width: "250px",
    textAlign: "center",
  },
  media: {
    height: 120,
  },

  cardActions: {
    display: "flex",
    justifyContent: "space-between",
    padding: "0px 30px",
    backgroundColor: "wheat",
  },
}));
