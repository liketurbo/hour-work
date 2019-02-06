import { MuiThemeProviderProps } from '@material-ui/core/styles/MuiThemeProvider';
import { createGenerateClassName } from '@material-ui/styles';
import { GenerateClassName, SheetsRegistry } from 'jss';
import { theme } from '@hour-work/ui';

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
