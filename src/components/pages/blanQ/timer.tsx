const Timer = ({
  hour,
  minute,
  second,
}: {
  hour: number
  minute: number
  second: number
}) => {
  return (
    <>
      {hour < 10 ? '0' + hour : hour} : {minute < 10 ? '0' + minute : minute}:
      {second < 10 ? '0' + second : second}
    </>
  )
}

export default Timer
