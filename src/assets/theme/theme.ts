import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';
import {colors} from '../colors/colors';

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: colors.colorPrimary,
    },
    secondary: {
      main: colors.colorSecondary,
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
