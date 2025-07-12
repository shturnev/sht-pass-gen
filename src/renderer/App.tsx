import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import { Checkbox, FormControlLabel, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { amber } from '@mui/material/colors';
import Button from '@mui/material/Button';
import Slider from '@mui/material/Slider';
import passGen from 'passwagen';
import './App.scss';
import { useState } from 'react';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: amber[500],
      contrastText: '#000',
    },
  },
});

function Main() {
  const [numbers, setNumbers] = useState(true);
  const [symbols, setSymbols] = useState(true);
  const [length, setLength] = useState(16);
  const regenerate = () => {
    return passGen({
      numbers,
      symbols,
      punctuation: symbols,
      uppercase: true,
      lowercase: true,
      length,
    });
  };
  const [password, setPassword] = useState(regenerate());

  return (
    <ThemeProvider theme={theme}>
      <div className="container">
        <div className="">Password variant:</div>
        <div className="passVariant">{password}</div>
        <div className="generateBtnCont">
          <Button variant="contained" onClick={() => setPassword(regenerate())}>
            GENERATE
          </Button>
        </div>
        <div className="settingsCont">
          <div className="sliderCont">
            <Slider
              min={8}
              max={128}
              defaultValue={length}
              aria-label="Default"
              valueLabelDisplay="on"
              size="small"
              onChange={(_, newValue) => setLength(newValue as number)}
            />
          </div>
          <div className="checkBtnsCont">
            <FormControlLabel
              control={
                <Checkbox
                  defaultChecked={numbers}
                  onChange={(event) => setNumbers(event.target.checked)}
                />
              }
              label="Use digits?"
            />
            <FormControlLabel
              control={
                <Checkbox
                  defaultChecked={symbols}
                  onChange={(event) => setSymbols(event.target.checked)}
                />
              }
              label="Use symbols?"
            />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </Router>
  );
}
