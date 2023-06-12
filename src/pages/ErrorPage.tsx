import { Box, Heading, Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import NavBar from "../components/NavBar";

function ErrorPage() {
  const error = useRouteError();

  return (
    <>
      <NavBar />
      <Box>
        <Heading>Oops</Heading>
        <Text>
          {" "}
          {isRouteErrorResponse(error)
            ? "This page does not exist."
            : "Unexpect error has occured."}
        </Text>
      </Box>
    </>
  );
}

export default ErrorPage;
