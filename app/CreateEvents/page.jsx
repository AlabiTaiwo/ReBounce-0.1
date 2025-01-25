import { auth } from "../../auth";

export default async function CreateEvents() {
  const session = await auth();

  if (session && session.user.Access === "CREATOR") {
    return (
      <div className="">
        <div className=""></div>
      </div>
    );
  } else {
    return (
      <div className="">
        <div className="">
          <h1>You are unauthorized</h1>
        </div>
      </div>
    );
  }
}
