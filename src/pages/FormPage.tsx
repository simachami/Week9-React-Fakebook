
import Body from '../component/Body'



export default function LoginPage({ children }: {children:JSX.Element | JSX.Element[]} ) {

  return (
    <Body sidebar={false}>
      {children}
    </Body>
  )
}
