import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons

// core components
import styles from "../../assets/tss/components/cardBodyStyle";

// const useStyles = makeStyles(styles);
const useStyles = makeStyles({
  cardBody: {
    padding: "0.9375rem 20px",
    flex: "1 1 auto",
    WebkitBoxFlex: 1,
    position: "relative",
  },
  cardBodyPlain: {
    paddingLeft: "5px",
    paddingRight: "5px",
  },
  cardBodyProfile: {
    marginTop: "15px",
  },
});

export default function CardBody(props: any) {
  const classes = useStyles();
  const { className, children, plain, profile, ...rest } = props;
  const cardBodyClasses = classNames({
    [classes.cardBody]: true,
    [classes.cardBodyPlain]: plain,
    [classes.cardBodyProfile]: profile,
    [className]: className !== undefined,
  });
  return (
    <div className={cardBodyClasses as React.CSSProperties} {...rest}>
      {children}
    </div>
  );
}

CardBody.propTypes = {
  className: PropTypes.string,
  plain: PropTypes.bool,
  profile: PropTypes.bool,
  children: PropTypes.node,
};
