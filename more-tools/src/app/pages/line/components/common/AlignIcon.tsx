import { PropsWithChildren } from 'react'

type Props = PropsWithChildren & {
  active: boolean
  onClick: () => void
}

export const AlignIcon = (props: Props) => {
  const { children, active, onClick } = props
  return (
    <button
      onClick={onClick}
      className={`bg-transparent hover:bg-white p-1 text-[#7D7D7D] rounded-[4px] ${
        active ? 'border-transparent bg-white' : 'border-transparent bg-transparent'
      }`}
    >
      {children}
    </button>
  )
}