type Props = {
  params: {
    id: string;
  };
};
function MovieDetails({ params: { id } }: Props) {
  return <div>MovieDetails of {id}</div>;
}

export default MovieDetails;
