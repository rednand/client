import { useQuery } from "react-query";
import { getAllBooks } from "../../service/api";
import { Container } from "../shared/Container";
import { Flex } from "rebass/styled-components";
import Loader from "react-loader-spinner";

export const BooksList = () => {
  const { data, error, isLoading, isError } = useQuery("books", getAllBooks);

  if (isLoading) {
    return (
      <Container>
        <Flex>
          <Loader type="ThreeDots" color="#ccc" height={30}/>
        </Flex>
      </Container>
    );
  }
  return null;
};
