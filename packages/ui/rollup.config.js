import typescript from 'rollup-plugin-typescript2';
import readdirSync from 'recursive-readdir-synchronous';
import pkg from './package.json';

const files = readdirSync('src', ['story.tsx']);
const plugins = [
  typescript({
    useTsconfigDeclarationDir: true,
    exclude: ['**/story.tsx', '**/*.d.ts']
  })
];
const external = [
  ...Object.keys(pkg.dependencies || {}),
  ...Object.keys(pkg.peerDependencies || {}),
  '@material-ui/core/Button',
  '@material-ui/core/Grid',
  '@material-ui/core/Typography',
  '@material-ui/core/CircularProgress',
  '@material-ui/core/styles',
  '@material-ui/core/colors/indigo',
  '@material-ui/core/colors/pink',
  '@material-ui/core/colors/red'
];

const config = files.map(file => {
  return {
    input: file,
    output: {
      format: 'cjs',
      file: file
        .replace('src\\', '')
        .replace('.tsx', '.js')
        .replace('.ts', '.js')
    },
    external,
    plugins
  };
});

export default config;
