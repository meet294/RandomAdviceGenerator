import classes from "./Card.module.css";
//import { motion } from "framer-motion";

const Card = ({ name, image, writer, data }) => {
  return (
    //<motion.div
    //animate={{ x: 65 }}
    //transition={{ ease: "easeOut", duration: 2 }}
    //className={classes.card}
    //>
    <div className={classes.card}>
      <img src={image} alt={name} />

      <h2>{name}</h2>
      <h3>{writer}</h3>
      <p>{data}</p>
    </div>

    //</motion.div>
  );
};

export default Card;
