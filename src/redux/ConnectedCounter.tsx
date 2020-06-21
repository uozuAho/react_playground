import { connect } from "react-redux";
import { Counter } from "./Counter";
import { StoreState, increment, decrement } from "./CounterStore";
import { bindActionCreators } from "redux";

function mapStateToProps(state: StoreState) {
  return {
    count: state.count
  };
}

function mapDispatchToProps(dispatch: any) {
  return bindActionCreators({
    increment,
    decrement
  }, dispatch);
}

export const ConnectedCounter = connect(mapStateToProps, mapDispatchToProps)(Counter);
