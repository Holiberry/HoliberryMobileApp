import { useCallback } from 'react'
import { useFocusEffect } from '@react-navigation/native'
import { useAppState } from '@react-native-community/hooks'

export const useApearing = callback => {
  const currentAppState = useAppState()

  useFocusEffect(
    useCallback(() => {
      if (currentAppState === 'active') {
        callback && callback()
      }
    }, [currentAppState])
  )
}