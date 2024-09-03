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