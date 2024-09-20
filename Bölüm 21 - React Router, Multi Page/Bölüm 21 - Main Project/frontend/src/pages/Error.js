import PageContent from "../components/PageContent";
import { useRouteError } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

export default function ErrorPage() {
  const error = useRouteError();

  let title = "An error has ocurred!";
  let message = "Something went wrong!";

  if (error.status === 500) {
    message = error.data.message;
  }

  if (error.status === 400) {
    title = "Not Found";
    message = "Could not find resource or page;";
  }

  return (
    <>
      <MainNavigation />
      <PageContent title="An error has ocurred!">
        <p>{message}</p>
      </PageContent>
    </>
  );
}
