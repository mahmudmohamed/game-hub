import { Image, SimpleGrid } from "@chakra-ui/react";
import useScreenshots from "../hooks/useScreenshots";

interface Props {
  gameId: number;
}

const GameScreenshots = ({ gameId }: Props) => {
  const { data, isLoading, error } = useScreenshots(gameId);

  if (isLoading) return null;

  if (error) throw error;

  return data ? (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5} marginY={5}>
      {data?.results.map((img) => (
        <Image src={img.image} key={img.id} objectFit="cover" />
      ))}
    </SimpleGrid>
  ) : null;
};

export default GameScreenshots;
