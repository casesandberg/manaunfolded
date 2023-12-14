export function FormatNumber(props: { value: number; prefix?: string }) {
  return (
    <span>
      {props.prefix}
      {Math.round(props.value)
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
    </span>
  )
}
