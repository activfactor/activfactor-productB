import React, {useState} from 'react';
import ToggleButton from './ToggleButton';
import { Router } from 'react-router-dom';
import history from '../../../history';

export default {
    title: 'Toggle Button',
    parameters: {
      myAddon: {
        data: 'this data is passed to the addon',
      },
    },
  };

export const SimpleToggleButton = () => {
    const [active, setActive] = useState(false);
    const onClick = () => {
      setActive(prevState => !prevState);
    }
    return (
        <Router history={history}>
            <div style={{display: 'flex', flex: '0 0 22%'}}>
              <ToggleButton colorDarkness="darkness" colorTheme="primary" label="Monthly" subLabel="Rebalancing occurs at the beginning of each month" active={active} onClick={onClick}/>
              <ToggleButton colorDarkness="dark" colorTheme="primary" label="Monthly" subLabel="Rebalancing occurs at the beginning of each month" active={active} onClick={onClick}/>
              <ToggleButton colorDarkness="main" colorTheme="primary" label="Monthly" subLabel="Rebalancing occurs at the beginning of each month" active={active} onClick={onClick}/>
              <ToggleButton colorDarkness="light" colorTheme="primary" label="Monthly" subLabel="Rebalancing occurs at the beginning of each month" active={active} onClick={onClick}/>
            </div>
        </Router>
    )
}
    