import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons

// core components
import styles from "../../assets/tss/components/cardIconStyle";
import {
  warningCardHeader,
  successCardHeader,
  dangerCardHeader,
  infoCardHeader,
  primaryCardHeader,
  roseCardHeader,
  grayColor,
} from "../../assets/tss/material-dashboard-react";

// const useStyles = makeStyles(styles);
const useStyles = makeStyles({
  cardIcon: {
    "&$warningCardHeader,&$successCardHeader,&$dangerCardHeader,&$infoCardHeader,&$primaryCardHeader,&$roseCardHeader": {
      borderRadius: "3px",
      backgroundColor: grayColor[0],
      padding: "15px",
      marginTop: "-20px",
      marginRight: "15px",
      float: "left",
    },
  },
  warningCardHeader,
  successCardHeader,
  dangerCardHeader,
  infoCardHeader,
  primaryCardHeader,
  roseCardHeader,
});

export default function CardIcon(props: Props) {
  const classes = useStyles();
  const { className, children, color, colorType, ...rest } = props;
  const cardIconClasses = classNames({
    [classes.cardIcon]: true,
    [classes[colorType]]: color,
    [className]: className !== undefined,
  });
  return (
    <div className={cardIconClasses} {...rest}>
      {children}
    </div>
  );
}

CardIcon.propTypes = {
  className: PropTypes.string,
  color: PropTypes.oneOf([
    "warning",
    "success",
    "danger",
    "info",
    "primary",
    "rose",
  ]),
  children: PropTypes.node,
};

interface Props {
  color: 'warning' | 'success' | 'danger' | 'info' | 'primary' | 'rose'
  colorType: 'warningCardHeader' | 'successCardHeader' | 'dangerCardHeader' | 'infoCardHeader' | 'primaryCardHeader' | 'roseCardHeader'
  className: string
  children: React.ReactNode
}
