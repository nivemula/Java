// @enableInlineJsxTransform @enableReactiveScopesInHIR
function SimpleComponent(props) {
  return <div />
}

function SimpleCustomComponent(props) {
  return <SimpleComponent />;
}

function SpecialProps(props) {
  const testRef = useRef();
  return <div key={'testKey'} ref={testRef} />
}

function CustomProps(props) {
  return <Component a='a' b={{b: 'b'}} c={C} />
}