// @enableInlineJsxTransform @enableReactiveScopesInHIR
function SimpleComponent(props) {
  return <div />
}

function SimpleCustomComponent(props) {
  return <SimpleComponent />;
}

function SpecialProps(props) {
  const testRef = useRef();
  return <div key='testKey' ref={testRef} />
}

function CustomProps(props) {
  return <Component a='a' b={{b: 'b'}} c={C} />
}

function AllProps(props) {
  const testRef = useRef();
  return <Component a='a' b={{b: 'b'}} c={C} key='testKey' ref={testRef} />
}

function ParentAndChildren(props) {
  return (
    <Parent foo='bar'>
      <Child key='a' />
      <Child key='b'>
        <GrandChild className='gc-1' />
      </Child>
    </Parent>
  )
}