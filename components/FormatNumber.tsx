export function FormatNumber(props: { value: number }) {
  return (
    <span>
      {Math.round(props.value)
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
    </span>
  )
}
