import React from 'react'

export interface ItemProps {
  title: string
  icon?: {
    element: React.ReactNode
    activeElement?: React.ReactNode
  }
  slideDuration?: number
  uncontrolled?: boolean
  onActive?: () => void
  children: React.ReactNode
}
