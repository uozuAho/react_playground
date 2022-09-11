export const logPureLifecycle = (constructor: Function) => {
  const original = constructor.prototype.render;

  constructor.prototype.render = function() {
    console.log(`${constructor.name}: render`);
    return original.apply(this, arguments);
  };

  constructor.prototype.componentDidMount = function() {
    console.log(`${constructor.name}: componentDidMount`);
    return original.apply(this, arguments);
  };

  constructor.prototype.componentWillUnmount = function() {
    console.log(`${constructor.name}: componentWillUnmount`);
    return original.apply(this, arguments);
  };

  constructor.prototype.componentDidUpdate = function() {
    console.log(`${constructor.name}: componentDidUpdate`);
    return original.apply(this, arguments);
  };
};
