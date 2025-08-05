'use client'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { FC } from 'react'
import { clsx } from 'clsx'
import { IconArrowUpRight } from '@/components/icons/IconArrowUpRight'
import * as React from 'react'

interface Props {
  options: { value: string; label: string }[]
  label: string
  onChangeAction: (value: string) => void
  active: string
}

export const UIDropdown: FC<Props> = ({ options, label, onChangeAction, active }) => {
  const [open, setOpen] = React.useState(false)
  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger className={'outline-none'}>
        <div className={'flex cursor-pointer items-center gap-2'}>
          <p className={'button'}>{label}</p>
          <IconArrowUpRight
            className={clsx('size-3 transition-all', { 'rotate-0': open, 'rotate-90': !open })}
            color={'currentColor'}
          />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {options?.map((option) => (
          <DropdownMenuItem
            key={option.value}
            onClick={() => onChangeAction(option.value)}
            className={clsx({
              '!text-white': active === option.value,
            })}
          >
            {option.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
