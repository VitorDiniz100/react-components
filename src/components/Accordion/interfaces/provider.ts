import React from 'react'

export interface ProviderProps {
  type: 'single' | 'multiple'
  children: React.ReactNode
}
