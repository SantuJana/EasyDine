import NavBar from "@/component/NavBar";

export const metadata = {
  title: "Easy Dyne | Home",
  description: "Easy Dyne, where you can buy foods and book a table on your favorite restaurant",
};

export default function HomeLayout({ children }) {
  return (
    <>
      <NavBar />
      {children}
    </>
  )
}
