import {
  Box,
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Skeleton,
  SkeletonText,
} from "@chakra-ui/react";
import useGameQueryStore from "../hooks/store";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

function GenreList() {
  const { data: genres, isLoading, error } = useGenres();
  const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const setSelectedGenreId = useGameQueryStore((s) => s.setGenrenId);

  let skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <>
      {error && null}

      {isLoading && (
        <List>
          {skeletons.map((genre) => (
            <ListItem paddingY={1} key={genre}>
              <Skeleton>
                <HStack>
                  {<Skeleton />}
                  {<SkeletonText></SkeletonText>}
                </HStack>
              </Skeleton>
            </ListItem>
          ))}
        </List>
      )}
      <Box marginTop={100}>
        <Heading fontSize="2xl" marginBottom={3}>
          Genres
        </Heading>
        <List>
          {genres?.results.map((genre) => (
            <ListItem key={genre.id}>
              <HStack>
                {
                  <Image
                    boxSize="40px"
                    borderRadius={8}
                    src={getCroppedImageUrl(genre.image_background)}
                    objectFit="cover"
                  />
                }
                {
                  <Button
                    fontSize="lg"
                    fontWeight={
                      genre.id === selectedGenreId ? "bold" : "normal"
                    }
                    variant="link"
                    onClick={() => setSelectedGenreId(genre.id)}
                    whiteSpace="normal"
                    textAlign="left"
                  >
                    {genre.name}
                  </Button>
                }
              </HStack>
            </ListItem>
          ))}
        </List>
      </Box>
    </>
  );
}

export default GenreList;
