import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";

// material-ui components
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
// core components
import Card from "../Card/Card";
import CardBody from "../Card/CardBody";
import CardHeader from "../Card/CardHeader";

import styles from "../../assets/tss/components/customTabsStyle";
import { hexToRgb, whiteColor } from "../../assets/tss/material-dashboard-react";
// const useStyles = makeStyles(styles);
const useStyles = makeStyles({
  cardTitle: {
    float: "left",
    padding: "10px 10px 10px 0px",
    lineHeight: "24px",
  },
  cardTitleRTL: {
    float: "right",
    padding: "10px 0px 10px 10px !important",
  },
  displayNone: {
    display: "none !important",
  },
  tabsRoot: {
    minHeight: "unset !important",
    overflowX: "visible",
    "& $tabRootButton": {
      fontSize: "0.875rem",
    },
  },
  tabRootButton: {
    minHeight: "unset !important",
    minWidth: "unset !important",
    width: "unset !important",
    height: "unset !important",
    maxWidth: "unset !important",
    maxHeight: "unset !important",
    padding: "10px 15px",
    borderRadius: "3px",
    lineHeight: "24px",
    border: "0 !important",
    color: whiteColor + " !important",
    marginLeft: "4px",
    "&:last-child": {
      marginLeft: "0px",
    },
  },
  tabSelected: {
    backgroundColor: "rgba(" + hexToRgb(whiteColor) + ", 0.2)",
    transition: "0.2s background-color 0.1s",
  },
  tabWrapper: {
    display: "inline-block",
    minHeight: "unset !important",
    minWidth: "unset !important",
    width: "unset !important",
    height: "unset !important",
    maxWidth: "unset !important",
    maxHeight: "unset !important",
    fontWeight: 500,
    fontSize: "12px",
    marginTop: "1px",
    "& > svg,& > .material-icons": {
      verticalAlign: "middle",
      margin: "-1px 5px 0 0 !important",
    },
  },
});

export default function CustomTabs(props: any) {
  const [value, setValue] = React.useState(0);
  const handleChange = (event: any, value: number) => {
    setValue(value);
  };
  const classes = useStyles();
  const { headerColor, colorType , plainTabs, tabs, title, rtlActive } = props;
  const cardTitle = classNames({
    [classes.cardTitle]: true,
    [classes.cardTitleRTL]: rtlActive,
  });
  return (
    <Card plain={plainTabs}>
      <CardHeader color={headerColor} colorType={colorType} className={''} plain={plainTabs}>
        {title !== undefined ? <div className={cardTitle}>{title}</div> : null}
        <Tabs
          value={value}
          onChange={handleChange}
          classes={{
            root: classes.tabsRoot,
            indicator: classes.displayNone,
            scrollButtons: classes.displayNone,
          }}
          variant="scrollable"
          scrollButtons="auto"
        >
          {/* {tabs.map((prop, key) => {
            var icon = {};
            if (prop.tabIcon) {
              icon = {
                icon: <prop.tabIcon />,
              };
            }
            return (
              <Tab
                classes={{
                  root: classes.tabRootButton,
                  selected: classes.tabSelected,
                  wrapper: classes.tabWrapper,
                }}
                key={key}
                label={prop.tabName}
                {...icon}
              />
            );
          })} */}
        </Tabs>
      </CardHeader>
      <CardBody>
        {/* {tabs.map((prop, key) => {
          if (key === value) {
            return <div key={key}>{prop.tabContent}</div>;
          }
          return null;
        })} */}
      </CardBody>
    </Card>
  );
}

CustomTabs.propTypes = {
  headerColor: PropTypes.oneOf([
    "warning",
    "success",
    "danger",
    "info",
    "primary",
    "rose",
  ]),
  title: PropTypes.string,
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      tabName: PropTypes.string.isRequired,
      tabIcon: PropTypes.object,
      tabContent: PropTypes.node.isRequired,
    })
  ),
  rtlActive: PropTypes.bool,
  plainTabs: PropTypes.bool,
};
