import { auth } from "../../../auth";
import AuthComp from "./AuthComp";

export default async function AuthComponent() {
  const Session = await auth();
  if (Session && Session.user) {
    return null;
  } else {
    return <AuthComp />;
  }
}
