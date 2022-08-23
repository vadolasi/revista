import { FunctionComponent } from "preact"
import { useGoogleLogin } from "react-google-login"
import { gapi } from "gapi-script"
import { useEffect, useState } from "preact/hooks"

const clientId = "590579873075-uhs8opgdkc82dh2sttob6aq649bbalak.apps.googleusercontent.com"

export const LoginPage: FunctionComponent = () => {
  const { signIn } = useGoogleLogin({
    clientId,
    cookiePolicy: "single_host_origin",
    isSignedIn: true,
    onSuccess: (response) => {
      console.log(response)
    },
    onFailure: (error) => {
      console.log(error)
    }
  })

  useEffect(() => {
    gapi.load("client:auth2", () => {
      gapi.client.init({
        clientId,
        scope: ""
      })
    })
  })

  const [test, setTest] = useState("a")

  return (
    <div>
      <button onClick={() => setTest(test => test + "a")}>{test}</button>
      <button onClick={signIn}>Entrar com o google</button>
    </div>
  )
}
