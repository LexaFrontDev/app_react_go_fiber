import RegisterPage from "../pages/RegisterPage/RegisterPage";

export function meta() {
  return [
    { title: "Register" },
    { name: "Register page for users" },
  ];
}

export default function Register() {
  return <RegisterPage />;
}
