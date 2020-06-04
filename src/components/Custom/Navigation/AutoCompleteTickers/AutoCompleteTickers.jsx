import React, { useEffect, useState, useMemo } from "react";
import TextField from "./TextField";
import { Autocomplete } from "@material-ui/lab";
import { Wrapper, OptionHighlight, OptionText } from "./style";
import { useSelector, useDispatch } from "react-redux";
import { List } from "react-virtualized";
import { setTickerId } from 'store/actions/resources.actions';
import { clearTickerDetails } from 'store/actions/ticker.actions';
import { FETCH_TICKER_DETAILS } from 'store/types';
import { clearApi } from 'store/actions/api.actions';
import history from '../../../../history';

const ListboxComponent = React.forwardRef((props, ref) => {
  const { children, role, ...other } = props;
  const itemCount = Array.isArray(children) ? children.length : 0;
  const itemSize = 60;
  return (
    <div ref={ref}>
      <div {...other}>
        <List
          height={300}
          width={240}
          rowHeight={itemSize}
          overscanCount={5}
          rowCount={itemCount}
          rowRenderer={(props) => {
            return React.cloneElement(children[props.index], {
              style: props.style,
            });
          }}
          role={role}
        />
      </div>
    </div>
  );
});

const AutoCompleteTickers = ({noMargin}) => {
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState([]);
  const { tickers } = useSelector((state) => state.navigation);
  const dispatch = useDispatch();

  useEffect(() => {
    if (tickers) {
      setOptions(tickers.tickerlist);
    }
  }, [tickers]);

  const onChangeHandler = (event, value) =>{
    if (value && value.tradingitemid){
      dispatch(clearApi(FETCH_TICKER_DETAILS));
      dispatch(clearTickerDetails());
      dispatch(setTickerId(value.tradingitemid));
      history.push('/ticker/monitor')
    }
  }

  const loading = useMemo(() => open && options.length === 0, [open, options]);
  return (
    <Wrapper>
      <Autocomplete
        onChange={onChangeHandler}
        style={{margin: '0px'}}
        id="autocomplete-tickers"
        freeSolo
        fullWidth={true}
        options={options}
        getOptionLabel={(option) => `${option.ticker} | ${option.companyname}`}
        open={open}
        onOpen={() => {
          setOpen(true);
        }}
        onClose={() => {
          setOpen(false);
        }}
        renderOption={(option) => (
          <OptionText component="div">
            <OptionHighlight component="span">{option.ticker}</OptionHighlight>{" "}
            | {option.companyname}
          </OptionText>
        )}
        ListboxComponent={ListboxComponent}
        renderInput={(params) => (
          <TextField noMargin={noMargin} params={params} loading={loading}/>
        )}
      />
    </Wrapper>
  );
};

export default AutoCompleteTickers;
