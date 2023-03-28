interface HelloWorldProps {
  text: string
}

export default function HelloWorld({ text }: HelloWorldProps) {
  return <>{text}</>
}

HelloWorld.defaultProps = {
  text: 'Hello World',
}
