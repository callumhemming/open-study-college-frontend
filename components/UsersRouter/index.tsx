import UsersCard from "../UsersCard";
import { User } from "../../types";
import Style from "./UsersRouter.module.css";

interface Props {
  users: User[];
}

export default function UsersRouter({ users }: Props): JSX.Element {
  return (
    <div className={Style.container}>
      {users.map(userData => {
        const { name, userid } = userData;
        return <UsersCard name={name} userid={userid} />;
      })}
    </div>
  );
}
