import { createMuiTheme } from '@material-ui/core/styles';
import { MuiThemeProviderProps } from '@material-ui/core/styles/MuiThemeProvider';
import { createGenerateClassName } from '@material-ui/styles';
import { GenerateClassName, SheetsRegistry } from 'jss';
import indigo from '@material-ui/core/colors/indigo';
import pink from '@material-ui/core/colors/pink';
import red from '@material-ui/core/colors/red';

// A theme with custom primary and secondary color.
// It's optional.
const theme = createMuiTheme({
  palette: {
    primary: indigo,
    secondary: pink,
    error: red,
    // Used by `getContrastText()` to maximize the contrast between the background and
    // the text.
    contrastThreshold: 3,
    // Used to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2
  },

  typography: {
    useNextVariants: true
  }
});

export interface PageContext extends MuiThemeProviderProps {
  generateClassName: GenerateClassName<string>; // not sure what goes here
  sheetsRegistry: SheetsRegistry;
}

export default function(): PageContext {
  return {
    theme,
    // This is needed in order to deduplicate the injection of CSS in the page.
    sheetsManager: new Map(),
    // This is needed in order to inject the critical CSS.
    sheetsRegistry: new SheetsRegistry(),
    // The standard class name generator.
    generateClassName: createGenerateClassName() as any,
    children: undefined
  };
}
