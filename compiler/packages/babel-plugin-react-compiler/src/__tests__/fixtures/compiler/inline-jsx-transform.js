// @enableInlineJsxTransform @enableReactiveScopesInHIR

function Parent({children, a: _a, b: _b, c: _c, ref}) {
  return <div ref={ref}>{children}</div>
}

function Child({children}) {
  return <>{children}</>
}

function GrandChild({
  className
}) {
  return <span className={className}><React.Fragment key='fragmentKey'>Hello world</React.Fragment></span>;
}

function ParentAndRefAndKey(props) {
  const testRef = useRef();
  return <Parent a='a' b={{b: 'b'}} c={C} key='testKey' ref={testRef} />
}

function ParentAndChildren(props) {
  return (
    <Parent foo={props.foo}>
      <Child key='a' />
      <Child key='b'>
        <GrandChild className='gc-1' />
      </Child>
    </Parent>
  )
}

export const FIXTURE_ENTRYPOINT = {
  fn: ParentAndChildren,
  params: [{foo: 'abc'}],
}