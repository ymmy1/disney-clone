type Props = {
    params: {
        id: string
    },
    searchParams: {
        genre: string
    }
}
function GenrePage({ params: { id }, searchParams: { genre } }: Props) {
    return (
        <div>Genre page with id: {id} and genre: {genre}</div>
    )
}

export default GenrePage